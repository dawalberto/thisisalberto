import { createRouter, createWebHistory } from 'vue-router'
import ProjectsList from '@/views/ProjectsList.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (home.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
  },
  {
    path: '/projects',
    name: 'Projects',
    component: ProjectsList,
  },
  {
    path: '/projects/:project',
    name: 'Project',
    component: () => import('@/views/Project.vue'),
  },
  {
    path: '/career',
    name: 'Career',
    component: () => import('@/views/Career.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/Contact.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
