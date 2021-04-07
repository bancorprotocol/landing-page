import { createHead } from '@vueuse/head'
import { UserModule } from '~/types'

// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results
export const install: UserModule = (app) => {
  const head = createHead()

  app.use(head)
}
