import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/menu',
    name: 'menu',
    component: () => import('../views/Menu.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
