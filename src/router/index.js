import { createRouter, createWebHistory } from 'vue-router'
import Projects from '@/views/Projects.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (home.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
  },
  // ! Rebuilding projects page, remove it and rename projects2 to projects when finish
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
  },
  {
    path: '/projects2/:project',
    name: 'Projects2',
    component: () => import(/* webpackChunkName: "projects2" */ '@/views/Project.vue'),
    // component: () => import(/* webpackChunkName: "projects2" */ '@/views/Projects2.vue'),
    // children: [
    //   {
    //     path: 'podcaster',
    //     name: 'Podcaster',
    //     component: () =>
    //       import(/* webpackChunkName: "podcaster" */ '@/views/projects/Podcaster.vue'),
    //   },
    // ],
  },
  {
    path: '/career',
    name: 'Career',
    component: () => import(/* webpackChunkName: "career" */ '@/views/Career.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "contact" */ '@/views/Contact.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
