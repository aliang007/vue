import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Header'
import Detail from '@/pages/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/detail',
      name: 'detail',
      component:  Detail
    }

  ]
})
