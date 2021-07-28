// 博客对应的路由
// import shuati from '@/components/posts/basic/shuati.md'
// import youya from '@/components/posts/basic/youya.md'
// import blogBuild from '@/components/posts/basic/blog-build.md'
import shuati from '@/components/posts/basic/shuati.vue'
import youya from '@/components/posts/basic/youya.vue'
import blogBuild from '@/components/posts/basic/blog-build.vue'

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
    path: '/blog/post/blog-build',
    name: 'blog-build',
    meta: {
      title: '搭建自己的个人博客'
    },
    component: blogBuild
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
