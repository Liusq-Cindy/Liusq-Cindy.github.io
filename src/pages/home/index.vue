<template>
  <div class="hello">
   <we-header></we-header>
    <!-- <h1>{{ msg }}</h1> -->
    <!-- <h2>博客文章</h2> -->
    <!-- <ul>
      <li @click="clickTopage()">
        如何将前端代码写的优雅？
      </li>
    </ul> -->
  </div>
</template>

<script>

import WeHeader from '@/components/layouts/header.vue'
export default {
  name: 'HelloWorld',
  components: {
    WeHeader
  },
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
