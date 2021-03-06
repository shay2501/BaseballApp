import Vue from 'vue'
import VueRouter from 'vue-router'
import ScoreSheet from '../views/ScoreSheet.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ScoreSheet',
    component: ScoreSheet
  },
  {
    path: '/atbatpage/:playerId/:cellId',
    name: 'AtBatPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "AtBat" */ '../views/AtBatPage.vue')
  },
  {
    path: '/playerinfo',
    name: 'PlayerInfo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "AtBat" */ '../views/PlayerInfo.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
