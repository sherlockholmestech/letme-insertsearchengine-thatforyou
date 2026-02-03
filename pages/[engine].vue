<template>
  <div 
    v-if="engine && query" 
    class="min-h-screen"
    :class="getBackgroundClass(engine.id)"
  >
    <AnimatedSearch :engine="engine" :query="query" />
  </div>
  <div v-else class="min-h-screen flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-3xl font-bold mb-4">Invalid Link</h1>
      <p class="text-gray-600 dark:text-gray-400 mb-6">
        This link appears to be broken or incomplete.
      </p>
      <NuxtLink
        to="/"
        class="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
      >
        Go Home
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { getEngineById } = useSearchEngines()

// Get engine ID from route params
const engineId = route.params.engine as string

// Get query from URL params
const query = route.query.q as string

// Get engine configuration
const engine = getEngineById(engineId)

// Function to get background class based on engine
const getBackgroundClass = (id: string) => {
  switch (id) {
    case 'google':
      return 'bg-white dark:bg-gray-900'
    case 'bing':
      return 'bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800'
    case 'duckduckgo':
      return 'bg-white dark:bg-gray-900'
    case 'ecosia':
      return 'bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800'
    default:
      return 'bg-white dark:bg-gray-900'
  }
}

// If invalid engine or missing query, stay on error screen
// The template will handle showing the error message
if (!engine || !query) {
  // Don't redirect, just show error in template
  console.warn('Invalid engine or missing query')
}

// Set page title
useHead({
  title: engine && query
    ? `Searching ${engine.displayName} for "${query}"`
    : 'Invalid Link - Let Me Search That For You'
})
</script>
