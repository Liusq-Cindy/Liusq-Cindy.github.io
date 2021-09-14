// 博客对应的路由
// import artical from '@/components/posts/index.vue' // html模块
const artical = () => import('@/components/posts/index.vue')
export default [
  // 博客文章
  {
    path: '/blog/artical/:articalName',
    name: 'artical',
    meta: {
      title: '博客文章'
    },
    component: artical
  }
]
