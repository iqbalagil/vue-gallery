import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'home'
      }
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        title: 'about'
      },
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/penghitung',
      name: 'penghitung',
      meta: {
        title: 'cac'
      },
      component: () => import('../views/PenghitungView.vue')
    },
    {
      path: '/auction',
      name: 'auction',
      meta: {
        title: 'auction'
      },
      component: () => import('../views/AuctionView.vue')
    },
    {
      path: '/affiliation',
      name: 'affiliation',
      meta: {
        title: 'affiliation'
      },
      component: () => import('@/views/AffiliationView.vue')
    },
    {
      path: '/internship',
      name: 'internship',
      meta: {
        title: 'internship'
      },
      component: () => import('@/views/InternshipView.vue')
    },
  ]
})



export default router
