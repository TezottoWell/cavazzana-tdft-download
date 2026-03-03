<script setup lang="ts">
import { computed } from 'vue'
import type { DownloadButtonProps } from '@/types'

const props = withDefaults(defineProps<DownloadButtonProps>(), {
  label: 'Baixar APK',
  href: '#',
  loading: false,
  disabled: false
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const buttonClasses = computed(() => {
  const base = [
    'inline-flex items-center justify-center gap-2',
    'px-6 py-3 rounded-xl',
    'text-base font-semibold text-white',
    'transition-all duration-150 ease-out',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark_red-400 focus-visible:ring-offset-2 focus-visible:ring-offset-deep_black-200'
  ]

  if (props.disabled || props.loading) {
    base.push('opacity-50 cursor-not-allowed')
  } else {
    base.push('bg-dark_red-500 hover:bg-dark_red-600 hover:scale-[1.02] active:scale-[0.98]')
  }

  return base.join(' ')
})

function handleClick(event: MouseEvent) {
  if (props.disabled || props.loading) {
    event.preventDefault()
    return
  }
  emit('click', event)
}
</script>

<template>
  <a
    :href="disabled || loading ? undefined : href"
    :class="buttonClasses"
    :aria-disabled="disabled || loading"
    :aria-busy="loading"
    role="button"
    @click="handleClick"
  >
    <svg
      v-if="loading"
      class="w-5 h-5 animate-spin"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      />
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>

    <svg
      v-else
      class="w-5 h-5"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
      aria-hidden="true"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
      />
    </svg>

    <span>{{ loading ? 'Baixando...' : label }}</span>
  </a>
</template>