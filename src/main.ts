import { createApp } from 'vue'
import App from './App.vue'
import { googleTagManager } from './gtm'
import './styles/main.css'

const app = createApp(App)

googleTagManager()

// Install modules from `./modules` folder
Object.values(import.meta.globEager('./modules/*.ts')).map((module) => module.install?.(app))

app.mount('#app')
