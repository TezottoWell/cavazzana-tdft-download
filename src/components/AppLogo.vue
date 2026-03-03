<script setup lang="ts">
import appIcon from '@/assets/images/icon.png'

withDefaults(defineProps<{
  alt?: string
  size?: number
}>(), {
  alt: 'Logo Cavazzana TDFT',
  size: 96
})
</script>

<template>
  <img
    :src="appIcon"
    :alt="alt"
    :style="{ width: `${size}px`, height: `${size}px` }"
    class="rounded-2xl object-cover opacity-0 animate-fade-in-up shadow-lg"
  />
</template>