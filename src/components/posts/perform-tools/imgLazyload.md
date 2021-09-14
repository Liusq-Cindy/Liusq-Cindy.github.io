### **图片懒加载**

图片懒加载在一些图片密集型的网站中运用比较多，通过图片懒加载可以让一些不可视的图片不去加载，避免一次性加载过多的图片导致请求阻塞（浏览器一般对同一域名下的并发请求的连接数有限制），这样就可以提高网站的加载速度，提高用户体验。

### **原理**

将页面中的img标签src指向一张小图片或者src为空，然后定义data-src（这个属性可以自定义命名，我才用data-src）属性指向真实的图片。src指向一张默认的图片，否则当src为空时也会向服务器发送一次请求。可以指向loading的地址。注意，图片要指定宽高。

**`<**img src**=**"default.jpg" data**-**src**=**"666.jpg" **/>**`

当载入页面时，先把可视区域内的img标签的data-src属性值负给src，然后监听滚动事件，把用户即将看到的图片加载。这样便实现了懒加载。

### **实例**

```jsx
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    img {
      display: block;
      margin-bottom: 50px;
      width: 400px;
      height: 400px;
    }
  </style>
</head>
<body>
  <img src="Go.png" data-src="./lifecycle.jpeg" alt="">
  <img src="Go.png" data-src="./lifecycle.jpeg" alt="">
  <img src="Go.png" data-src="./lifecycle.jpeg" alt="">
  <img src="Go.png" data-src="./lifecycle.jpeg" alt="">
  <img src="Go.png" data-src="./lifecycle.jpeg" alt="">
  <img src="Go.png" data-src="./lifecycle.jpeg" alt="">
  <img src="Go.png" data-src="./lifecycle.jpeg" alt="">
  <img src="Go.png" data-src="./lifecycle.jpeg" alt="">
  <img src="Go.png" data-src="./lifecycle.jpeg" alt="">
  <img src="Go.png" data-src="./lifecycle.jpeg" alt="">
  <img src="Go.png" data-src="./lifecycle.jpeg" alt="">
  <script>
		let num = document.getElementsByTagName('img').length;
    let img = document.getElementsByTagName("img");
    let n = 0; //存储图片加载到的位置，避免每次都从第一张图片开始遍历

    lazyload(); //页面载入完毕加载可视区域内的图片

    window.onscroll = lazyload;

    function lazyload() { //监听页面滚动事件
      let seeHeight = document.documentElement.clientHeight; //可见区域高度
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop; //滚动条距离顶部高度
      for (let i = n; i < num; i++) {
        if (img[i].offsetTop < seeHeight + scrollTop) {
          if (img[i].getAttribute("src") == "Go.png") {
            img[i].src = img[i].getAttribute("data-src");
          }
          n = i + 1;
        }
      }
    }
  </script>

</body>

</html>
```