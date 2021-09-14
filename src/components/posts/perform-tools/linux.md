> 公司常见的服务一般都是linux系统，前端有可能也会去看一下线上机器等问题，尤其当测试环境和线上环境出现一些问题，本地又不能复现，需要我们去进行调试处理。所以掌握一些linux的操作和命令尤为重要

# 1、常见Linux命令

### 1、ssh连接线上机器

`ssh 用户名[@](mailto:qa@192.168.94.140)ip地址` 然后输入密码登入，查看一些文件内容等等

切换root，不一定都有root权限， `sudo su - root`

### 2、常用操作

```bash
open .  打开本机中目录文件夹
cat  查看文件内容
ls -a   查看文件夹的文件，包括隐藏文件
ll     列表形式查看文件夹
rm ** 删除文件
rm -r ** 删除文件夹
rm -rf ** 强制删除文件夹内容
tab键 帮助填写后面的内容
touch a.js  新建a.js文件
```

### 3、新建操作一个文件

```bash
touch a.js  新建一个a.js文件
vi  a.js 打开文件，进入了编辑器模式，
//  也可以vim a.js 等于上面两条命令，如果没有a.js，会新建一个a.js文件
i    点一下i，进入输入模式，可以输入
esc   输入完，点一下esc，退出输入
:w    保存，writeen
:q  退出，这样a.js就有了内容了
// 不想保存强制退出，就不用：w,直接:q!
cat a.js 可以查看a.js的内容
```

### 4、vim教程

输入vimtutor，会在控制台显示vim的各种命令

# 2、从prd项目了解服务器的一些知识

### 一、ssh是什么？通常用来做什么？

### [ssh](https://blog.csdn.net/li528405176/article/details/82810342)（secure shell）是一种专为远程登录会话和其他网络服务提供安全性的协议；

1、他包含客户端和服务器（分别对应安装在客户端电脑和远程服务器上）；

2、Linux 系统中是通过 ssh 服务实现的远程登录功能，默认 ssh 服务端口号为 22。访问远程服务器肯定不会去机房访问，通常是使用ssh远程登录，它提供了两种登录方式1、口令登录  2、公钥登录

### （1）、口令登录 `ssh 客户端用户名@服务器ip地址`

简单来说，输入远程服务器账号密码即可登录到远程，之后命令行则操作的是远程服务器

### （2）、公钥登录

需要在本地生成秘钥对，然后将公钥复制到服务器上，之后就不用输入密码登录了(具体见[ssh介绍](https://blog.csdn.net/li528405176/article/details/82810342))

```bash
ssh-keygen -t rsa   #-t表示类型选项，这里采用rsa加密算法
ssh-copy-id ldz@192.168.0.1
```

### 二、Linux系统基础

### 通常我们通过 ssh 登录了Linux 系统的服务器，是为了在服务器上进行一些操作: [详细命令](https://www.runoob.com/linux/linux-file-content-manage.html)

### 处理目录的常用命令

[Untitled](https://www.notion.so/f605f95fbee1497781aea123afbb9936)

### 三、nginx代理本地静态文件

[nginx官网](http://nginx.org/en/docs/)[nginx中文文档](https://www.nginx.cn/doc/)

### 简单来说，nginx是一个代理服务器，他可以帮助我们实现http代理、反向代理（客户端向服务端发起请求是正向代理，服务端处理请求返回给客户端就是反向代理）、负载均衡等，prd项目用它来代理到服务端的本地文件。

### 1、nginx 安装及启动（mac为例）

> nginx原理和机制可见：nginx机制介绍（有点晦涩，界面不好看）、nginx入门介绍-简书系列文章（言简意赅）

> nginx下载安装，分为mac和windows。
mac可见：mac下安装nginx
windows可见（未亲测）：win下安装nginx

以mac为例，首先我们需要安装`homebrew`，这是macOS缺失的软件包管理器，具体可查看[homebrew文档](https://brew.sh/index_zh-cn.html)

```
/bin/bash -c "$(curl -fsSL <https://raw.githubusercontent.com/Homebrew/install/master/install.sh>)"

```

然后，用brew安装nginx

```
brew install nginx

```

可使用 nginx -v测试是否安装好，然后启动

```
nginx

```

打开浏览器访问：localhost:8080,会看到nginx的welcome首页，表示nginx已安装并启动
关闭nginx也很简单，执行

```
nginx -s stop

```

### 2、nginx配置

> nginx.conf文件通常是安装在/usr/local/etc/nginx/nginx.conf目录下，基本我们对nginx的配置都在这个文件中进行，关于这个文件配置的构成，可见参考文档

可能用到的基本操作命令

```
nginx -v #查看nginx版本及基本配置
nginx -t #测试nginx.conf配置是否有效

cat nginx.conf # 查看nginx.conf文件
vim nginx.conf # 编辑conf文件 i 进入insert模式
:wq # 保存并退出

nginx -s reload # 重新加载配置文件
nginx -s reopen # 重新加载日志
nginx -s stop # 停止 nginx

```

配置本地web应用，参考如下nginx.conf配置文件（[示例](https://www.jianshu.com/p/69b622e631f6)）

```
# 全局块，Nginx 服务器处理并发任务数
worker_processes  1;
# events块，这里设置的是每个 work process 支持的最大连接数为 1024
events {
    worker_connections  1024;
}
# 主要配置，功能
http {
    include       mime.types;
    default_type  application/octet-stream;
    sendfile        on;
    keepalive_timeout  65;
    // 这是自带的server配置
    server {
        listen       8080; # 监听端口
        server_name  localhost;
        location / {
            root   html; # 设置本地网络文件夹路径
            index  index.html index.htm;
        }
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }
    # 每个 http 块可以包括多个 server 块，而每个 server 块就相当于一个虚拟主机。
    #这里可将监听的端口、服务名，代理到location中的本地文件
    server {
        listen       8085; # 监听端口
        server_name  localhost;
        # location也可以配置多个
        location / {
            root   /Users/liuliu/Desktop/prd-app; # 设置你本地要代理的文件夹路径
            index  index.html index.htm;
        }
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }
    include servers/*;
}

```

这里针对最常用的server配置单独说一下

以上为代理本地文件，那对于服务器上的文件，指定域名，要怎么配置呢？[参考菜鸟配置详解](https://www.runoob.com/w3cnote/nginx-setup-intro.html)、[范例](https://blog.csdn.net/winy_lm/article/details/84881038)

```
server {
        listen       80; # 对域名，默认配置为80端口
        server_name  test.nginx.com; # 域名
        location / { # locatino块配置请求的路由，以及各种页面的处理情况
           proxy_pass  <http://localhost:13626/;> #请求转向localhost定义的服务器列表
        }
    }

```

最后，感兴趣可以了解一下[nginx、apache、tomcat的区别](https://blog.csdn.net/weixin_44221613/article/details/88410701?utm_medium=distribute.pc_relevant.none-task-blog-title-2&spm=1001.2101.3001.4242)

### 四、持续集成 CI

### 五、docker

### 是什么？

> 基于[知乎：理解docker],简单来说,docker就是集装箱原理，docker容器就是集装箱。

Docker本身不是容器，他是创建容器的工具，是应用容器引擎它将应用程序及其所有依赖项以容器的形式打包在一起，以确保应用程序在任何环境中无缝运行。

Docker容器，将一个软件包在一个完整的文件系统中，其中包含运行所需的一切：代码、运行时、系统工具、系统库等任何可以安装在服务器上的东西。

### docker是LXC有关的容器技术

LXC,linux containner,就是linux容器虚拟技术，他比传统的虚拟机技术，如VMWare，更轻量

### docker技术的三大核心：镜像、容器、仓库:[具象解释](https://www.zhihu.com/question/28300645)

搭建一次，生成`镜像`，存储在`仓库`中，可以到处构建docker`容器`。

负责对Docker镜像进行管理的，是Docker Registry服务（类似仓库管理员）

### 常见docker命令

[常见命令大全](https://www.runoob.com/docker/docker-command-manual.html)

```
// 示例
- docker build -t prd-app:latest .
// docker创建一个 -t 名为prd-app，最新版本的镜像
- docker rm -f prd-app >/dev/null 2>&1 || true
// 删除运行中的容器，重定向到空设备文件，标准错误输出也重定向到空设备文件。如果出错，执行下一步
- docker run --name prd-app -d -p 13626:13626 -v /data/prd:/prd prd-app:latest
//  docker 运行名为prd-app的容器，后台运行，指定端口映射主机端口13626：容器端口13626 ，绑定一个卷 data目录下的prd:/prd 绑定到prd-app:latest;
// 主机的目录 /data 映射到容器的 /data

```