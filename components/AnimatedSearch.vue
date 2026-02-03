<template>
  <div class="min-h-screen flex flex-col items-center justify-center px-4 relative">
    <!-- Animated Cursor -->
    <AnimatedCursor :position="cursorPosition" :is-clicking="cursorClicking" />

    <!-- Search Engine UI -->
    <div class="w-full max-w-4xl">
      <SearchBar
        ref="searchBarRef"
        :engine="engine"
        :current-text="currentText"
        :show-cursor="showCursor"
        :button-clicked="buttonClicked"
      />
    </div>

    <!-- Snarky Message Overlay -->
    <Transition
      enter-active-class="transition-all duration-500"
      enter-from-class="opacity-0 translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
    >
      <div
        v-if="showMessage"
        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      >
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 max-w-md mx-4 text-center">
          <p class="text-2xl font-bold mb-2">{{ snarkyMessage }}</p>
          <p class="text-gray-600 dark:text-gray-400">Redirecting you now...</p>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import type { SearchEngine } from '~/composables/useSearchEngines'

const props = defineProps<{
  engine: SearchEngine
  query: string
}>()

const { getRandomSnarkyMessage } = useSearchEngines()

const currentText = ref('')
const showCursor = ref(true)
const buttonClicked = ref(false)
const showMessage = ref(false)
const cursorPosition = ref({ x: -100, y: -100 })
const cursorClicking = ref(false)
const searchBarRef = ref<any>(null)
const snarkyMessage = ref('')

// Generate random snarky message on mount
onMounted(() => {
  snarkyMessage.value = getRandomSnarkyMessage(props.engine.id)
  startAnimation()
})

const animateCursorToButton = async () => {
  // Wait for the DOM to be ready
  await nextTick()
  
  if (!searchBarRef.value?.searchButton) return

  const button = searchBarRef.value.searchButton as HTMLElement
  const buttonRect = button.getBoundingClientRect()
  
  // Start cursor off screen (left side)
  cursorPosition.value = { x: 50, y: window.innerHeight / 2 }
  
  await new Promise(resolve => setTimeout(resolve, 300))
  
  // Animate cursor to button center
  // The cursor tip is at the top-left of the SVG, so we need to position it there
  const targetX = buttonRect.left + buttonRect.width / 2
  const targetY = buttonRect.top + buttonRect.height / 2
  
  // Smooth animation with more steps for slower movement
  const steps = 40
  const startX = cursorPosition.value.x
  const startY = cursorPosition.value.y
  const deltaX = (targetX - startX) / steps
  const deltaY = (targetY - startY) / steps
  
  for (let i = 0; i < steps; i++) {
    cursorPosition.value = {
      x: startX + deltaX * (i + 1),
      y: startY + deltaY * (i + 1)
    }
    await new Promise(resolve => setTimeout(resolve, 30))
  }
  
  // Wait a moment at the button
  await new Promise(resolve => setTimeout(resolve, 300))
  
  // Click animation
  cursorClicking.value = true
  buttonClicked.value = true
  await new Promise(resolve => setTimeout(resolve, 200))
  cursorClicking.value = false
}

const startAnimation = async () => {
  // Initial delay
  await new Promise(resolve => setTimeout(resolve, 500))

  // Typing animation - 100ms per character
  for (let i = 0; i <= props.query.length; i++) {
    currentText.value = props.query.substring(0, i)
    await new Promise(resolve => setTimeout(resolve, 100))
  }

  // Wait after typing completes
  await new Promise(resolve => setTimeout(resolve, 300))

  // Hide text cursor
  showCursor.value = false
  await new Promise(resolve => setTimeout(resolve, 200))

  // Animate cursor to button and click
  await animateCursorToButton()

  // Wait after click (500ms as specified)
  await new Promise(resolve => setTimeout(resolve, 500))

  // Hide cursor
  cursorPosition.value = { x: -100, y: -100 }

  // Show snarky message
  showMessage.value = true

  // Wait 1 second with message visible
  await new Promise(resolve => setTimeout(resolve, 1000))

  // Redirect to actual search engine
  const searchUrl = `${props.engine.searchUrl}${encodeURIComponent(props.query)}`
  window.location.href = searchUrl
}
</script>
