//命令集合
var demo01 = {
    title: "命令集合",
    name: "各种软件的常用命令集合",
    data: [{
        title: "doc命令集合",
        data: [
            { context: ' 查看端口号 ---  netstat -aon|findstr 8085' },
            { context: '强制杀死某个进程  ---  taskkill -PID <进程号> -F' },
        ]
    },{
        title: "git命令集合",
        data: [
            { context: '回退版本 ---   git reset --hard HEAD^ ' },
            { context: '合并dev到当前分支上 git merge dev' },
        ]
    },{
        title: "魔方公式",
        data: [
            { context: '小鱼 --- (R’U2R)U(R’UR)' },
            { context: '顶角 --- (RB’RF2) (R’BRF2) R2' },
            { context: '顶棱 --- RU’RURURU’R’U’R2' },
        ]
    },
    ]
}
data = [demo01]
