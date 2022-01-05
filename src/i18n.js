import { createI18n } from 'vue3-i18n'

const messages = {
  en: {
    menu: {
      projects: 'Projects',
      career: 'Career',
      contact: 'Contact',
    },
    projectDetails: {
      why: 'Why',
      whatExactly: 'What exactly',
      technologies: 'Technologies',
      repository: 'Repository',
      jjoin: {
        why: '',
        whatExactly: '',
        technologies: '',
        repository: '',
      },
      clasicaGuitarra: {
        why: '',
        whatExactly: '',
        technologies: '',
        repository: '',
      },
    },
    made: 'Made with ❤️ by Alberto García Sola',
  },
  es: {
    menu: {
      projects: 'Proyectos',
      career: 'Carrera',
      contact: 'Contacto',
    },
    projectDetails: {
      why: '¿Por qué?',
      whatExactly: '¿Qué es exactamente?',
      technologies: 'Tecnologías que he usado',
      repository: 'Repositorio',
      jjoin: {
        why: '',
        whatExactly: '',
        technologies: '',
        repository: '',
      },
      clasicaGuitarra: {
        why: '',
        whatExactly: '',
        technologies: '',
        repository: '',
      },
    },
    made: 'Hecho con ❤️ por Alberto García Sola',
  },
}

const i18n = createI18n({
  legacy: false, // you must set `false`, to use Composition API
  locale: 'en', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
})

export default i18n
