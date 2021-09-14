webpackJsonp([61],{"Y+6C":function(t,o,v){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var _={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,o=t.$createElement,v=t._self._c||o;return v("section",[v("h1",[t._v("html基础知识点QA")]),t._v(" "),v("p",[t._v("参考文章：")]),t._v(" "),v("p",[v("a",{attrs:{href:"https://www.cnblogs.com/yc8930143/p/7237456.html"}},[t._v("彻底理解行内元素和块级元素，不必硬背")])]),t._v(" "),v("p",[v("strong",[t._v("目录：")])]),t._v(" "),v("ol",[v("li",[v("a",{attrs:{href:""}},[t._v("行内元素、块元素")])]),t._v(" "),v("li",[v("a",{attrs:{href:""}},[t._v("什么是BOM，常用的BOM？")])]),t._v(" "),v("li",[v("a",{attrs:{href:""}},[t._v("css、html、js文件的引入位置")])]),t._v(" "),v("li",[v("a",{attrs:{href:""}},[t._v("window.onload和DomContentLoaded区别")])])]),t._v(" "),v("h1",[t._v("一、行内元素、块元素")]),t._v(" "),v("p",[v("strong",[t._v("行内元素有：")])]),t._v(" "),v("p",[v("code",[t._v("a, span")]),t._v(", label, strong, em, br, "),v("code",[t._v("img, input, select, textarea")]),t._v(", cite,")]),t._v(" "),v("p",[v("strong",[t._v("块级元素：")])]),t._v(" "),v("p",[t._v("div, h1~h6, "),v("code",[t._v("p, form, ul, li, ol,")]),t._v(" dl, address, hr, menu, "),v("code",[t._v("table")]),t._v(", fieldset")]),t._v(" "),v("p",[v("strong",[t._v("基本特征：")])]),t._v(" "),v("ul",[v("li",[t._v("行内元素与块级元素直观上的区别行内元素会在一条直线上排列，都是同一行的，水平方向排列块级元素各占据一行，垂直方向排列。块级元素从新行开始结束接着一个断行。")]),t._v(" "),v("li",[t._v("块级元素可以包含行内元素和块级元素。行内元素不能包含块级元素。")]),t._v(" "),v("li",[t._v("行内元素与块级元素属性的不同，主要是盒模型属性上行内元素设置width无效，height无效(可以设置line-height)，margin上下无效，padding上下无效")])]),t._v(" "),v("pre",[v("code",{staticClass:"language-jsx"},[t._v("     display：inline 行内元素/内联元素\n     "),v("span",{staticClass:"hljs-attr"},[t._v("display")]),t._v(":block 块级元素\n     "),v("span",{staticClass:"hljs-attr"},[t._v("display")]),t._v(":inline-block 设置成行内块级元素。\n")])]),t._v(" "),v("h1",[t._v("二、什么是BOM，常用的BOM属性？")]),t._v(" "),v("p",[v("a",{attrs:{href:"https://www.cnblogs.com/xing901022/p/4776697.html"}},[t._v("https://www.cnblogs.com/xing901022/p/4776697.html")])]),t._v(" "),v("p",[v("a",{attrs:{href:"https://www.cnblogs.com/soundcode/p/12745951.html"}},[t._v("https://www.cnblogs.com/soundcode/p/12745951.html")])]),t._v(" "),v("p",[v("img",{attrs:{src:"html%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86%E7%82%B9QA%208153d5897c9743099b859f6d47b443fc/Untitled.png",alt:"Untitled"}})]),t._v(" "),v("p",[v("code",[t._v("Bom是浏览器对象")])]),t._v(" "),v("p",[v("strong",[t._v("location对象")])]),t._v(" "),v("ul",[v("li",[v("code",[t._v("location.href")]),t._v("-- 返回或设置当前文档的URL")]),t._v(" "),v("li",[t._v("location.search -- 返回URL中的查询字符串部分。例如 "),v("a",{attrs:{href:"http://www.dreamdu.com/dreamdu.php?id=5&name=dreamdu"}},[t._v("http://www.dreamdu.com/dreamd...")]),t._v(" 返回包括(?)后面的内容?id=5&name=dreamdu")]),t._v(" "),v("li",[t._v("location.hash -- 返回URL#后面的内容，如果没有#，返回空 location.host -- 返回URL中的域名部分，例如www.dreamdu.com")]),t._v(" "),v("li",[t._v("location.hostname -- 返回URL中的主域名部分，例如dreamdu.com")]),t._v(" "),v("li",[t._v("location.pathname -- 返回URL的域名后的部分。例如 "),v("a",{attrs:{href:"http://www.dreamdu.com/xhtml/"}},[t._v("http://www.dreamdu.com/xhtml/")]),t._v(" 返回/xhtml/")]),t._v(" "),v("li",[t._v("location.port -- 返回URL中的端口部分。例如 "),v("a",{attrs:{href:"http://www.dreamdu.com/"}},[t._v("http://www.dreamdu.com")]),t._v(":8080/xhtml/ 返回8080")]),t._v(" "),v("li",[t._v("location.protocol -- 返回URL中的协议部分。例如 "),v("a",{attrs:{href:"http://www.dreamdu.com/"}},[t._v("http://www.dreamdu.com")]),t._v(":8080/xhtml/ 返回(//)前面的内容http:")]),t._v(" "),v("li",[t._v("location.assign -- 设置当前文档的URL")]),t._v(" "),v("li",[t._v("location.replace() -- 设置当前文档的URL，并且在history对象的地址列表中移除这个URL location.replace(url);")]),t._v(" "),v("li",[t._v("location.reload() -- 重载当前页面")])]),t._v(" "),v("p",[v("strong",[t._v("history对象")])]),t._v(" "),v("ul",[v("li",[t._v("history.go() -- 前进或后退指定的页面数")]),t._v(" "),v("li",[v("code",[t._v("history.go(num); history.back() -- 后退一页")])]),t._v(" "),v("li",[t._v("history.forward() -- 前进一页")])]),t._v(" "),v("p",[v("strong",[t._v("Navigator对象")])]),t._v(" "),v("ul",[v("li",[v("code",[t._v("navigator.userAgent")]),t._v(" -- 返回用户代理头的字符串表示(就是包括浏览器版本信息等的字符串)")]),t._v(" "),v("li",[t._v("navigator.cookieEnabled -- 返回浏览器是否支持(启用)cookie")])]),t._v(" "),v("h1",[t._v("三、css、html、js位置")]),t._v(" "),v("p",[t._v("一般将css的link文件，写在head中，为了在页面渲染dom树前获取样式，避免重排")]),t._v(" "),v("p",[t._v("js的script标签，写在body的最后，为了让页面渲染显示出来之后，再加载js文件执行，避免阻塞dom渲染")]),t._v(" "),v("h1",[t._v("四、window.onload和DomContentLoaded区别")]),t._v(" "),v("p",[t._v("window.onload是所有资源加载完，包括dom、图片、视频等资源的加载")]),t._v(" "),v("p",[t._v("DomContentLoaded是dom渲染完成，图片可能尚未下载")])])}]},a=v("VU/8")(null,_,!1,null,null,null);o.default=a.exports},kaYE:function(t,o,v){t.exports=v("Y+6C")}});
//# sourceMappingURL=61.7083154eb7a69fe6fcd5.js.map