import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/pages/home/index'
import postIndex from '@/components/posts/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home,
    children: [{
      path: '/post',
      name: 'postIndex',
      component: postIndex
    }]
  }
  // {
  //   path: '/post',
  //   name: 'postIndex',
  //   component: postIndex
  // }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
