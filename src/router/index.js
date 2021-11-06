import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/views/Main.vue'
import Order from '@/views/Order.vue'
import ThankYou from '@/views/ThankYou.vue'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/order',
    name: 'Order',
    component: Order
  },
  {
    path: '/thank-you',
    name: 'ThankYou',
    component: ThankYou
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
