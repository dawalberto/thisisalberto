import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Projects from '@/views/Projects.vue'
import Career from '@/views/Career.vue'
import Contact from '@/views/Contact.vue'
// import Podcaster from '@/views/projects/Podcaster.vue'
import Projects2 from '@/views/Projects2.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  // TODO - Rebuilding projects, remove it and rename projects2 to projects when finish
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
  },
  {
    path: '/projects2',
    name: 'Projects2',
    component: Projects2,
    children: [
      {
        path: 'podcaster',
        name: 'Podcaster',
        // route level code-splitting
        // this generates a separate chunk (podcaster.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "podcaster" */ '@/views/projects/Podcaster.vue'),
      },
    ],
  },
  {
    path: '/career',
    name: 'Career',
    component: Career,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
