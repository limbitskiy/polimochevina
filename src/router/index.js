import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import(/* webpackChunkName: 'Main-view' */'@/views/Main')
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import(/* webpackChunkName: 'Order-view' */'@/views/Order')
  },
  {
    path: '/thank-you',
    name: 'ThankYou',
    component: () => import(/* webpackChunkName: 'ThankYou-view' */'@/views/ThankYou')
  },
  {
    path: '/:id/:slug',
    name: 'Product',
    component: () => import(/* webpackChunkName: 'Product-view' */'@/views/Product'),
    props: route => ({ id: parseInt(route.params.id) })
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import(/* webpackChunkName: '404-view' */'@/views/404')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ top: 600 })
        }, 100)
      })
    }
    return savedPosition || new Promise((resolve) => {
      setTimeout(() => {
        resolve({ top: 0 })
      }, 100)
    })
    // return { top: null, left: null, behaviour: null }
  }
})

export default router
