import Vue from 'vue'
import Router from 'vue-router'
import Screen from '@/pages/Screen'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Screen',
      component: Screen
    }
  ]
})
