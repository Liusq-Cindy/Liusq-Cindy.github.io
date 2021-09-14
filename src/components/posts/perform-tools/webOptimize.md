讲到性能优化，必然要对页面先进行了性能分析，找到影响性能的问题之后，然后对症下药。当然，在没有明显影响性能的条件下，我们可以从很多层面来进行前端性能的优化：

# 一、chrome性能分析

[https://note.youdao.com/s/HGzQQmFx](https://note.youdao.com/s/HGzQQmFx)

问卷性能分析

[https://note.youdao.com/s/aSpkJ9Sd](https://note.youdao.com/s/aSpkJ9Sd)

# 二、前端性能优化

范围佷广：

1. http缓存优化
2. 页面加载及渲染过程优化
    1. 压缩资源文件大小（精灵图、编码优化、图片压缩、文件压缩）
    2. 减少重排重绘
    3. 图片懒加载
    4. 事件委托
    5. 提升首屏渲染速度—如利用SSR、骨架屏
3. 网页交互
    1. 防抖节流
    2. 减少不必要的交互
4. Vue应用优化
    1. 利用服务端渲染（SSR）和预渲染（Prerender）来优化加载性能
    2. 通过组件懒加载优化超长应用内容加载性能

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3a2b69a6-ed65-4845-ba0c-27a478bb9e0b/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3a2b69a6-ed65-4845-ba0c-27a478bb9e0b/Untitled.png)

# 三、Vue的项目的优化

如果没有对 Vue 项目没有进行过优化总结的同学，可以参考本文作者的另一篇文章《 Vue 项目性能优化 — 实践指南 》，文章主要介绍从 3 个大方面，22 个小方面详细讲解如何进行 Vue 项目的优化。

（1）代码层面的优化

- v-if 和 v-show 区分使用场景
- computed 和 watch 区分使用场景
- v-for 遍历必须为 item 添加 key，且避免同时使用 v-if
- 长列表性能优化
- 事件的销毁
- 图片资源懒加载
- 路由懒加载
- 第三方插件的按需引入
- 优化无限列表性能
- 服务端渲染 SSR or 预渲染

（2）Webpack 层面的优化

- Webpack 对图片进行压缩
- 减少 ES6 转为 ES5 的冗余代码
- 提取公共代码
- 模板预编译
- 提取组件的 CSS
- 优化 SourceMap
- 构建结果输出分析
- Vue 项目的编译优化

（3）基础的 Web 技术的优化

- 开启 gzip 压缩
- 浏览器缓存
- CDN 的使用
- 使用 Chrome Performance 查找性能瓶颈