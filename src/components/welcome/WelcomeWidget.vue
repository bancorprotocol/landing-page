<template>
  <a
    :href="props.buttonHref"
    target="_blank"
    class="group w-[327px] py-8 px-5 bg-white rounded-[40px] shadow-custom hover:shadow-custom4 transition-shadow duration-500 border border-gray flex flex-col items-center"
    @click="onCtaClick"
  >
    <div class="w-[60px] h-[50px] flex justify-center items-center">
      <img :src="`/images/icons/${props.icon}.svg`" />
    </div>
    <h2 class="my-3">{{ props.title }}</h2>
    <p class="mb-8 text-lg text-center">{{ props.description }}</p>
    <a
      class="duration-500 btn-primary group-hover:bg-primary-800 group-hover:border-primary-800"
      :href="props.buttonHref"
      >{{ props.buttonLabel }}</a
    >
  </a>
</template>
<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  title: string
  description: string
  buttonLabel: string
  buttonHref: string
  icon: string
}>()

// @ts-ignore
const dataLayer = window.dataLayer as {}[]

const onCtaClick = () => {
  dataLayer.push({
    [`${props.title}`]: `Homepage ${props.title} Click`,
  })
}
</script>
