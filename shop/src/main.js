import Vue from 'vue'
import Layout from './components/layout'
import VueRouter from 'vue-router'
import IndexPage from './pages/index'

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

Vue.use(VueRouter)


let router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			component: IndexPage
		}
	]
})

var vm = new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
})
