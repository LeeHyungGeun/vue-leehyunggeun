import Vue from 'vue/dist/vue.js'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
const NotFoundView = { template: '<div>NotFoundView</div>' }

const routes = [
  { path: '/foo', component: Foo, name: 'Foo' },
  { path: '/bar', component: Bar, name: 'Bar' },
  { path: '*', component: NotFoundView }
]

const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})

new Vue({
  router
}).$mount('#app')
