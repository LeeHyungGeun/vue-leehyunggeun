import Vue from 'vue'
import Router from 'vue-router'
import Me from '../views/Me.vue'
import Resume from '../views/Resume.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  fallback: false,
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/me', component: Me },
    { path: '/resume', component: Resume }
    // { path: '/', component: Me }
    // { path: '/', redirect: '/me' }
  ]
})
