import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Header'
import Detail from '@/pages/Detail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Hello
    },
    {
      path: '/detail/:color',
      component:  Detail
    }

  ]
})
