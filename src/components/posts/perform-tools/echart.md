> 随着可视化数据越来越流行，项目中时常用图表来代替表格的显示，这样不仅更为直观，也可以将更多的数据简洁的罗列出来。目前最流行的两个画图工具，一个是echarts,一个是antV。在实际项目的开发中，这两种工具都有使用，下面分别对这两种的使用进行简单的总结

# 一、两者的选型

以目前的使用来看，两者基本都能满足普通的业务需求，实现上差不多。我自己在使用中，是一般会选择echats,但是专门的移动端业务会选择antv的F2。总的来说，有以下几个大点：

### 1.成熟度

echats是非常老牌的库了，文档非常详细，遇到问题的话网上搜到的解决办法也会多一些

### 2.兼容移动端

antv下PC和H5是两套引擎，PC是G2,另外有专门给移动端做的解决方案---F2，如果是仅在移动端显示的图表，用F2会更方便。echarts没有区分移动和PC，可以写一套统一的代码，不过兼容可能有一些细节需要自己做一些处理。

### 3.入手速度

两者文档基本都比较全面。但是我自己个人感受来说，echarts文档虽然全面，但是界面有点难看，可读性比较差，一条条列出所有配置，有时候很难找到所需的内容；而antV的文档页面则非常直观，且样式好看，易上手。

### 4.默认样式

antv的默认样式比较好看

### 5.实际使用代码编写

1. echarts需要分别引入他的line模块、pan模块等用来画线图、饼图等等，且它的很多配置在标签上，代码比较分散，但符合平时写element组件的习惯。不足是如果想要一张图显示多种类型图，会比较麻烦，如综合显示点图、线图、面积图。
2. antv的F2是将数据绑定在一个canvas组件里，标签上没有多余配置，所有数据改动和配置综合在一个方法里，整体性更强，且综合多图比较方便灵活。

# 二、echarts

> 官网：https://www.echartsjs.com/zh/index.html
官方示例演示（可修改代码实时查看效果）：https://www.echartsjs.com/examples/zh/index.html

## 1.使用

具体可查看官方文档

## 2.示例（vue)-

基本是这种配置方式，data参数请忽略

```jsx
<div>
<ve-line
:data="overviewData"
:settings="overviewParam.setting"
:extend="overviewParam.extend"
:colors="overviewParam.colors">
</ve-line>
</div>

...

import VeLine from 'v-charts/lib/line';

components: {
VeLine
}

computed: {
  overviewData () {
      const { surveryOverviewData } = this;
      let data = {
        columns: ['日期', '提交人次'],
        rows: surveryOverviewData.map(item => {
          return {
            '日期': utils.formatDate(new Date(item.gmtCreate), 'YYYY-MM-DD'),
            '提交人次': item.totalNum
          };
        })
      };
      return data;
    }
}
data () {
  return {
    overviewParam: {
        colors: ['#3E7FEE', '#77A5F3', '#F5A623'],
        extend: {
          // 系列列表
          series: {
            // 光滑曲线改为折线
            smooth: false
          },
          // 图例样式
          legend: {
            // right: 200,
            textStyle: {
              color: '#34384B',
              fontSize: 14
            },
            icon: 'circle'
          },
          xAxis: {
            axisLine: {
              show: true,
              lineStyle: {
                color: '#3E7FEE'
              }
            },
            axisLabel: {
              color: '#8C9AB4',
              formatter: (value, index) => {
                return value.substr(5);
              }
            }
          },
          yAxis: {
            splitLine: {
              show: true,
              lineStyle: {
                color: '#E9EFFD',
                type: 'dashed'
              }
            },
            axisLine: {
              show: false
            },
            axisLabel: {
              color: '#8C9AB4'
            }
          },
          // 弹窗自定义
          tooltip: {
            padding: 0,
            formatter: (params) => {
              if (!Array.isArray(params)) {
                params = [params];
              }
              let date = params[0].name || '';
              date = date.split('-');
              date = date[0] + '年' + date[1] + '月' + date[2] + '日';

              let str = `<div style="padding: 12px; border-radius:4px; background: #485465">
                        <div style="margin-bottom: 6px; color: #9AA2AB">${date}</div>`;

              params.forEach(item => {
                str += `<div>
                          <span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color: ${item.color}"></span>
                          <span>${item.seriesName}: ${item.value[1]}</span>
                        </div>`;
              });
              str += '</div>';
              return str;
            }
          }
        },
        settings: {
        }
    },
  }
}

```

# 三、antv

> AntV 是蚂蚁金服全新一代数据可视化解决方案，我们常用到的，是其中的G2可视化引擎和F2移动可视化方案。
官网：https://antv.vision/zh

## 1.使用

具体可查看官方文档

## 2.示例（vue）

```jsx
<canvas id="myWeightChart" class="canvas" ref="myWeightChart" />
...
import F2 from '@antv/f2/lib/index'
...
// 在需要重新绘制图片的时候，触发事件，在事件内完成图表各参数的定义
    drawPic (weightData) {
      // load the data
      chart.source(weightData, {
        measureTime: {
          ticks,
          range: [ 0.05, 0.95 ]
        },
        value: {
          nice: true,
          tickInterval: Math.ceil((max - min) / 4),
          min,
          max
          // tickCount: 4
        }
      })
      // Y轴样式
      chart.axis('weight', {
        label: (text, index, total) => {
          const cfg = {
            fontSize: '20',
            fontFamily: 'dinbold',
            fontWeight: 'bold',
            fill: '#9FA5BA'
          }

          return cfg
        }
      })
      // 时间轴样式
      chart.axis('measureTime', {
        label: (text, index, total) => {
          const cfg = {
            text: moment(ticks[index] * 1).format('MM.DD'),
            fontSize: '16',
            fontFamily: 'dinbold',
            fill: '#9FA5BA',
            fontWeight: '600'
          }
          // 第一个点左对齐，最后一个点右对齐，其余居中，只有一个点时左对齐
          if (index === 0) {
            cfg.textAlign = 'start'
          }
          if (index > 0 && index === total - 1) {
            cfg.textAlign = 'end'
          }
          return cfg
        }
      })
      // 提示内容
      chart.tooltip({
        showCrosshairs: true, // 辅助线
        crosshairsStyle: {
          // 配置辅助线的样式
          stroke: '#D0DFF7',
          lineWidth: 0
        },
        custom: true, // 允许自定义
        alwaysShow: true,
        triggerOn: ['touchstart'],
        background: {
          radius: 4,
          padding: [ 6, 10 ]
        }
      })
      // 面积样式
      chart.area()
        .position('measureTime*weight')
        .color('l(90) 0:#3F86FF 1:#f7f7f7')
        .shape('smooth')
      // 线条样式
      chart.line()
        .position('measureTime*weight')
        .color('#3F86FF')
        .size('4')
        .shape('smooth')
      chart.point()
        .position('measureTime*weight')
        .color('#fff')
        .style({
          lineWidth: 2,
          stroke: '#D0DFF7'
        })
        .size('4')
      chart.render()
      console.log('结束画图')
    }

```