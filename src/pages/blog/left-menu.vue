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
          <!-- <el-menu-item :index="`${key}-1`">html的基础标签</el-menu-item> -->
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
export default {
  name: 'blogList',
  components: {
  },
  data () {
    return {
      isCollapse: true,
      Blog_List_Map: {
        0: {'title': '综述前言', 'logo': 'el-icon-menu'},
        1: {'title': 'HTML', 'logo': 'el-icon-menu'},
        2: {'title': 'CSS', 'logo': 'el-icon-location'},
        3: {'title': 'JS', 'logo': 'el-icon-document'},
        4: {'title': 'Vue', 'logo': 'el-icon-setting'}
      },
      blogList: [
        { blogTitle: '如何学习前端', blogTheme: 0, blogIndex: 0, blogPath: '' },
        { blogTitle: '将代码写的优雅', blogTheme: 0, blogIndex: 1, blogPath: '/blog/post' },
        { blogTitle: '搭建一个个人博客', blogTheme: 0, blogIndex: 2 },
        { blogTitle: 'html基础标签', blogTheme: 1, blogIndex: 0 },
        { blogTitle: 'h5的新标签', blogTheme: 1, blogIndex: 1 },
        { blogTitle: '理解dom与虚拟dom', blogTheme: 1, blogIndex: 2 }
      ]
    }
  },
  computed: {
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
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    handleBlogClick (subitem) {
      const selectBlog = `${subitem.blogTheme}-${subitem.blogIndex}`
      console.log('点击博客标题,跳转对应页面', selectBlog)
      this.$router.push(subitem.blogPath)
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
 width: 200px;
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
