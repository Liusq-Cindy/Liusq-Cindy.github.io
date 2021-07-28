import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/pages/home/index'
import blogList from '@/pages/blog/index'
// import postIndex from '@/components/posts/basic/youya/index'
// import firstPageContent from '@/pages/home/first-page-content'
import posts from './posts'

Vue.use(VueRouter)
// const children = Base.concat(Survey).concat(Result);

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
      // [{
      //   path: '/blog/post',
      //   name: 'postIndex',
      //   component: postIndex
      // }]
    }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
