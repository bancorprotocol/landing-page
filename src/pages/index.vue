<template>
  <div class="main-content">
    <div class="flex flex-col md:items-center">
      <h1 class="mb-8 text-[50px] md:hidden">
        Swap<br />
        Stake<br />
        Earn
      </h1>
      <h1 class="mb-8 hidden md:block md:text-[75px]">Swap, Stake & Earn</h1>
      <p class="max-w-3xl text-lg md:text-center">
        Bancor allows you to swap your crypto or earn more by putting your funds to work in an automated market maker.
      </p>

      <div class="flex justify-center mt-8 space-x-3 md:hidden">
        <a v-for="item in widgetData" :key="item.id" class="flex btn-primary" :href="item.buttonHref">
          {{ item.title }}
          <img :src="`/images/icons/${item.icon}-white.svg`" class="ml-3" />
        </a>
      </div>
    </div>

    <div
      class="flex-col items-center justify-center hidden mt-20 space-y-8 md:flex md:space-y-0 md:space-x-8 md:flex-row"
    >
      <WelcomeWidget
        v-for="item in widgetData"
        :key="item.id"
        :title="item.title"
        :description="item.description"
        :icon="item.icon"
        :button-label="item.buttonLabel"
        :button-href="item.buttonHref"
      ></WelcomeWidget>
    </div>
  </div>

  <WelcomeStatistics></WelcomeStatistics>

  <div class="mb-32 md:hidden main-content">
    <div v-for="(item, index) in widgetData" :key="item.id">
      <div class="flex flex-row">
        <div class="w-[80px] flex-none flex items-center justify-center mr-5">
          <img :src="`/images/icons/${item.icon}.svg`" />
        </div>
        <div class="flex-grow">
          <h2 class="mb-2">{{ item.title }}</h2>
          <p class="text-lg">{{ item.description }}</p>
          <a :href="item.buttonHref" class="flex mt-5 text-lg font-bold text-primary-500">
            {{ item.buttonLabel }}
            <img :src="`/images/icons/arrow-right.svg`" class="ml-3" />
          </a>
        </div>
      </div>

      <hr v-if="index + 1 < widgetData.length" class="my-16 border-gray4" />
    </div>
  </div>

  <div class="grid grid-flow-col grid-cols-1 grid-rows-2 gap-20 md:grid-cols-2 main-content">
    <div v-for="item in aboutData" :key="item.id" class="flex flex-col justify-center">
      <h2 class="mb-3">{{ item.title }}</h2>
      <p class="text-lg">
        {{ item.description }}
      </p>
      <div class="flex mt-8 space-x-5">
        <a
          v-for="link in item.links"
          :key="link.id"
          :href="link.href"
          class="w-[50px] h-[50px] bg-gray5 rounded-[14px] shadow-custom2 flex justify-center items-center hover:shadow-custom3 transition-shadow duration-500"
        >
          <img :src="`/images/icons/${link.icon}.svg`" alt="Link to Social Media" />
        </a>
      </div>
    </div>
    <div class="row-span-2 h-[745px] hidden md:flex items-center">
      <img src="/images/common/cubes.svg" alt="Cubes Image" />
    </div>
  </div>
</template>

<script setup lang="ts">
const widgetData = [
  {
    id: 1,
    title: 'Swap',
    description: 'Simply swap, low fees, low slippage, fully non-custodial.',
    icon: 'swap',
    buttonLabel: 'Get started',
    buttonHref: 'https://app.bancor.network/eth/swap',
  },
  {
    id: 2,
    title: 'Earn',
    description: 'Stake tokens, mitigate impermanent loss risk, earn fees.',
    icon: 'earn',
    buttonLabel: 'Get started',
    buttonHref: 'https://app.bancor.network/eth/data',
  },
]

const aboutData = [
  {
    id: 1,
    title: 'About Bancor',
    description:
      'Bancor Protocol is a powerful open source framework inspiring the next generation of token projects. The Protocol enables automatic price discovery and swaps between tokens in a network through the use of multiple smart contracts.',
    links: [
      {
        id: 1,
        icon: 'medium',
        href: 'https://blog.bancor.network',
      },
      {
        id: 2,
        icon: 'discord',
        href: 'https://discord.gg/EHK8wHbgau',
      },
      {
        id: 3,
        icon: 'telegram',
        href: 'https://t.me/bancor',
      },
      {
        id: 4,
        icon: 'twitter',
        href: 'https://twitter.com/Bancor',
      },
    ],
  },
  {
    id: 2,
    title: 'Bancor Dao',
    description:
      'Bancor future of development is controlled by a decentralized autonomous organization (DAO) that can propose and vote on key features and implementations. Every person can take part in the DAO decision making process and it is open and transparent to all.',
    links: [
      {
        id: 1,
        icon: 'vote',
        href: 'https://app.bancor.network/eth/vote/',
      },
      {
        id: 2,
        icon: 'governance',
        href: 'https://gov.bancor.network/',
      },
    ],
  },
]
</script>

<route lang="yaml">
meta:
  layout: welcome
</route>
