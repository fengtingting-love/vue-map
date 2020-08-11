import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/xss',
    name: 'Xss',
    component: () => import('../views/Input')
  },
  {
    path: '/default',
    name: 'Default',
    component: () => import('../views/EventDefault')
  },
  {
    path: '/dynamicParam',
    name: 'DynamicParam',
    component: () => import('../views/DynamicParam')
  },
  {
    path: '/page',
    name: 'Page',
    component: () => import('../views/MyPage')
  },
  {
    path: '/vuefor',
    name: 'Vuefor',
    component: () => import('../views/VueFor')
  },
  {
    path: '/comp',
    name: 'Comp',
    component: () => import('../views/Comp')
  },
  {
    path: '/slotParent',
    name: 'SlotParent',
    component: () => import('../views/SlotParent')
  },
  {
    path: '/statusAnimation',
    name: 'StatusAnimation',
    component: () => import('../views/StatusAnimation')
  },
  {
    path: '/selfComponent',
    name: 'selfComponent',
    component: () => import('../views/SelfComponent')
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router
