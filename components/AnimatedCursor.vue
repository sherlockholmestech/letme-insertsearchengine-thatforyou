<template>
  <div
    class="fixed pointer-events-none z-50 transition-all duration-200"
    :style="{
      left: position.x + 'px',
      top: position.y + 'px',
      transform: isClicking ? 'scale(0.9)' : 'scale(1)',
      transformOrigin: 'top left'
    }"
  >
    <!-- Simple cursor arrow with tip at 0,0 -->
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style="display: block;"
    >
      <path
        d="M0 0L0 16L5 11L8 16L10 15L7 10L13 10L0 0Z"
        fill="white"
        stroke="black"
        stroke-width="1"
        stroke-linejoin="round"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  position: { x: number; y: number }
  isClicking: boolean
}>()
</script>
