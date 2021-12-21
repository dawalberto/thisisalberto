import { createI18n } from 'vue3-i18n'

const messages = {
  en: {
    menu: {
      projects: 'Projects',
      career: 'Career',
      contact: 'Contact',
    },
    made: 'Made with ❤️ by Alberto García Sola',
  },
  es: {
    menu: {
      projects: 'Proyectos',
      career: 'Carrera',
      contact: 'Contacto',
    },
    made: 'Hecho con ❤️ por Alberto García Sola',
  },
}

const i18n = createI18n({
  legacy: false, // you must set `false`, to use Composition API
  locale: 'es', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
})

export default i18n
