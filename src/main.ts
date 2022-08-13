// import { createApp } from 'vue'
// import App from './App.vue'
// import { googleTagManager } from './gtm'
// import './styles/main.css'

caches
  .keys()
  .then(function (names) {
    for (const name of names) caches.delete(name)
  })
  .then(() => {
    window.location.replace('https://home.bancor.network')
  })

// const app = createApp(App)

// googleTagManager()

// // Install modules from `./modules` folder
// Object.values(import.meta.globEager('./modules/*.ts')).map((module) => module.install?.(app))

// app.mount('#app')
