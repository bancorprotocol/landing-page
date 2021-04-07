import { createRouter, createWebHistory } from 'vue-router'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'layouts-generated'
import { UserModule } from '~/types'

export const install: UserModule = (app) => {
  const router = createRouter({
    history: createWebHistory(),
    routes: setupLayouts(generatedRoutes),
  })

  app.use(router)
}
