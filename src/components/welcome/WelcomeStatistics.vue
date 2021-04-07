<template>
  <div class="flex items-center my-36 bg-white min-h-[100px] border-t border-b border-gray2 py-5 lg:p-0">
    <transition name="fade" mode="out-in">
      <div v-if="welcomeData" key="1" class="grid w-full grid-cols-2 gap-3 main-content lg:grid-cols-4">
        <div
          v-for="item in statistics"
          :key="item.id"
          class="flex flex-col-reverse items-center justify-center text-xs md:text-lg xl:items-end xl:flex-row"
        >
          <span class="xl:mr-2">{{ item.label }}</span>
          <span class="text-lg font-light md:text-3xl">
            {{ item.prepend }}<span class="font-bold uppercase">{{ item.value }}</span
            >{{ item.append }}
          </span>
        </div>
      </div>
      <div v-else key="2" class="grid w-full grid-cols-2 gap-10 main-content lg:grid-cols-4">
        <div v-for="i in 4" :key="i" class="space-y-2 animate-pulse">
          <div class="w-5/6 h-3 rounded-full bg-gray1"></div>
          <div class="h-3 rounded-full bg-gray1"></div>
          <div class="w-3/4 h-3 rounded-full bg-gray1"></div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useTimeoutFn } from '@vueuse/core'
import numbro from 'numbro'

const welcomeData = ref<any>(null)

const statistics = computed(() => {
  if (!welcomeData.value) return []
  const averageFormat = {
    average: true,
    mantissa: 3,
    optionalMantissa: true,
    spaceSeparated: true,
  }

  const bntSupply: string = welcomeData.value.bnt_supply

  const totalBntStaked: number = welcomeData.value.pools.reduce((acc: number, item: any) => {
    const bntReserve = item.reserves.find(
      (reserve: any) => reserve.address.toLowerCase() === '0x1F573D6Fb3F13d689FF844B4cE37794d79a7FF1C'.toLowerCase()
    )
    if (!bntReserve) return acc
    return Number(bntReserve.balance) + Number(acc)
  }, 0)

  const stakedBntPercent = (totalBntStaked / Number(parseFloat(bntSupply).toExponential(18))) * 100

  return [
    {
      id: 1,
      label: 'Total Liquidity',
      prepend: '$',
      value: numbro(welcomeData.value.total_liquidity.usd).format(averageFormat),
      append: '',
    },
    {
      id: 2,
      label: 'Volume (24h)',
      prepend: '$',
      value: numbro(welcomeData.value.total_volume_24h.usd).format(averageFormat),
      append: '',
    },
    {
      id: 3,
      label: 'Price BNT',
      prepend: '$',
      value: numbro(welcomeData.value.bnt_price.usd).format({ mantissa: 2 }),
      append: '',
    },
    {
      id: 3,
      label: 'Total BNT Staked',
      prepend: '',
      value: numbro(stakedBntPercent).format({ mantissa: 2 }),
      append: '%',
    },
  ]
})

const fetchData = async () => {
  try {
    const result = await fetch('https://api-v2.bancor.network/welcome')
    useTimeoutFn(async () => {
      welcomeData.value = await result.json()
    }, 1000)
  } catch (e) {
    console.error(e)
  }
}

onMounted(async () => {
  await fetchData()
})
</script>
