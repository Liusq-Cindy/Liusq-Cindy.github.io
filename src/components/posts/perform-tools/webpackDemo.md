demo演示见/Users/liushiqin/Documents/study/demo/webpack入门/webpack-demo

# 一、如何给一个新项目引入webpack及配置?

## 1、创建npm环境，引入webpack包

1. 新建文件夹
2. 在命令行中输入 `npm init -y`，引入npm环境，空文件夹中会出现package.json文件（前提先装了node）
3. 安装webpack: `npm i webpack@4 webpack-cli@4 -D`，然后项目出现了package-lock.json文件和node-mudules文件

## 2、创建src文件夹内容及配置文件

1. 创建src文件夹，并创建一个index.js文件,里面随便加一条打印信息
2. 创建一个webpack配置文件，如webpack.config.js，这也是webpack默认的配置文件的名字
3. 配置文件编写：设置模式和入口出口

```jsx
const path = require('path');
module.exports = {
  mode: 'development', // 开发模式  线上模式：production，代码会被压缩
  entry: path.join(__dirname, 'src', 'index.js'), // 入口文件
  output: { // 出口文件配置
   filename: 'bundle.js',
   path: path.join(__dirname, 'dist')
  }
}
```

## 3、编辑运行命令—测试一下

1. 在package.json中script加入一行运行webpack的命令，如下红色部分

```jsx
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --config webpack.config.js"
		// --config后面内容也可以不要，默认是这个文件 实际运用可能有多个webpack文件，那就可以改这里的路径和文件名
  },
```

2、运行`npm run build` ，进行打包，完成后在dist中会有一个bundle.js文件。

> 以上是对一个纯js文件进行打包，下面尝试加入html，模拟一个简单网页内容

## 4、引入webpack插件及配置—webpack4版本

下面引入一些常见基本的webpack插件

1. 在src目录下创建一个index.html文件，写入一些基本的页面结构。然后引入html-webpack-plugin，这是用来解析html的插件

`npm install html-webpack-plugin@4 -D`

1. 引入webpack-dev-server, 这是能启动服务的插件（可以帮我们启动本地服务、跨域、热更新等等功能）

`npm install webpack-dev-server -D`

如果环境安装有问题，也可以使用淘宝镜像

`npm install webpack-dev-server -D —registry-https://registry.npm.taobao.org`

1. 要使用这个html插件，需要在我们的webpck.config.js配置文件中引入及配置这个插件，如下黄色背景部分。

```jsx
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development', // 开发模式，不会压缩代码  线上模式：production，会压缩打码
  entry: path.join(__dirname, 'src', 'index.js'), // 入口文件
  output: { // 出口文件配置
   filename: 'bundle.js',
   path: path.join(__dirname, 'dist')
  },
  plugins: [
   // 引入htmlwebpackplugin插件，解析html文件
    new HtmlWebpackPlugin({
     template: path.join(__dirname, 'src', 'index.html'), // 找到已有的index.html路径
     filename: 'index.html', // 产出的文件名字
   }),
  ],
// 配置本地服务
  devServer: {
   port: 3000, // 端口号
   contentBase: path.join(__dirname, 'dist')
  }
}
```

1. 另外需要引入`webpack-dev-server`插件及配置，如上蓝色背景部分。
2. 配置一个启动命令，在package.json中script，如下红色部分。

```jsx
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --config webpack.config.js",
    "dev": "webpack-dev-server"
  },
```

1. 然后运行 `npm run dev`

问题，由于不同webpack版本有所不同，尤其跨大版本，配置已经有了变化，如出现各种版本问题引起的报错，按如下安装webpack4版本和对应插件，再执行npm run dev即可

```jsx
"html-webpack-plugin": "^3.2.0",
"webpack": "^4.41.0",
"webpack-cli": "^3.3.9",
"webpack-dev-server": "^3.8.2"
```

1. 访问浏览器 [http://localhost:3000/](http://localhost:3000/) 即可看到我们编写的index.html页面，在打包的dist目录里的index.html文件可以看到，他把前面的index.js文件也挂载到了index.html中。

```jsx
<html lang="en">
	...
  <body>
    <div>这是一个index.html基础文件</div>
	  <script src="bundle.js"></script>
	</body>
</html>
```

# 二、如何配置babel?

> 我们希望es6的代码打包后能够变成es5的代码（因为有些浏览器对es6还没有做到完全支持），就需要用到babel插件。

> 假如在我们上文的index.js中编写一个箭头函数，我们发现打包出来的文件，在浏览器中直接看源码，还是箭头函数，这是es6的语法，那么如果要转成es5 ，要怎么做呢？

## 1、**安装babel的系列npm包**

babel是一个npm包组—@babel标识，有很多的模块，这里需要安装babel/core核心、babel/preset-env模块、以及babel-loader

`npm install @babel/core @babel/preset-env babel-loader -D`

## 2、创建.babelrc配置文件，配置webpack的module

```jsx
{
 "presets": ["@babel/preset-env"] // 预设配置
}
```

在webpack配置里面增加module—rule配置，增加不同的loader，来解析不同的资源

如这里，我们就需要用babel来对js文件进行一个编译加载，进行es6—>es5的转换

```jsx
......
module: {
   rules: [
     {
      test: /\.js$/, // 匹配js文件
      loader: 'babel-loader', // 用babel加载器处理
      exclude: /node_modules/, // 除node_modules之外的文件
      include: path.join(__dirname, 'src') // 包括src目录下的文件
     }
   ]
 },
plugins: []
......
```

## 3、重新运行

重新num run dev，发现打包后的js代码，已经转成了es5的代码，箭头函数转成了普通函数

# 三、如何配置webpack生产环境

> 基于上面dev环境的一些配置，如果要配置生产环境，需要做一些改动

新建一个webpack.prod.js文件，复制config的内容，但是有些配置要修改掉

### 1、修改webpack打包后output输出的文件名，加一个hash值

当内容改变时，hash值也会改变的

```jsx
output: { // 出口文件配置
  //  filename: 'bundle.js',
   filename: 'bundle.[contenthash].js', // 生产环境，加入hash值
   path: path.join(__dirname, 'dist')
  },
```

### 2、修改package.json中build命令，指定文件为webpack.prod.js

```jsx
// "build-dev": "webpack --config webpack.config.js",
"build": "webpack --config webpack.prod.js",
```