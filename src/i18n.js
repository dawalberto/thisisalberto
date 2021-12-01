import { createI18n } from 'vue3-i18n'

const messages = {
  en: {
    test: 'Hello world',
  },
  es: {
    test: 'Hola mundo',
  },
}

const i18n = createI18n({
  legacy: false, // you must set `false`, to use Composition API
  locale: 'es', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
})

export default i18n
