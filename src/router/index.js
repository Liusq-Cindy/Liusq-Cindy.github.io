import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/pages/home/index'
import blogList from '@/pages/blog/index'
import basicMsg from '@/pages/basic-msg/index'
import interestPage from '@/pages/basic-msg/interest'
import errorPage from '@/pages/basic-msg/error'

import posts from './posts'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home,
    children: [{
      path: '/blog',
      name: 'blogList',
      component: blogList,
      children: posts
    }, {
      path: '/message',
      name: 'basic-msg',
      component: basicMsg
    }, {
      path: '/interest',
      name: 'interest-msg',
      component: interestPage
    }, {
      path: '/404',
      name: 'error',
      component: errorPage
    }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
