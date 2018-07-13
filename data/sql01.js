//sql查询常用方法
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
    }, {
        title: "查询最后一条数据",
        data: [
            { context: "select * from user order by id desc limit 1;" },
        ]
    }, {
        title: "批量插入可以这么干",
        data: [
            { context: "insert user values(null,'张三','20',1);insert user values(null,'张三','20',1);" },
            { context: "两表插入：insert user values(null,'张三','20',1); insert user values(null,(select * from user order by id desc limit 1;),'哈哈你懂的')" },
        ]
    }]
}
//mysql数据库
var demo02 = {
    title: "mysql数据库",
    name: "mysql数据库",
    data: [{
        title: "数据库基本知识 虚表  dual",
        data: [
            { context: '一个管理数据的软件 增删改查' },
            { context: '开发项目就是帮助用户使用数据库 关系型数据库 二维数据表 行列' },
        ]
    }, {
        title: "常见的数据库",
        data: [
            { context: '常见数据库 DB2 oracle mysql' },
            { context: '大型收费的 oracle(甲骨文) db2(IBM)' },
            { context: '中性收费 SQlserver(微软) sybase(实际开发用的很少)' },
            { context: '小型免费数据库 mysql(甲骨文) -> sql6 (开始收费了) postgresql() SQLite 手机端 可以植入到手机里的' },
            { context: '在java使用最多的 oracle DB2 mysql' },
        ]
    }, {
        title: "数据库的安装",
        data: [
            { context: '<span class="remark">安装</span>' },
            { context: '傻瓜式安装' },
            { context: 'Typical(默认安装) custom(自定义安装) 区别能否修改安装路径' },
            { context: '自定义安装时<span class="remark">路径不能有中文</span>' },
            { context: '<span class="remark">配置</span>' },
            { context: '这个最容易出问题' },
            { context: '应用类型 3个电脑主机图标' },
            { context: 'developer(开发模式占用少了内存)  server(web中等数量内存) dedicated(数据库服务器全部内存) <span class="remark">开发模式就可以</span>' },
            { context: '数据库用途 3个数据库图标' },
            { context: 'Multifunctional(多功能用途) Transactional(只用于事务处理) Non-Transactional(非事务处理) <span class="remark">选择第一个</span>' },
            { context: '数据存放位置 默认即可' },
            { context: '数据库最大连接数： 第一种 20 第二500 第三 自定义' },
            { context: '数据库的端口 3306(默认)  3307(备用) 3308(备用)' },
            { context: '设置编码：Latin1是ISO-8859-1的别名(支持中文) 选择utf8吧国际中文编码(<span class="remark">用这个对这个熟</span>)' },
            { context: '设置密码：不多说' },
            { context: '安装成功：不成功请看下面的文章' },
        ]
    }, {
        title: "数据库的卸载",
        data: [
            { context: '<span class="remark">一定要删除干净</span>' },
            { context: '停止mysql服务： 任务管理器服务 mysql停止' },
            { context: '卸载mysql相关的程序' },
            { context: '删除注册表' },
            { context: '&nbsp; &nbsp;  运行->regedit-> HKEY_LOCAL_MACHINE-> SESTEM' },
            { context: '&nbsp; &nbsp;  -> controlset001-> services-> eventlog-> applications-> MySQL 删除' },
            { context: '&nbsp; &nbsp;  -> controlset002-> services-> eventlog-> applications-> MySQL 删除' },
            { context: '&nbsp; &nbsp;  -> currentcontrolset-> services-> eventlog-> applications-> MySQL 删除' },
            { context: '以上文件有可能是隐藏的 需要设置文件夹选项' },
            { context: '在C:盘搜索mysql文件 主要是ProgramData下面的mysql文件 删除 安装目录删除' },
            { context: '重启计算机' },
            { context: '重新安装' },
        ]
    }, {
        title: "数据库的数据类型",
        data: [
            { context: '字符串型 varchar char varchar(20) 变化的字符串 最多存20 省空间 效率低 / char(12) 定长字符串 费空间效率高' },
            { context: '大数据类型 ：以前 blob 字节型大数据 存二进制文件 / text 字符型大数据 存文档 不能存图片 文字' },
            { context: '数值型 ： int / tinyint / smallint / int/ bigint / double / double / float' },
            { context: '日期型 ：date 年月日 / time 时分秒 / datetime 年月日时分秒 / timestamp年月日时分秒的时间戳' },
        ]
    }, {
        title: "数据库约束",
        data: [
            { context: '主键约束： 包含非空约束 和唯一性约束(主键的唯一性和非空性)' },
            { context: '非空约束' },
            { context: '唯一性约束 不能重复 但是两个都是空' },
            { context: '外键约束' },
        ]
    }, {
        title: "DML 增删改",
        data: [
            { context: '增：insert into 表名(id,name, male,age) values (); / insert into 表名 values（）;' },
            { context: '成倍增长： insert into users (name,brith,salary,remark) select name,brith,salary,remark from users;' },
            { context: '改：update user set name=‘王五’ where age =9 and male =0; 没有条件将更改所有' },
            { context: '删：delele from 表名 where 条件' },
            { context: '截断表: truncate table user 清空表 但是数据从头开始的' },
        ]
    }, {
        title: "DQL 查",
        data: [
            { context: '简单查表：select name, age from user;' },
            { context: '起别名： select u.name u.age, u.male from user (as) u； // 表其别名' },
            { context: '区间查找一：select name ， chinese from in　（20,19）；' },
            { context: '区间查找二：select name chinese from __ between __ and__ ;' },
            { context: '模糊查询(like)：select * from user where name like "-明%"; ////// % 任意位置 ' },
            { context: '空数据： select name ， chinese from user is (not) null' },
            { context: '排序： select * from order by (desc); (order by 放到语句的最后)' },
        ]
    }, {
        title: "多表查询",
        data: [
            { context: 'select * from student s INNER JOIN  md_stu_cls md on s.s_id=md.s_id INNER JOIN  class_table cls ON cls.c_id= md.c_id where s.s_name ="钱二";   ' },
            { context: 'SELECT r.room_name from room r WHERE r.id in (SELECT roomid FROM apply WHERE end_time<"2017-10-14 17:00:00" and begin_time>"2017-10-14 15:00:00");' },
        ]
    }, {
        title: "DDL 数据定义语言 创建数据库对象的",
        data: [
            { context: '无' },
            { context: '' },
        ]
    }, {
        title: "DCL 数据控制语言",
        data: [
            { context: '无' },
            { context: '' },
        ]
    }, {
        title: "常用语句",
        data: [
            { context: '按照月份分组 select count(*),u.* from users u GROUP BY DATE_FORMAT(u.brith,"%Y-%m"),u.name ORDER BY count(*) desc' },
            { context: '组表查询 连表月份  辅助表先分组 在连查 select IFNULL(eg.num,0) from month_aux m LEFT JOIN (select count(*) num,e.* from enterprise_aud e  where e.user_id=#{user_id} GROUP BY DATE_FORMAT(cooperativetime,"%Y%m")) eg  on m.m_id = DATE_FORMAT(eg.cooperativetime,"%m")  ' },
        ]
    }]
}
//数据库优化方案
var demo03 = {
    title: "数据库优化方案",
    name: "数据库优化方案",
    data: [{
        title: "选取最适用的字段属性",
        data: [
            { context: '在创建表的时候，为了获得更好的性能，我们可以将表中字段的宽度设得尽可能小。' },
            { context: 'eg:邮政编码这个字段 CHAR(6) 如果可以的话，我们应该使用MEDIUMINT而不是BIGIN来定义整型字段。' },
            { context: '另外一个提高效率的方法是在可能的情况下，应该尽量把字段设置为NOTNULL，' },
            { context: '某些文本字段，例如“省份”或者“性别”，我们可以将它们定义为ENUM类型。因为在MySQL中，ENUM类型被当作数值型数据来处理，而数值型数据被处理起来的速度要比文本类型快得多' },
        ]
    }, {
        title: "使用连接（JOIN）来代替子查询(Sub-Queries)",
        data: [
            { context: '这个技术可以使用SELECT语句来创建一个单列的查询结果，然后把这个结果作为过滤条件用在另一个查询中。' },
            { context: 'eg :  DELETE FROM customerinfo WHERE CustomerID NOT in(SELECT CustomerID FROM salesinfo)' },
            { context: '使用子查询可以一次性的完成很多逻辑上需要多个步骤才能完成的SQL操作，同时也可以避免事务或者表锁死，并且写起来也很容易。' },
            { context: '但是，有些情况下，子查询可以被更有效率的连接（JOIN）..替代。' },
            { context: 'SELECT * FROM customerinfo WHERE CustomerID NOT in(SELECT CustomerID FROM salesinfo)' },
            { context: '如果使用连接（JOIN）..来完成这个查询工作，速度将会快很多。尤其是当salesinfo表中对CustomerID建有索引的话，性能将会更好，' },
            { context: 'SELECT * FROM customerinfo LEFT JOIN salesinfo ON    customerinfo.CustomerID=salesinfo.CustomerID WHERE salesinfo.CustomerID IS NULL' },
            { context: '连接（JOIN）..之所以更有效率一些，是因为MySQL不需要在内存中创建临时表来完成这个逻辑上的需要两个步骤的查询工作。' },
        ]
    }, {
        title: "使用联合(UNION)来代替手动创建的临时表",
        data: [
            { context: '它可以把需要使用临时表的两条或更多的select查询合并的一个查询中。在客户端的查询会话结束的时候，临时表会被自动删除，从而保证数据库整齐、高效。' },
            { context: '使用union来创建查询的时候，我们只需要用UNION作为关键字把多个select语句连接起来就可以了，' },
            { context: '要注意的是所有select语句中的字段数目要想同。' },
            { context: 'SELECT Name,Phone FROM client UNION SELECT Name,BirthDate FROM author   UNION SELECT Name,Supplier FROM product' },
        ]
    }, {
        title: "事务",
        data: [
            { context: '尽管我们可以使用子查询（Sub-Queries）、连接（JOIN）和联合（UNION）来创建各种各样的查询，但不是所有的数据库操作都可以只用一条或少数几条SQL语句就可以完成的。' },
            { context: '更多的时候是需要用到一系列的语句来完成某种工作。' },
            { context: '它的作用是：要么语句块中每条语句都操作成功，要么都失败。' },
            { context: '专业点说就是，就是可以保持数据库中数据的一致性和完整性。' },
            { context: '事物以BEGIN关键字开始，COMMIT关键字结束。在这之间的一条SQL操作失败，那么，ROLLBACK命令就可以把数据库恢复到BEGIN开始之前的状态。' },
            { context: '事务的另一个重要作用是当多个用户同时使用相同的数据源时，它可以利用锁定数据库的方法来为用户提供一种安全的访问方式，这样可以保证用户的操作不被其它的用户所干扰。' },]
    }, {
        title: "锁定表",
        data: [
            { context: '尽管事务是维护数据库完整性的一个非常好的方法，但却因为它的独占性，有时会影响数据库的性能，尤其是在很大的应用系统中。' },
            { context: '由于在事务执行的过程中，数据库将会被锁定，因此其它的用户请求只能暂时等待直到该事务结束。' },
            { context: '如果一个数据库系统只有少数几个用户来使用，事务造成的影响不会成为一个太大的问题；但假设有成千上万的用户同时访问一个数据库系统，' },
            { context: '有些情况下我们可以通过锁定表的方法来获得更好的性能。下面的例子就用锁定表的方法来完成前面一个例子中事务的功能' },
            { context: 'LOCK TABLE inventory WRITE SELECT Quantity FROM inventory WHERE Item="book";' },
            { context: 'UPDATE inventory SET Quantity=11 WHERE Item="book"; UNLOCK TABLES' },
            { context: '们用一个select语句取出初始数据，通过一些计算，用update语句将新值更新到表中。' },
            { context: '包含有WRITE关键字的LOCKTABLE语句可以保证在UNLOCKTABLES命令被执行之前，不会有其它的访问来对inventory进行插入、更新或者删除的操作。' },
            { context: '锁定表的方法可以维护数据的完整性，但是它却不能保证数据的关联性。这个时候我们就可以使用外键' },
        ]
    }, {
        title: "使用外键",
        data: [
            { context: '锁定表的方法可以维护数据的完整性，但是它却不能保证数据的关联性。这个时候我们就可以使用外键' },
            { context: '外键可以保证每一条销售记录都指向某一个存在的客户。在这里，外键可以把customerinfo表中的CustomerID映射到salesinfo表中CustomerID，任何一条没有合法CustomerID的记录都不会被更新或插入到salesinfo中' },
            { context: '如果要在MySQL中使用外键，一定要记住在创建表的时候将表的类型定义为事务安全表InnoDB类型。该类型不是MySQL表的默认类型。' },
            { context: '定义的方法是在CREATETABLE语句中加上TYPE=INNODB。' },
        ]
    }, {
        title: "使用索引",
        data: [
            { context: '索引是提高数据库性能的常用方法，它可以令数据库服务器以比没有索引快得多的速度检索特定的行，尤其是在查询语句当中包含有MAX(),MIN()和ORDERBY这些命令的时候，性能提高更为明显。' },
            { context: '那该对哪些字段建立索引呢？' },
            { context: '索引应建立在那些将用于JOIN,WHERE判断和ORDERBY排序的字段上。尽量不要对数据库中某个含有大量重复的值的字段建立索引。' },
            { context: '对于一个ENUM类型的字段来说，出现大量重复值是很有可能的情况' },
            { context: '在经常需要搜索的列上，可以加快搜索的速度； ' },
            { context: '在作为主键的列上，强制该列的唯一性和组织表中数据的排列结构； ' },
            { context: '在经常用在连接的列上，这些列主要是一些外键，可以加快连接的速度；' },
            { context: '在经常需要根据范围进行搜索的列上创建索引，因为索引已经排序，其指定的范围是连续的； ' },
            { context: '在经常需要排序的列上创 建索引，因为索引已经排序，这样查询可以利用索引的排序，加快排序查询时间；' },
            { context: '在经常使用在WHERE子句中的列上面创建索引，加快条件的判断速度。' },
            { context: '索引的优点' },
            { context: '第一，通过创建唯一性索引，可以保证数据库表中每一行数据的唯一性。 ' },
            { context: '第二，可以大大加快数据的<span class="remark">检索</span>速度，这也是创建索引的最主要的原因。' },
            { context: '第三，可以加速表和表之间的连接，特别是在实现数据的参考完整性方面特别有意义' },
            { context: '第四，在使用分组和排序 子句进行数据检索时，同样可以显著减少查询中分组和排序的时间。' },
            { context: '第五，通过使用索引，可以在查询的过程中，使用优化隐藏器，提高系统的性能。' },
            { context: '索引的缺点' },
            { context: '第一，创建索引和维护索引要耗费时间，这种时间随着数据量的增加而增加。 ' },
            { context: '第二，索引需要占物理空间，除了数据表占数据空间之外，每一个索引还要占一定的物理空间，如果要建立聚簇索引，那么需要的空间就会更大。 ' },
            { context: '第三，当对表中的数据进行增加、删除和修改的时候，索引也要动态的维护，这样就降低了数据的维护速度。' },
        ]
    }, {
        title: "优化的查询语句",
        data: [
            { context: '绝大多数情况下，使用索引可以提高查询的速度，但如果SQL语句使用不恰当的话，索引将无法发挥它应有的作用' },
            { context: '首先，最好是在相同类型的字段间进行比较的操作。' },
            { context: '其次，在建有索引的字段上尽量不要使用函数进行操作。' },
            { context: '第三，在搜索字符型字段时，我们有时会使用LIKE关键字和通配符，这种做法虽然简单，但却也是以牺牲系统性能为代价的。' },
            { context: '最后，应该注意避免在查询中让MySQL进行自动类型转换，因为转换过程也会使索引变得不起作用。' },
        ]
    }]
}
var demo04 = {
    title: "高并发处理方案",
    name: "高并发处理方案",
    data: [{
        title: "摘要",
        data: [
            { context: '大型网站，比如门户网站。在面对大量用户访问、高并发请求方面，基本的解决方 案集中在这样几个环节：使用高性能的服务器、高性能的数据库、高效率的编程语言、还有 高性能的 Web 容器。' }
        ]
    }, {
        title: "基本",
        data: [
            { context: '一个小型的网站，比如个人网站，可以使用最简单的 html 静态页面就实现了，配合一些图 片达到美化效果，所有的页面均存放在一个目录下，这样的网站对系统架构、性能的要求都 很简单，随着互联网业务的不断丰富，网站相关的技术经过这些年的发展，已经细分到很细 的方方面面，尤其对于大型网站来说，所采用的技术更是涉及面非常广，从硬件到软件、编 程语言、数据库、WebServer、防火墙等各个领域都有了很高的要求，已经不是原来简单的 html 静态网站所能比拟的。 大型网站，比如门户网站。在面对大量用户访问、高并发请求方面，基本的解决方 案集中在这样几个环节：使用高性能的服务器、高性能的数据库、高效率的编程语言、还有 高性能的 Web 容器。 但是除了这几个方面， 还没法根本解决大型网站面临的高负载和高并发 问题。 上面提供的几个解决思路在一定程度上也意味着更大的投入，并且这样的解决思路 具备瓶颈，没有很好的扩展性，下面我从低成本、高性能和高扩张性的角度来说说我的一些 经验。 ' }
        ]
    }, {
        title: "1、HTML 静态化 其实大家都知道，效率最高、消耗最小的就是纯静态化的 html 页面，",
        data: [
            { context: '所以我们尽可 能使我们的网站上的页面采用静态页面来实现，这个最简单的方法其实也是最有效的方法。 但是对于大量内容并且频繁更新的网站， 我们无法全部手动去挨个实现， 于是出现了我们常 见的信息发布系统 CMS，像我们常访问的各个门户站点的新闻频道，甚至他们的其他频道， 都是通过信息发布系统来管理和实现的， 信息发布系统可以实现最简单的信息录入自动生成 静态页面，还能具备频道管理、权限管理、自动抓取等功能，对于一个大型网站来说，拥有 一套高效、可管理的 CMS 是必不可少的。 除了门户和信息发布类型的网站，对于交互性要求很高的社区类型网站来说，尽可 能的静态化也是提高性能的必要手段，将社区内的帖子、文章进行实时的静态化，有更新的 时候再重新静态化也是大量使用的策略， 像 Mop 的大杂烩就是使用了这样的策略， 网易社区 等也是如此。 同时，html 静态化也是某些缓存策略使用的手段，对于系统中频繁使用数据库查询 ' },
            { context: '但是内容更新很小的应用，可以考虑使用 html 静态化来实现，比如论坛中论坛的公用设置 信息， 这些信息目前的主流论坛都可以进行后台管理并且存储再数据库中， 这些信息其实大 量被前台程序调用， 但是更新频率很小， 可以考虑将这部分内容进行后台更新的时候进行静 态化，这样避免了大量的数据库访问请求。' }
        ]
    }, {
        title: "2、图片服务器分离",
        data: [{ context: '对于 Web 服务器来说，不管是 Apache、IIS 还是其他容器，图片是最消 耗资源的，于是我们有必要将图片与页面进行分离，这是基本上大型网站都会采用的策略， 他们都有独立的图片服务器， 甚至很多台图片服务器。 这样的架构可以降低提供页面访问请 求的服务器系统压力， 并且可以保证系统不会因为图片问题而崩溃， 在应用服务器和图片服 务器上，可以进行不同的配置优化，比如 apache 在配置 ContentType 的时候可以尽量少支 持，尽可能少的 LoadModule，保证更高的系统消耗和执行效率。 ' }]
    }, {
        title: " 3、数据库集群和库表散列",
        data: [{ context: '大型网站都有复杂的应用， 这些应用必须使用数据库， 那么在面对大量访问的时候， 数据库的瓶颈很快就能显现出来， 这时一台数据库将很快无法满足应用， 于是我们需要使用 数据库集群或者库表散列。 在数据库集群方面，很多数据库都有自己的解决方案，Oracle、Sybase 等都有很好 的方案，常用的 MySQL 提供的 Master/Slave 也是类似的方案，您使用了什么样的 DB，就参 考相应的解决方案来实施即可。 上面提到的数据库集群由于在架构、 成本、 扩张性方面都会受到所采用 DB 类型的限 制， 于是我们需要从应用程序的角度来考虑改善系统架构， 库表散列是常用并且最有效的解 决方案。 我们在应用程序中安装业务和应用或者功能模块将数据库进行分离， 不同的模块对 应不同的数据库或者表， 再按照一定的策略对某个页面或者功能进行更小的数据库散列， 比 如用户表，按照用户 ID 进行表散列，这样就能够低成本的提升系统的性能并且有很好的扩 展性。sohu 的论坛就是采用了这样的架构，将论坛的用户、设置、帖子等信息进行数据库 分离，然后对帖子、用户按照板块和 ID 进行散列数据库和表，最终可以在配置文件中进行 简单的配置便能让系统随时增加一台低成本的数据库进来补充系统性能。' }]
    }, {
        title: "4、缓存 ",
        data: [{ context: '缓存一词搞技术的都接触过，很多地方用到缓存。网站架构和网站开发中的缓存也 是非常重要。这里先讲述最基本的两种缓存。高级和分布式的缓存在后面讲述。 架构方面的缓存， 对 Apache 比较熟悉的人都能知道 Apache 提供了自己的缓存模块， 也可以使用外加的 Squid 模块进行缓存，这两种方式均可以有效的提高 Apache 的访问响应 能力。 网站程序开发方面的缓存，Linux 上提供的 Memory Cache 是常用的缓存接口，可以 在 web 开发中使用，比如用 Java 开发的时候就可以调用 MemoryCache 对一些数据进行缓存 和通讯共享，一些大型社区使用了这样的架构。另外，在使用 web 语言开发的时候，各种语 言基本都有自己的缓存模块和方法，PHP 有 Pear 的 Cache 模块，Java 就更多了，。net 不 是很熟悉，相信也肯定有。 ' }]
    }, {
        title: "5、镜像",
        data: [{ context: '镜像是大型网站常采用的提高性能和数据安全性的方式，镜像的技术可以解决不同 网络接入商和地域带来的用户访问速度差异， 比如 ChinaNet 和 EduNet 之间的差异就促使了 很多网站在教育网内搭建镜像站点， 数据进行定时更新或者实时更新。 在镜像的细节技术方 面，这里不阐述太深，有很多专业的现成的解决架构和产品可选。也有廉价的通过软件实现 的思路，比如 Linux 上的 rsync 等工具。' }]
    }, {
        title: "6、负载均衡 ",
        data: [
            { context: '负载均衡将是大型网站解决高负荷访问和大量并发请求采用的终极解决办法。 负载均衡技术发展了多年，有很多专业的服务提供商和产品可以选择，我个人接触 过一些解决方法，其中有两个架构可以给大家做参考。' },
            { context: '1）硬件四层交换 第四层交换使用第三层和第四层信息包的报头信息，根据应用区间识别业务流，将 整个区间段的业务流分配到合适的应用服务器进行处理。 第四层交换功能就象是虚 IP， 指向物理服务器。它传输的业务服从的协议多种多样，有 HTTP、FTP、NFS、Telnet 或其他 协议。这些业务在物理服务器基础上，需要复杂的载量平衡算法。在 IP 世界，业务类型由  终端 TCP 或 UDP 端口地址来决定， 在第四层交换中的应用区间则由源端和终端 IP 地址、 TCP 和 UDP 端口共同决定。 在硬件四层交换产品领域，有一些知名的产品可以选择，比如 Alteon、F5 等，这些 产品很昂贵，但是物有所值，能够提供非常优秀的性能和很灵活的管理能力。Yahoo 中国当 初接近 2000 台服务器使用了三四台 Alteon 就搞定了。 ' },
            { context: ' 2）软件四层交换 大家知道了硬件四层交换机的原理后，基于 OSI 模型来实现的软件四层交换也就应 运而生，这样的解决方案实现的原理一致，不过性能稍差。但是满足一定量的压力还是游刃 有余的，有人说软件实现方式其实更灵活，处理能力完全看你配置的熟悉能力。 软件四层交换我们可以使用 Linux 上常用的 LVS 来解决，LVS 就是 Linux Virtual Server，他提供了基于心跳线 heartbeat 的实时灾难应对解决方案，提高系统的鲁棒性，同 时可供了灵活的虚拟 VIP 配置和管理功能， 可以同时满足多种应用需求， 这对于分布式的系 统来说必不可少。 一个典型的使用负载均衡的策略就是，在软件或者硬件四层交换的基础上搭建 squid 集群，这种思路在很多大型网站包括搜索引擎上被采用，这样的架构低成本、高性能 还有很强的扩张性，随时往架构里面增减节点都非常容易。 ' }
            ]
    }]
}
var demo05 ={
    title: "mysql explain查看sql语句的执行计划",
    name: "mysql explain查看sql语句的执行计划",
    data: [{
        title: "mysql explain查看sql语句的执行计划",
        data: [
            { context: 'https://blog.csdn.net/lululove19870526/article/details/78065560?locationNum=2&fps=1' }
        ]
    }]
}
data = [demo01, demo02, demo03, demo04,demo05]