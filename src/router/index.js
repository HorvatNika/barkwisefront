import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Menu from '../views/Menu.vue'
import Home from '../views/Home.vue'
import Training from '../views/Training.vue'
import Profile from '../views/Profile.vue'
import CollieTraits from '../views/CollieTraits.vue'
import TrainingPlan from '../views/TrainingPlan.vue'
import PersonalizedPlan from '../views/PersonalizedPlan.vue'
import SitStay from '../views/Trainings/SitStay.vue'
import Paw from '../views/Trainings/Paw.vue'
import Spin from '../views/Trainings/Spin.vue'
import Weave from '../views/Trainings/Weave.vue'
import Heel from '../views/Trainings/Heel.vue'
import RollOver from '../views/Trainings/RollOver.vue'
import ShakeHand from '../views/Trainings/ShakeHand.vue'
import Crawl from '../views/Trainings/Crawl.vue'
import FindKeys from '../views/Trainings/FindKeys.vue'

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
  },
  {
    path: '/trainingplan',
    name: 'trainingplan',
    component: TrainingPlan
  },
  {
    path: '/personalizedplan',
    name: 'personalizedplan',
    component: PersonalizedPlan
  },
  {
    path: '/sitstay',
    name: 'sitstay',
    component: SitStay
  },
  {
    path: '/paw',
    name: 'paw',
    component: Paw
  },
  {
    path: '/spin',
    name: 'spin',
    component: Spin
  },
  {
    path: '/weave',
    name: 'weave',
    component: Weave
  },
  {
    path: '/heel',
    name: 'heel',
    component: Heel
  },
  {
    path: '/rollover',
    name: 'rollover',
    component: RollOver
  },
  {
    path: '/shakehand',
    name: 'shakehand',
    component: ShakeHand
  },
  {
    path: '/crawl',
    name: 'crawl',
    component: Crawl
  },
  {
    path: '/findkeys',
    name: 'findkeys',
    component: FindKeys
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
