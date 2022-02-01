import { createI18n } from 'vue3-i18n'

function calculate_age(date) {
  var diff_ms = Date.now() - date.getTime()
  var age_dt = new Date(diff_ms)

  return Math.abs(age_dt.getUTCFullYear() - 1970)
}

const currentAge = calculate_age(new Date(1997, 12, 30))

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
    home: {
      aboutMe: ``,
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
        why: `Imagina que tienes que unir dos hojas de excel para obtener datos de ambas y conseguir un único archivo con los registros que coincidan según la condición que tu desees ¿cómo lo harías? \n
              Actualmente el propio Excel cuenta con opciones para conseguir tal objetivo, pero no es precisamente fácil ni mucho menos intuitivo, sobre todo para un internauta corriente.`,
        whatExactly: `Jjoin es un programa de escritorio desarrollado con tecnologías web.
                      Consta de tres pantallas intuitivas las cuales te irán guiando a través del proceso de unión de las hojas excel. \n
                      En la primera pantalla podrás seleccionar los archivos que desees.
                      En la segunda pantalla crearás la condición por la cual quieres que se unan las hojas.
                      Por último elegirás que campos de cada hoja deseas grabar en el nuevo fichero y si deseas guardar un único archivo con todas las coincidencias y/o guardar un archivo con el contenido que desees por cada coincidencia.`,
        technologies: `Para llevar a cabo este proyecto he usado las siguientes tecnologías y lenguajes: HTML, CSS, JavaScript, Tailwindcss, Vue, Nuxt, Electron.`,
      },
      clasicaguitarra: {
        why: `Muchos guitarristas clásicos cuentan con su propia página web donde habitualmente podemos encontrar su trayectoria y conciertos actuales.
              Pero si una persona quiere asistir a un concierto de guitarra clásica y no conoce al guitarrista en cuestión difícilmente asistirá porque no se habrá enterado. \n
              El objetivo de clasicaguitarra es reunir los perfiles y conciertos de todos los guitarristas registrados. Siendo de esta manera muy fácil para cualquier persona ver el próximo concierto de cualquier guitarrista. Y todo desde un único lugar, clasicaguitarra.`,
        whatExactly: `Clasicaguitarra es una página web en la que los guitarristas clásicos podrán crear su propio perfil y conciertos con sus programas correspondientes. \n
                      Como visitante o amante de la guitarra clásica podrás suscribirte a cualquier guitarrista para estar al tanto de todos sus conciertos, además en la página de inicio siempre se visualizarán los próximos conciertos de todos los guitarristas registrados.
                      Además podrás seguir y ver la trayectoria de cada guitarrista y otros datos de interés como la guitarra con la que toca actualmente, sus redes sociales o su página web.`,
        technologies: `Para llevar a cabo este proyecto he usado las siguientes tecnologías y lenguajes: HTML, CSS, JavaScript, Vue, Vuetify, Node, MongoDB, Heroku, Firebase, Cloudinary`,
      },
    },
    home: {
      aboutMe: `Hi 👋 \n Me llamo Alberto y soy Desarrollador Web!
                Tengo ${currentAge} años y llevo más de seis en el mundo de la informática de los cuales cuatro he estado totalmente enfocado en lo que más me gusta, el desarrollo web.
                Entre otras cosas me gusta porque te obliga a superarte cada día planteándote nuevos problemas, estudiando la mejor manera de resolverlos, refactorizándolos, superándote a ti mismo y siempre aprendiendo.
                Como desarrollador web soy consciente de que los lenguajes o tecnologías son solo el medio y debemos ser capaces de hallar una solución independientemente de estos, pero a pesar de ello no puedo evitar sentir una gran debilidad por JavaScript y todo el ecosistema que ha ido creciendo a su alrededor(Node, Vue, Angular, etc)
                Pero no solo me gusta estar pegado al ordenador, también disfruto haciendo deporte, escapándome a la montaña y pasando tiempo con los míos.`,
    },
    made: 'Hecho con ❤️ por Alberto García Sola',
  },
}

const browserLangugae = navigator.language.includes('es') ? 'es' : 'en'

const i18n = createI18n({
  legacy: false, // you must set `false`, to use Composition API
  locale: browserLangugae, // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
})

export default i18n
