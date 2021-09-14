<!-- 博客文章页面 -->
<template>
  <div>
   <components :is="getBlogComponent()"></components>
  </div>
</template>

<script>
// 基础综述部分
import blogbuild from './basic/blogbuild.md'
import youya from './basic/youya.md'
import webside from './basic/webside.md'
// html部分
import basicTag from './html/basicTag.md'
import basicQA from './html/basicQA.md'
import html5 from './html/html5.md'
import vDom from './html/vDom.md'
import testHtml from './html/test-html.md'
// css部分
import cssBasicQA1 from './css/cssBasicQA1.md'
import cssBasicQA2 from './css/cssBasicQA2.md'
import cssApply from './css/cssApply.md'
import css3 from './css/css3.md'
import testCss from './css/test-css.md'
// js部分
import jsQA1 from './js/jsQA1.md'
import jsQA2 from './js/jsQA2.md'
import object from './js/object.md'
import constructor from './js/constructor.md'
import thisJs from './js/thisJs.md'
import arrayApi from './js/arrayApi.md'
import stringApi from './js/stringApi.md'
import throttle from './js/throttle.md'
import eventloop from './js/eventloop.md'
import jsDesign from './js/jsDesign.md'
import jsFunc from './js/jsFunc.md'
import reg from './js/reg.md'
import codeChange from './js/codeChange.md'
import promise from './js/promise.md'
import ts from './js/ts.md'
import es6 from './js/es6.md'
import jsByhand1 from './js/jsByhand1.md'
import jsByhand2 from './js/jsByhand2.md'
import lodashGet from './js/lodashGet.md'
import testJs from './js/test-js.md'
// chrome及http部分
import chromeBasic from './chrome-http/chromeBasic.md'
import chromeCache from './chrome-http/chromeCache.md'
import chromePaint from './chrome-http/chromePaint.md'
import chromeQA from './chrome-http/chromeQA.md'
import httpDoc from './chrome-http/httpDoc.md'
import httpHistory from './chrome-http/httpHistory.md'
import testHttp from './chrome-http/test-http.md'
import webSafe from './chrome-http/webSafe.md'
import websocket from './chrome-http/websocket.md'

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
    object,
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
    websocket
  },
  methods: {
    getBlogComponent () {
      return this.$route.params.articalName
    }
  }
}
</script>
