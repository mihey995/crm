import Vue from 'vue'
import VueRouter from 'vue-router'
import Logist from '../views/Logist.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Логистика',
    component: Logist
  },
  {
    path: '/youla',
    name: '2 страница'
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/Youla.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
