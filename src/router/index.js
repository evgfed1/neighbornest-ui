import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ErrorView from "@/views/ErrorView.vue";
import RegistrationAssociationView from "@/views/RegistrationAssociationView.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/error',
    name: 'errorRoute',
    component: ErrorView
  },
  {
    path: '/registration',
    name: 'registrationRoute',
    component: RegistrationAssociationView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
