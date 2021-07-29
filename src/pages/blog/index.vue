<!-- 博客管理首页 -->
<template>
  <div class="page-blog-home">
   <left-menu></left-menu>
   <div class="mk-content markdown-body">
    <span>作者: 阿溜 </span>
    <div style="color: rgb(147, 194, 216)">Keep Fighting ~ </div>
    <router-view></router-view>
   </div>
   <el-backtop target=".mk-content"></el-backtop>
  </div>
</template>

<script>

import LeftMenu from './left-menu.vue'
import 'highlight.js/styles/github.css'
import 'github-markdown-css'

export default {
  name: 'blogList',
  components: {
    LeftMenu
  },
  data () {
    return {
      isCollapse: true
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  created () {
  }
}
</script>

<style scoped lang="less">
.page-blog-home {
 height: calc(100% - 56px);
 width: 100%;
 display: flex;
 .mk-content {
   text-align: left;
   padding: 20px;
   box-sizing: border-box;
   height: 100%;
   overflow: scroll;
   h1, h2 {
     font-weight: normal;
   }
 }
}
</style>
