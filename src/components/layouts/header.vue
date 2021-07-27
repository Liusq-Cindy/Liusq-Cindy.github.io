<template>
  <div class="we-header">
    <div class="header-left">
     <img src="../../assets/logo.png" alt="">
     <!-- <span>阿溜的主页</span> -->
    </div>
    <div class="header-right">
     <el-button type="primary" plain>站内博文</el-button>
     <el-dropdown>
       <span class="el-dropdown-link">
         三方博客主页<i class="el-icon-arrow-down el-icon--right"></i>
       </span>
       <el-dropdown-menu slot="dropdown">
         <el-dropdown-item>CSDN博客</el-dropdown-item>
         <el-dropdown-item>掘金</el-dropdown-item>
       </el-dropdown-menu>
     </el-dropdown>
     <el-dropdown>
       <span class="el-dropdown-link">
         我的信息<i class="el-icon-arrow-down el-icon--right"></i>
       </span>
       <el-dropdown-menu slot="dropdown">
         <el-dropdown-item>基础信息</el-dropdown-item>
         <el-dropdown-item>兴趣爱好</el-dropdown-item>
       </el-dropdown-menu>
     </el-dropdown>
     <el-button type="primary" plain>github主页</el-button>
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
  },
  created () {
  }
}
</script>

<style scoped lang="less">
.we-header {
  background: rgba(87, 146, 230, 0.2);
  // background-image: linear-gradient(-135deg,#cad5e9 100%,#d3dae6 0);
  height: 56px;
  line-height: 56px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  .header-left {
    cursor: pointer;
    img {
      vertical-align: text-top;
      margin-left: 15px;
      // margin-right: 5px;
      margin-top: -3px;
      width: 67px;
      height: 24px;
    }
    span {
      font-size: 18px;
      display: inline-block;
      padding-left: 15px;
      line-height: 14px;
    }
  }
  .header-right {
    justify-content: space-between;
    align-items: center;
    padding-right: 20px;
    .user-name {
      margin: 0 5px;
      // color: @white2;
    }
    i {
      cursor: pointer;
    }
  }
  /deep/.el-dropdown-menu--medium .el-dropdown-menu__item {
    padding-left: 8px;
  }
}
</style>
