import Vue from 'vue'
import VueRouter from 'vue-router'

import Triangle from '../components/Triangle'

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/', component: Triangle, name: 'Triangle'}
  ]
})

export default router
