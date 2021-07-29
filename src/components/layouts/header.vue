<template>
  <div class="we-header">
   <div class="header-content">
    <div class="header-left" @click="trunToPage('home')">
     <i class="el-icon-s-custom" style="font-size: 22px;"></i>
     <span>阿溜的主页</span>
    </div>
    <div class="header-right">
     <span @click="trunToPage('blog')" class="right-item link">
      <i class="el-icon-s-order" style="font-size: 16px;"></i>
       站内博文</span>
     <el-dropdown class="right-item">
       <span class="el-dropdown-link">
         三方博客主页<i class="el-icon-arrow-down el-icon--right"></i>
       </span>
       <el-dropdown-menu slot="dropdown">
         <el-dropdown-item>
          <el-link href="https://blog.csdn.net/cindy647" target="_blank" :underline="false">
          <i class="el-icon-edit" style="font-size: 16px;"></i>
          CSDN博客</el-link>
         </el-dropdown-item>
         <el-dropdown-item>
          <el-link href="https://juejin.cn/user/3087084382072647" target="_blank" :underline="false">
          <i class="el-icon-share" style="font-size: 16px;"></i>
          掘金</el-link>
         </el-dropdown-item>
       </el-dropdown-menu>
     </el-dropdown>
     <el-dropdown class="right-item" @command="trunToPage">
       <span class="el-dropdown-link">
         我的信息<i class="el-icon-arrow-down el-icon--right"></i>
       </span>
       <el-dropdown-menu slot="dropdown">
         <el-dropdown-item command="basic">
          <i class="el-icon-user" style="font-size: 16px;"></i>
           基础信息
          </el-dropdown-item>
         <el-dropdown-item command="interest">
          <i class="el-icon-magic-stick" style="font-size: 16px;"></i>
           兴趣爱好
          </el-dropdown-item>
       </el-dropdown-menu>
     </el-dropdown>
     <span class="right-item link" @click="trunToPage('github')">
      <i class="el-icon-star-on" style="font-size: 18px;"></i>
       github主页</span>
    </div>
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
        case 'home':
          this.$router.push('/')
          break
        case 'blog':
          this.$router.push('/blog')
          break
        case 'basic':
          this.$router.push('/message')
          break
        case 'interest':
          this.$router.push('/interest')
          break
        case 'github':
          window.open('https://github.com/Liusq-Cindy')
          break
        default:
          this.$router.push('/404')
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
 display: block;
 padding-top: 56px;
 width: 100%;
 .header-content {
  position: fixed;
  box-sizing: border-box;
  top: 0;
  padding: 0 16px;
  background: #FFF;
  box-shadow: 2px 0 10px #ccc;
  height: 56px;
  line-height: 56px;
  display: flex;
  width: 100%;
  justify-content: space-between;
 }
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
