<!-- 博客文章页面 -->
<template>
  <div>
   <components :is="getBlogComponent()"></components>
  </div>
</template>

<script>
// 基础综述部分
import blogbuild from './basic/blogbuild.md'
import youya from './basic/youya.md'
import webside from './basic/webside.md'
// html部分
import basicTag from './html/basicTag.md'
import basicQA from './html/basicQA.md'
import html5 from './html/html5.md'
import vDom from './html/vDom.md'
import testHtml from './html/test-html.md'
// css部分
import cssBasicQA1 from './css/cssBasicQA1.md'
import cssBasicQA2 from './css/cssBasicQA2.md'
import cssApply from './css/cssApply.md'
import css3 from './css/css3.md'

export default {
  name: 'artical',
  components: {
    blogbuild,
    youya,
    webside,
    basicTag,
    basicQA,
    html5,
    vDom,
    testHtml,
    cssBasicQA1,
    cssBasicQA2,
    cssApply,
    css3
  },
  methods: {
    getBlogComponent () {
      return this.$route.params.articalName
    }
  }
}
</script>
