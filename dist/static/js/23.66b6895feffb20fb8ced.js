webpackJsonp([23],{XmMT:function(s,t,a){s.exports=a("apu8")},apu8:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("p",[s._v("参考资料：")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.jianshu.com/p/11d84af237c0"}},[s._v("你不懂JS：this与对象原型 第一章：this是什么？")])]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.jianshu.com/p/fcbc21a2c507"}},[s._v("你不懂JS：this与对象原型 第二章：this豁然开朗！")])]),s._v(" "),a("h2",[s._v("一、this是什么？")]),s._v(" "),a("pre",[a("code",{staticClass:"language-jsx"},[a("span",{staticClass:"hljs-comment"},[s._v("//第一种调用,其实this不会指向foo函数对象")]),s._v("\n"),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),a("span",{staticClass:"hljs-title"},[s._v("foo")]),s._v("("),a("span",{staticClass:"hljs-params"},[s._v("num")]),s._v(") ")]),s._v("{\n    "),a("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log( "),a("span",{staticClass:"hljs-string"},[s._v('"foo: "')]),s._v(" + num );\n\n    "),a("span",{staticClass:"hljs-comment"},[s._v("// 追踪`foo`被调用了多少次")]),s._v("\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".count++;\n}\n\nfoo.count = "),a("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(";\n\n"),a("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" i;\n\n"),a("span",{staticClass:"hljs-keyword"},[s._v("for")]),s._v(" (i="),a("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("; i<"),a("span",{staticClass:"hljs-number"},[s._v("10")]),s._v("; i++) {\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" (i > "),a("span",{staticClass:"hljs-number"},[s._v("5")]),s._v(") {\n        foo( i );\n    }\n}\n"),a("span",{staticClass:"hljs-comment"},[s._v("// foo: 6")]),s._v("\n"),a("span",{staticClass:"hljs-comment"},[s._v("// foo: 7")]),s._v("\n"),a("span",{staticClass:"hljs-comment"},[s._v("// foo: 8")]),s._v("\n"),a("span",{staticClass:"hljs-comment"},[s._v("// foo: 9")]),s._v("\n\n"),a("span",{staticClass:"hljs-comment"},[s._v("// `foo`被调用了多少次？")]),s._v("\n"),a("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log( foo.count ); "),a("span",{staticClass:"hljs-comment"},[s._v("// 0 -- 这他妈怎么回事……？")]),s._v("\n\n"),a("span",{staticClass:"hljs-comment"},[s._v("// 换一种方式 foo.call( foo, i );")]),s._v("\n"),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),a("span",{staticClass:"hljs-title"},[s._v("foo")]),s._v("("),a("span",{staticClass:"hljs-params"},[s._v("num")]),s._v(") ")]),s._v("{\n    "),a("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log( "),a("span",{staticClass:"hljs-string"},[s._v('"foo: "')]),s._v(" + num );\n\n    "),a("span",{staticClass:"hljs-comment"},[s._v("// 追踪`foo`被调用了多少次")]),s._v("\n    "),a("span",{staticClass:"hljs-comment"},[s._v("// 注意：由于`foo`的被调用方式（见下方），`this`现在确实是`foo`")]),s._v("\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".count++;\n}\n\nfoo.count = "),a("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(";\n\n"),a("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" i;\n\n"),a("span",{staticClass:"hljs-keyword"},[s._v("for")]),s._v(" (i="),a("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("; i<"),a("span",{staticClass:"hljs-number"},[s._v("10")]),s._v("; i++) {\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" (i > "),a("span",{staticClass:"hljs-number"},[s._v("5")]),s._v(") {\n        "),a("span",{staticClass:"hljs-comment"},[s._v("// 使用 `call(..)`，我们可以保证`this`指向函数对象(`foo`)")]),s._v("\n        foo.call( foo, i );\n    }\n}\n"),a("span",{staticClass:"hljs-comment"},[s._v("// foo: 6")]),s._v("\n"),a("span",{staticClass:"hljs-comment"},[s._v("// foo: 7")]),s._v("\n"),a("span",{staticClass:"hljs-comment"},[s._v("// foo: 8")]),s._v("\n"),a("span",{staticClass:"hljs-comment"},[s._v("// foo: 9")]),s._v("\n\n"),a("span",{staticClass:"hljs-comment"},[s._v("// `foo`被调用了多少次？")]),s._v("\n"),a("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log( foo.count ); "),a("span",{staticClass:"hljs-comment"},[s._v("// 4")]),s._v("\n")])]),s._v(" "),a("p",[s._v("1、"),a("strong",[s._v("this不会以任何方式指向函数的 词法作用域")])]),s._v(" "),a("pre",[a("code",{staticClass:"language-jsx"},[a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),a("span",{staticClass:"hljs-title"},[s._v("foo")]),s._v("("),a("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" a = "),a("span",{staticClass:"hljs-number"},[s._v("2")]),s._v(";\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".bar();\n}\n\n"),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),a("span",{staticClass:"hljs-title"},[s._v("bar")]),s._v("("),a("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{\n    "),a("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log( "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".a );\n}\n\nfoo(); "),a("span",{staticClass:"hljs-comment"},[s._v("//undefined 这样的调用其实是在瞎搞")]),s._v("\n")])]),s._v(" "),a("p",[s._v("2、"),a("code",[s._v("this")]),s._v("不是编写时绑定，而是"),a("strong",[s._v("运行时绑定")]),s._v("。它依赖于函数调用的上下文条件。"),a("code",[s._v("this")]),s._v("绑定和函数声明的位置无关，反而和函数被调用的方式有关。")]),s._v(" "),a("p",[s._v("当一个函数被调用时，会建立一个活动记录，也称为执行环境。这个记录包含函数是从何处（call-stack）被调用的，函数是 "),a("em",[s._v("如何")]),s._v(" 被调用的，被传递了什么参数等信息。这个记录的属性之一，就是在函数执行期间将被使用的"),a("code",[s._v("this")]),s._v("引用。")]),s._v(" "),a("p",[s._v("3、this既不是函数自身的引用，也不是函数词法作用域的引用。this实际上是在函数被调用时建立的一个绑定，"),a("strong",[s._v("它指向 什么 是完全由函数被调用的调用点")]),s._v("来决定的。")]),s._v(" "),a("h2",[s._v("二、调用点")]),s._v(" "),a("p",[s._v("this是一个完全根据调用点（函数是如何被调用的）而为每次函数调用建立的绑定")]),s._v(" "),a("p",[s._v("为执行中的函数判定"),a("code",[s._v("this")]),s._v("绑定需要找到这个函数的"),a("strong",[s._v("直接调用点")]),s._v("。找到之后，4种规则将会以 "),a("em",[s._v("这个")]),s._v(" 优先顺序施用于调用点：")]),s._v(" "),a("ol",[a("li",[s._v("被"),a("code",[s._v("new")]),s._v("调用？使用新构建的对象。")]),s._v(" "),a("li",[s._v("被"),a("code",[s._v("call")]),s._v("或"),a("code",[s._v("apply")]),s._v("（或 "),a("code",[s._v("bind")]),s._v("）调用？使用指定的对象。")]),s._v(" "),a("li",[s._v("被持有调用的环境对象调用？使用那个环境对象。")]),s._v(" "),a("li",[s._v("默认："),a("code",[s._v("strict mode")]),s._v("下是"),a("code",[s._v("undefined")]),s._v("，否则就是全局对象。")])]),s._v(" "),a("p",[s._v("小心偶然或不经意的 "),a("em",[s._v("默认绑定")]),s._v(" 规则调用。如果你想“安全”地忽略"),a("code",[s._v("this")]),s._v("绑定，一个像"),a("code",[s._v("ø = Object.create(null)")]),s._v("这样的“DMZ”对象是一个很好的占位值，来保护"),a("code",[s._v("global")]),s._v("对象不受意外的副作用影响。")]),s._v(" "),a("p",[s._v("与这4种绑定规则不同，ES6的箭头方法使用词法作用域来决定"),a("code",[s._v("this")]),s._v("绑定，这意味着它们采用封闭他们的函数调用作为"),a("code",[s._v("this")]),s._v("绑定（无论它是什么）。它们实质上是ES6之前的"),a("code",[s._v("self = this")]),s._v("代码的语法替代品。")]),s._v(" "),a("h2",[s._v("三、练习巩固")])])}]},_=a("VU/8")(null,n,!1,null,null,null);t.default=_.exports}});
//# sourceMappingURL=23.66b6895feffb20fb8ced.js.map