webpackJsonp([44],{Iukv:function(t,e,i){t.exports=i("x1vw")},x1vw:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",[i("p",[t._v("廖雪峰官网")]),t._v(" "),i("p",[i("a",{attrs:{href:"https://www.liaoxuefeng.com/wiki/896043488029600"}},[t._v("https://www.liaoxuefeng.com/wiki/896043488029600")])]),t._v(" "),i("p",[t._v("Git 是一个工具，分布式版本控制系统，区别于SVN集中式。")]),t._v(" "),i("p",[i("strong",[t._v("常用的命令如下：")])]),t._v(" "),i("ol",[i("li",[t._v("拉取一个远端分支到本地并切换到本地新分支")]),t._v(" "),i("li",[t._v("重置上一次的commit")]),t._v(" "),i("li",[t._v("提交部分代码到一个远程分支")])]),t._v(" "),i("h2",[i("strong",[t._v("一、新建代码库")])]),t._v(" "),i("pre",[i("code",{staticClass:"language-jsx"},[t._v("$ git init  在当前目录新建一个Git代码库\n$ git init [project-name] 新建一个目录，将其初始化为Git代码库\n# 下载一个项目和它的整个代码历史**$ git clone** [url]\n")])]),t._v(" "),i("h2",[i("strong",[t._v("二、配置")])]),t._v(" "),i("p",[t._v("Git的设置文件为.gitconfig，它可以在用户主目录下（全局配置），也可以在项目目录下（项目配置）。")]),t._v(" "),i("pre",[i("code",{staticClass:"language-jsx"},[t._v("$ git config --list # 显示当前的Git配置\n$ git config -e [--global] # 编辑Git配置文件\n# 设置提交代码时的用户信息\n$ git config [--global] user.name "),i("span",{staticClass:"hljs-string"},[t._v('"[name]"')]),t._v("\n$ git config [--global] user.email "),i("span",{staticClass:"hljs-string"},[t._v('"[email address]"')]),t._v("\n")])]),t._v(" "),i("h2",[i("strong",[t._v("三、增加/删除文件")])]),t._v(" "),i("pre",[i("code",{staticClass:"language-jsx"},[t._v("$ git add [file1] [file2] # 添加指定文件到暂存区\n$ git add [dir] # 添加指定目录到暂存区，包括子目录\n$ git add .  # 添加当前目录的所有文件到暂存区\n$ git add -p # 添加每个变化前，都会要求确认# 对于同一个文件的多处变化，可以实现分次提交\n$ git rm --cached [file] # 停止追踪指定文件，但该文件会保留在工作区\n$ git mv [file-original] [file-renamed]# 改名文件，并且将这个改名放入暂存区\n")])]),t._v(" "),i("h2",[i("strong",[t._v("四、代码提交")])]),t._v(" "),i("pre",[i("code",{staticClass:"language-jsx"},[t._v("$ git commit -m [message] # 提交暂存区到仓库区\n$ git commit [file1] [file2] ... -m [message] # 提交暂存区的指定文件到仓库区\n$ git commit -a # 提交工作区自上次commit之后的变化，直接到仓库区\n$ git commit --amend [file1] [file2] ... # 重做上一次commit，并包括指定文件的新变化\n$ git commit --amend -m [message] # 使用一次新的commit，替代上一次提交# 如果代码没有任何新变化，则用来改写上一次commit的提交信息\n")])]),t._v(" "),i("h2",[i("strong",[t._v("五、分支")])]),t._v(" "),i("pre",[i("code",{staticClass:"language-jsx"},[t._v("$ git branch -r # 列出所有本地分支**$ git branch**# 列出所有远程分支\n**$ git branch -a  # 列出所有本地分支和远程分支\n$ git checkout -b [branch] # 新建一个分支，并切换到该分支\n$ git branch --track [branch] [remote-branch]# 新建一个分支，与指定的远程分支建立追踪关系\n$ git branch --"),i("span",{staticClass:"hljs-keyword"},[t._v("set")]),t._v("-upstream [branch] [remote-branch]# 建立追踪关系，在现有分支与指定的远程分支之间\n\n$ git merge [branch] # 合并指定分支到当前分支\n$ git branch -d [branch-name] # 删除分支\n$ git push origin --delete [branch-name]# 删除远程分支**\n")])]),t._v(" "),i("h2",[t._v("六**、查看信息**")]),t._v(" "),i("pre",[i("code",{staticClass:"language-jsx"},[t._v("**$ git status # 显示有变更的**文件**\n$ git log --follow [file] # 显示某个文件的版本历史，包括文件改名\n$ git whatchanged [file] # 显示某个文件的版本历史，包括文件改名\n$ git diff [first-branch]...[second-branch] # 显示两次提交之间的差异**\n\n")])]),t._v(" "),i("h2",[i("strong",[t._v("八、远程同步")])]),t._v(" "),i("pre",[i("code",{staticClass:"language-jsx"},[t._v("$ git fetch [remote] # 下载远程仓库的所有变动\n$ git remote -v # 显示所有远程仓库\n$ git pull [remote] [branch] # 取回远程仓库的变化，并与本地分支合并\n$ git push [remote] --all # 推送所有分支到远程仓库\n**$ git push [remote] [branch] # 上传本地指定分支到远程仓库**\n$ git push [remote] --force# 强行推送当前分支到远程仓库，即使有冲突\n$ git remote show [remote] # 显示某个远程仓库的信息\n$ git remote add [shortname] [url]# 增加一个新的远程仓库，并命名\n")])]),t._v(" "),i("h2",[i("strong",[t._v("九、撤销")])]),t._v(" "),i("pre",[i("code",{staticClass:"language-jsx"},[t._v("$ git checkout [file] # 恢复暂存区的指定文件到工作区\n$ git checkout [commit] [file]# 恢复某个commit的指定文件到暂存区和工作区\n$ git checkout . # 恢复暂存区的所有文件到工作区\n$ git reset [file]# 重置暂存区的指定文件，与上一次commit保持一致，但工作区不变\n$ git revert [commit]# 新建一个commit，用来撤销指定commit# 后者的所有变化都将被前者抵消，并且应用到当前分支\n$ git reset [commit]# 重置当前分支的指针为指定commit，同时重置暂存区，但工作区不变\n$ git reset --hard [commit] # 重置当前分支的HEAD为指定commit，同时重置暂存区和工作区，与指定commit一致\n")])])])}]},a=i("VU/8")(null,n,!1,null,null,null);e.default=a.exports}});
//# sourceMappingURL=44.833287afbcff1b748a7a.js.map