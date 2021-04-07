import { watch, computed } from 'vue'
import { usePreferredDark } from '@vueuse/core'
import { colorSchema } from './storage'

const preferredDark = usePreferredDark()

export const isDark = computed(() =>
  colorSchema.value === 'auto' ? preferredDark.value : colorSchema.value === 'dark'
)

export const setColorSchema = (mode: 'auto' | 'dark' | 'light') => {
  colorSchema.value = mode
}

watch(isDark, (v) => typeof document !== 'undefined' && document.documentElement.classList.toggle('dark', v), {
  immediate: true,
})
