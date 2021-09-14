廖雪峰官网

[https://www.liaoxuefeng.com/wiki/896043488029600](https://www.liaoxuefeng.com/wiki/896043488029600)

Git 是一个工具，分布式版本控制系统，区别于SVN集中式。

**常用的命令如下：**

1. 拉取一个远端分支到本地并切换到本地新分支
2. 重置上一次的commit
3. 提交部分代码到一个远程分支

## **一、新建代码库**

```jsx
$ git init  在当前目录新建一个Git代码库
$ git init [project-name] 新建一个目录，将其初始化为Git代码库
# 下载一个项目和它的整个代码历史**$ git clone** [url]
```

## **二、配置**

Git的设置文件为.gitconfig，它可以在用户主目录下（全局配置），也可以在项目目录下（项目配置）。

```jsx
$ git config --list # 显示当前的Git配置
$ git config -e [--global] # 编辑Git配置文件
# 设置提交代码时的用户信息
$ git config [--global] user.name "[name]"
$ git config [--global] user.email "[email address]"
```

## **三、增加/删除文件**

```jsx
$ git add [file1] [file2] # 添加指定文件到暂存区
$ git add [dir] # 添加指定目录到暂存区，包括子目录
$ git add .  # 添加当前目录的所有文件到暂存区
$ git add -p # 添加每个变化前，都会要求确认# 对于同一个文件的多处变化，可以实现分次提交
$ git rm --cached [file] # 停止追踪指定文件，但该文件会保留在工作区
$ git mv [file-original] [file-renamed]# 改名文件，并且将这个改名放入暂存区
```

## **四、代码提交**

```jsx
$ git commit -m [message] # 提交暂存区到仓库区
$ git commit [file1] [file2] ... -m [message] # 提交暂存区的指定文件到仓库区
$ git commit -a # 提交工作区自上次commit之后的变化，直接到仓库区
$ git commit --amend [file1] [file2] ... # 重做上一次commit，并包括指定文件的新变化
$ git commit --amend -m [message] # 使用一次新的commit，替代上一次提交# 如果代码没有任何新变化，则用来改写上一次commit的提交信息
```

## **五、分支**

```jsx
$ git branch -r # 列出所有本地分支**$ git branch**# 列出所有远程分支
**$ git branch -a  # 列出所有本地分支和远程分支
$ git checkout -b [branch] # 新建一个分支，并切换到该分支
$ git branch --track [branch] [remote-branch]# 新建一个分支，与指定的远程分支建立追踪关系
$ git branch --set-upstream [branch] [remote-branch]# 建立追踪关系，在现有分支与指定的远程分支之间

$ git merge [branch] # 合并指定分支到当前分支
$ git branch -d [branch-name] # 删除分支
$ git push origin --delete [branch-name]# 删除远程分支**
```

## 六**、查看信息**

```jsx
**$ git status # 显示有变更的**文件**
$ git log --follow [file] # 显示某个文件的版本历史，包括文件改名
$ git whatchanged [file] # 显示某个文件的版本历史，包括文件改名
$ git diff [first-branch]...[second-branch] # 显示两次提交之间的差异**

```

## **八、远程同步**

```jsx
$ git fetch [remote] # 下载远程仓库的所有变动
$ git remote -v # 显示所有远程仓库
$ git pull [remote] [branch] # 取回远程仓库的变化，并与本地分支合并
$ git push [remote] --all # 推送所有分支到远程仓库
**$ git push [remote] [branch] # 上传本地指定分支到远程仓库**
$ git push [remote] --force# 强行推送当前分支到远程仓库，即使有冲突
$ git remote show [remote] # 显示某个远程仓库的信息
$ git remote add [shortname] [url]# 增加一个新的远程仓库，并命名
```

## **九、撤销**

```jsx
$ git checkout [file] # 恢复暂存区的指定文件到工作区
$ git checkout [commit] [file]# 恢复某个commit的指定文件到暂存区和工作区
$ git checkout . # 恢复暂存区的所有文件到工作区
$ git reset [file]# 重置暂存区的指定文件，与上一次commit保持一致，但工作区不变
$ git revert [commit]# 新建一个commit，用来撤销指定commit# 后者的所有变化都将被前者抵消，并且应用到当前分支
$ git reset [commit]# 重置当前分支的指针为指定commit，同时重置暂存区，但工作区不变
$ git reset --hard [commit] # 重置当前分支的HEAD为指定commit，同时重置暂存区和工作区，与指定commit一致
```