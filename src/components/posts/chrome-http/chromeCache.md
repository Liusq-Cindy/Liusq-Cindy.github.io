学习文章：

[彻底理解浏览器的缓存机制](https://juejin.cn/post/6844903593275817998)

# 一、概念

浏览器的缓存，通常也被称为http缓存。其机制是根据HTTP报文的缓存标识进行的。

**缓存过程**

浏览器第一次向服务器发起该请求后拿到请求结果，会根据响应报文中HTTP头的缓存标识，决定是否缓存结果，是则将请求结果和缓存标识存入浏览器缓存中

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/169d0112-4935-45e0-89b3-2a6e8d59e21c/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/169d0112-4935-45e0-89b3-2a6e8d59e21c/Untitled.png)

根据是否需要向服务器重新发起HTTP请求将缓存过程分为两个部分，分别是强制缓存和协商缓存

### 强制缓存

强制缓存就是向浏览器**缓存查找**该请求结果，并根据该结果的缓存规则来决定是否使用该缓存结果的过程，强制缓存的情况主要有三种

1. 不存在该缓存结果和缓存标识，强制缓存失效，则直接向服务器发起请求（跟第一次发起请求一致）
2. 存在该缓存结果和缓存标识，但该结果已失效，强制缓存失效，则使用协商缓存
3. 存在该缓存结果和缓存标识，且该结果尚未失效，强制缓存生效，直接返回该结果

### 协商缓存

协商缓存就是强制缓存失效后，浏览器携带**缓存标识**向服务器发起请求，由服务器根据缓存标识决定是否使用缓存的过程

1. 协商缓存生效，返回304
2. 协商缓存失效，返回200和请求结果

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e616e169-68c1-427a-9b2f-224f9e80d9b6/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e616e169-68c1-427a-9b2f-224f9e80d9b6/Untitled.png)

- 那么强制缓存的缓存规则是什么？

# 二、控制强制缓存的字段

控制强制缓存的字段分别是Expires和Cache-Control，其中**Cache-Control优先级比Expires高**。控制缓存的字段都是在响应报文的HTTP头中和请求结果一起返回给浏览器**（Response Headers），是服务端在返回请求结果时一起返回的字段。**

## Expires 到期

Expires是HTTP/1.0控制网页缓存的字段，其值为服务器返回该请求结果缓存的到期时间，即再次发起该请求时，如果客户端的时间小于Expires的值时，直接使用缓存结果。

## Cache-Control 缓存控制

到了HTTP/1.1，Expire已经被Cache-Control替代，它是最重要的规则，主要用于控制网页缓存，主要取值为：

1. public：所有内容都将被缓存（客户端和代理服务器都可缓存）
2. private：所有内容只有客户端可以缓存，Cache-Control的默认取值
3. no-cache：客户端缓存内容，但是是否使用缓存则需要经过协商缓存来验证决定
4. no-store：所有内容都不会被缓存，即不使用强制缓存，也不使用协商缓存
5. max-age=xxx (xxx is numeric)：缓存内容将在xxx秒后失效

# 三、内存缓存(from memory cache)和硬盘缓存(from disk cache)

1. 内存缓存(from memory cache)：内存缓存具有两个特点，分别是**快速读取**和**时效性**：
    1. 快速读取：内存缓存会将编译解析后的文件，直接存入该进程的内存中，占据该进程一定的内存资源，以方便下次运行使用时的快速读取。
    2. 时效性：一旦该进程关闭，则该进程的内存则会清空。
2. 硬盘缓存(from disk cache)：硬盘缓存则是直接将缓存写入硬盘文件中，读取缓存需要对该缓存存放的硬盘文件进行I/O操作，然后重新解析该缓存内容，读取复杂，速度比内存缓存慢

在浏览器中，浏览器会在js和图片等文件解析执行后直接存入内存缓存中，那么当刷新页面时只需直接从内存缓存中读取(from memory cache)；而css文件则会存入硬盘文件中，所以每次渲染页面都需要从硬盘读取缓存(from disk cache)

# 四、控制协商缓存的字段

### Last-Modified / If-Modified-Since

1. Last-Modified是服务器响应请求时，返回该**资源文件在服务器最后被修改的时间，响应头内**
2. If-Modified-Since则是客户端再次发起该请求时，**携带上次请求返回的Last-Modified值**，请求头，通过此字段值告诉服务器该资源上次请求返回的最后被修改时间。服务器收到该请求，发现请求头含有If-Modified-Since字段，则会根据If-Modified-Since的字段值与该资源在服务器的最后被修改时间做对比。根据资源是否改变返回304或200。

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/04d18df6-5726-43a6-a3f7-d4b4f2a6e0c3/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/04d18df6-5726-43a6-a3f7-d4b4f2a6e0c3/Untitled.png)

### Etag / If-None-Match

1. Etag是服务器响应请求时，**返回**当前资源文件的一个唯一标识(由服务器生成)
2. If-None-Match是客户端**再次发起该请求**时，携带上次请求返回的唯一标识Etag值

服务器收到该请求后，发现该请求头中含有If-None-Match，则会根据If-None-Match的字段值与该资源在服务器的Etag值做对比，一致则返回304，代表资源无更新，继续使用缓存文件；不一致则重新返回资源文件，状态码为200

# 总结

强制缓存优先于协商缓存进行，若强制缓存(`Expires和Cache-Control`)生效则直接使用缓存，若不生效则进行协商缓存(`Last-Modified / If-Modified-Since和Etag / If-None-Match`)，协商缓存由服务器决定是否使用缓存，若协商缓存失效，那么代表该请求的缓存失效，重新获取请求结果，再存入浏览器缓存中；生效则返回304，继续使用缓存，主要过程如下：

[https://user-gold-cdn.xitu.io/2018/4/19/162db635ed5f6d26?imageView2/0/w/1280/h/960/format/webp/ignore-error/1](https://user-gold-cdn.xitu.io/2018/4/19/162db635ed5f6d26?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)