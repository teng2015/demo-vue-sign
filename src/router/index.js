import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import home from '../views/home.vue';
import user from '../views/user.vue';

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/', component: home },
    { path: '/user', component: user },
    { path: '*', redirect: '/' }
  ]
})
