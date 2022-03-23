//css基础
var demo01 = {
    title: "个人简历",
    name: "个人简历",
    data: [{
        title: "自我评价",
        data: [
            { context: '精通java后端技术;精通spring springMVC mybatis框架与其整合' },
            { context: '精通mysql数据库和orcal数据库' },
            { context: '精通Web前端技术，包括HTML、CSS、Javascript、Ajax、DOM、JSON等前端技术,' },
            { context: '精通H5,知道能够利用语义化标签；' },
            { context: '精通eChars图表，能用图表对数据进行统计' },
            { context: '精通jquery、Bootstrap，vue和angular等框架,并有实际应用开发经验;' },
            { context: '精通svn 集中式开发良好的沟通协调能力和团队合作意识，能够主动总结和分享自己的开发经验，' },
            { context: '精通gitHub 分布式开发 在git上有自己的项目' },
            { context: '具备独立的学习能力、问题分析能力，能够独立调试解决问题。' },
        ]
    }, {
        title: "工作经历",
        data: [
            {
                title: '北京幽月花开软件科技有限公司',
                date: '2017/06-至今',
                data: [
                    { context: '职位：全栈工程师' },
                    { context: '薪资：10000元/月' },
                    { context: '行业：互联网/电子商务' },
                    { context: '工作描述：' },
                ]
            }, {
                title: '北京茶未来网络科技有限公司 ',
                date: '2017/03 - 2017/06',
                data: [
                    { context: '职位：apicloud工程师' },
                    { context: '薪资：8000元/月' },
                    { context: '行业：互联网/电子商务' },
                    { context: '工作描述：负责公司app的开发；公司h5网站的建设； 微信公众号商城的开发； 公司网站的bug修复' },
                ]
            }, {
                title: '保定博滢睿软件科技有限公司',
                date: '2015/05- 2017/02',
                data: [
                    { context: '职位：java工程师' },
                    { context: '薪资：4000元/月' },
                    { context: '行业：互联网/电子商务' },
                    { context: '工作描述：美食购购的二次开发、交通侠app和web的java后台开发 羊绒衫网站的二次开发，公司内部的OA管理系统' },
                ]
            }, {
                title: '保定铧正电气制造有限公司 ',
                date: '2014/10 -2015/05',
                data: [
                    { context: '职位：前端工程师' },
                    { context: '薪资：3000元/月' },
                    { context: '行业：互联网/电子商务' },
                    { context: '工作描述：负责公司下属的铧正电气，鸿钰多层板，锾海贸易的前端开发，以及后台代码的维护' },
                ]
            }, {
                title: '保定网商互通网络科技有限公司 ',
                date: '2014/05 - 2014/10',
                data: [
                    { context: '职位：网站编辑/web前端' },
                    { context: '薪资：2000元/月' },
                    { context: '行业：互联网/电子商务' },
                    { context: '工作描述：前期负责公司所营项目的分发，管理教导新人的入职培训。 后期主要负责根据美工小样为客户建设网站' },
                ]
            }]
    }, {
        title: "项目经验",
        data: [
            {
                title: '自己的git线上项目 ',
                date: '2017/06 - 至今',
                data: [
                    { context: '软件环境：github' },
                    { context: '硬件环境: linux' },
                    { context: '开发工具：git、vscode' },
                    { context: '项目技术：html、css、js、vue、jquery' },
                    { context: '责任描述：自己一人独立开发的项目 包括上传和维护' },
                    { context: '项目简介：自己的成长历程 以及遇到的各种技术问题 比较好的鸡汤都会在上面有 涉及的方方面面' },
                ]
            }, {
                title: '幽月花开管理平台',
                date: '2017/06 - 至今',
                data: [
                   // { context: '公司：幽月花开' },
                    { context: '软件环境：tomcat7.0 jdk1.7 mysql' },
                    { context: '硬件环境：window' },
                    { context: '开发工具：eclipse、myeclipse、svn' },
                    { context: '项目技术：echarts jquery' },
                    { context: '责任描述：负责就业专员模块 负责企业添加 岗位添加 学生面试和就业管理，以及学生去向，还包括对就业专员进行图表统计 各个方面' },
                    { context: '项目简介：幽月花开管理平台，是一款帮助学生就业的管理平台，包括前台，教务，系统管理员 就业专员，企业hr等等；' },
                    //{ context: '为培训学校设计的一款学生管理软件，包括入学到就业分配的一系列流程为每一份员工分配学生包括学生统计' },
                ]
            }, {
                title: '茶未来手机app的开发',
                date: '2017/03 - 2017/06',
                data: [
                    { context: '软件环境：apicloud' },
                    { context: '硬件环境：android、ios' },
                    { context: '开发工具：apicloud、vscode、svn' },
                    { context: '项目技术：apicloud、html5、css3' },
                    { context: '责任描述：负责公司的app的混合开发 利用apicloud进行二次开发app' },
                    { context: '项目简介：一个不一样的茶礼商城，与线下茶券相配合，线上兑换各种茶品，茶水套餐的官方app' },
                ]
            }, {
                title: '茶未来响应式网站开发',
                date: '2017/03 - 2017/06',
                data: [
                    { context: '软件环境：php' },
                    { context: '硬件环境：window' },
                    { context: '开发工具：vscode、Hbuilder、svn' },
                    { context: '项目技术：html5、css3、template.js、jquery' },
                    { context: '责任描述：公司移动端和pc打通数据接口 利用响应式开发 来达到不同设备的访问' },
                    { context: '项目简介：公司致力于打造北京茶未来的平台 需要多端合作' },
                ]
            }, {
                title: '交通侠app',
                date: '2016/06 - 2017/02',
                data: [
                    { context: '软件环境：mysql5.5 jdk1.7 tomcat7' },
                    { context: '硬件环境：window' },
                    { context: '开发工具：eclipse，myeclipse' },
                    { context: '项目技术：java' },
                    { context: '责任描述：负责交通侠app数据管理 并学习apicloud来实现app端' },
                    { context: '项目简介：交通侠app是一款交通管理应用软件，里面提供多项拥堵执法的交通实况，还能智能的规划路线，帮你节省时间，提早知道路况不好的交通状况，还能及时的避免不必要的危险状况。' },
                ]
            }, {
                title: '羊绒衫批发网站的二次开发',
                date: '2016/02 - 2016/06',
                data: [
                    { context: '软件环境：tomcat服务器、mysql jdk' },
                    { context: '硬件环境：window' },
                    { context: '开发工具：eclipse、myeclipse' },
                    { context: '项目技术：ajax、json、svn ' },
                    { context: '责任描述：负责网站的二次开发 ' },
                    { context: '项目简介：公司临时接的项目，为羊绒衫开发平台 进行网站的二次开发' },
                ]
            }, {
                title: '内部员工管理系统',
                date: '2015/10 - 2016/02',
                data: [
                    { context: '软件环境：tomcat服务器' },
                    { context: '硬件环境：linux' },
                    { context: '开发工具：eclipse，myeclipse' },
                    { context: '项目技术：jquery、js、ajax、servlet、jsp' },
                    { context: '责任描述：负责用户管理模块的权限设置包括新增用户 新增角色 新增菜单 以及对用户操作的监控和权限的赋予' },
                    { context: '项目简介：建立内网用户管理平台系统; 包括行政管理，请假 出差 会议室管理，活动管理等等' },
                ]
            }, {
                title: '美食购购的二次开发',
                date: '2015/05 - 2015/10',
                data: [
                    { context: '软件环境：tomcat服务器' },
                    { context: '硬件环境：window' },
                    { context: '开发工具：eclipse，myeclipse' },
                    { context: '项目技术：mvc设计模式 ajax、json、svn' },
                    { context: '责任描述：负责公司台代码的编写 和功能的完善，菜品添加和公司添加 和账单系统' },
                    { context: '项目简介：公司打造的保定美食平台，里面有保定美食的介绍，和保定店家的推荐' },
                ]
            },{
                title: '保定铧钲电气、鸿钰多层板、锾海进出口贸易',
                date: '2014/10 - 2015/05',
                data: [
                    { context: '软件环境：tomcat' },
                    { context: '硬件环境：linux' },
                    { context: '开发工具：notepad++、vscode、pickpick、ps' },
                    { context: '项目技术：js、jquery、html、css、java' },
                    { context: '责任描述：负责公司页面的编写 以后后期前后台代码的维护' },
                    { context: '项目简介：铧钲电气 鸿钰和锾海公司官网的建设 公司自己的官方网站' },
                ]
            },{
                title: '保定网商互通网络有限公司-web前端',
                date: '2014/05 - 2014/10',
                data: [
                    { context: '软件环境：aspcms、dedecms' },
                    { context: '硬件环境：window' },
                    { context: '开发工具：notepad++、picpick' },
                    { context: '项目技术：html+css+jquery' },
                    { context: '责任描述：根据美工小样，为公司客户建立形象级网站' },
                    { context: '项目简介：益康职业、康瑞门窗、保定野三坡住宿、康琪床垫等等' },
                ]
            },{
                title: '保定网商互通网络有限公司-seo',
                date: '2014/05 - 2014/10',
                data: [
                    { context: '项目技术：搜索引擎数据分析，关键词流量查询，网站权重' },
                    { context: '责任描述：根据搜索引擎的关键词进行数据分析，为自己负责的项目提升权重' },
                    { context: '项目简介：鸿玉川香麻辣烫，保定嘉利食品机械有限公司、伟通雕塑、明月纸业、保定徽园等等' },
                ]
            },
        ]
    }, {
        title: "教育经历",
        data: [
             /*
             {
                title: '中软高科 2017/08-至今',
                data: [
                    { context: '内容 java培训' },
                    { context: '全日制教育经历  非统招' },
                ]
            },*/{
                title: '唐山学院 2009/09 - 2012/06',
                data: [
                    { context: '学历： 大专' },
                    { context: '专业： 机电一体化' },
                ]
            }, {
                title: '迁西县第二中学2006/09 - 2009/06',
                data: [
                    { context: '学历： 高中' },
                    { context: '理科很强' },
                ]
            },
        ]
    }, {
        title: "兴趣爱好",
        data: [
            {
                title: '读书：书中自有黄金屋',
                data: [
                    { context: ' 2017 所看得 《万历十五年》《我的团长我的团》《神雕侠侣》《特别关注》《千古名将英雄梦》 《东周列国志》' },
                ]
            }, {
                title: '音乐：生活不能缺少艺术',
                data: [
                    { context: ' 民族乐器 笛子 箫 自学 古典民族乐器 穿越时空的思念' },
                ]
            }, {
                title: '旅行：身体或者心灵必须有一个在路上',
                data: [
                    { context: '游遍祖国的大好河山北京故宫 南锣 清华北大 香山 中关村 长城 北海 天安门 西单 王府井' },
                ]
            }, {
                title: '吃货：身体是革命的本钱',
                data: [
                    { context: ' 对一切特色的东西都没有抗拒心理' },
                ]
            }, {
                title: '程序：赚钱才是硬道理',
                data: [
                    { context: '看着代码在自己手中写出来的成就感' },
                ]
            },
        ]
    }, {
        title: "家庭联系方式",
        data: [
            { context: '暂时保密' },
        ]
    }, {
        title: "网站模板",
        data: [
            { context: '<a href="demo/demo01/index.html">万虎网站模板</a>' },
            { context: '<a href="demo/demo02/index.html">博莹睿网站模板</a>' },
            { context: '<a href="demo/demo03/index.html">蓝睿网站模板</a>' },
        ]
    }]
}
data = [demo01]


// 程序员的特性就是偷懒 当你偷懒的时候 你就进化