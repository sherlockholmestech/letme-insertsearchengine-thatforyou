<template>
  <!-- Google Style -->
  <div v-if="engine.id === 'google'" class="w-full max-w-2xl mx-auto">
    <!-- Google Logo -->
    <div class="text-center mb-8">
      <div class="inline-flex items-baseline text-7xl font-normal tracking-tight">
        <span class="text-[#4285f4]">G</span>
        <span class="text-[#ea4335]">o</span>
        <span class="text-[#fbbc04]">o</span>
        <span class="text-[#4285f4]">g</span>
        <span class="text-[#34a853]">l</span>
        <span class="text-[#ea4335]">e</span>
      </div>
    </div>
    
    <!-- Google Search Bar -->
    <div class="relative mb-8">
      <div class="flex items-center bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700 px-4 py-3">
        <svg class="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <div class="flex-1 text-lg text-gray-900 dark:text-gray-100">
          <span>{{ currentText }}</span>
          <span v-if="showCursor" class="inline-block w-0.5 h-5 bg-blue-600 animate-cursor-blink ml-0.5"></span>
        </div>
      </div>
    </div>
    
    <!-- Google Search Buttons -->
    <div class="flex justify-center gap-3">
      <button
        ref="searchButton"
        :class="['px-6 py-2 bg-[#f8f9fa] dark:bg-gray-700 text-sm text-gray-800 dark:text-gray-200 rounded border border-gray-200 dark:border-gray-600 hover:border-gray-300 hover:shadow transition-all', buttonClicked ? 'scale-95' : '']"
      >
        {{ engine.buttonText }}
      </button>
      <button class="px-6 py-2 bg-[#f8f9fa] dark:bg-gray-700 text-sm text-gray-800 dark:text-gray-200 rounded border border-gray-200 dark:border-gray-600 hover:border-gray-300 hover:shadow transition-all">
        I'm Feeling Lucky
      </button>
    </div>
  </div>

  <!-- Bing Style -->
  <div v-else-if="engine.id === 'bing'" class="w-full max-w-3xl mx-auto">
    <!-- Bing Logo -->
    <div class="text-left mb-8 px-4">
      <div class="flex items-center gap-2">
        <div class="text-5xl font-bold">
          <span class="text-[#0078d4]">bing</span>
        </div>
      </div>
    </div>
    
    <!-- Bing Search Bar -->
    <div class="relative mb-6 px-4">
      <div class="flex items-center bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-300 dark:border-gray-600 overflow-hidden">
        <div class="flex-1 flex items-center px-4 py-3">
          <svg class="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <div class="flex-1 text-base text-gray-900 dark:text-gray-100">
            <span>{{ currentText }}</span>
            <span v-if="showCursor" class="inline-block w-0.5 h-5 bg-blue-600 animate-cursor-blink ml-0.5"></span>
          </div>
        </div>
        <button
          ref="searchButton"
          :class="['px-8 py-3 bg-[#0078d4] hover:bg-[#106ebe] text-white font-medium transition-all', buttonClicked ? 'scale-95' : '']"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
    </div>
  </div>

  <!-- DuckDuckGo Style -->
  <div v-else-if="engine.id === 'duckduckgo'" class="w-full max-w-2xl mx-auto">
    <!-- DuckDuckGo Logo -->
    <div class="text-center mb-8">
      <div class="flex items-center justify-center gap-3 mb-2">
        <!-- DDG Logo Icon -->
        <div class="w-16 h-16 rounded-full bg-[#de5833] flex items-center justify-center text-white text-2xl font-bold">
          DDG
        </div>
      </div>
      <div class="text-2xl font-semibold text-gray-800 dark:text-gray-200">DuckDuckGo</div>
    </div>
    
    <!-- DuckDuckGo Search Bar -->
    <div class="relative">
      <div class="flex items-center bg-white dark:bg-gray-800 rounded-lg shadow-md border-2 border-gray-300 dark:border-gray-600 overflow-hidden">
        <div class="flex-1 flex items-center px-4 py-3">
          <div class="flex-1 text-base text-gray-900 dark:text-gray-100">
            <span>{{ currentText }}</span>
            <span v-if="showCursor" class="inline-block w-0.5 h-5 bg-[#de5833] animate-cursor-blink ml-0.5"></span>
          </div>
        </div>
        <button
          ref="searchButton"
          :class="['px-6 py-3 bg-[#de5833] hover:bg-[#c74d2c] text-white font-bold text-xl transition-all', buttonClicked ? 'scale-95' : '']"
        >
          {{ engine.buttonText }}
        </button>
      </div>
    </div>
  </div>

  <!-- Ecosia Style -->
  <div v-else-if="engine.id === 'ecosia'" class="w-full max-w-2xl mx-auto">
    <!-- Ecosia Logo -->
    <div class="text-center mb-8">
      <div class="flex items-center justify-center gap-2 mb-2">
        <div class="w-12 h-12 rounded-full bg-[#56b68b] flex items-center justify-center text-white text-xl font-bold">
          🌱
        </div>
        <div class="text-4xl font-bold text-[#56b68b]">Ecosia</div>
      </div>
      <p class="text-sm text-gray-600 dark:text-gray-400">The search engine that plants trees</p>
    </div>
    
    <!-- Ecosia Search Bar -->
    <div class="relative mb-6">
      <div class="flex items-center bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-300 dark:border-gray-600 overflow-hidden">
        <div class="flex-1 flex items-center px-5 py-3">
          <svg class="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <div class="flex-1 text-base text-gray-900 dark:text-gray-100">
            <span>{{ currentText }}</span>
            <span v-if="showCursor" class="inline-block w-0.5 h-5 bg-[#56b68b] animate-cursor-blink ml-0.5"></span>
          </div>
        </div>
        <button
          ref="searchButton"
          :class="['px-8 py-3 bg-[#56b68b] hover:bg-[#4a9d77] text-white font-medium rounded-full mr-1 transition-all', buttonClicked ? 'scale-95' : '']"
        >
          {{ engine.buttonText }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SearchEngine } from '~/composables/useSearchEngines'

defineProps<{
  engine: SearchEngine
  currentText: string
  showCursor: boolean
  buttonClicked: boolean
}>()

const searchButton = ref<HTMLElement | null>(null)

defineExpose({
  searchButton
})
</script>
