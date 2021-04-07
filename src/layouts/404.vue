<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const router = useRouter()
const { t } = useI18n()
</script>

<template>
  <main class="px-4 py-10 text-center text-teal-700">
    <div>
      <p class="text-4xl">Ohoh...</p>
    </div>
    <router-view></router-view>
    <div>
      <button class="m-3 mt-8 text-sm btn" @click="router.back()">{{ t('button.back') }}</button>
    </div>
  </main>
</template>
