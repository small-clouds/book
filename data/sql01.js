var demo01 = {
    title: "sql查询常用方法",
    name: "小标题",
    data: [{
        title: "连表查询",
        data: [
            { context: "<span class='remark'>常用的</span>：SELECT * from role_menu rm INNER JOIN menu m on rm.menuid=m.menu_id where rm.roleid=5" },
            { context: "<span class='remark'>升级的</span>：SELECT * from role_menu rm, menu m  where rm.menuid=m.menu_id and  rm.roleid=5" },
            { context: "<span class='remark'>表结果作为变量参数</span>：select * from student inner join employment on student.st_id =employment.student_id where  (select count(*) from interview where interview.student_id = student.st_id and isdel=1) <= 3" },
            { context: "<span class='remark'>表结果作为新表查询</span>：select eg.num IFNULL(eg.num,0) from month_aux m LEFT JOIN (select count(*) num,e.* from enterprise_aud e  where e.user_id=#{user_id} GROUP BY DATE_FORMAT(cooperativetime,'%Y%m')) eg  on m.m_id = DATE_FORMAT(eg.cooperativetime,'%m')  " }
        ]
    }]
}
var demo02 = {
    title: "mysql数据库",
    name: "mysql数据库",
    data: [{
        title: "数据库基本知识 虚表  dual",
        data: [
            {context:'一个管理数据的软件 增删改查'},
            {context:'开发项目就是帮助用户使用数据库 关系型数据库 二维数据表 行列'},
        ]
    },{
        title: "常见的数据库",
        data: [
            {context:'常见数据库 DB2 oracle mysql'},
            {context:'大型收费的 oracle(甲骨文) db2(IBM)'},
            {context:'中性收费 SQlserver(微软) sybase(实际开发用的很少)'},
            {context:'小型免费数据库 mysql(甲骨文) -> sql6 (开始收费了) postgresql() SQLite 手机端 可以植入到手机里的'},
            {context:'在java使用最多的 oracle DB2 mysql'},
        ]
    },{
        title: "数据库的安装",
        data: [
            {context:'<span class="remark">安装</span>'},
            {context:'傻瓜式安装'},
            {context:'Typical(默认安装) custom(自定义安装) 区别能否修改安装路径'},
            {context:'自定义安装时<span class="remark">路径不能有中文</span>'},
            {context:'<span class="remark">配置</span>'},
            {context:'这个最容易出问题'},
            {context:'应用类型 3个电脑主机图标'},
            {context:'developer(开发模式占用少了内存)  server(web中等数量内存) dedicated(数据库服务器全部内存) <span class="remark">开发模式就可以</span>'},
            {context:'数据库用途 3个数据库图标'},
            {context:'Multifunctional(多功能用途) Transactional(只用于事务处理) Non-Transactional(非事务处理) <span class="remark">选择第一个</span>'},
            {context:'数据存放位置 默认即可'},
            {context:'数据库最大连接数： 第一种 20 第二500 第三 自定义'},
            {context:'数据库的端口 3306(默认)  3307(备用) 3308(备用)'},
            {context:'设置编码：Latin1是ISO-8859-1的别名(支持中文) 选择utf8吧国际中文编码(<span class="remark">用这个对这个熟</span>)'},
            {context:'设置密码：不多说'},
            {context:'安装成功：不成功请看下面的文章'},
        ]
    },{
        title: "数据库的卸载",
        data: [
            {context:'<span class="remark">一定要删除干净</span>'},
            {context:'停止mysql服务： 任务管理器服务 mysql停止'},
            {context:'卸载mysql相关的程序'},
            {context:'删除注册表'},
            {context:'&nbsp; &nbsp;  运行->regedit-> HKEY_LOCAL_MACHINE-> SESTEM'},
            {context:'&nbsp; &nbsp;  -> controlset001-> services-> eventlog-> applications-> MySQL 删除'},
            {context:'&nbsp; &nbsp;  -> controlset002-> services-> eventlog-> applications-> MySQL 删除'},
            {context:'&nbsp; &nbsp;  -> currentcontrolset-> services-> eventlog-> applications-> MySQL 删除'},
            {context:'以上文件有可能是隐藏的 需要设置文件夹选项'},
            {context:'在C:盘搜索mysql文件 主要是ProgramData下面的mysql文件 删除 安装目录删除'},
            {context:'重启计算机'},
            {context:'重新安装'},
        ]
    },{
        title: "数据库的数据类型",
        data: [
            {context:'字符串型 varchar char varchar(20) 变化的字符串 最多存20 省空间 效率低 / char(12) 定长字符串 费空间效率高'},
            {context:'大数据类型 ：以前 blob 字节型大数据 存二进制文件 / text 字符型大数据 存文档 不能存图片 文字'},
            {context:'数值型 ： int / tinyint / smallint / int/ bigint / double / double / float'},
            {context:'日期型 ：date 年月日 / time 时分秒 / datetime 年月日时分秒 / timestamp年月日时分秒的时间戳'},
        ]
    },{
        title: "数据库约束",
        data: [
            {context:'主键约束： 包含非空约束 和唯一性约束(主键的唯一性和非空性)'},
            {context:'非空约束'},
            {context:'唯一性约束 不能重复 但是两个都是空'},
            {context:'外键约束'},
        ]
    },{
        title: "DML 增删改",
        data: [
            {context:'增：insert into 表名(id,name, male,age) values (); / insert into 表名 values（）;'},
            {context:'成倍增长： insert into users (name,brith,salary,remark) select name,brith,salary,remark from users;'},
            {context:'改：update user set name=‘王五’ where age =9 and male =0; 没有条件将更改所有'},
            {context:'删：delele from 表名 where 条件'},
            {context:'截断表: truncate table user 清空表 但是数据从头开始的'},
        ]
    },{
        title: "DQL 查",
        data: [
            {context:'简单查表：select name, age from user;'},
            {context:'起别名： select u.name u.age, u.male from user (as) u； // 表其别名'},
            {context:'区间查找一：select name ， chinese from in　（20,19）；'},
            {context:'区间查找二：select name chinese from __ between __ and__ ;'},
            {context:'模糊查询(like)：select * from user where name like "-明%"; ////// % 任意位置 '},
            {context:'空数据： select name ， chinese from user is (not) null'},
            {context:'排序： select * from order by (desc); (order by 放到语句的最后)'},
        ]
    },{
        title: "多表查询",
        data: [
            {context:'select * from student s INNER JOIN  md_stu_cls md on s.s_id=md.s_id INNER JOIN  class_table cls ON cls.c_id= md.c_id where s.s_name ="钱二";   '},
            {context:'SELECT r.room_name from room r WHERE r.id in (SELECT roomid FROM apply WHERE end_time<"2017-10-14 17:00:00" and begin_time>"2017-10-14 15:00:00");'},
        ]
    },{
        title: "DDL 数据定义语言 创建数据库对象的",
        data: [
            {context:'无'},
            {context:''},
        ]
    },{
        title: "DCL 数据控制语言",
        data: [
            {context:'无'},
            {context:''},
        ]
    },{
        title: "常用语句",
        data: [
            {context:'按照月份分组 select count(*),u.* from users u GROUP BY DATE_FORMAT(u.brith,"%Y-%m"),u.name ORDER BY count(*) desc'},
            {context:'组表查询 连表月份  辅助表先分组 在连查 select IFNULL(eg.num,0) from month_aux m LEFT JOIN (select count(*) num,e.* from enterprise_aud e  where e.user_id=#{user_id} GROUP BY DATE_FORMAT(cooperativetime,"%Y%m")) eg  on m.m_id = DATE_FORMAT(eg.cooperativetime,"%m")  '},
        ]
    }]
}
data = [demo01,demo02]