<template>
  <div class="we-header">
    <div class="header-left">
     <i class="el-icon-user" style="font-size: 22px;"></i>
     <span>阿溜的主页</span>
    </div>
    <div class="header-right">
     <span @click="trunToPage('blog')" class="right-item link">站内博文</span>
     <el-dropdown class="right-item">
       <span class="el-dropdown-link">
         三方博客主页<i class="el-icon-arrow-down el-icon--right"></i>
       </span>
       <el-dropdown-menu slot="dropdown">
         <el-dropdown-item>
          <el-link href="https://blog.csdn.net/cindy647" target="_blank" :underline="false">CSDN博客</el-link>
         </el-dropdown-item>
         <el-dropdown-item>
          <el-link href="https://juejin.cn/user/3087084382072647" target="_blank" :underline="false">掘金</el-link>
         </el-dropdown-item>
       </el-dropdown-menu>
     </el-dropdown>
     <el-dropdown class="right-item">
       <span class="el-dropdown-link">
         我的信息<i class="el-icon-arrow-down el-icon--right"></i>
       </span>
       <el-dropdown-menu slot="dropdown">
         <el-dropdown-item @click="trunToPage('basic')">基础信息</el-dropdown-item>
         <el-dropdown-item @click="trunToPage('interest')">兴趣爱好</el-dropdown-item>
       </el-dropdown-menu>
     </el-dropdown>
     <span class="right-item link" @click="trunToPage('github')">github主页</span>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
    trunToPage (page) {
      console.log('页面跳转', page)
      switch (page) {
        case 'blog':
          this.$router.push('/post')
          break
        case 'basic':
          this.$router.push('/basicMsg')
          break
        case 'interst':
          this.$router.push('/interst')
          break
        case 'github':
          window.open('https://github.com/Liusq-Cindy')
          break
        default:
          this.$router.push('/')
          break
      }
    }
  },
  created () {
  }
}
</script>

<style scoped lang="less">
.we-header {
  background: #FFF;
  box-shadow: 2px 0 10px #ccc;
  height: 56px;
  line-height: 56px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0 16px;
  .header-left {
    cursor: pointer;
    img {
      vertical-align: text-top;
      margin-left: 15px;
      margin-top: -3px;
      width: 24px;
      height: 24px;
    }
    span {
      line-height: 55px;
      font-size: 20px;
      color: #6c7585;
      font-weight: 500;
      letter-spacing: 1.5px;
    }
  }
  .header-right {
    justify-content: space-between;
    align-items: center;
    .right-item{
     padding: 0 10px;
     color: #606266;
     font-size: 14px;
    }
    .link {
     cursor: pointer;
     &:hover {
      color: rgb(41, 134, 240);
     }
    }
  }
  /deep/.el-dropdown-menu--medium .el-dropdown-menu__item {
    padding-left: 8px;
  }
}
</style>
