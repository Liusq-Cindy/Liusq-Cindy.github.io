<template>
  <div class="we-header">
    <div class="header-left">
     ces
    </div>
    <div class="header-right">
     右
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
  background: #cad5e9;
  // background-image: linear-gradient(-135deg,#cad5e9 100%,#d3dae6 0);
  height: 44px;
  line-height: 44px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  &.hide-header {
    display: none;
  }
  .el-dropdown-link {
    color: #fff;
  }
  .header-left {
    .logo {
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
        font-size: 14px;
        display: inline-block;
        padding-left: 15px;
        line-height: 14px;
        // &:last-child {
        //   border-left: 1px solid @white2;
        // }
      }
      .el-icon-arrow-left {
        font-size: 12px;
        font-style: normal;
        padding: 0 8px;
      }
      .el-dropdown-link__text {
        font-size: 16px;
        padding: 0 15px;
        border-right: 1px solid #fff;
      }
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
