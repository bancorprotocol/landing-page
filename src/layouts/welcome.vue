<template>
  <main class="h-full bg-mobile-cubes md:bg-cubes">
    <div class="flex justify-between pt-10 mb-20 main-content">
      <img src="/images/logos/bancor.svg" />
      <a href="https://app.bancor.network/eth/data" class="hidden btn-outline-primary md:flex">Enter App</a>
    </div>

    <router-view />

    <WelcomeFooter></WelcomeFooter>
  </main>
</template>
