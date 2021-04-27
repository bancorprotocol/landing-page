import { createApp } from 'vue'
import App from './App.vue'
import './styles/main.css'
import './gtm.ts'

const app = createApp(App)

// Install modules from `./modules` folder
Object.values(import.meta.globEager('./modules/*.ts')).map((module) => module.install?.(app))

app.mount('#app')
