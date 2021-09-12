# HTML的基础标签
关于html的标签，大家已经屡见不鲜，似乎已经没什么可说的了，但其实很多非常基础的标签，我们却不一定了解他这么设置的原因：

```jsx
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>文档标题</title>
		<script type="text/javascript" src="https://test.cn/demo.js">
		<link rel="stylesheet" type="text/css" href="theme.css">
		<style type="text/css">
			h1 {color:red;}
		</style>
	</head>
	 
	<body>
	文档内容......
	</body>
</html>
```
## 1、<!DOCTYPE html>

<!DOCTYPE> 声明位于文档中的最前面的位置，处于 <html> 标签之前。他不是一个 HTML 标签；它是用来告知 Web 浏览器页面使用了哪种 HTML 版本。

HTML 4.01 规定了三种不同的 <!DOCTYPE> 声明，分别是：Strict、Transitional 和 Frameset

**html5中只有一种：<!DOCTYPE html>**

## 2、<head> 标签

<head> 元素是所有头部元素的容器。必须包含文档的标题（title），可以包含脚本、样式、meta 信息 以及其他更多的信息。以下列出的元素能被用在 <head> 元素内部：

- [<title>](https://www.runoob.com/tags/tag-title.html) （在头部中，这个元素是必需的）
- [<style>](https://www.runoob.com/tags/tag-style.html)
- [<base>](https://www.runoob.com/tags/tag-base.html)
- [<link>](https://www.runoob.com/tags/tag-link.html)
- [<meta>](https://www.runoob.com/tags/tag-meta.html)
- [<script>](https://www.runoob.com/tags/tag-script.html)
- [<noscript>](https://www.runoob.com/tags/tag-noscript.html)

## 3、<meta> 标签

<meta> 标签提供了 HTML 文档的元数据。`元数据不会显示在客户端，但是会被浏览器解析。`通常用于指定网页的描述，关键词，文件的最后修改时间，作者及其他元数据。元数据可以被使用浏览器（如何显示内容或重新加载页面），搜索引擎（关键词），或其他 Web 服务调用。

```jsx
<head>
	<meta name="description" content="描述文案">
	<meta name="keywords" content="关键词，HTML,CSS,XML,JavaScript">
	<meta name="author" content="作者名">
	<meta http-equiv="refresh" content="300"> // 自动页面刷新
  // <meta http-equiv="content-type|default-style|refresh">
  // http-equiv 属性提供了 content 属性的信息/值的 HTTP 头。可用于模拟一个 HTTP 响应头。
	<meta charset="UTF-8">
</head>
```

## 4、<script> 标签

<script> 标签用于`定义客户端脚本，比如 JavaScript`。元素既可包含脚本语句，也可以通过 "src" 属性指向外部脚本文件。

```jsx
<script type="text/javascript">
   // 代码内容,如：
   document.write("Hello World!")
</script>
或
<script type="text/javascript" src="https://test.cn/demo.js"> // 引入外部资源，标签内必须为空
</script>
<script type="systemjs-importmap" src="https://micro-dependencies.guahao.cn/micro-deps.json"></script>
```

## 5、<link>标签

`链接到外部样式标签`

```jsx
<link rel="stylesheet" type="text/css" href="theme.css">
// rel：必需。定义当前文档与被链接文档之间的关系。如icon, stylesheet等
```

## 6、<style>标签

`<style> 标签定义 HTML 文档的样式信息。`在 <style> 元素中，您可以规定在浏览器中如何呈现 HTML 文档。每个 HTML 文档能包含多个 <style> 标签。

```jsx
<style type="text/css" scoped>
	h1 {color:red;}
	p {color:blue;}
</style>
"scoped" 属性是 HTML 5 中的新属性，它允许我们为文档的指定部分定义样式，而不是整个文档。
如果使用 "scoped" 属性，那么所规定的样式只能应用到 style 元素的父元素及其子元素。
```