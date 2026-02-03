<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header -->
    <header class="container mx-auto px-4 py-6 flex justify-between items-center">
      <h1 class="text-2xl font-bold">Let Me Search That For You</h1>
      <ThemeToggle />
    </header>

    <!-- Main Content -->
    <main class="flex-1 container mx-auto px-4 py-12 flex items-center justify-center">
      <div class="max-w-2xl w-full">
        <!-- Hero Section -->
        <div class="text-center mb-12">
          <h2 class="text-4xl md:text-5xl font-bold mb-4">
            Help Your Friends Learn to Search
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-400">
            Generate a link that shows people how to use search engines
          </p>
        </div>

        <!-- Link Generator Form -->
        <div class="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <form @submit.prevent="generateLink" class="space-y-6">
            <!-- Search Engine Selector -->
            <SearchEngineSelector v-model="selectedEngine" />

            <!-- Search Query Input -->
            <div>
              <label class="block text-sm font-medium mb-2">Search Query</label>
              <input
                v-model="searchQuery"
                type="text"
                placeholder="e.g., how to use google"
                class="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
                required
              />
            </div>

            <!-- Generate Button -->
            <button
              type="submit"
              class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Generate Link
            </button>
          </form>

          <!-- Generated Link Display -->
          <div v-if="generatedLink" class="mt-6 space-y-4">
            <div class="p-4 bg-white dark:bg-gray-700 rounded-lg border-2 border-blue-500">
              <p class="text-sm font-medium mb-2">Your Link:</p>
              <div class="flex gap-2">
                <input
                  :value="fullLink"
                  readonly
                  class="flex-1 px-3 py-2 bg-gray-50 dark:bg-gray-600 rounded border border-gray-300 dark:border-gray-500 text-sm"
                />
                <button
                  @click="copyToClipboard"
                  class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors"
                >
                  {{ copied ? 'Copied!' : 'Copy' }}
                </button>
              </div>
            </div>
            <p class="text-sm text-gray-600 dark:text-gray-400 text-center">
              Share this link to show them how to search on {{ getEngineById(selectedEngine)?.displayName }}
            </p>
          </div>
        </div>

        <!-- Info Section -->
        <div class="mt-12 text-center">
          <p class="text-gray-600 dark:text-gray-400">
            Works with Google, Bing, DuckDuckGo, and Ecosia
          </p>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="container mx-auto px-4 py-6 text-center text-sm text-gray-500 dark:text-gray-400">
      <p>A helpful tool to teach people how to use search engines</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
const { getEngineById } = useSearchEngines()

const selectedEngine = ref('google')
const searchQuery = ref('')
const generatedLink = ref('')
const copied = ref(false)

const fullLink = computed(() => {
  if (typeof window !== 'undefined') {
    return `${window.location.origin}${generatedLink.value}`
  }
  return generatedLink.value
})

const generateLink = () => {
  if (!searchQuery.value.trim()) return
  
  const encodedQuery = encodeURIComponent(searchQuery.value.trim())
  generatedLink.value = `/${selectedEngine.value}?q=${encodedQuery}`
  copied.value = false
}

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(fullLink.value)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy:', err)
  }
}
</script>
