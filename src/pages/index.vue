<template>
  <main class="h-full bg-mobile-cubes md:bg-cubes">
    <div class="main-content flex flex-col items-center justify-around h-screen min-h-[550px] max-h-[750px]">
      <div class="flex justify-between w-full main-content">
        <img src="/images/logos/bancor.svg" />
        <a href="https://app.bancor.network/eth/data" class="hidden btn-outline-primary md:flex">Enter App</a>
      </div>

      <h1 class="text-[60px] md:text-[70px]">Trade & Earn</h1>
      <p class="max-w-3xl text-[24px] md:text-center">
        Trade tokens and earn interest on your favorite tokens by staking them in Bancor’s decentralized exchange
      </p>

      <div class="flex flex-col md:items-center">
        <div class="flex justify-center mt-8 space-x-3 md:hidden">
          <a v-for="item in widgetData" :key="item.id" class="flex btn-primary" :href="item.buttonHref">
            {{ item.title }}
            <img :src="`/images/icons/${item.icon}-white.svg`" alt="Swap and Earn CTA Icon" class="ml-3" />
          </a>
        </div>
      </div>

      <div class="flex-col items-center justify-center hidden pb-5 md:flex md:space-x-8 md:flex-row">
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
            <img :src="`/images/icons/${item.icon}.svg`" alt="Swap and Earn CTA Icon" />
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

    <WelcomeFooter></WelcomeFooter>
  </main>
</template>

<script setup lang="ts">
const widgetData = [
  {
    id: 1,
    title: 'Trade',
    description: 'Fast, secure trading at the best prices, no sign-ups or registrations',
    icon: 'swap',
    buttonLabel: 'Get started',
    buttonHref: 'https://app.bancor.network/eth/swap',
  },
  {
    id: 2,
    title: 'Earn',
    description: 'Stake tokens to earn fees and rewards with impermanent loss protection',
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
      'Bancor is the first decentralized trading protocol, empowering traders, liquidity providers & developers to participate in an open financial marketplace with no barriers to entry. No one needs permission to use the open-source Bancor Protocol.',
    links: [
      {
        id: 1,
        icon: 'medium',
        href: 'https://blog.bancor.network',
      },
      {
        id: 2,
        icon: 'discord',
        href: 'https://discord.gg/CAm3Ncyrxk',
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
    title: 'Bancor DAO',
    description:
      'Bancor is owned and operated by its community as a decentralized autonomous organization (DAO). The Bancor Protocol is governed via a democratic and transparent voting system which allows all stakeholders to get involved and shape Bancor’s future.',
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
