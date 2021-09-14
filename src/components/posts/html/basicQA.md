# html基础知识点QA

参考文章：

[彻底理解行内元素和块级元素，不必硬背](https://www.cnblogs.com/yc8930143/p/7237456.html)

**目录：**

1. [行内元素、块元素]()
2. [什么是BOM，常用的BOM？]()
3. [css、html、js文件的引入位置]()
4. [window.onload和DomContentLoaded区别]()

# 一、行内元素、块元素

**行内元素有：**

`a, span`, label, strong, em, br, `img, input, select, textarea`, cite,

**块级元素：**

div, h1~h6, `p, form, ul, li, ol,` dl, address, hr, menu, `table`, fieldset

**基本特征：**

- 行内元素与块级元素直观上的区别行内元素会在一条直线上排列，都是同一行的，水平方向排列块级元素各占据一行，垂直方向排列。块级元素从新行开始结束接着一个断行。
- 块级元素可以包含行内元素和块级元素。行内元素不能包含块级元素。
- 行内元素与块级元素属性的不同，主要是盒模型属性上行内元素设置width无效，height无效(可以设置line-height)，margin上下无效，padding上下无效

```jsx
     display：inline 行内元素/内联元素
     display:block 块级元素
     display:inline-block 设置成行内块级元素。
```

# 二、什么是BOM，常用的BOM属性？

[https://www.cnblogs.com/xing901022/p/4776697.html](https://www.cnblogs.com/xing901022/p/4776697.html)

[https://www.cnblogs.com/soundcode/p/12745951.html](https://www.cnblogs.com/soundcode/p/12745951.html)

![Untitled](html%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86%E7%82%B9QA%208153d5897c9743099b859f6d47b443fc/Untitled.png)

`Bom是浏览器对象`

**location对象**

- `location.href`-- 返回或设置当前文档的URL
- location.search -- 返回URL中的查询字符串部分。例如 [http://www.dreamdu.com/dreamd...](http://www.dreamdu.com/dreamdu.php?id=5&name=dreamdu) 返回包括(?)后面的内容?id=5&name=dreamdu
- location.hash -- 返回URL#后面的内容，如果没有#，返回空 location.host -- 返回URL中的域名部分，例如www.dreamdu.com
- location.hostname -- 返回URL中的主域名部分，例如dreamdu.com
- location.pathname -- 返回URL的域名后的部分。例如 [http://www.dreamdu.com/xhtml/](http://www.dreamdu.com/xhtml/) 返回/xhtml/
- location.port -- 返回URL中的端口部分。例如 [http://www.dreamdu.com](http://www.dreamdu.com/):8080/xhtml/ 返回8080
- location.protocol -- 返回URL中的协议部分。例如 [http://www.dreamdu.com](http://www.dreamdu.com/):8080/xhtml/ 返回(//)前面的内容http:
- location.assign -- 设置当前文档的URL
- location.replace() -- 设置当前文档的URL，并且在history对象的地址列表中移除这个URL location.replace(url);
- location.reload() -- 重载当前页面

**history对象**

- history.go() -- 前进或后退指定的页面数
- `history.go(num); history.back() -- 后退一页`
- history.forward() -- 前进一页

**Navigator对象**

- `navigator.userAgent` -- 返回用户代理头的字符串表示(就是包括浏览器版本信息等的字符串)
- navigator.cookieEnabled -- 返回浏览器是否支持(启用)cookie

# 三、css、html、js位置

一般将css的link文件，写在head中，为了在页面渲染dom树前获取样式，避免重排

js的script标签，写在body的最后，为了让页面渲染显示出来之后，再加载js文件执行，避免阻塞dom渲染

# 四、window.onload和DomContentLoaded区别

window.onload是所有资源加载完，包括dom、图片、视频等资源的加载

DomContentLoaded是dom渲染完成，图片可能尚未下载