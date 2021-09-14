<template>
  <div class="first-page-content">
    <h1>{{ msg }}</h1>
    <h2>最新博客文章</h2>
    <ul class="blog-recommend">
      <li @click="clickTopage('/blog/artical/youya')">
        如何将前端代码写的优雅？
      </li>
      <li @click="clickTopage('/blog/artical/blogbuild')">
        如何搭建一个github个人博客？
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
    clickTopage (path) {
      this.$router.push(path)
    }
  }
}
</script>

<style scoped lang='less'>
.first-page-content {
 flex-grow: 1;
 background: rgb(248, 247, 247);
 padding-top: 64px;
  h1, h2 {
    padding-top: 16px;
   font-weight: normal;
 }
 ul {
   list-style-type: none;
   padding: 0;
 }
 a {
   color: #42b983;
 }
 .blog-recommend {
   padding-top: 16px;
   color: rgb(70, 69, 69);
   li {
     display: block;
     margin: 16px;
     font-size: 18px;
     cursor: pointer;
     &:hover {
       color: #427fb9;
     }
   }
 }
}
</style>
