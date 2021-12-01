import { createApp } from 'vue'
// import { createI18n } from 'vue3-i18n'
import App from './App.vue'
import router from './router'
import 'tailwindcss/tailwind.css'
// import { messages } from './locales.json'
import i18n from './i18n'

// const i18n = createI18n({
//   legacy: false, // you must set `false`, to use Composition API
//   locale: 'es', // set locale
//   fallbackLocale: 'en', // set fallback locale
//   messages, // set locale messages
// })

createApp(App).use(router).use(i18n).mount('#app')
