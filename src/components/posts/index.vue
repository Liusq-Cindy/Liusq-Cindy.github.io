<!-- 博客文章页面 -->
<template>
  <div>
   <components :is="getBlogComponent()"></components>
  </div>
</template>

<script>
// 基础综述部分
const blogbuild = () => import('./basic/blogbuild.md')
const youya = () => import('./basic/youya.md')
const webside = () => import('./basic/webside.md')
// html部分
const basicTag = () => import('./html/basicTag.md')
const basicQA = () => import('./html/basicQA.md')
const html5 = () => import('./html/html5.md')
const vDom = () => import('./html/vDom.md')
const testHtml = () => import('./html/test-html.md')
// css部分
const cssBasicQA1 = () => import('./css/cssBasicQA1.md')
const cssBasicQA2 = () => import('./css/cssBasicQA2.md')
const cssApply = () => import('./css/cssApply.md')
const css3 = () => import('./css/css3.md')
const testCss = () => import('./css/test-css.md')
// js部分
const jsQA1 = () => import('./js/jsQA1.md')
const jsQA2 = () => import('./js/jsQA2.md')
const objectProto = () => import('./js/object-proto.md')
const constructor = () => import('./js/constructor.md')
const thisJs = () => import('./js/thisJs.md')
const arrayApi = () => import('./js/arrayApi.md')
const stringApi = () => import('./js/stringApi.md')
const throttle = () => import('./js/throttle.md')
const eventloop = () => import('./js/eventloop.md')
const jsDesign = () => import('./js/jsDesign.md')
const jsFunc = () => import('./js/jsFunc.md')
const reg = () => import('./js/reg.md')
const codeChange = () => import('./js/codeChange.md')
const promise = () => import('./js/promise.md')
const ts = () => import('./js/ts.md')
const es6 = () => import('./js/es6.md')
const jsByhand1 = () => import('./js/jsByhand1.md')
const jsByhand2 = () => import('./js/jsByhand2.md')
const lodashGet = () => import('./js/lodashGet.md')
const testJs = () => import('./js/test-js.md')
// chrome及http部分
const chromeBasic = () => import('./chrome-http/chromeBasic.md')
const chromeCache = () => import('./chrome-http/chromeCache.md')
const chromePaint = () => import('./chrome-http/chromePaint.md')
const chromeQA = () => import('./chrome-http/chromeQA.md')
const httpDoc = () => import('./chrome-http/httpDoc.md')
const httpHistory = () => import('./chrome-http/httpHistory.md')
const testHttp = () => import('./chrome-http/test-http.md')
const webSafe = () => import('./chrome-http/webSafe.md')
const websocket = () => import('./chrome-http/websocket.md')
// 性能工具及系统工程
const webOptimize = () => import('./perform-tools/webOptimize.md')
const imgLazyload = () => import('./perform-tools/imgLazyload.md')
const git = () => import('./perform-tools/git.md')
const codeDebugger = () => import('./perform-tools/codeDebugger.md')
const webpackBasic = () => import('./perform-tools/webpackBasic.md')
const webpackDemo = () => import('./perform-tools/webpackDemo.md')
const webFlow = () => import('./perform-tools/webFlow.md')
const echart = () => import('./perform-tools/echart.md')
const linux = () => import('./perform-tools/linux.md')

export default {
  name: 'artical',
  components: {
    // 综述
    blogbuild,
    youya,
    webside,
    // html系列
    basicTag,
    basicQA,
    html5,
    vDom,
    testHtml,
    // css系列
    cssBasicQA1,
    cssBasicQA2,
    cssApply,
    css3,
    testCss,
    // js系列
    jsQA1,
    jsQA2,
    objectProto,
    constructor,
    thisJs,
    arrayApi,
    stringApi,
    throttle,
    eventloop,
    jsDesign,
    jsFunc,
    reg,
    codeChange,
    promise,
    ts,
    es6,
    jsByhand1,
    jsByhand2,
    lodashGet,
    testJs,
    // chrome及http部分
    chromeBasic,
    chromeCache,
    chromePaint,
    chromeQA,
    httpDoc,
    httpHistory,
    testHttp,
    webSafe,
    websocket,
    // 性能工具及系统工程
    webOptimize,
    imgLazyload,
    git,
    codeDebugger,
    webpackBasic,
    webpackDemo,
    webFlow,
    echart,
    linux
  },
  methods: {
    getBlogComponent () {
      return this.$route.params.articalName || 'blogbuild'
    }
  }
}
</script>
