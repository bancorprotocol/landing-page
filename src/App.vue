<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'Bancor Network - Trade & Earn',
  meta: [
    {
      name: 'description',
      content:
        'Bancor technology allows you to swap any available token in a non custodial way using any external wallet. As a token holder, staking single side liquidity into a pool allows you to earn swap fees while maintaining your long position with mitigated risk.',
    },
  ],
})
</script>

<template>
  <router-view />
</template>
