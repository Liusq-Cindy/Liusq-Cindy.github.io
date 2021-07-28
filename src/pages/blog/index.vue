<!-- 博客管理首页 -->
<template>
  <div class="page-blog-home">
   <left-menu></left-menu>
   <router-view></router-view>
  </div>
</template>

<script>

import LeftMenu from './left-menu.vue'

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
 height: 100%;
 width: 100%;
 display: flex;
}
</style>
