import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index'
import Detail from '../pages/Detail'
import List from '../pages/List'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/list',
      component: List
    },
    {
      path: '/detail',
      component:  Detail
    }

  ]
})
