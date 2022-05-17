import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'

const ProductivityApp = createApp(App)
ProductivityApp.use(router)
ProductivityApp.use(store)

ProductivityApp.mount('#app')
