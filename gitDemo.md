### GIT 代码提交相关操作
0. https://www.cnblogs.com/bigben0123/p/13208286.html
1. git checkout -b 新分支名  ---创建本地分支
2. git checkout -b 本地分支名 origin/远程分支名  ---c创建本地分支并拉取远程分支 --如果不行就先执行1，再执行4，再执行11
3. git branch -d 分支名 ---删除分支
4. git pull origin 远程分支 ---拉取远程指定分支，origin远程地址
5. git push origin 本地分支名:远程分支名 ---把新建的本地分支push到远程服务器，远程分支与本地分支同名
6. git push origin :远程分支名 ---删除远程分支，推送一个空分支到远程分支，其实就相当于删除远程分支 方法二：git push origin --delete 远程分支名   方法三： git branch -r -d origin/远程分支名  
7. git push --set-upstream origin 本地分支 ---创建一个本地分支，把本地分支推送到远程分支，本地新建了但是在远程没有 ---创建远程分支  ---本地分支关联远程分支
8. git checkout --track origin/远程分支 ---如果远程新建了一个分支，本地没有该分支。
9. git branch --set-upstream-to origin/远程分支 本地分支

10. git clone -b 远程分支名 origin ---拉取远程指定分支代码 
11. git push -u origin 远程分支名 ---加了参数-u后，以后即可直接用git push 代替git push origin master !!!也可以把本地已有分支关联远程指定分支

12. git branch -a  查看所有分支，本地分支和远程分支
 
13. git branch -r  查看远程分支

14. git  rm -rf --cached "文件名"  如果是第三方的git文件，解除绑定，然后重新 add commit 

### git 版本相关操作
1.  git log     ---查看历史版本
    git log --pretty=oneline    ---也是查看历史版本（只显示版本号）

2.  git reset –hard HEAD^^      ---回退到上上个版本，'^'：这个符号的个数代表返回的版本数
    git reset –hard HEAD~100    ---回退到往上100个版本
    git reset --hard aaa        ---回退到指定版本
    

3.  git reflog      ---每次操作的提交记录（回退版本后，又想回到最新的，用这个看版本id，然后回退）
4.  git push -f origin      ---以上本地分支回滚后，版本将落后远程分支，必须使用强制推送覆盖远程分支，否则无法推送到远程分支
### git 账户管理相关操作
1.  git --version 查看版本
2.  git config --global user.name "自定义用户名"  ---配置全局用户名和邮箱，
    git config --global user.email "邮箱"   ---取消全局用户名和邮箱在--global后加--unset
    git config --global user.password "密码"
    git config --global credential.helper store (输入这个命令后,以后只要在输入一次用户名密码)
    
3.  git config --global --list  ---查看当前全局变量
4.  >>> ssh-keygen -t rsa -C "yourmail@glanway.com" 生成第一个ssh key（邮箱）
    >>> 输入文件名
    >>> 直接按回车 就是不要密码
    进入【C:\Users\用户名.ssh】，点击鼠标右键-选择Git bash here，这一步很重要，不然在下面输入密钥名称的时候，会将密钥生成在当前打开git bash的路径下，比如我在桌面打开的git bash，就会生成在桌面上，当然也可以在输入名称前将路径补全。参考 https://www.cnblogs.com/mingyue5826/p/11141324.html
    要创建多个ssh key重复这个步骤用不同的文件名称就好
5.  执行ssh-agent命令
    ssh-agent就是一个密钥管理器，运行ssh-agent以后，使用ssh-add将私钥交给ssh-agent保管，其他程序需要身份验证的时候可以将验证申请交给ssh-agent来完成整个认证过程
6.  添加私钥，执行下面命令
    ssh-add ~/.ssh/id_rsa_github  ---‘id_rsa_github，id_rsa_gitlab’为生成的ssh key文件名
    ssh-add ~/.ssh/id_rsa_gitlab

    ~ 如果出现‘Could not open a connection to your authentication agent.’报错
    ~ 解决方法
    >>> 1. ps aux | grep ssh   ---查看已开启的ssh-agent线程
    >>> 2. kill 线程号   ---执行后什么都没返回为成功
    >>> 3. exec ssh-agent bash
           eval ssh-agent -s
    >>> 4. ssh-add ~/.ssh/id_rsa_github
           ssh-add ~/.ssh/id_rsa_gitlab   ---"Identity added: "为执行成功
    >>> 5. ssh -T git@github.com  测试
7.  创建并修改config文件
    创建config文件，将文件创建在【.ssh】目录下
    在windows下新建一个txt文本，然后将名字改成config（包括.txt后缀）
    编辑config文件,修改如下内容，配置文件里不能加注释
    每个Host主要配置HostName和IdentityFile两个属性即可

    # gitlab 
      Host v_renjuyuan    ---host的名字可以取为自己喜欢的名字，不过这个会影响git相关命令
      HostName git.woa.com   ---这个是真实的域名地址，这里填你们公司的git网址即可
      PreferredAuthentications publickey    ---配置登录时用什么权限认证--可设置publickey,password publickey,keyboard-interactive等
      IdentityFile ~/.ssh/id_rsa_gitlab   ---这里是id_rsa的地址
      User ruyi    ---配置使用用户名     

    # github
      Host myhub
      HostName github.com
      PreferredAuthentications publickey
      IdentityFile ~/.ssh/id_rsa_github
      User ruyi
8. ssh-keygen -t rsa -C "yourmail@xxxl.com"   ---生成单个SSH Key时可以连续回车，不输入密钥文件名字和密码,生成的文件带.hub的是公钥
9. 将公钥添加到github上
10. 测试
    输入如下代码，见到下图即配置成功
    ssh -T git@github.com
    ssh -T git@git.woa.com

### git账户管理相关操作难点
    1. 修改密码操作
        >>> 设置config
        >>> 删除凭据
        >>> 重新拉一次代码-> git clone
        >>> 输入账户名&密码

### cmd 相关操作
1. C: ---盘加':'冒号，跳到指定盘

git push https://github.com/RuyiT/vue3.git main Username for 'https://github.com': ruyi Password for 'https://2227429@github.com': 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


## git 个人令牌
git remote set-url origin https://<your_token>@github.com/<USERNAME>/<REPO>.git
 如：git remote set-url https://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@github.com/RuyiT/vue3.git
 如：git remote set-url https://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@github.com/RuyiT/node-server.git
 1.<your_token>：换成你自己得到的token
 2.<USERNAME>：是你自己github的用户名
 3.<REPO>：是你的仓库名称
然后git push https://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@github.com/RuyiT/vue3.git
然后git push https://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@github.com/RuyiT/gitDemo.git
然后git push https://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@github.com/RuyiT/node-server.git
##See https://blog.csdn.net/weixin_41010198/article/details/119698015
'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'

 git remote rm origin 删除关联的远程仓库
 git remote -v 查询关联的远程仓库
 git remote set-url https://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@github.com/RuyiT/node-server.git 设置
git remote add origin https://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@github.com/RuyiT/node-server.git 增加远程仓库
git push --set-upstream https://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@github.com/RuyiT/node-server.git main push到远程仓库
git config --system --unset credential.helper 如果在push的时候没有出现输入用户名密码