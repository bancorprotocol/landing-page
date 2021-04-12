<template>
  <div class="py-16 mt-20 bg-white">
    <div class="grid grid-cols-1 main-content lg:grid-cols-12">
      <div class="grid grid-cols-2 md:grid-cols-3 lg:col-span-8 xl:col-span-6 gap-y-10">
        <div v-for="category in footerData" :key="category.id">
          <h3 class="mb-2">{{ category.title }}</h3>
          <ul class="space-y-1">
            <li v-for="link in category.links" :key="link.id">
              <a :href="link.href" class="text-sm text-gray4">{{ link.label }}</a>
            </li>
          </ul>
        </div>
      </div>
      <hr class="my-16 border-gray4 md:hidden" />
      <div class="flex flex-col items-center justify-center space-y-2 md:mt-12 lg:col-span-4 xl:col-span-6 lg:m-0">
        <img src="/images/logos/bancor.svg" width="97" />
        <span class="text-gray4">© All Rights reserved to Bancor</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const footerData = [
  {
    id: 1,
    title: 'Products',
    links: [
      {
        id: 1,
        label: 'Bancor Trading',
        href: 'https://app.bancor.network/eth/swap',
      },
      {
        id: 2,
        label: 'Bancor Pools',
        href: 'https://app.bancor.network/eth/data',
      },
      {
        id: 3,
        label: 'Bancor Data',
        href: 'https://duneanalytics.com/Bancor/bancor_1',
      },
      {
        id: 6,
        label: 'Governance',
        href: 'https://gov.bancor.network/',
      },
    ],
  },
  {
    id: 2,
    title: 'Developers',
    links: [
      {
        id: 1,
        label: 'GitHub',
        href: 'https://github.com/bancorprotocol',
      },
      {
        id: 2,
        label: 'Docs',
        href: 'https://docs.bancor.network/',
      },
      {
        id: 3,
        label: 'Dev Channel',
        href: 'https://t.me/BancorDevelopers',
      },
      {
        id: 4,
        label: 'Bug Bounty',
        href: 'https://blog.bancor.network/bancor-v2-bug-bounty-5bbb970d0097',
      },
    ],
  },
  {
    id: 4,
    title: 'About',
    links: [
      {
        id: 1,
        label: 'Blog',
        href: 'https://blog.bancor.network',
      },
      {
        id: 2,
        label: 'Chat',
        href: 'https://t.me/bancor',
      },
      {
        id: 3,
        label: 'Twitter',
        href: 'https://twitter.com/Bancor',
      },
      {
        id: 4,
        label: 'Reddit',
        href: 'https://www.reddit.com/r/Bancor/',
      },
    ],
  },
]
</script>
