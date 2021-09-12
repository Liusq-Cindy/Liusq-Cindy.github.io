<!-- 博客管理首页 -->
<template>
  <div class="page-blog-leftmenu">
   <div class="leftmenu-list">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse">
      <el-submenu v-for="(item, key ) in Blog_List_Map" :key="key" :index="key">
        <template slot="title">
          <i :class="item.logo"></i>
          <span>{{item.title}}</span>
        </template>
          <el-menu-item
            v-for="subitem in groupList[key]"
            :index="`${subitem.blogTheme}-${subitem.blogIndex}`"
            :key="`${subitem.blogTheme}-${subitem.blogIndex}`"
            @click="handleBlogClick(subitem)">
            {{subitem.blogTitle}}
          </el-menu-item>
      </el-submenu>
    </el-menu>
    <div class="menu-collapse" @click="isCollapse =!isCollapse">
     <span>{{isCollapse ? '显示导航' : '隐藏导航'}}</span>
     <i :class="isCollapse ? 'el-icon-caret-right' : 'el-icon-caret-left'"></i>
    </div>
   </div>
  </div>
</template>

<script>
import { reduce } from 'lodash'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'blogList',
  components: {
  },
  data () {
    return {
      isCollapse: false
    }
  },
  computed: {
    ...mapGetters({
      Blog_List_Map: 'Blog_List_Map', // 博客分类列表
      blogList: 'blogList' // 博客文章列表
    }),
    groupList () {
      const groupList = reduce(
        this.blogList,
        (result, value) => {
          if (result[value.blogTheme]) {
            result[value.blogTheme].push(value)
          } else {
            result[value.blogTheme] = [value]
          }
          return result
        },
        {}
      )
      return groupList
    }
  },
  methods: {
    ...mapActions({
      setCurrentBlog: 'setCurrentBlog'
    }),
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    handleBlogClick (subitem) {
      // const selectBlog = `${subitem.blogTheme}-${subitem.blogIndex}`
      console.log('点击博客标题,跳转对应页面', subitem)
      this.setCurrentBlog(subitem)
      if (subitem.blogPath) {
        this.$router.push(subitem.blogPath)
      }
    }
  },
  created () {
  }
}
</script>

<style scoped lang="less">
.page-blog-leftmenu {
 height: 100%;
 display: flex;
 max-width: 200px;
 .leftmenu-list {
  position: relative;
  padding-top: 8px;
  height: calc(100% - 8px);
  /deep/.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
  }
  /deep/.el-menu {
   height: 100%;
  }
  .menu-collapse {
    position: absolute;
    top: 8px;
    right: -34px;
    font-size: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 34px;
    height: 80px;
    background-color: rgba(0, 0, 0, 0.2);
    color: white;
    border-radius: 3px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    font-size: 13px;
    line-height: 15px;
    cursor: pointer;
    padding-left: 8px;
    box-sizing: border-box;
    user-select: none;
    &:hover {
     background-color: rgba(0, 0, 0, 0.45);
    }
    span {
      width: 13px;
      font-size: 12px;
    }
    i{
      font-size: 18px;
    }
  }
 }
}
</style>
