import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const ProductivityApp = createApp(App)
ProductivityApp.use(router)
ProductivityApp.use(store)
ProductivityApp.use(ElementPlus)

ProductivityApp.mount('#app')
