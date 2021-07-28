// 博客对应的路由
import shuati from '@/components/posts/basic/shuati.md'
import youya from '@/components/posts/basic/youya.md'
export default [
  {
    path: '/blog/post/shuati',
    name: 'shuati',
    meta: {
      title: '知识体系及刷题'
    },
    // component: import(/* webpackChunkName: "survey.index" */ '@/components/posts/basic/youya/index'),
    component: shuati
  },
  {
    path: '/blog/post/youya',
    name: 'youya',
    meta: {
      title: '如何将前端代码写的优雅'
    },
    component: youya
  }
]
