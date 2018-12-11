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
            { context: '创建或者编辑某文件 --- vi  ' },
            { context: '退出编辑 ---esc : exit /wq ' },
            { context: '切换root用户  -- su [root] [回车 输入密码 ]' },
            { context: '切换普通用户  -- su linux [回车 输入密码 ]' },
            { context: '关机  -- shutdown -h now' },

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
        ]
    },{}, //  ctrl + k      ctrl + 0 ； 编辑器 vscode 折叠代码
     {
        title: "何谓之无名",
        data: [
            { context: '8888888517418544' },
        ]
    }, {
        title: "魔方公式",
        data: [
            { context: '小鱼 --- (R’U2R)U(R’UR)' },
            { context: '顶角 --- (RB’RF2) (R’BRF2) R2' },
            { context: '顶棱 --- RU’RURURU’R’U’R2' },
        ]
    },

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


     */
    ]
}
data = [demo01]
