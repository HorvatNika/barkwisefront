import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Menu from '../views/Menu.vue'
import Home from '../views/Home.vue'
import Training from '../views/Training.vue'
import Profile from '../views/Profile.vue'
import CollieTraits from '../views/CollieTraits.vue'

const routes = [
  {
    path: '/',
    name: 'homepage',
    component: HomePage
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/menu',
    name: 'menu',
    component: Menu
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/training',
    name: 'training',
    component: Training
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/collietraits',
    name: 'collietraits',
    component: CollieTraits
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
