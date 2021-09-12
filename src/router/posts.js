// 博客对应的路由
// import shuati from '@/components/posts/basic/shuati.md'
// import youya from '@/components/posts/basic/youya.md'
// import blogBuild from '@/components/posts/basic/blog-build.md'
import shuati from '@/components/posts/basic/shuati.vue'
import youya from '@/components/posts/basic/youya.vue'
import blogBuild from '@/components/posts/basic/blog-build.vue'
import htmlTab from '@/components/posts/html/index.vue' // html模块

export default [
  {
    path: '/blog/post/shuati',
    name: 'shuati',
    meta: {
      title: '前端网站推荐'
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
  },
  // 后面由动态组件来做，定义一个路由
  {
    path: '/blog/post/htmlTab',
    name: 'html',
    meta: {
      title: 'html模块'
    },
    component: htmlTab
  }
]
