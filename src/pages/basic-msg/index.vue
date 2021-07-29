<template>
  <div class="basic-msg">
    <h1>基本信息</h1>
    <h3>花名： 阿溜</h3>
    <h3>座右铭： Keep Fighting !</h3>
    <h4>个人博客：https://liusq-cindy.github.io/</h4>
    <h4>
     <el-link type="primary" href="https://blog.csdn.net/cindy647" target="_blank" :underline="false">CSDN博客：</el-link>记录一些琐碎的开发经验和学习笔记，更多知识体系在本地Notion
    </h4>
    <h4><el-link type="primary" href="https://juejin.cn/user/3087084382072647" target="_blank" :underline="false">掘金：</el-link>经常阅读，偶尔翻译，鲜少发文~ </h4>
    <h4>工作两年的前端小菜鸡，啄米中~~~</h4>
    <h5>邮箱：306749392@qq.com</h5>
  </div>
</template>

<script>

export default {
  name: 'basic-msg',
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
  },
  created () {
  }
}
</script>

<style scoped lang="less">
.basic-msg {
 padding-top: 86px;
 /deep/.el-link--inner {
  font-size: 18px;
 }
}
</style>
