import { createI18n } from 'vue3-i18n'

function calculate_age(date) {
  var diff_ms = Date.now() - date.getTime()
  var age_dt = new Date(diff_ms)

  return Math.abs(age_dt.getUTCFullYear() - 1970)
}

const currentAge = calculate_age(new Date(1997, 12, 30))
const yearsInITWorld = calculate_age(new Date(2015, 1, 1)) - 1
const yearsInWebDevelopment = calculate_age(new Date(2017, 1, 1)) - 1

const messages = {
  en: {
    menu: {
      projects: 'Projects',
      career: 'Career',
      contact: 'Contact',
    },
    projectDetails: {
      why: 'Why',
      whatExactly: `What it's exactly`,
      technologies: 'Technologies',
      repository: 'Repository',
      enjoy: 'Enjoy',
      otherProjects: `I consider that these are my most interesting projects because of the idea and technologies used to carry them out, but I've also developed`,
      otherProjectsLink: 'other cool little projects',
      jjoin: {
        why: `Let supose that we have to join two excel sheets to get data from both and get a file with the records that match with the condition that we wish. How would you do that? \n
        Nowadays Excel himself has a option to do that but it's not easy to use and let alone intuitive`,
        whatExactly: `Jjoin is a desktop app developed with web technologies.
                      Consists in three intuitive screens that will guide you through the joining process of the excel sheets. \n
                      In the first screen you will select the files.
                      In the second screen you will create the condition to join the files.
                      And last you will choose wich fields of both sheets you want to record in the new file. Also you will choose if you want to save only one file with every match and/or to save as many files as matches with the data/fields that you want`,
        technologies: `To develop this project I've used these languages and technologies: <span class="font-bold">HTML, CSS, JavaScript, Tailwindcss, Vue, Nuxt, Electron, Node</span>.`,
      },
      clasicaguitarra: {
        why: `Many classical guitarists have their own website where we can usually find their career and current concerts.
              But if a person wants to attend a classical guitar concert and doesn't know a specific classical guitarist, he will hardly find out about the concerts. \n
              The goal of clasicaguitarra is to gather the profiles and concerts of all registered guitarists. Being in this way very easy for anyone to see the next concert of any guitarist. And all from one place, classicguitarra.`,
        whatExactly: `Clasicaguitarra is a website where classical guitarists can create their own profile and concerts with their corresponding classical music programs. \n
        As a visitor or lover of classical guitar you can subscribe to any guitarist to be aware of all their concerts, and the next concerts of all registered guitarists will always be displayed on the home page.
        In addition, you will be able to follow and see the trajectory of each guitarist and other interesting data such as the guitar with which he currently plays, his social networks or his website.`,
        technologies: `To carry out this project I have used the following technologies and languages: <span class="font-bold">HTML, CSS, JavaScript, Vue, Vuetify, Node, MongoDB, Heroku, Firebase, Cloudinary</span>.`,
      },
    },
    home: {
      aboutMe: `Hi 👋 \n
                My name is Alberto and I'm a Web Developer!
                I'm ${currentAge} years old and I'm more than ${yearsInITWorld} years in the IT world of which ${yearsInWebDevelopment} of them I've been completely focused in the most I like, Web Development. \n
                Among other things, I like it because it implies a constant evolution in terms of knowledge and skills. It seems to me that it is what enriches us as professionals and people. \n
                As a Web Developer I know that the languages and technologies are only the tool and way and not the finish, that's because we should be able to find a solution regardless of them. But although I know this I can't help it feel a special love for JavaScript and the whole new ecosystem that it's growing around him(Node, Vue, Angular, etc) \n
                But I don't only enjoy my time being on the computer, I'm a big fan of the sport and I really like to expend time with my friends and family.
      `,
    },
    career: {
      jobs: {
        job1: {
          institution: 'NTT DATA',
          title: 'Frontend Web Developer with React',
          period: 'jul. 2022 - now',
          description: 'Developing together with the frontend team with react',
          place: 'Alicante',
          position: 1,
        },
        job2: {
          institution: 'Codigo10 Soluciones Informaticas',
          title: 'Web Developer',
          period: 'sept. 2019 - may. 2021 · 1 año 9 meses',
          description:
            'During my stay at Código 10 I was lucky enough to be part of a small team of developers, due to the small size of the department, all the members touched all the fields, so I learned to defend myself well in the usual fields in which a developer is usually specialize: front, back and database. In Code 10 I learned to work as a team more than ever. It was a stage that gave me a lot both professionally and personally. Mainly I was developing functionalities for online stores and also for an ERP. Among other languages and technologies I was working with Java, HTML, CSS, JavaScript, Angular, MySQL and PHP',
          place: 'Alicante',
          position: 2,
        },
        job3: {
          institution: 'Labaqua',
          title: 'Web Developer',
          period: 'jun. 2018 - mar. 2019 · 10 meses',
          description: `I was part of a program called "Dual Professional Training", which allows you to carry out twice as many internships as are carried out in
                        a normal course. This allowed me to complete 400 hours of internships in addition to the 400 that must be done on a mandatory basis. Thanks to this I learned many things before reaching the second year of the higher degree of Development of
                        Web Applications and I faced it much more prepared and with new points of view and knowledge.

                        All of my efforts and focus during my time at the company were focused on modern JavaScript, Vue.js, and Quasar.
                        As a web developer, I was part of a project to develop a huge website for the company's labs that currently still in development. My stay there sparked a great interest in me for modern JavaScript and server-side JavaScript.`,
          place: 'Alicante',
          position: 3,
        },
        job4: {
          institution: 'Mobisoft Software',
          title: 'Computer Technician',
          period: 'abr. 2017 - jun. 2017 · 3 meses',
          description: `Internships for the intermediate degree of Technician in Microcomputer Systems and Networks lasted 380 hours and although I am currently focused on in web development these internships helped me expand my knowledge in other areas totally different from web development, which has helped me on more than one occasion.

                        The Mobisoft company is a company that developed a software called Glop for hospitality, they have a desktop application that generally installed in POS terminals, they also have an Android version that communicates with the desktop application to make orders. It is designed to facilitate the work of sector employees, being able to manage products, place orders and a wide range of options that accommodate each client.

                        My work in the company as a Technician in Microcomputer Systems and Networks consisted of the installation, configuration and installation of the POS as well as the necessary programs for the final client. I also fixed equipment at the hardware level on some occasions.`,
          place: 'Alicante',
          position: 4,
        },
      },
      studies: {
        studies1: {
          institution: 'IES Mare Nostrum',
          title: 'Web Application Developer',
          period: '2017 - 2019',
          place: 'Alicante',
          description: `In this course I learned everything necessary to be able to create a complete website from scratch to deployment, covering all aspects necessary to be able to become a full-stack web developer.`,
          position: 5,
        },
        studies3: {
          institution: 'Cámara de comercio',
          title: 'Web Development with JavaScript y Angular',
          period: '2019 . 150 hours',
          place: 'Alicante',
          description:
            '150 hour face-to-face course to improve my JavaScript skills and learn how to develop web applications with Angular.',
          position: 6,
        },
        studies4: {
          institution: 'Cámara de comercio',
          title: 'Social Skills and Employability',
          period: '2019 . 65 hours',
          place: 'Alicante',
          description:
            '65-hour face-to-face course to develop fundamental skills for integration into the world of work (trust, empathy, emotions, teamwork...)',
          position: 7,
        },
        studies2: {
          institution: 'CIP FP Batoi',
          title: 'Technician in Microcomputer Systems and Networks',
          period: '2015 - 2017',
          place: 'Alcoy',
          description: `Although my studies and efforts are basically focused on web development, I previously did a medium degree where I learned to defend myself better than I already knew in computer environments.

                        I also got a lot of knowledge regarding the hardware part so unlike many developers I’ve don't always dedicated myself to writing code I have knowledge that covers more fields than just development, something that has come in handy on more than one occasion.`,
          position: 8,
        },
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
      enjoy: 'Disfruta de',
      otherProjects:
        'Considero que estos son mis proyectos más interesantes por la idea y tecnologías usadas para llevarlos a cabo pero también he desarrollado',
      otherProjectsLink: 'otros proyectitos chulos',
      jjoin: {
        why: `Imagina que tienes que unir dos hojas de excel para obtener datos de ambas y conseguir un único archivo con los registros que coincidan según la condición que tu desees ¿cómo lo harías? \n
              Actualmente el propio Excel cuenta con opciones para conseguir tal objetivo, pero no es precisamente fácil ni mucho menos intuitivo, sobre todo para un internauta corriente.`,
        whatExactly: `Jjoin es un programa de escritorio desarrollado con tecnologías web.
                      Consta de tres pantallas intuitivas las cuales te irán guiando a través del proceso de unión de las hojas excel. \n
                      En la primera pantalla podrás seleccionar los archivos que desees.
                      En la segunda pantalla crearás la condición por la cual quieres que se unan las hojas.
                      Por último elegirás que campos de cada hoja deseas grabar en el nuevo fichero y si deseas guardar un único archivo con todas las coincidencias y/o guardar un archivo con el contenido que desees por cada coincidencia.`,
        technologies: `Para llevar a cabo este proyecto he usado las siguientes tecnologías y lenguajes: <span class="font-bold">HTML, CSS, JavaScript, Tailwindcss, Vue, Nuxt, Electron, Node</span>.`,
      },
      clasicaguitarra: {
        why: `Muchos guitarristas clásicos cuentan con su propia página web donde habitualmente podemos encontrar su trayectoria y conciertos actuales.
              Pero si una persona quiere asistir a un concierto de guitarra clásica y no conoce a un guitarrística clásico en concreto dificilmente se enterará de los conciertos. \n
              El objetivo de clasicaguitarra es reunir los perfiles y conciertos de todos los guitarristas registrados. Siendo de esta manera muy fácil para cualquier persona ver el próximo concierto de cualquier guitarrista. Y todo desde un único lugar, clasicaguitarra.`,
        whatExactly: `Clasicaguitarra es una página web en la que los guitarristas clásicos podrán crear su propio perfil y conciertos con sus programas de música clásica correspondientes. \n
                      Como visitante o amante de la guitarra clásica podrás suscribirte a cualquier guitarrista para estar al tanto de todos sus conciertos, además en la página de inicio siempre se visualizarán los próximos conciertos de todos los guitarristas registrados.
                      Además podrás seguir y ver la trayectoria de cada guitarrista y otros datos de interés como la guitarra con la que toca actualmente, sus redes sociales o su página web.`,
        technologies: `Para llevar a cabo este proyecto he usado las siguientes tecnologías y lenguajes: <span class="font-bold">HTML, CSS, JavaScript, Vue, Vuetify, Node, MongoDB, Heroku, Firebase, Cloudinary</span>.`,
      },
    },
    home: {
      aboutMe: `Hi 👋 \n 
                Me llamo Alberto y soy Desarrollador Web!
                Tengo ${currentAge} años y llevo más de ${yearsInITWorld} en el mundo de la informática de los cuales ${yearsInWebDevelopment} he estado totalmente enfocado en lo que más me gusta, el desarrollo web. \n
                Entre otras cosas me gusta porque  implica una constante evolución a nivel de conocimientos y habilidades. Me parece que es lo que nos enriquece como profesionales y personas. \n
                Como desarrollador web soy consciente de que los lenguajes y tecnologías son solo el medio y no el fin por lo que debemos ser capaces de hallar una solución independientemente de estos. Pero a pesar de esto no puedo evitar sentir una gran debilidad por JavaScript y todo el ecosistema que ha ido creciendo a su alrededor(Node, Vue, Angular, etc)\n
                Pero no solo me gusta estar pegado al ordenador, soy un gran fan del deporte y me encanta pasar tiempo con los mios.`,
    },
    career: {
      jobs: {
        job1: {
          institution: 'NTT DATA',
          title: 'Frontend Web Developer con React',
          period: 'jul. 2022 - actualmente',
          description: 'Desarrollando junto al equipo de frontend con React',
          place: 'Alicante',
          position: 1,
        },
        job2: {
          institution: 'Codigo10 Soluciones Informaticas',
          title: 'Desarrollador Web',
          period: 'sept. 2019 - may. 2021 · 1 año 9 meses',
          description:
            'Durante mi estancia en Código 10 tuve la suerte de formar parte de un pequeño equipo de desarrolladores, debido al reducido tamaño del departamento todos los integrantes tocábamos todos los campos por lo que aprendí a defenderme bien en los campos habituales en los que un desarrollador se suele especializar: front, back y base de datos. En Código 10 aprendí a trabajar en equipo más que nunca. Fue una etapa que me aportó muchísimo tanto profesional como personalmente. Principalmente estuve desarrollando funcionalidades para tiendas online y también para un ERP. Entre otros lenguajes y tecnologías estuve trabajando con Java, HTML, CSS, JavaScript, Angular, MySQL y PHP',
          place: 'Alicante',
          position: 2,
        },
        job3: {
          institution: 'Labaqua',
          title: 'Desarrollador de Aplicaciones Web',
          period: 'jun. 2018 - mar. 2019 · 10 meses',
          description: `Formé parte de un programa llamado "Formación Profesional Dual", el cual te permite realizar el doble de prácticas que se realizan en un curso normal. Esto me permitió realizar 400 horas de prácticas adicionales a las 400 que hay que hacer de manera obligatoria. Gracias a esto aprendí muchas cosas antes de llegar al segundo curso del grado superior de Desarrollo de Aplicaciones Web y lo afronté mucho más preparado y con nuevos puntos de vista y conocimientos. 

                        Todos mis esfuerzos y centro de atención durante mi estancia en la empresa se centraron en JavaScript moderno, Vue.js y Quasar. 
                        Como desarrollador web, formé parte de un proyecto para desarrollar una enorme web para los laboratorios de la empresa que actualmente sigue en desarrollo. Mi estancia allí despertó un gran interés en mi por JavaScript moderno y JavaScript en entorno servidor.`,
          place: 'Alicante',
          position: 3,
        },
        job4: {
          institution: 'Mobisoft Software',
          title: 'Técnico informático',
          period: 'abr. 2017 - jun. 2017 · 3 meses',
          description: `Las prácticas del grado medio de Técnico en Sistemas Microinformáticos y Redes duraron 380 horas y aunque actualmente estoy centrado en el desarrollo web estas prácticas me ayudaron a ampliar mis conocimientos en otras áreas totalmente distintas al desarrollo web, cosa que me ha ayudado en más de una ocasión.

                        La empresa Mobisoft es una empresa que desarrolló un software llamado Glop para hostelería, tienen una aplicación de escritorio que generalmente instalan en TPVs, también cuentan con una versión para Android que se comunica con la aplicación de escritorio para realizar comandas. Está diseñado para facilitar la labor a los empleados del sector, pudiendo gestionar los productos, realizar pedidos y una amplia gama de opciones que se acomodan a cada cliente. 

                        Mi trabajo en la empresa como Técnico en Sistemas Microinformáticos y Redes consistió en la instalación, configuración e instalación de los TPVs así como los programas necesarios para el cliente final.
                        También arreglaba equipos a nivel hardware en algunas ocasiones.`,
          place: 'Alicante',
          position: 4,
        },
      },
      studies: {
        studies1: {
          institution: 'IES Mare Nostrum',
          title: 'Desarrollador de Aplicaciones Web',
          period: '2017 - 2019',
          place: 'Alicante',
          description: `En este curso aprendí todo lo necesario para poder crear un sitio web completo desde cero hasta despliegue, cubriendo todos los aspectos necesarios como para poder convertirme en un desarrollador web full-stack.`,
          position: 5,
        },
        studies3: {
          institution: 'Cámara de comercio',
          title: 'Desarrollo Web con JavaScript y Angular',
          period: '2019 . 150 horas',
          place: 'Alicante',
          description:
            'Curso presencial de 150 horas para mejorar mis habilidades con JavaScript y aprender a desarrollar aplicaciones web con Angular.',
          position: 6,
        },
        studies4: {
          institution: 'Cámara de comercio',
          title: 'Habilidades Sociales y Empleabilidad',
          period: '2019 . 65 horas',
          place: 'Alicante',
          description:
            'Curso presencial de 65 horas para desarrollar las habilidades fundamentales para la integración en el mundo laboral(confianza, empatía, emociones, trabajo en equipo...)',
          position: 7,
        },
        studies2: {
          institution: 'CIP FP Batoi',
          title: 'Técnico en Sistemas Microinformáticos y Redes',
          period: '2015 - 2017',
          place: 'Alcoi',
          description: `Aunque mis estudios y esfuerzos se centran básicamente en el desarrollo web, con anterioridad realicé un grado medio donde aprendí a defenderme mejor de lo que ya sabía en entornos informáticos. 

                        Además obtuve bastantes conocimiento respecto a la parte hardware, por lo que a diferencia de muchos desarrolladores no siempre me he dedicado a escribir código, tengo unos conocimientos que abarcan más campos que únicamente el desarrollo, algo que me ha venido muy bien en más de una ocasión.`,
          position: 8,
        },
      },
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
