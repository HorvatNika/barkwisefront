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
import Kiss from '../views/Trainings/Kiss.vue'
import Search from '../views/Trainings/Search.vue'
import BackUp from '../views/Trainings/BackUp.vue'
import Bang from '../views/Trainings/Bang.vue'
import HighFive from '../views/Trainings/HighFive.vue'
import Recall from '../views/Trainings/Recall.vue'
import ScheduledPotty from '../views/Trainings/ScheduledPotty.vue'
import CrateTraining from '../views/Trainings/CrateTraining.vue'
import LeaveIt from '../views/Trainings/LeaveIt.vue'
import DoorManners from '../views/Trainings/DoorManners.vue'
import NoJumping from '../views/Trainings/NoJumping.vue'
import NoPulling from '../views/Trainings/NoPulling.vue'
import OffLeash from '../views/Trainings/OffLeash.vue'
import PuppyPad from '../views/Trainings/PuppyPad.vue'
import Quiet from '../views/Trainings/Quiet.vue'
import RetrieveItems from '@/views/Trainings/RetrieveItems.vue'
import Flyball from '@/views/Trainings/Flyball.vue'
import Frisbee from '@/views/Trainings/Frisbee.vue'
import Place from '@/views/Trainings/Place.vue'

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
  },
  {
    path: '/kiss',
    name: 'kiss',
    component: Kiss
  },
  {
    path: '/search',
    name: 'search',
    component: Search
  },
  {
    path: '/backup',
    name: 'backup',
    component: BackUp
  },
  {
    path: '/bang',
    name: 'bang',
    component: Bang
  },
  {
    path: '/highfive',
    name: 'highfive',
    component: HighFive
  },
  {
    path: '/recall',
    name: 'recall',
    component: Recall
  },
  {
    path: '/scheduledpotty',
    name: 'scheduledpotty',
    component: ScheduledPotty
  },
  {
    path: '/cratetraining',
    name: 'cratetraining',
    component: CrateTraining
  },
  {
    path: '/leaveit',
    name: 'leaveit',
    component: LeaveIt
  },
  {
    path: '/doormanners',
    name: 'doormanners',
    component: DoorManners
  },
  {
    path: '/nojumping',
    name: 'nojumping',
    component: NoJumping
  },
  {
    path: '/nopulling',
    name: 'nopulling',
    component: NoPulling
  },
  {
    path: '/offleash',
    name: 'offleash',
    component: OffLeash
  },
  {
    path: '/puppypad',
    name: 'puppypad',
    component: PuppyPad
  },
  {
    path: '/quiet',
    name: 'quiet',
    component: Quiet
  },
  {
    path: '/retrieveitems',
    name: 'retrieveitems',
    component: RetrieveItems
  },
  {
    path: '/flyball',
    name: 'flyball',
    component: Flyball
  },
  {
    path: '/frisbee',
    name: 'frisbee',
    component: Frisbee
  },
  {
    path: '/place',
    name: 'place',
    component: Place
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
