import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import '@/styles/index.scss'

import App from './App.vue'
import router from './router'
import store from './store'
import directives from '@/directives'

const initApp = () => {
  return createApp(App)
    .use(store)
    .use(router)
    .use(ElementPlus)
    .use(directives)
    .mount('#app')
}
initApp()

