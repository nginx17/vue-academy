import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/detail/:id',
      name: 'postDetail',
      component: () => import('./views/post.vue')
    },
    {
      path: '/authorization',
      name: 'auth',
      component: () => import('./views/admin/Auth.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('./views/admin/Template.vue')
    },
    {
      path: '*',
      component: () => import('./views/404.vue')
    }
  ]
})
