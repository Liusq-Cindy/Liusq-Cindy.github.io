<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->
    <h1>如何将前端代码写的优雅？</h1>
    <h5>{{ msg }}</h5>
    <div v-html="Readme" style="padding: 20px;"></div>
  </div>
</template>

<script>

// import 'highlight.js/styles/github.css'
// import 'highlight.js/styles/foundation.css'
import 'github-markdown-css'
import Readme from './test.md'// 引入md文件

export default {
  name: 'HelloWorld',
  components: {
    // Readme
  },
  data () {
    return {
      msg: '个人博客：Liusq-Cindy',
      Readme
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
