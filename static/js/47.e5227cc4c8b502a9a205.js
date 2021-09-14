webpackJsonp([47],{F8dh:function(s,t,a){s.exports=a("i/+0")},"i/+0":function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("blockquote",[a("p",[s._v("随着可视化数据越来越流行，项目中时常用图表来代替表格的显示，这样不仅更为直观，也可以将更多的数据简洁的罗列出来。目前最流行的两个画图工具，一个是echarts,一个是antV。在实际项目的开发中，这两种工具都有使用，下面分别对这两种的使用进行简单的总结")])]),s._v(" "),a("h1",[s._v("一、两者的选型")]),s._v(" "),a("p",[s._v("以目前的使用来看，两者基本都能满足普通的业务需求，实现上差不多。我自己在使用中，是一般会选择echats,但是专门的移动端业务会选择antv的F2。总的来说，有以下几个大点：")]),s._v(" "),a("h3",[s._v("1.成熟度")]),s._v(" "),a("p",[s._v("echats是非常老牌的库了，文档非常详细，遇到问题的话网上搜到的解决办法也会多一些")]),s._v(" "),a("h3",[s._v("2.兼容移动端")]),s._v(" "),a("p",[s._v("antv下PC和H5是两套引擎，PC是G2,另外有专门给移动端做的解决方案---F2，如果是仅在移动端显示的图表，用F2会更方便。echarts没有区分移动和PC，可以写一套统一的代码，不过兼容可能有一些细节需要自己做一些处理。")]),s._v(" "),a("h3",[s._v("3.入手速度")]),s._v(" "),a("p",[s._v("两者文档基本都比较全面。但是我自己个人感受来说，echarts文档虽然全面，但是界面有点难看，可读性比较差，一条条列出所有配置，有时候很难找到所需的内容；而antV的文档页面则非常直观，且样式好看，易上手。")]),s._v(" "),a("h3",[s._v("4.默认样式")]),s._v(" "),a("p",[s._v("antv的默认样式比较好看")]),s._v(" "),a("h3",[s._v("5.实际使用代码编写")]),s._v(" "),a("ol",[a("li",[s._v("echarts需要分别引入他的line模块、pan模块等用来画线图、饼图等等，且它的很多配置在标签上，代码比较分散，但符合平时写element组件的习惯。不足是如果想要一张图显示多种类型图，会比较麻烦，如综合显示点图、线图、面积图。")]),s._v(" "),a("li",[s._v("antv的F2是将数据绑定在一个canvas组件里，标签上没有多余配置，所有数据改动和配置综合在一个方法里，整体性更强，且综合多图比较方便灵活。")])]),s._v(" "),a("h1",[s._v("二、echarts")]),s._v(" "),a("blockquote",[a("p",[s._v("官网：https://www.echartsjs.com/zh/index.html\n官方示例演示（可修改代码实时查看效果）：https://www.echartsjs.com/examples/zh/index.html")])]),s._v(" "),a("h2",[s._v("1.使用")]),s._v(" "),a("p",[s._v("具体可查看官方文档")]),s._v(" "),a("h2",[s._v("2.示例（vue)-")]),s._v(" "),a("p",[s._v("基本是这种配置方式，data参数请忽略")]),s._v(" "),a("pre",[a("code",{staticClass:"language-jsx"},[s._v("<div>\n"),a("span",{staticClass:"xml"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("ve-line")]),s._v("\n"),a("span",{staticClass:"hljs-attr"},[s._v(":data")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"overviewData"')]),s._v("\n"),a("span",{staticClass:"hljs-attr"},[s._v(":settings")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"overviewParam.setting"')]),s._v("\n"),a("span",{staticClass:"hljs-attr"},[s._v(":extend")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"overviewParam.extend"')]),s._v("\n"),a("span",{staticClass:"hljs-attr"},[s._v(":colors")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"overviewParam.colors"')]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("ve-line")]),s._v(">")])]),s._v("\n<"),a("span",{staticClass:"hljs-regexp"},[s._v("/div>\n\n...\n\nimport VeLine from 'v-charts/")]),s._v("lib/line"),a("span",{staticClass:"hljs-string"},[s._v("';\n\ncomponents: {\nVeLine\n}\n\ncomputed: {\n  overviewData () {\n      const { surveryOverviewData } = this;\n      let data = {\n        columns: ['")]),s._v("日期"),a("span",{staticClass:"hljs-string"},[s._v("', '")]),s._v("提交人次"),a("span",{staticClass:"hljs-string"},[s._v("'],\n        rows: surveryOverviewData.map(item => {\n          return {\n            '")]),s._v("日期"),a("span",{staticClass:"hljs-string"},[s._v("': utils.formatDate(new Date(item.gmtCreate), '")]),s._v("YYYY-MM-DD"),a("span",{staticClass:"hljs-string"},[s._v("'),\n            '")]),s._v("提交人次"),a("span",{staticClass:"hljs-string"},[s._v("': item.totalNum\n          };\n        })\n      };\n      return data;\n    }\n}\ndata () {\n  return {\n    overviewParam: {\n        colors: ['")]),s._v("#"),a("span",{staticClass:"hljs-number"},[s._v("3E7")]),s._v("FEE"),a("span",{staticClass:"hljs-string"},[s._v("', '")]),s._v("#"),a("span",{staticClass:"hljs-number"},[s._v("77")]),s._v("A5F3"),a("span",{staticClass:"hljs-string"},[s._v("', '")]),s._v("#F5A623"),a("span",{staticClass:"hljs-string"},[s._v("'],\n        extend: {\n          // 系列列表\n          series: {\n            // 光滑曲线改为折线\n            smooth: false\n          },\n          // 图例样式\n          legend: {\n            // right: 200,\n            textStyle: {\n              color: '")]),s._v("#"),a("span",{staticClass:"hljs-number"},[s._v("34384")]),s._v("B"),a("span",{staticClass:"hljs-string"},[s._v("',\n              fontSize: 14\n            },\n            icon: '")]),s._v("circle"),a("span",{staticClass:"hljs-string"},[s._v("'\n          },\n          xAxis: {\n            axisLine: {\n              show: true,\n              lineStyle: {\n                color: '")]),s._v("#"),a("span",{staticClass:"hljs-number"},[s._v("3E7")]),s._v("FEE"),a("span",{staticClass:"hljs-string"},[s._v("'\n              }\n            },\n            axisLabel: {\n              color: '")]),s._v("#"),a("span",{staticClass:"hljs-number"},[s._v("8")]),s._v("C9AB4"),a("span",{staticClass:"hljs-string"},[s._v("',\n              formatter: (value, index) => {\n                return value.substr(5);\n              }\n            }\n          },\n          yAxis: {\n            splitLine: {\n              show: true,\n              lineStyle: {\n                color: '")]),s._v("#E9EFFD"),a("span",{staticClass:"hljs-string"},[s._v("',\n                type: '")]),s._v("dashed"),a("span",{staticClass:"hljs-string"},[s._v("'\n              }\n            },\n            axisLine: {\n              show: false\n            },\n            axisLabel: {\n              color: '")]),s._v("#"),a("span",{staticClass:"hljs-number"},[s._v("8")]),s._v("C9AB4"),a("span",{staticClass:"hljs-string"},[s._v("'\n            }\n          },\n          // 弹窗自定义\n          tooltip: {\n            padding: 0,\n            formatter: (params) => {\n              if (!Array.isArray(params)) {\n                params = [params];\n              }\n              let date = params[0].name || '")]),a("span",{staticClass:"hljs-string"},[s._v("';\n              date = date.split('")]),s._v("-"),a("span",{staticClass:"hljs-string"},[s._v("');\n              date = date[0] + '")]),s._v("年"),a("span",{staticClass:"hljs-string"},[s._v("' + date[1] + '")]),s._v("月"),a("span",{staticClass:"hljs-string"},[s._v("' + date[2] + '")]),s._v("日"),a("span",{staticClass:"hljs-string"},[s._v('\';\n\n              let str = `<div style="padding: 12px; border-radius:4px; background: #485465">\n                        <div style="margin-bottom: 6px; color: #9AA2AB">${date}</div>`;\n\n              params.forEach(item => {\n                str += `<div>\n                          <span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color: ${item.color}"></span>\n                          <span>${item.seriesName}: ${item.value[1]}</span>\n                        </div>`;\n              });\n              str += \'')]),s._v("<"),a("span",{staticClass:"hljs-regexp"},[s._v("/div>';\n              return str;\n            }\n          }\n        },\n        settings: {\n        }\n    },\n  }\n}\n\n")])])]),s._v(" "),a("h1",[s._v("三、antv")]),s._v(" "),a("blockquote",[a("p",[s._v("AntV 是蚂蚁金服全新一代数据可视化解决方案，我们常用到的，是其中的G2可视化引擎和F2移动可视化方案。\n官网：https://antv.vision/zh")])]),s._v(" "),a("h2",[s._v("1.使用")]),s._v(" "),a("p",[s._v("具体可查看官方文档")]),s._v(" "),a("h2",[s._v("2.示例（vue）")]),s._v(" "),a("pre",[a("code",{staticClass:"language-jsx"},[s._v("<canvas id="),a("span",{staticClass:"hljs-string"},[s._v('"myWeightChart"')]),s._v(" "),a("span",{staticClass:"hljs-class"},[a("span",{staticClass:"hljs-keyword"},[s._v("class")])]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"canvas"')]),s._v(" ref="),a("span",{staticClass:"hljs-string"},[s._v('"myWeightChart"')]),s._v(" />\n...\nimport F2 "),a("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v("'@antv/f2/lib/index'")]),s._v("\n...\n"),a("span",{staticClass:"hljs-comment"},[s._v("// 在需要重新绘制图片的时候，触发事件，在事件内完成图表各参数的定义")]),s._v("\n    drawPic (weightData) {\n      "),a("span",{staticClass:"hljs-comment"},[s._v("// load the data")]),s._v("\n      chart.source(weightData, {\n        "),a("span",{staticClass:"hljs-attr"},[s._v("measureTime")]),s._v(": {\n          ticks,\n          "),a("span",{staticClass:"hljs-attr"},[s._v("range")]),s._v(": [ "),a("span",{staticClass:"hljs-number"},[s._v("0.05")]),s._v(", "),a("span",{staticClass:"hljs-number"},[s._v("0.95")]),s._v(" ]\n        },\n        "),a("span",{staticClass:"hljs-attr"},[s._v("value")]),s._v(": {\n          "),a("span",{staticClass:"hljs-attr"},[s._v("nice")]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(",\n          "),a("span",{staticClass:"hljs-attr"},[s._v("tickInterval")]),s._v(": "),a("span",{staticClass:"hljs-built_in"},[s._v("Math")]),s._v(".ceil((max - min) / "),a("span",{staticClass:"hljs-number"},[s._v("4")]),s._v("),\n          min,\n          max\n          "),a("span",{staticClass:"hljs-comment"},[s._v("// tickCount: 4")]),s._v("\n        }\n      })\n      "),a("span",{staticClass:"hljs-comment"},[s._v("// Y轴样式")]),s._v("\n      chart.axis("),a("span",{staticClass:"hljs-string"},[s._v("'weight'")]),s._v(", {\n        "),a("span",{staticClass:"hljs-attr"},[s._v("label")]),s._v(": "),a("span",{staticClass:"hljs-function"},[s._v("("),a("span",{staticClass:"hljs-params"},[s._v("text, index, total")]),s._v(") =>")]),s._v(" {\n          "),a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" cfg = {\n            "),a("span",{staticClass:"hljs-attr"},[s._v("fontSize")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'20'")]),s._v(",\n            "),a("span",{staticClass:"hljs-attr"},[s._v("fontFamily")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'dinbold'")]),s._v(",\n            "),a("span",{staticClass:"hljs-attr"},[s._v("fontWeight")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'bold'")]),s._v(",\n            "),a("span",{staticClass:"hljs-attr"},[s._v("fill")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'#9FA5BA'")]),s._v("\n          }\n\n          "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" cfg\n        }\n      })\n      "),a("span",{staticClass:"hljs-comment"},[s._v("// 时间轴样式")]),s._v("\n      chart.axis("),a("span",{staticClass:"hljs-string"},[s._v("'measureTime'")]),s._v(", {\n        "),a("span",{staticClass:"hljs-attr"},[s._v("label")]),s._v(": "),a("span",{staticClass:"hljs-function"},[s._v("("),a("span",{staticClass:"hljs-params"},[s._v("text, index, total")]),s._v(") =>")]),s._v(" {\n          "),a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" cfg = {\n            "),a("span",{staticClass:"hljs-attr"},[s._v("text")]),s._v(": moment(ticks[index] * "),a("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(").format("),a("span",{staticClass:"hljs-string"},[s._v("'MM.DD'")]),s._v("),\n            "),a("span",{staticClass:"hljs-attr"},[s._v("fontSize")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'16'")]),s._v(",\n            "),a("span",{staticClass:"hljs-attr"},[s._v("fontFamily")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'dinbold'")]),s._v(",\n            "),a("span",{staticClass:"hljs-attr"},[s._v("fill")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'#9FA5BA'")]),s._v(",\n            "),a("span",{staticClass:"hljs-attr"},[s._v("fontWeight")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'600'")]),s._v("\n          }\n          "),a("span",{staticClass:"hljs-comment"},[s._v("// 第一个点左对齐，最后一个点右对齐，其余居中，只有一个点时左对齐")]),s._v("\n          "),a("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" (index === "),a("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(") {\n            cfg.textAlign = "),a("span",{staticClass:"hljs-string"},[s._v("'start'")]),s._v("\n          }\n          "),a("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" (index > "),a("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(" && index === total - "),a("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(") {\n            cfg.textAlign = "),a("span",{staticClass:"hljs-string"},[s._v("'end'")]),s._v("\n          }\n          "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" cfg\n        }\n      })\n      "),a("span",{staticClass:"hljs-comment"},[s._v("// 提示内容")]),s._v("\n      chart.tooltip({\n        "),a("span",{staticClass:"hljs-attr"},[s._v("showCrosshairs")]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(", "),a("span",{staticClass:"hljs-comment"},[s._v("// 辅助线")]),s._v("\n        "),a("span",{staticClass:"hljs-attr"},[s._v("crosshairsStyle")]),s._v(": {\n          "),a("span",{staticClass:"hljs-comment"},[s._v("// 配置辅助线的样式")]),s._v("\n          "),a("span",{staticClass:"hljs-attr"},[s._v("stroke")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'#D0DFF7'")]),s._v(",\n          "),a("span",{staticClass:"hljs-attr"},[s._v("lineWidth")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("\n        },\n        "),a("span",{staticClass:"hljs-attr"},[s._v("custom")]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(", "),a("span",{staticClass:"hljs-comment"},[s._v("// 允许自定义")]),s._v("\n        "),a("span",{staticClass:"hljs-attr"},[s._v("alwaysShow")]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(",\n        "),a("span",{staticClass:"hljs-attr"},[s._v("triggerOn")]),s._v(": ["),a("span",{staticClass:"hljs-string"},[s._v("'touchstart'")]),s._v("],\n        "),a("span",{staticClass:"hljs-attr"},[s._v("background")]),s._v(": {\n          "),a("span",{staticClass:"hljs-attr"},[s._v("radius")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("4")]),s._v(",\n          "),a("span",{staticClass:"hljs-attr"},[s._v("padding")]),s._v(": [ "),a("span",{staticClass:"hljs-number"},[s._v("6")]),s._v(", "),a("span",{staticClass:"hljs-number"},[s._v("10")]),s._v(" ]\n        }\n      })\n      "),a("span",{staticClass:"hljs-comment"},[s._v("// 面积样式")]),s._v("\n      chart.area()\n        .position("),a("span",{staticClass:"hljs-string"},[s._v("'measureTime*weight'")]),s._v(")\n        .color("),a("span",{staticClass:"hljs-string"},[s._v("'l(90) 0:#3F86FF 1:#f7f7f7'")]),s._v(")\n        .shape("),a("span",{staticClass:"hljs-string"},[s._v("'smooth'")]),s._v(")\n      "),a("span",{staticClass:"hljs-comment"},[s._v("// 线条样式")]),s._v("\n      chart.line()\n        .position("),a("span",{staticClass:"hljs-string"},[s._v("'measureTime*weight'")]),s._v(")\n        .color("),a("span",{staticClass:"hljs-string"},[s._v("'#3F86FF'")]),s._v(")\n        .size("),a("span",{staticClass:"hljs-string"},[s._v("'4'")]),s._v(")\n        .shape("),a("span",{staticClass:"hljs-string"},[s._v("'smooth'")]),s._v(")\n      chart.point()\n        .position("),a("span",{staticClass:"hljs-string"},[s._v("'measureTime*weight'")]),s._v(")\n        .color("),a("span",{staticClass:"hljs-string"},[s._v("'#fff'")]),s._v(")\n        .style({\n          "),a("span",{staticClass:"hljs-attr"},[s._v("lineWidth")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("2")]),s._v(",\n          "),a("span",{staticClass:"hljs-attr"},[s._v("stroke")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'#D0DFF7'")]),s._v("\n        })\n        .size("),a("span",{staticClass:"hljs-string"},[s._v("'4'")]),s._v(")\n      chart.render()\n      "),a("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),a("span",{staticClass:"hljs-string"},[s._v("'结束画图'")]),s._v(")\n    }\n\n")])])])}]},l=a("VU/8")(null,n,!1,null,null,null);t.default=l.exports}});
//# sourceMappingURL=47.e5227cc4c8b502a9a205.js.map