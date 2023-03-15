import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/costumer',
    name: 'costumer',
    component: () => import('../views/Costumer/Index.vue')
  },
  {
    path: '/tambah-data-customer',
    name: 'tambah-data-customer',
    component: () => import('../views/Costumer/Add.vue')
  },
  {
    path: '/detail-customer/:customerId',
    name: 'detail-customer',
    component: () => import('../views/Costumer/Detail.vue')
  },
  {
    path: '/edit-customer/:customerId',
    name: 'edit-customer',
    component: () => import('../views/Costumer/Edit.vue')
  },
  {
    path: '/sales',
    name: 'sales',
    component: () => import('../views/Sales/Index.vue')
  },
  {
    path: '/tambah-data-sales',
    name: 'tambah-data-sales',
    component: () => import('../views/Sales/Add.vue')
  },
  {
    path: '/detail-sales/:salesId',
    name: 'detail-sales',
    component: () => import('../views/Sales/Detail.vue')
  },
  {
    path: '/item',
    name: 'item',
    component: () => import('../views/Item/Index.vue')
  },
  {
    path: '/tambah-data-item',
    name: 'tambah-data-item',
    component: () => import('../views/Item/Add.vue')
  },
  {
    path: '/detail-item/:itemId',
    name: 'detail-item',
    component: () => import('../views/Item/Detail.vue')
  },
  {
    path: '/edit-item/:itemId',
    name: 'edit-item',
    component: () => import('../views/Item/Edit.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
