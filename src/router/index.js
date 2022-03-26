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
    component: () => import('../views/goodaiMini/goodaiMini.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router