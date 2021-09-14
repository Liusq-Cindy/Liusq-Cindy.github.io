export default {
  currentBlog: {
    blogTitle: '将代码写的优雅', blogTheme: 0, blogIndex: 1, blogPath: '/blog/post/youya'
  },
  Blog_List_Map: {
    0: {'title': '综述前言', 'logo': 'el-icon-view'},
    1: {'title': 'HTML', 'logo': 'el-icon-tickets'},
    2: {'title': 'CSS', 'logo': 'el-icon-shopping-bag-2'},
    3: {'title': 'JS', 'logo': 'el-icon-magic-stick'},
    4: {'title': '浏览器及http网络', 'logo': 'el-icon-umbrella'},
    5: {'title': '前端性能工具及工程化', 'logo': 'el-icon-setting'}
  },
  blogList: [
    // 基础类
    { blogTitle: '前端网站推荐', blogTheme: 0, blogIndex: 0, blogPath: '/blog/artical/webside' },
    { blogTitle: '将代码写的优雅', blogTheme: 0, blogIndex: 1, blogPath: '/blog/artical/youya' },
    { blogTitle: '搭建一个个人博客', blogTheme: 0, blogIndex: 2, blogPath: '/blog/artical/blogbuild' },
    // html类
    { blogTitle: 'html基础标签', blogTheme: 1, blogIndex: 0, blogPath: '/blog/artical/basicTag', blogName: 'basicTag' },
    { blogTitle: 'html基础QA', blogTheme: 1, blogIndex: 1, blogPath: '/blog/artical/basicQA', blogName: 'basicQA' },
    { blogTitle: 'html5的一些新标签', blogTheme: 1, blogIndex: 2, blogPath: '/blog/artical/html5', blogName: 'html5' },
    { blogTitle: '理解虚拟Dom', blogTheme: 1, blogIndex: 3, blogPath: '/blog/artical/vDom', blogName: 'vDom' },
    { blogTitle: 'html常见面试题汇总', blogTheme: 1, blogIndex: 4, blogPath: '/blog/artical/test-html', blogName: 'testHtml' },
    // css类
    { blogTitle: 'css基础知识点QA1', blogTheme: 2, blogIndex: 0, blogPath: '/blog/artical/cssBasicQA1', blogName: 'cssBasicQA1' },
    { blogTitle: 'css基础知识点QA2', blogTheme: 2, blogIndex: 1, blogPath: '/blog/artical/cssBasicQA2', blogName: 'cssBasicQA2' },
    { blogTitle: 'css基础知识点--应用', blogTheme: 2, blogIndex: 2, blogPath: '/blog/artical/cssApply', blogName: 'cssApply' },
    { blogTitle: 'css3新特性', blogTheme: 2, blogIndex: 3, blogPath: '/blog/artical/css3', blogName: 'css3' },
    { blogTitle: 'css常见面试题汇总', blogTheme: 2, blogIndex: 4, blogPath: '/blog/artical/test-css', blogName: 'testCss' },
    // js类
    { blogTitle: 'js基础知识点QA1', blogTheme: 3, blogIndex: 0, blogPath: '/blog/artical/jsQA1', blogName: 'jsQA1' },
    { blogTitle: 'js基础知识点QA2', blogTheme: 3, blogIndex: 1, blogPath: '/blog/artical/jsQA2', blogName: 'jsQA2' },
    { blogTitle: '对象、原型', blogTheme: 3, blogIndex: 2, blogPath: '/blog/artical/object-proto', blogName: 'objectProto' },
    { blogTitle: '构造函数、原型链、继承', blogTheme: 3, blogIndex: 3, blogPath: '/blog/artical/constructor', blogName: 'constructor' },
    { blogTitle: 'this的理解', blogTheme: 3, blogIndex: 4, blogPath: '/blog/artical/thisJs', blogName: 'thisJs' },
    { blogTitle: '数组API', blogTheme: 3, blogIndex: 5, blogPath: '/blog/artical/arrayApi', blogName: 'arrayApi' },
    { blogTitle: '字符串API', blogTheme: 3, blogIndex: 6, blogPath: '/blog/artical/stringApi', blogName: 'stringApi' },
    { blogTitle: '节流与防抖', blogTheme: 3, blogIndex: 7, blogPath: '/blog/artical/throttle', blogName: 'throttle' },
    { blogTitle: '事件循环', blogTheme: 3, blogIndex: 8, blogPath: '/blog/artical/eventloop', blogName: 'eventloop' },
    { blogTitle: 'JS常见设计模式', blogTheme: 3, blogIndex: 9, blogPath: '/blog/artical/jsDesign', blogName: 'jsDesign' },
    { blogTitle: '了解js函数式编程', blogTheme: 3, blogIndex: 10, blogPath: '/blog/artical/jsFunc', blogName: 'jsFunc' },
    { blogTitle: '正则', blogTheme: 3, blogIndex: 11, blogPath: '/blog/artical/reg', blogName: 'reg' },
    { blogTitle: 'js常用编码转换', blogTheme: 3, blogIndex: 12, blogPath: '/blog/artical/codeChange', blogName: 'codeChange' },
    { blogTitle: 'promise基础', blogTheme: 3, blogIndex: 13, blogPath: '/blog/artical/promise', blogName: 'promise' },
    { blogTitle: 'Typescript基础', blogTheme: 3, blogIndex: 14, blogPath: '/blog/artical/ts', blogName: 'ts' },
    { blogTitle: 'es6基础知识点', blogTheme: 3, blogIndex: 15, blogPath: '/blog/artical/es6', blogName: 'es6' },
    { blogTitle: 'JS手写系列1', blogTheme: 3, blogIndex: 16, blogPath: '/blog/artical/jsByhand1', blogName: 'jsByhand1' },
    { blogTitle: 'JS手写系列2', blogTheme: 3, blogIndex: 17, blogPath: '/blog/artical/jsByhand2', blogName: 'jsByhand2' },
    { blogTitle: 'lodash中的get方法分析', blogTheme: 3, blogIndex: 18, blogPath: '/blog/artical/lodashGet', blogName: 'lodashGet' },
    { blogTitle: 'JS常见面试题汇总', blogTheme: 3, blogIndex: 19, blogPath: '/blog/artical/test-js', blogName: 'testJs' },
    // 浏览器及http网络
    { blogTitle: '浏览器及http常见问题QA', blogTheme: 4, blogIndex: 0, blogPath: '/blog/artical/chromeQA', blogName: 'chromeQA' },
    { blogTitle: '浏览器基础', blogTheme: 4, blogIndex: 1, blogPath: '/blog/artical/chromeBasic', blogName: 'chromeBasic' },
    { blogTitle: '浏览器渲染', blogTheme: 4, blogIndex: 2, blogPath: '/blog/artical/chromePaint', blogName: 'chromePaint' },
    { blogTitle: '浏览器缓存', blogTheme: 4, blogIndex: 3, blogPath: '/blog/artical/chromeCache', blogName: 'chromeCache' },
    { blogTitle: 'http发展历程', blogTheme: 4, blogIndex: 4, blogPath: '/blog/artical/httpHistory', blogName: 'httpHistory' },
    { blogTitle: 'http协议', blogTheme: 4, blogIndex: 5, blogPath: '/blog/artical/httpDoc', blogName: 'httpDoc' },
    { blogTitle: '前端安全', blogTheme: 4, blogIndex: 6, blogPath: '/blog/artical/webSafe', blogName: 'webSafe' },
    { blogTitle: '了解websocket', blogTheme: 4, blogIndex: 7, blogPath: '/blog/artical/websocket', blogName: 'websocket' },
    { blogTitle: '浏览器及http常见面试题汇总', blogTheme: 4, blogIndex: 8, blogPath: '/blog/artical/test-http', blogName: 'testHttp' },
    // 前端性能工具及工程化
    { blogTitle: '前端性能优化', blogTheme: 5, blogIndex: 0, blogPath: '/blog/artical/webOptimize', blogName: 'webOptimize' },
    { blogTitle: '图片懒加载', blogTheme: 5, blogIndex: 1, blogPath: '/blog/artical/imgLazyload', blogName: 'imgLazyload' },
    { blogTitle: 'git常用命令', blogTheme: 5, blogIndex: 2, blogPath: '/blog/artical/git', blogName: 'git' },
    { blogTitle: '前端代码调试', blogTheme: 5, blogIndex: 3, blogPath: '/blog/artical/codeDebugger', blogName: 'codeDebugger' },
    { blogTitle: 'webpack基础知识', blogTheme: 5, blogIndex: 4, blogPath: '/blog/artical/webpackBasic', blogName: 'webpackBasic' },
    { blogTitle: 'webpack的Demo', blogTheme: 5, blogIndex: 5, blogPath: '/blog/artical/webpackDemo', blogName: 'webpackDemo' },
    { blogTitle: '前端项目开发测试发布流程', blogTheme: 5, blogIndex: 6, blogPath: '/blog/artical/webFlow', blogName: 'webFlow' },
    { blogTitle: '可视化工具echats及antv', blogTheme: 5, blogIndex: 7, blogPath: '/blog/artical/echart', blogName: 'echart' },
    { blogTitle: '了解linux命令与前端服务', blogTheme: 5, blogIndex: 8, blogPath: '/blog/artical/linux', blogName: 'linux' }
  ]
}
