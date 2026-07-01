import { createApp, watchEffect } from 'vue'
import './style.css'
import App from './App.vue'
import { locale } from './i18n'

watchEffect(() => {
  document.documentElement.lang = locale.value
})

createApp(App).mount('#app')
