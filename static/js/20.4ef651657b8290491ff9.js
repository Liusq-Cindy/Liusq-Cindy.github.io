webpackJsonp([20],{dvLs:function(t,v,_){"use strict";Object.defineProperty(v,"__esModule",{value:!0});var e={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("section",[_("h1",[t._v("理解Dom与虚拟Dom")]),t._v(" "),_("p",[t._v("参考文章：")]),t._v(" "),_("p",[_("a",{attrs:{href:"https://www.cnblogs.com/dxy1982/p/3791251.html"}},[t._v("JavaScript大杂烩10 - 理解DOM")])]),t._v(" "),_("p",[_("a",{attrs:{href:"https://segmentfault.com/a/1190000007694388"}},[t._v("一起理解 Virtual DOM")])]),t._v(" "),_("p",[t._v("笔记：")]),t._v(" "),_("h2",[t._v("1、Dom的理解")]),t._v(" "),_("p",[_("strong",[t._v("DOM树 - HTML结构的抽象")])]),t._v(" "),_("p",[t._v("DOM是操纵HTML文档的，那么必然是先要将HTML文档抽象成JavaScript的对象，这样才能使用JavaScript去操作它们。")]),t._v(" "),_("p",[t._v("HTML文档抽象的结果是DOM树 - 一棵与HTML结构对应的JavaScript对象组成的树。")]),t._v(" "),_("p",[t._v("操作DOM说白了就是一句话：“使用抽象的DOM对象操作页面本身，动态的添加页面的行为”。")]),t._v(" "),_("h2",[t._v("2、简单理解虚拟DOM：从数据变更与UI同步的角度来看，")]),t._v(" "),_("p",[t._v("1、Web 的早期，页面通常是静态的。而如果数据发生了变化，需要重新请求页面，得到基于新的数据渲染出的新的页面。")]),t._v(" "),_("p",[t._v("2、然后，开发者发现数据变化时，手动编码去操作对应的 DOM 节点执行更新通过操作DOM。")]),t._v(" "),_("p",[t._v("3、随之，产生了很多的框架，建立这种绑定关系，简化了我们的操作，开发者借助框架，监听数据的变更，在数据变更后更新对应的 DOM 节点，如AngularJS。")]),t._v(" "),_("p",[t._v("4、之后，又有一个新的思路，回到之前，数据变化时，不分辨对应什么dom节点，直接重新请求页面，在真实的页面和数据之间，建立一层虚拟dom层，有数据变化时，形成新的虚拟dom,比较前后的两个树，将差异的diff节点处理成真实的dom节点然后渲染在页面上。")]),t._v(" "),_("p",[t._v("如：React 并不是直接得到新的 DOM 进行替换，而是先生成 Virtual DOM，与上一次渲染得到的 Virtual DOM 进行比对，在渲染得到的 Virtual DOM 上发现变化，然后将变化的地方更新到真实 DOM 上。")])])}]},r=_("VU/8")(null,e,!1,null,null,null);v.default=r.exports},"pQJ/":function(t,v,_){t.exports=_("dvLs")}});
//# sourceMappingURL=20.4ef651657b8290491ff9.js.map