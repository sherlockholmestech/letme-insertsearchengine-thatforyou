<template>
  <div class="relative">
    <label class="block text-sm font-medium mb-2">Search Engine</label>
    <select
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
      class="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
    >
      <option v-for="engine in engines" :key="engine.id" :value="engine.id">
        {{ engine.displayName }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
const { engines } = useSearchEngines()

defineProps<{
  modelValue: string
}>()

defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>
