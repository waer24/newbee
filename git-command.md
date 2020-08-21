参数：1个字母一个-，2个字母以上2个--

*********
git基础
*********
检查已有的配置信息	git config --list	 (2横线）
设置用户名：git config --global user.name "Darcy"
具体的配置			git config user.[具体信息]  	eg: git config user.name
取得git项目方法1，新建仓库，还未跟踪 	git init
取得git项目方法2，现有仓库克隆		git clone [url] 	eg:	git clone git://github.com/schacon/grit.git
现有仓库克隆，并重新更名项目名称		git clone [url] <newname>
开始追踪文件(目标文件快照放入暂存区)	git add <filename>
当前状态（大略）					git status
文件在工作区和暂存区具体做了哪些修改？（还未暂存）	git diff
看已经暂存起来的文件和上次提交时的快照之间的差异（已暂存）   git diff --stated
跳过git add，直接一步到位存储到暂存区		git commit -a "comment"                commit:承诺
重命名文件 							git mv file_from file_to 	eg: git mv src/App.vue	 src/App2.vue
（补充：git mv相当于运行了3条命令 	mv file_from file_to //   rm file_from // git add file_to ）
查看git提交历史（最近的2次的差异） 		git log -p -2
	单词层面的差异对此				git log -UI --word-diff
	摘要显示，增减的行数统计			git log --stat
	每个提交放在一行展示				git log --pretty=format:oneline
	个性化展示记录格式				git log --pretty=format:"%h - %an, %ar : %s"  (格式自定义)
	简单图文展示日志					git log --pretty=format:"%h  %s" --graph
	按自定义时间限制展示日志			eg:	git log --since=2.weeks
撤销最后一次提交						git commit --amend
撤销已经保存到暂存区的文件				git reset HEAD <file>
取消对文件的修改(用于撤销之后后悔，没必要撤销)git checkout -- <file>
删除文件(暂存区和工作区删除)				git rm <file>
删除之前修改过，且已经放到暂存区域  		git rm -f <file>
仅从跟踪清单（暂存区）中移除，但是不删除文件  git rm --cached <file>




**********
remote
*********
远程仓库信息		git remote show [remote-name]
远程地址			git remote -v      verbose：详细
远程仓库名			git remote
添加远程仓库		git remote add [shortname] [url]  		eg：git remote add origin git: //....
推送数据到远程仓库	git push [远程名] [本地分支]	(推送本地分支到远程分支，对应的，远程也有了相同名称的分支，远程分支只能这么创建)
从远程抓取本地没有的数据	git fetch [remote-name]
远程仓库重命名		git remote rename [oldname] [newname]
跟踪远程分支 法1		git remote --track [remote-name]  		eg: origin/master
跟踪远程分支个		git remote checkout -b [local-name] [remote-name]
删除远程仓库		git remote rm [远程名]
删除远程分支（简略）	git push [远程名] :[远程分支]
删除远程分支（详细）	git push [远程名] [本地分支] :[远程分支]
删除远程分支		git push origin --delete [branch-name]

fetch了远程分支，在本地仍然无法编辑远程分支，只有它的指针，需要merge到当前分支	git merge [远程分支]
或者如果想要一份自己的本地分支，可以在该远程分支分化一个新的分支：git checkout -b [本地分支名] [远程分支]，此时其内容与fetch的远程分支一样
这样，自己就可以开发了，这个本地分支实质也是跟踪分支。 跟踪分支 (tracking branch)。跟踪分支是一种和某个远程分支有直接联系的本地分支



*********
branch
*********
所有分支			git branch -a
远程分支			git branch -r
新建分支 			git branch [name]
切换分支			git checkout [name]
切换并新建分支		git checkout -b [name]
合并分支			git merge [name]
删除分支			git branch -d [name]		git status:查看冲突=》手动解决=〉git add 提交=》git status再次查看状态=〉git commit
各分支最后一次提交	git branch -v
已经合并的分支		git branch --merged
尚未合并的分支		git branch --no-merged
强制删除分支		git branch -D		（删除还未合并的分支，会导致丢失数据，git原则上不让删除，但可以强制删除）
推送本地分支(省略)	git push [远程仓库名] [本地分支]	“取出我在本地的xx 分支，推送到远程仓库的xx 分支中去"这个和推送数据是一样的
推送本地分支（详细）	git push [本地分支] :[远程分支]	‘上传我本地的xx分支到远程仓库中去，仍旧称它为xx 分支，可以更名




*****
tag
*****
查看已有的标签		git tag
查看指定的版本号标签	git show [version]
指定标签的搜索模式	git tag -l  '搜索条件'		eg: git tag -l 'v1.4.*' (列出所有1.4.～的标签)
含附注的标签 		git tag -a v1.4 -m '注释'   	annotated: 注释
签署标签（加私钥）	git tag -s  	v.14 -m '注释'  	signed
验证签署标签（公钥）	git tag -v [version]		verify 验证
后期补标签			git tag -a [version] [然后是相应某个提交对象的校验和]
删除标签(本地)		git tag -d [旧标签名]
删除标签（远程）		git tag -d [旧标签名]  然后再git push origin :refs/tags/旧标签名
推送标签到远程		git push [remoteName] [tagname]
一次推送所有标签到远程 git push [remoteName] --tags





*******
other
*******
设置别名(取消暂存文件) 				git config --global alias.unstage 'reset HEAD -- '	git unstage即可查看
	查看最后一次的提交信息			git config --global alias.last 'log -l HEAD'			git last即可查看
	运行外部命令，而非git子命令		git config --global alias.visual '!gitk'				前面用！封装
ssh
	生成						ssh-keygen -t rsa -C “email”
	复制公钥到网站				cat ~/.ssh/id_rsa.pub
	添加生成的SSH到ssh agent		ssh-add ~/.ssh/id_rsa
	测试						ssh -T git@github.com		eg:  ssh -T git@gitee.com


*****
1: 通过res打补丁，patch，计算出各版本的文件内容
2. 分布式的客户端都有项目的整个镜像文件，Git 更像是个小型的文件系统
3. git的绝大多数操作都是在本地执行
4. "快照" 经常指概念上的copy + 物理上的引用．而不是真的有2份，便于节省存储空间+快照回滚
5. 在 Git 内都只有三种状态：已提交（committed），已修改（modified）和已暂存（staged）
6. 已提交表示该文件已经被安全地保存在本地数据库中了；已修改表示修改了某个文件，但还没有提交保存；已暂存表示把已修改的文件放在下次提交时要保存的清单中。
7 如果是 Git 目录中保存着的特定版本文件，就属于已提交状态； 如果作了修改并已放入暂存区域，就属于已暂存状态；如果自上次取出后，作了修改但还没有放到暂存区域，就是已修改状态。
8.  本地中的工作目录其实都是从git中的目录对象压缩出来的
9.  基本的 Git 工作流程如下：
在工作目录中修改某些文件。
对修改后的文件进行快照，然后保存到暂存区域。
提交更新，将保存在暂存区域的文件快照永久转储到 Git 目录（本地的.git）中。
10.   ~/.gitconfig		存储--global的设置

*****
1.  2种取得git仓库的做法，新建init或者clone
2：工作区的状态只有两种，已跟踪/未跟踪
3.  nothing to commit, working directory clean    所有已跟踪文件在上次提交后都未被更改过，当前目录下还没有未跟踪的文件
4.  Changes to be committed: 说明是已暂存状态，如果此时提交，那么该文件此时此刻的版本将被留存在历史记录中
5.  Changes not staged for commit. 已跟踪的文件发生了变化，但还没有放到暂存区
6.  git add 命令（这是个多功能命令，根据目标文件的状态不同，此命令的效果也不同：可以用它开始跟踪新文件，或者把已跟踪的文件放到暂存区，还能用于合并时把有冲突的文件标记为已解决状态等），一个文件出现2次修改，需要多次git add

7.  文件 .gitignore 的格式规范如下：
所有空行或者以注释符号 ＃ 开头的行都会被 Git 忽略。
可以使用标准的 glob 模式匹配。
匹配模式最后跟反斜杠（/）说明要忽略的是目录。
要忽略指定模式以外的文件或目录，可以在模式前加上惊叹号（!）取反。
eg：  # 此为注释 – 将被 Git 忽略
# 忽略所有 .a 结尾的文件
*.a
# 但 lib.a 除外
!lib.a
# 仅仅忽略项目根目录下的 TODO 文件，不包括 subdir/TODO
/TODO
# 忽略 build/ 目录下的所有文件
build/
# 会忽略 doc/notes.txt 但不包括 doc/server/arch.txt
doc/*.txt
# 忽略 doc/ 目录下所有扩展名为 txt 的文件
doc/**/*.txt
8.  git \*.log  会递归删除当前目录及其子目录中所有.log结尾的文件.    git rm log/\*.log  删除当前目录及其子目录中所有 ~ 结尾的文件（不递归）
9.  个性化的展示git日志：
选项	说明
%H	提交对象（commit）的完整哈希字串
%h	提交对象的简短哈希字串
%T	树对象（tree）的完整哈希字串
%t	树对象的简短哈希字串
%P	父对象（parent）的完整哈希字串
%p	父对象的简短哈希字串
%an	作者（author）的名字
%ae	作者的电子邮件地址
%ad	作者修订日期（可以用 -date= 选项定制格式）
%ar	作者修订日期，按多久以前的方式显示
%cn	提交者(committer)的名字
%ce	提交者的电子邮件地址
%cd	提交日期
%cr	提交日期，按多久以前的方式显示
%s	提交说明

选项	说明
-(n)	仅显示最近的 n 条提交
--since, --after	仅显示指定时间之后的提交。
--until, --before	仅显示指定时间之前的提交。
--author	仅显示指定作者相关的提交。
--committer	仅显示指定提交者相关的提交。



1.  fetch 命令只是将远端的数据拉到本地仓库，并不自动合并到当前工作分支，只有当你确实准备好了，才能手工合并
2.  如果在你推数据前，已经有其他人推送了若干更新，那你的推送操作就会被驳回。你必须先把他们的更新抓取到本地，合并到自己的项目中，然后才可以再次推送
3.  对远程仓库的重命名，也会使对应的分支名称发生变化
4  验证签署标签没有公钥会报错
5  默认情况下，git push 并不会把标签传送到远端服务器上，只有通过显式命令才能分享标签到远端仓库
6 输入git ，再按tab，可以自动补全，一次不行按两次


1.  HEAD 可以理解为当前分支的别名
2. 值得注意的是之前 hotfix 分支的修改内容尚未包含到 iss53 中来。如果需要纳入此次修补，可以用 git merge master 把 master 分支合并到 iss53；或者等 iss53 完成之后，再将 iss53 分支中的更新并入 master
3.  如果在不同的分支中都修改了同一个文件的同一部分，Git 就无法干净地把两者合到一起（译注：逻辑上说，这种问题只能由人来裁决。）
4. topic：特性分支 	proposed / pu 建议分支
5.  一次 Git 克隆会建立你自己的本地分支 master 和远程分支 origin/master，并且将它们都指向 origin 上的 master 分支
6. 删除唯一的远程分支，git会拒绝。


远程分支就像是书签

