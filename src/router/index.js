import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/pages/home/index'
import blogList from '@/pages/blog/index'
import postIndex from '@/components/posts/index'
// import firstPageContent from '@/pages/home/first-page-content'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home,
    children: [{
      path: '/blog',
      name: 'blogList',
      component: blogList
    },
    {
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
