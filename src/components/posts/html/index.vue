<!-- htmlTab页 -->
<template>
  <div class="arti">
   <blog-artical></blog-artical>
   <components :is="getBlogComponent()"></components>
  </div>
</template>

<script>

import basicTag from './basicTag.md'
import { mapGetters } from 'vuex'

export default {
  name: 'test',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      currentBlog: 'currentBlog' // 当前所选中的tab项博客详情
    })
  },
  components: {
    basicTag
  },
  methods: {
    getBlogComponent () {
      // blogName: 'basicTag',与md文件同名
      return this.currentBlog.blogName
    }
  },
  mounted () {
    console.log('当前选中的tab项博客名', this.currentBlog)
  }
}
</script>
