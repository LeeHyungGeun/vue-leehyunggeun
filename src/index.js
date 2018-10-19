import Vue from 'vue/dist/vue.js'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = { template: '<div>Home</div>' }
const Me = { template: '<div>foo</div>' }
const Resume = { template: '<div>bar</div>' }
const NotFoundView = { template: '<div>NotFoundView</div>' }

const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/me', component: Me, name: 'Me' },
  { path: '/resume', component: Resume, name: 'Resume' },
  { path: '*', component: NotFoundView }
]

const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})

new Vue({
  router
}).$mount('#app')
