# liusq-cindy

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
# 如何搭建github-pages个人博客
> 相信大家都曾想过做一个自己的博客网站，上传一些自己的博文、作品等等，尤其是技术开发人员，就更想有一个属于自己的小天地了。但以往搭建博客网站的方案通常需要买云服务器、买域名等等，非常麻烦。对于需求不高，只想搭建一个静态网站的人来说，那些方案过于繁琐也没有时间维护。

>本文推荐的一个方案是，基于Github，建立一个自己的github静态网站，过程非常简单，只需要你申请一个github账号（相信开发人员一般是会有的，没有的话，直接去[https://github.com](https://github.com/)注册一个）

**搭建github pages个人网站，主要分为以下几步：**

## 1、拥有一个github账号，了解github的基本操作及git分支的概念

此部分对开发人员应该不陌生，如果不甚了解，可参考文章快速了解github基础信息：[https://www.jianshu.com/p/f82c76b90336](https://www.jianshu.com/p/f82c76b90336)

## 2、注册申请gitlab.io仓库

简单来说，和普通创建仓库一样，创建一个命名为 **[username.github.io](http://username.github.io)** 的仓库，如我的github账号是Liusq-Cindy，仓库命名为Liusq-Cindy.github.io，系统会自动将其作为你的github pages仓库的（创建仓库可参考官方教程—[如何创建一个github仓库](https://guides.github.com/activities/hello-world/)）。

此部分不做赘述，官网说的非常清楚，可参考：[github pages 官网](https://pages.github.com/)

由此，其实你的个人网站已经搭建好了，地址应该如：[https://liusq-cindy.github.io](https://liusq-cindy.github.io/#/)，该网站所承载的资源就是你在github page中所上传的内容。此时应该页面只有一句Hello Word，因此下面尝试创建一个简单的页面架构。

## 3、最基础的网站框架——关于jelly模板

现在你拥有了一个仓库和对应的博客网址，所需的只是把你需要的文件拷贝到你的库里。如果需要快速搭建一个基础的博客网站，Gihub官方提供了一个博客生成工具 Jekyll（[中文官网](http://jekyllcn.com/docs/quickstart/)、[英文官网](https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/setting-up-a-github-pages-site-with-jekyll)）、此外，也有很多人会使用 [Hexo](https://hexo.io/zh-cn/) 博客框架 来生成博客，这两者都支持Markdown，而且可以一键部署等等，对于需要快速构建博客的人群或者非技术开发人员非常友好，且有很多的模板和主题可供使用，能节省大量的时间。

关于以上工具的使用，可直接参考官方文档，描述的很详细。如果是技术开发人员，对html/css/javascript及git、打包比较了解，也可以自己手动构建网站。

以下介绍自己手动基于Vue搭建应用

## 4、基于vue搭建github-pages个人网站

作为前端开发人员，vue的开发应该是非常熟悉的，但是在搭建github-pages个人网站的过程中，还是遇到了一些问题，下面会将整体的流程和遇到问题的解决方案总结如下：

### 1、第一步，先在仓库内创建一个空的vue应用

创建一个vue-cli应用可直接使用[命令行创建](http://www.mamicode.com/info-detail-2594962.html)，也可以从现有的[空的vue仓库](https://github.com/Liusq-Cindy/vue-blank)中fork一个

```js
// 在全局安装了node、webpack、vue-cli之后
vue create 项目名
// 然后按照提示输入
```

### 2、第二步，处理md文件

> 如果想要在个人网站中上传博文，保证其格式的美化，必然需要支持一下markdown，否则手写标签效率太低。网上关于 [ vue解析md文件 ]  有很多的解决办法，但大多会有一些bug存在（如代码无法高亮等），以下为亲测可行的[md文件处理的解决方案](https://blog.csdn.net/qq_38735931/article/details/103242525?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-2.edu_weight&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-2.edu_weight)：

**（1）安装以下npm依赖包：**

markdown插件—解析md文件

```js
npm i vue-markdown-loader@0 -D
```

markdown样式表—-对应的markdown转换成html的样式

```js
npm install --save github-markdown-css
```

代码高亮及行号的依赖—-处理代码高亮及行号

```js
npm install --save highlightjs-line-numbers.js
```

**（2）修改webpack基础配置**

在 build / webpack.base.config.js 文件， module: { rules: [] }中添加：

```js
{
      test: /\.md$/,
      loader: 'vue-markdown-loader',
      options: {
        preprocess: function (MarkdownIt, Source) {
          MarkdownIt.renderer.rules.table_open = function () {
            return '<div class="table-container"><table class="table">';
          };
          MarkdownIt.renderer.rules.table_close = function () {
            return '</table></div>';
          };
          return Source;
        }
      }
    }
```

即表示将匹配到的.md文件通过vue-markdown-loader插件解析.

**（3）在需要引入md文件的页面首页组件内引入github-markdown-css的样式插件及高亮插件，可以是App.vue，我这里是src/components/posts目录下的index.vue**

```js
import 'highlight.js/styles/github.css'
import 'github-markdown-css'
```

**注：将需要匹配到该样式的组件添加class="markdown-body"以匹配样式表**

**（4）根目录下index.html文件中引入srcipt文件及css样式，且需要手动调整一下highlightjs-line-number.js的样式，index.html文件内容如下：**

```js
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <title>liusq</title>
    <link
      href="https://cdn.bootcss.com/highlight.js/9.6.0/styles/atelier-lakeside-dark.min.css"
      rel="stylesheet"
    />
    <script src="//cdn.bootcss.com/highlight.js/9.11.0/highlight.min.js"></script>
    <script>
      hljs.initHighlightingOnLoad();
    </script>
    <script src="//cdn.bootcss.com/highlightjs-line-numbers.js/1.1.0/highlightjs-line-numbers.min.js"></script>
    <script>
      hljs.initLineNumbersOnLoad();
    </script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=TeX-MML-AM_CHTML"
      type="text/javascript"
    ></script>
  </head>
  <body>
    <div id="app"></div>
    <!-- built files will be auto injected -->
  </body>
</html>
<style>
  .hljs-line-numbers {
    text-align: right;
    border-right: 1px solid #ccc !important;
    margin-right: 10px !important;
    padding-right: 5px !important;
    color: #999;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
</style>
```

**（5）最后，页面引入md文件如下：**

```js
<template>
  <div class="hello markdown-body">
    <Readme></Readme>
  </div>
</template>

<script>

import 'highlight.js/styles/github.css'
import 'github-markdown-css'
import Readme from './test.md'// 引入md文件

export default {
  name: 'HelloWorld',
  components: {
    Readme
  }
}
</script>
```

可根据需要灵活变动组件位置及引入markdown样式的位置。

【参考文章：[vue解析markdown文件并展示](https://blog.csdn.net/qq_38735931/article/details/103242525?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-2.edu_weight&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-2.edu_weight)】

### 3、第三步，打包vue文件

**注意对于github-pages个人博客，仓库上传的文件不能直接将vue项目上传，是需要将项目进行打包编译的。**

一般对于vue项目，打包使用 npm run build，webpack会将项目打包，打包文件会生成在dist目录下，将dist目录内容上传到github-pages仓库对应master分支上即可，但打包也可能会遇到一些问题。

#### 打包后项目资源无法加载？点击index.html空白

出现这种情况，可打开控制台看看，index.html中是否没有加载任何css、js文件，如果是，多半是我们再config中的路径配置没有改过来，加载不到文件，打开项目根目录config下的index.js文件，进行如下修改：

**assetsPublicPath: '/' 改为  assetsPublicPath: './'**

对于字体图标无法加载，修改build/utils.js文件，修改publicPath:''../../"

```js
if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        publicPath: '../../',
        fallback: 'vue-style-loader'
      })
    } else {
      return ['vue-style-loader'].concat(loaders)
    }
```

保存后重新打包。

【参考文章：[vue打包问题](https://blog.csdn.net/hjw453321854/article/details/81780128)】

### 4、第四步，多分支管理

> 由于github-pages默认会加载master上的代码，所以master上的代码需要是打包后的dist文件内容，那么对于日常开发所需，我们需要另一个分支来存储所有的代码。（说是可以设置gh-pages为仓库的加载分支，但是我在新版github官网中仓库的setting，没找到这个source设置的修改，如果有人知道，请火速联系我）

对于gh-pages打包后，要将dist目录拷贝到指定的分支，如master上，除了手动操作，也可以使用如下命令：( git subtree push --prefix docpath origin branch )，此处应该是

```js
git subtree push --prefix dist origin master
```

由此，存在两个分支，master专门存打包后的内容，gh-pages存的是所有代码。

后续则是对网站的优化及拓展了，和其他vue项目无异，此处不再赘述