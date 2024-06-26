//命令集合
var demo01 = {
    title: "命令集合",
    name: "各种软件的常用命令集合",
    data: [{
        title: "doc命令集合",
        data: [
            { context: ' 查看端口号 ---  netstat -aon|findstr 8085' },
            { context: '强制杀死某个进程  ---  taskkill -PID <进程号> -F' },
            { context: '本机ip配置信息 ---  ipconfig' },
        ]
    }, {
        title: "linux命令集合",
        data: [
            { context: 'ssh方式连接服务器   ssh ydl@127.0.0.1  ' },
            { context: '创建或者编辑某文件 --- vi  ' },
            { context: '实时查看文件内容 --- tail -f -n 100  [文件名] ' },
            { context: '退出编辑 ---esc : exit /wq ' },
            { context: 'vim有三种模式 普通模式  编辑模式(i) 命令行模式(:) 另外两种 esc 都能退回到普通模式上面  ---esc : exit /wq ' },
            { context: '切换root用户  -- su [root] [回车 输入密码 ]' },
            { context: '切换普通用户  -- su linux [回车 输入密码 ]' },
            { context: '关机  -- shutdown -h now  / init 0  / half  / power off' },
            { context: '重启  -- init 6 /  shutdown –r now  / reboot ' },
            { context: '创建文件夹-- mkdir [也可以指定位置/文件夹名称]' },
            { context: '重命名文件夹/文件-- mv [dirname] [newName]' },
            { context: '移动文件夹---  mv /a /b/c  [将a目录移动到b目录并且 命名为c]' },
            { context: '删除文件夹/文件---  rm -rf    [将a目录移动到b目录并且 命名为c]' },
            { context: '复制文件夹/文件---  cp  /a /b/c   [将a目录复制到b目录并且 命名为c]' },
            { context: '解压文件--  tar -xvf [文件名.tar.gz]' },
            { context: '重启防火墙-- service iptables restart' },
            { context: '查看开放的端口-- service iptables status' },
            { context: 'ubuntu64 重启网络服务 -- service network-managet restart' },
            { context: 'ubuntu64 ifconfig --  sudo apt-get install net-tools' },
            { context: 'ubuntu64 远程无法联接 --  sudo apt-get install openssh-server' },
            { context: 'ubuntu64 查看 ssh是否启动  -- ps -e | grep ssh   (只有ssh-agent表示还没启动 / 显示sshd则说明已启动成功)' },
            { context: 'ubuntu64 启动 ssh  --- /etc/init.d/ssh start' },
            { context: 'ubuntu64 启动 ssh  --- 编辑  /etc/ssh/sshd_config  (PermitRootLogin -yes)' },
            { context: 'ubuntu64 重启 ssh --  sudo /etc/init.d/ssh restart ' },
            { context: 'ubuntu64 下载文件  --  wget [url]' },
            { context: 'ubuntu64 安装yum  --  apt-get install yum' },

            { context: "刚刚装的ubuntu64 没有ssh或者22 没开放1  sudo apt-get install openssh-server" },
            { context: "刚刚装的ubuntu64 没有ssh或者22 没开放2 sudo apt-get install openssh-server openssh-client" },
            { context: ' systemctl 命令 详解 systemctl stop/start docker' },
            { context: 'ps/find详解 ps -A/ef | grep nginx  / find /[filename] -name "*searchName*" ' },
            { context: '忘记root密码  https://blog.csdn.net/weixin_37909391/article/details/80691601' },
            { context:"su: Authentication failure问题 因为没有设置过密码 sudo passwd root"},
            { context: '返回上一次所在目录 -- cd - ' },
            { context: '查看文件所占大小  当前目录 下的一级目录 --  du -h -d 1  ' },
            
            /**
             * .tar 解包 tar xvf filename.tar
            .tar 打包 tar cvf filename.tar dirname
            .gz 解压1 gunzip filename.gz
            .gz 解压2 gzip -d filename.gz
            .gz 压缩 gzip filename
            .tar.gz 和 .tgz 解压 tar zxvf filename.tar.gz
            .tar.gz 和 .tgz 压缩 tar zcvf filename.tar.gz dirname
            .bz2 解压1 bzip2 -d filename.bz2
            .bz2 解压2 bunzip2 filename.bz2
            .bz2 压缩 bzip2 -z filename
            .tar.bz2 解压 tar jxvf filename.tar.bz2
            .tar.bz2 压缩 tar jcvf filename.tar.bz2 dirname
            .bz 解压1 bzip2 -d filename.bz
            .bz 解压2 bunzip2 filename.bz
            .tar.bz 解压 tar jxvf filename.tar.bz
            .z 解压 uncompress filename.z
            .z 压缩 compress filename
            .tar.z 解压 tar zxvf filename.tar.z
            .tar.z 压缩 tar zcvf filename.tar.z dirname
            .zip 解压 unzip filename.zip
            .zip 压缩 zip filename.zip dirname
            .rar 解压 rar x filename.rar
            .rar 压缩 rar a filename.rar dirname
            
            
            
            
            
             docker 运行mysql 数据库  
             docker run -p 3306:3306 --name mymysql -v $PWD/conf:/etc/mysql/conf.d -v $PWD/logs:/logs -v $PWD/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456 -d mysql:5.6
            
            -p 3306:3306：将容器的 3306 端口映射到主机的 3306 端口。
            -v -v $PWD/conf:/etc/mysql/conf.d：将主机当前目录下的 conf/my.cnf 挂载到容器的 /etc/mysql/my.cnf。
            -v $PWD/logs:/logs：将主机当前目录下的 logs 目录挂载到容器的 /logs。
            -v $PWD/data:/var/lib/mysql ：将主机当前目录下的data目录挂载到容器的 /var/lib/mysql 。
            -e MYSQL_ROOT_PASSWORD=123456：初始化 root 用户的密码。
            
            docker start mymysql  运行容器
            
            docker
            
            删除所有已经停止的容器 docker rm $(docker ps -a -q)
            杀死所有正在运行的容器
            docker kill $(docker ps -a -q)
            
            删除所有已经停止的容器
            docker rm $(docker ps -a -q)
            
             删除所有未打 dangling 标签的镜像
            docker rmi $(docker images -q -f dangling=true)
            
            删除所有镜像
            docker rmi $(docker images -q)
            
            强制删除镜像名称中包含“doss-api”的镜像
            docker rmi --force $(docker images | grep doss-api | awk '{print $3}')
            
            删除所有未使用数据
            docker system prune
            
            只删除未使用的volumes
            docker volume prune
            
            删除镜像
            docker rmi [imageId]
            
            
            docker system prune -a   清理 所有未运行的镜像   
             */

            /**
             关机：

	docer   
	nginx  -- 反向代理
	
	tocat
	tocat 多个应用服务器 
	
	mogodb
	redis
	
	activemq

	zokkeper

    devops
    



　　shutdown -h now  #立刻关机重启，工作中常用

　　shutdown -h +1    #1分钟后关机

　　init 0

　　halt                        #立即停止系统，需要人工关闭电源

　　halt -p                    #

　　poweroff　　　　  #立即停止系统，并且关闭电源

重启：

　　reboot　　　　　　#工作中常用

　　shutdown -r now      #工作中常用

　　shutdown -r +1　　 #一分钟后重启

　　init 6

注销：

　　logout

　　exit　　　　　　#工作中常用

　　ctrl+d　　　　　#工作中常用
             */
        ]
    }, {
        title: "git命令集合",
        data: [
            { context: '回退版本 ---   git reset --hard HEAD^ ' },
            { context: '合并dev到当前分支上 git merge dev' },
            { context: '443错误 由于设置了代理 git config --global [--unset] http.proxy' },
            { context: '查看日志 git log --author="<log出来的author 复制 >"' },
            { context: "查看日志 只显示改动文件 git log --name-status"},
            { context: "查看日志 绘制线索图 git log --graph"},
            { context: "查看日志 通过用户搜索 git log --author yourname"},
            { context: "查看日志 通过关键字搜索 git log --grep keywords"},
            { context: "查看日志 通过文件名搜索 git log -p -- RELEASE-NOTE.md   【--后面跟的是完整的文件名的相对地址】 "},
            { context: "通过组合使用--auther、--grep、-p这几个参数，几乎能满足大部分检索需求了。"},
            { context: ""},

// 查看分支：git branch
// 创建分支：git branch <name>
// 切换分支：git checkout <name>
// 在本地创建和远程分支对应的分支：git checkout -b branch-name origin/branch-name
// 创建+切换分支：git checkout -b <name>
// 合并某分支到当前分支：git merge <name>
// 删除分支：git branch -d <name>
// 把本地修改的文件添加到提交列表中：git add .
// 提交本地更新文件：git commit -m <describe>
// 撤销上次提交的记录：git reset --soft HEAD^
// 撤销到某一个版本号：git reset --hard e38a8100f2ba53549e9da4bff449afaaeba01e3b
// 从本地推送分支到服务器远端仓库(推送自己的修改到服务器)：git push origin <branch-name>
// 从远程抓取分支：git pull
// 查看远程库信息：git remote -v
// 查看commit提交记录日志：git log


        ]
    }, {title: "angular 命令集合",
    data: [
        { context: 'npm i @angular-devkit/schematics@0.0.45 @angular/cli --no-save   angular cli 创建文件报错' },
    ]}, //  ctrl + k      ctrl + 0 ； 编辑器 vscode 折叠代码
    {
        title: "何谓之无名",
        data: [
            { context: '8888888517418544'/*密码身份证后六位*/ },
        ]
    }, {
        title: "魔方公式",
        data: [
            { context: '小鱼 --- (R’U2R)U(R’UR)' },
            { context: '顶角 --- (RB’RF2) (R’BRF2) R2' },
            { context: '顶棱 --- RU’RURURU’R’U’R2' },
        ]
    },
    // 
        /**
         * 
         * * docker 遇到的坑
         * 
          Error:   No package docker-io available
         ：sudo yum install epel-release ，之后再执行：sudo yum install docker
         * 
         
         Error: Cannot retrieve metalink for repository: epel. Please verify its path and try again
            处理很简单，修改文件“/etc/yum.repos.d/epel.repo”， 将baseurl的注释取消， mirrorlist注释掉。即可。
            原文：https://blog.csdn.net/edwzhang/article/details/41251015 
    
    
        心烦  直接下载源安装 
        yum install https://get.docker.com/rpm/1.7.1/centos-6/RPMS/x86_64/docker-engine-1.7.1-1.el6.x86_64.rpm
    
        CentOS 6安装docker 报docker dead but pid file exists
        $ yum update -y device-mapper-libs
    
    
        ubutun 安装docker
    
        apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys D8576A8BA88D21E9
    
    
        那些遇到的坑 
    
        curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -   这里出错
        安装gpg的时候 找不到 文件  可以先下载  
        wget  https://download.docker.com/linux/ubuntu/gpg
        sudo apt-key add 【gpg[下载的文件目录]】
    
    
         docker exec -it mynginx1 bash
    
         */
    ]
}
data = [demo01]

// 链接: https://pan.baidu.com/s/1Nms7zp492AYzRLJz4yJmkQ 提取码: b393


/**
 * tar zxvf nginx-1.20.1.tar.gz
cd nginx-1.20.1
 
# 编译安装Nginx
./configure –prefix=/nginx/local/nginx
make
sudo make install
 
# 启动Nginx
sudo /usr/local/nginx/sbin/nginx



检查nginx依赖
gcc -v   https://gcc.gnu.org/releases.html  它是一个能够编译多种语言的编译器。最开始 gcc 是作为 C 语言的编译器（GNU C Compiler），现在除了 C 语言，还支持 C++、java、Pascal 等语言，gcc 还支持多种硬件平台。
rpm -qa pcre    http://www.pcre.org/  https://sourceforge.net/projects/pcre/files/pcre/8.45/ 是一个正则表达式库，提供了与 Perl 语言兼容的正则表达式功能。它被广泛用于各种编程语言和软件中，用于处理字符串匹配、搜索、替换等操作。
yum list installed | grep zlib*   https://zlib.net/zlib-1.3.1.tar.gz
rpm -qa openssl openssl-devel   https://www.openssl.org/source/old/fips/index.html  OpenSSL 是一种开源命令行工具，通常用于生成私钥，创建 CSR，安装 SSL / TLS 证书以及标识证书信息等等

pcre-config --version


-- 开始安装  
wget http://nginx.org/download/nginx-0.8.33.tar.gz
tar -zxvf nginx-0.8.33.tar.gz
cd nginx-0.8.33
./configure –prefix=/nginx/local/nginx

安装Nginx时报错

./configure: error: the HTTP rewrite module requires the PCRE library.

安装pcre-devel解决问题
yum -y install pcre-devel

错误提示：./configure: error: the HTTP cache module requires md5 functions
from OpenSSL library. You can either disable the module by using
–without-http-cache option, or install the OpenSSL library into the system,
or build the OpenSSL library statically from the source with nginx by using
–with-http_ssl_module –with-openssl= options.

解决办法：

yum -y install openssl openssl-devel

总结：

yum -y install pcre-devel openssl openssl-devel

./configure –prefix=/usr/local/nginx

make

make install


 * 
 */