import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: () => import('../views/home/Home.vue')
  },
  {
    path: '/goodaiMini',
    name: 'goodaiMini',
    component: () => import('../views/goodaiMini/index.vue')
  },
  {
    path: '/goodaiGuanlixt',
    name: 'goodaiGuanlixt',
    component: () => import('../views/goodaiGuanlixt/index.vue')
  },
  {
    path: '/goodaiSjApp',
    name: 'goodaiSjApp',
    component: () => import('../views/goodaiSjApp/index.vue')
  },
  // {
  //   path: '/goodaiYhdd',
  //   name: 'goodaiYhdd',
  //   component: () => import('../views/goodaiYhdd/index.vue')
  // },
  {
    path: '/phjk',
    name: 'phjk',
    component: () => import('../views/phjk/index.vue')
  },
  {
    path: '/zqb',
    name: 'zqb',
    component: () => import('../views/zqb/index.vue')
  },
  {
    path: '/lkjk',
    name: 'lkjk',
    component: () => import('../views/lkjk/index.vue')
  },
  {
    path: '/ow',
    name: 'ow',
    component: () => import('../views/ow/index.vue')
  },
  {
    path: '/lkjk',
    name: 'lkjk',
    component: () => import('../views/lkjk/index.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router