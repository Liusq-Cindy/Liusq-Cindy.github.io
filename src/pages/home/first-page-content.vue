<template>
  <div class="first-page-content">
    <h1>{{ msg }}</h1>
    <h2>博客文章</h2>
    <ul>
      <li @click="clickTopage()">
        如何将前端代码写的优雅？
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'FirstPageContent',
  data () {
    return {
      msg: 'Welcome to Liusq-Cindy’s Blog'
    }
  },
  methods: {
    clickTopage () {
      this.$router.push('/post')
    }
  }
}
</script>

<style scoped lang='less'>
.first-page-content {
 flex-grow: 1;
 background: rgb(252, 248, 248);
 padding-top: 44px;
  h1, h2 {
   font-weight: normal;
 }
 ul {
   list-style-type: none;
   padding: 0;
 }
 li {
   display: inline-block;
   margin: 0 10px;
 }
 a {
   color: #42b983;
 }
}
</style>
