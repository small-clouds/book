//A开头的简谱
var urlposition = "data/images/jianpu/"


var demo01 = {
    title: "千曲晓声",
    name: "按照调性",
    data: [{
        title: "知识总结",
        data: [
            { context: '<input type="text" class="findname" /><button onclick="findName()">搜索</button>' },
            { context: '<span onclick="findName(2222)">新手选笛子 较音是哪几个 所有音</span>' },
            { context: '<a target="_blank"   href="' + urlposition + '笔记.jpg">转调表 无</a>' },
        ]
    },{
        title: "C调的简谱",
        data: [
            { context: '004-<a target="_blank"   href="' + urlposition + '醉仙美.jpg">醉仙美</a><span onclick="openImg(this)">展示图片</span>' },
            { context: '010-<a target="_blank"   href="' + urlposition + '最浪漫的事.jpg">最浪漫的事</a>' },
            { context: '028-<a target="_blank"   href="' + urlposition + '长相依.jpg">长相依</a>' },
            { context: '036-<a target="_blank"   href="' + urlposition + '云水禅心.jpg">云水禅心</a>' },
            { context: '044-<a target="_blank"   href="' + urlposition + '渔舟唱晚.jpg">渔舟唱晚（天气预报）</a>' },
            { context: '046-<a target="_blank"   href="' + urlposition + '友谊之光.jpg">友谊之光</a>' },
            { context: '056-<a target="_blank"   href="' + urlposition + '一生爱你千百回.jpg">一生爱你千百回</a>' },
            { context: '063-<a target="_blank"   href="' + urlposition + '烟花易冷.jpg">烟花易冷</a>' },
            { context: '064-<a target="_blank"   href="' + urlposition + '雪中情.jpg">雪中情</a>' },
            { context: '081-<a target="_blank"   href="' + urlposition + '小城故事.jpg">小城故事</a>' },
            { context: '087-<a target="_blank"   href="' + urlposition + '相思西游记后传.jpg">相思--西游记后传</a>' },
            { context: '091-<a target="_blank"   href="' + urlposition + '仙剑问情.jpg">仙剑问情</a>' },
            { context: '097-<a target="_blank"   href="' + urlposition + '舞女.jpg">舞女</a>' },
            { context: '106-<a target="_blank"   href="' + urlposition + '我的未来不是梦.jpg">我的未来不是梦</a>' },
            { context: '107-<a target="_blank"   href="' + urlposition + '问情.jpg">问情</a>' },
            { context: '121-<a target="_blank"   href="' + urlposition + '天意.jpg">天意</a>' },
            { context: '131-<a target="_blank"   href="' + urlposition + '顺流逆流.jpg">顺流逆流</a>' },
            { context: '137-<a target="_blank"   href="' + urlposition + '似是故人来.jpg">似是故人来</a>' },
            { context: '142-<a target="_blank"   href="' + urlposition + '十送红军.jpg">十送红军</a>' },
            { context: '143-<a target="_blank"   href="' + urlposition + '盛夏的果实.jpg">盛夏的果实</a>' },
            { context: '147-<a target="_blank"   href="' + urlposition + '上海滩.jpg">上海滩</a>' },
            { context: '150-<a target="_blank"   href="' + urlposition + '杀破狼.jpg">杀破狼</a>' },
            { context: '156-<a target="_blank"   href="' + urlposition + '人间不值得.jpg">人间不值得</a>' },
            { context: '172-<a target="_blank"   href="' + urlposition + '飘摇.jpg">飘摇</a>' },
            { context: '175-<a target="_blank"   href="' + urlposition + '朋友别哭.jpg">朋友别哭</a>' },
            { context: '183-<a target="_blank"   href="' + urlposition + '难念的经.jpg">难念的经</a>' },
            { context: '189-<a target="_blank"   href="' + urlposition + '抹去泪水.jpg">抹去泪水</a>' },
            { context: '194-<a target="_blank"   href="' + urlposition + '明天会更好.jpg">明天会更好</a>' },
            { context: '203-<a target="_blank"   href="' + urlposition + '梅花泪.jpg">梅花泪</a>' },
            { context: '210-<a target="_blank"   href="' + urlposition + '两只老虎.jpg">两只老虎</a>' },
            { context: '213-<a target="_blank"   href="' + urlposition + '梁祝.jpg">梁祝</a>' },
            { context: '214-<a target="_blank"   href="' + urlposition + '恋人心.jpg">恋人心</a>' },
            { context: '219-<a target="_blank"   href="' + urlposition + '来生愿做一朵莲.jpg">来生愿做一朵莲</a>' },
            { context: '222-<a target="_blank"   href="' + urlposition + '军港之夜.jpg">军港之夜</a>' },
            { context: '223-<a target="_blank"   href="' + urlposition + '旧梦不须记.jpg">旧梦不须记</a>' },
            { context: '226-<a target="_blank"   href="' + urlposition + '九九艳阳天.jpg">九九艳阳天</a>' },
            { context: '230-<a target="_blank"   href="' + urlposition + '今天是你的生日.jpg">今天是你的生日</a>' },
            { context: '233-<a target="_blank"   href="' + urlposition + '江上行.jpg">江上行</a>' },
            { context: '235-<a target="_blank"   href="' + urlposition + '江南梦.jpg">江南梦</a>' },
            { context: '266-<a target="_blank"   href="' + urlposition + '飞雪玉花.jpg">飞雪玉花</a>' },
            { context: '269-<a target="_blank"   href="' + urlposition + '独角戏.jpg">独角戏</a>' },
            { context: '274-<a target="_blank"   href="' + urlposition + '当.jpg">当</a>' },
            { context: '286-<a target="_blank"   href="' + urlposition + '成都.jpg">成都</a>' },
            { context: '298-<a target="_blank"   href="' + urlposition + '半壶纱.jpg">半壶纱</a>' },
            { context: '304-<a target="_blank"   href="' + urlposition + '爱拼才会赢.jpg" page="301">爱拼才会赢</a>' },
            { context: '310-<a target="_blank"   href="' + urlposition + '真的爱你.jpg" page="301">真的爱你</a>' },
        ]
    }, {
        title: "#C调的简谱",
        data: [
            { context: '161-<a target="_blank"   href="' + urlposition + '倾国倾城.jpg">倾国倾城</a>' },
            { context: '205-<a target="_blank"   href="' + urlposition + '漫步人生路.jpg">漫步人生路</a>' },
            { context: '244-<a target="_blank"   href="' + urlposition + '红马鞍.jpg">红马鞍</a>' },
            { context: '247-<a target="_blank"   href="' + urlposition + '好汉歌.jpg">好汉歌</a>' },
            { context: '260-<a target="_blank"   href="' + urlposition + '芙蓉愿.jpg">芙蓉愿</a>' },
        ]
    }, {
        title: "bD调的简谱",
        data: [
            { context: '037-<a target="_blank"   href="' + urlposition + '月亮代表我的心.jpg">月亮代表我的心</a>' },
            { context: '042-<a target="_blank"   href="' + urlposition + '雨蝶.jpg">雨蝶</a>' },
            { context: '053-<a target="_blank"   href="' + urlposition + '隐形的翅膀.jpg">隐形的翅膀</a>' },
            { context: '159-<a target="_blank"   href="' + urlposition + '清明雨上.jpg">清明雨上</a>' },
            { context: '185-<a target="_blank"   href="' + urlposition + '男儿当自强.jpg">男儿当自强</a>' },
            { context: '228-<a target="_blank"   href="' + urlposition + '锦鲤抄.jpg">锦鲤抄</a>' },
            { context: '253-<a target="_blank"   href="' + urlposition + '滚滚长江东逝水.jpg">滚滚长江东逝水</a>' },
            { context: '278-<a target="_blank"   href="' + urlposition + '大鱼.jpg">大鱼</a>' },
        ]
    }, {
        title: "D调的简谱",
        data: [
            { context: '017-<a target="_blank"   href="' + urlposition + '祝你平安.jpg">祝你平安</a>' },
            { context: '022-<a target="_blank"   href="' + urlposition + '知道不知道.jpg">知道不知道</a>' },
            { context: '025-<a target="_blank"   href="' + urlposition + '真的好想你.jpg">真的好想你</a>' },
            { context: '032-<a target="_blank"   href="' + urlposition + '在水一方.jpg">在水一方</a>' },
            { context: '034-<a target="_blank"   href="' + urlposition + '再见亦是朋友.jpg">再见亦是朋友</a>' },
            { context: '039-<a target="_blank"   href="' + urlposition + '怨苍天变了心.jpg">怨苍天变了心</a>' },
            { context: '052-<a target="_blank"   href="' + urlposition + '英雄的黎明.jpg">英雄的黎明</a>' },
            { context: '061-<a target="_blank"   href="' + urlposition + '一次就好.jpg">一次就好</a>' },
            { context: '062-<a target="_blank"   href="' + urlposition + '扬鞭催马运粮忙.jpg">扬鞭催马运粮忙</a>' },
            { context: '067-<a target="_blank"   href="' + urlposition + '星月神话.JPG" >星月神话</a>' },
            { context: '070-<a target="_blank"   href="' + urlposition + '新贵妃醉酒.jpg">新贵妃醉酒</a>' },
            { context: '071-<a target="_blank"   href="' + urlposition + '心愿.jpg">心愿</a>' },
            { context: '074-<a target="_blank"   href="' + urlposition + '笑红尘.jpg">笑红尘</a>' },
            { context: '076-<a target="_blank"   href="' + urlposition + '笑傲江湖曲琴箫合奏.jpg">笑傲江湖曲-琴箫合奏</a>' },
            { context: '079-<a target="_blank"   href="' + urlposition + '小看戏.jpg">小看戏</a>' },
            { context: '112-<a target="_blank"   href="' + urlposition + '忘尘谷.jpg">忘尘谷</a>' },
            { context: '118-<a target="_blank"   href="' + urlposition + '同桌的你.jpg">同桌的你</a>' },
            { context: '119-<a target="_blank"   href="' + urlposition + '同一首歌.jpg">同一首歌</a>' },
            { context: '122-<a target="_blank"   href="' + urlposition + '天涯.jpg">天涯</a>' },
            { context: '126-<a target="_blank"   href="' + urlposition + '天空之城.jpg">天空之城</a>' },
            { context: '133-<a target="_blank"   href="' + urlposition + '水手.jpg">水手</a>' },
            { context: '165-<a target="_blank"   href="' + urlposition + '倩女幽魂.jpg">倩女幽魂</a>' },
            { context: '173-<a target="_blank"   href="' + urlposition + '飘雪.jpg">飘雪</a>' },
            { context: '180-<a target="_blank"   href="' + urlposition + '你的样子.jpg">你的样子</a>' },
            { context: '188-<a target="_blank"   href="' + urlposition + '茉莉花.jpg">茉莉花</a>' },
            { context: '199-<a target="_blank"   href="' + urlposition + '梦里水乡.jpg">梦里水乡</a>' },
            { context: '200-<a target="_blank"   href="' + urlposition + '美人吟.jpg">美人吟</a>' },
            { context: '209-<a target="_blank"   href="' + urlposition + '另一种乡愁.jpg">另一种乡愁</a>' },
            { context: '224-<a target="_blank"   href="' + urlposition + '久别的人.jpg">久别的人</a>' },
            { context: '229-<a target="_blank"   href="' + urlposition + '金蛇狂舞.jpg">金蛇狂舞</a>' },
            { context: '231-<a target="_blank"   href="' + urlposition + '今天.jpg">今天</a>' },
            { context: '259-<a target="_blank"   href="' + urlposition + '敢问路在何方.jpg">敢问路在何方</a>' },
            { context: '301-<a target="_blank"   href="' + urlposition + '白狐.jpg"  page="298">白狐</a>' },
            { context: '302-<a target="_blank"   href="' + urlposition + '把悲伤留给自己.jpg">把悲伤留给自己</a>' },
            { context: '312-<a target="_blank"   href="' + urlposition + '漫漫前路.jpg">漫漫前路</a>' },
        ]
    }, {
        title: "bE调的简谱",
        data: [
            { context: '016-<a target="_blank"   href="' + urlposition + '壮志在我胸.jpg">壮志在我胸</a>' },
            { context: '050-<a target="_blank"   href="' + urlposition + '英雄赞歌.jpg">英雄赞歌</a>' },
            { context: '082-<a target="_blank"   href="' + urlposition + '潇湘子.jpg">潇湘子</a>' },
            { context: '083-<a target="_blank"   href="' + urlposition + '潇洒走一回.jpg">潇洒走一回</a>' },
            { context: '096-<a target="_blank"   href="' + urlposition + '舞女泪.jpg">舞女泪</a>' },
            { context: '105-<a target="_blank"   href="' + urlposition + '我的中国心.jpg">我的中国心</a>' },
            { context: '115-<a target="_blank"   href="' + urlposition + '万里长城永不倒.jpg">万里长城永不倒</a>' },
            { context: '125-<a target="_blank"   href="' + urlposition + '天路.jpg">天路</a>' },
            { context: '130-<a target="_blank"   href="' + urlposition + '送别.jpg">送别</a>' },
            { context: '152-<a target="_blank"   href="' + urlposition + '任逍遥.jpg">任逍遥</a>' },
            { context: '153-<a target="_blank"   href="' + urlposition + '人在旅途.jpg">人在旅途</a>' },
            { context: '157-<a target="_blank"   href="' + urlposition + '让我们荡起双桨.jpg">让我们荡起双桨</a>' },
            { context: '170-<a target="_blank"   href="' + urlposition + '祈祷.jpg">祈祷</a>' },
            { context: '217-<a target="_blank"   href="' + urlposition + '礼仪之邦.jpg">礼仪之邦</a>' },
            { context: '240-<a target="_blank"   href="' + urlposition + '后来.jpg">后来</a>' },
            { context: '243-<a target="_blank"   href="' + urlposition + '红颜旧.jpg">红颜旧</a>' },
            { context: '263-<a target="_blank"   href="' + urlposition + '风月令.jpg">风月令</a>' },
            { context: '268-<a target="_blank"   href="' + urlposition + '杜十娘.jpg">杜十娘</a>' },
            { context: '273-<a target="_blank"   href="' + urlposition + '当年情.jpg">当年情</a>' },
            { context: '283-<a target="_blank"   href="' + urlposition + '初见.jpg">初见</a>' },
            { context: '291-<a target="_blank"   href="' + urlposition + '不装饰你的梦.jpg">不装饰你的梦</a>' },
            { context: '300-<a target="_blank"   href="' + urlposition + '百姓心中自有你.jpg">百姓心中自有你</a>' },
        ]
    }, {
        title: "E调的简谱",
        data: [
            { context: '014-<a target="_blank"   href="' + urlposition + '追梦人.jpg">追梦人</a>' },
            { context: '020-<a target="_blank"   href="' + urlposition + '中国人.jpg">中国人</a>' },
            { context: '026-<a target="_blank"   href="' + urlposition + '珍惜.jpg">珍惜</a>' },
            { context: '051-<a target="_blank"   href="' + urlposition + '英雄谁属.jpg">英雄谁属</a>' },
            { context: '068-<a target="_blank"   href="' + urlposition + '星星点灯.jpg">星星点灯</a>' },
            { context: '073-<a target="_blank"   href="' + urlposition + '笑看风云.jpg">笑看风云</a>' },
            { context: '084-<a target="_blank"   href="' + urlposition + '逍遥叹.jpg">逍遥叹</a><span onclick="openImg(this)">展示图片</span>' },
            { context: '089-<a target="_blank"   href="' + urlposition + '相思.jpg">相思</a>' },
            { context: '092-<a target="_blank"   href="' + urlposition + '惜别的海岸.jpg">惜别的海岸</a>' },
            { context: '114-<a target="_blank"   href="' + urlposition + '枉凝眉.jpg">枉凝眉</a>' },
            { context: '117-<a target="_blank"   href="' + urlposition + '童年.jpg">童年</a>' },
            { context: '141-<a target="_blank"   href="' + urlposition + '世间始终你好.jpg">世间始终你好</a>' },
            { context: '149-<a target="_blank"   href="' + urlposition + '山里红.jpg">山里红</a>' },
            { context: '162-<a target="_blank"   href="' + urlposition + '青青河边草.jpg">青青河边草</a>' },
            { context: '166-<a target="_blank"   href="' + urlposition + '千千阙歌.jpg">千千阙歌</a>' },
            { context: '174-<a target="_blank"   href="' + urlposition + '琵琶语.jpg">琵琶语</a>' },
            { context: '186-<a target="_blank"   href="' + urlposition + '牧羊曲.jpg">牧羊曲</a>' },
            { context: '192-<a target="_blank"   href="' + urlposition + '明月千里寄相思.jpg">明月千里寄相思</a>' },
            { context: '193-<a target="_blank"   href="' + urlposition + '明月几时有.jpg">明月几时有</a>' },
            { context: '255-<a target="_blank"   href="' + urlposition + '光辉岁月.jpg">光辉岁月</a>' },
            { context: '276-<a target="_blank"   href="' + urlposition + '单身情歌.jpg">单身情歌</a>' },
            { context: '307-<a target="_blank"   href="' + urlposition + '阿里山的姑娘.jpg">阿里山的姑娘</a>' },
        ]
    }, {
        title: "F调的简谱",
        data: [
            { context: '002-<a target="_blank"   href="' + urlposition + '昨日重现.jpg">昨日重现</a>' },
            { context: '003-<a target="_blank"   href="' + urlposition + '醉相思.jpg">醉相思</a>' },
            { context: '007-<a target="_blank"   href="' + urlposition + '最真的梦.jpg">最真的梦</a>' },
            { context: '008-<a target="_blank"   href="' + urlposition + '最远的你是我最近的爱.jpg">最远的你是我最近的爱</a>' },
            { context: '012-<a target="_blank"   href="' + urlposition + '走过咖啡屋.jpg">走过咖啡屋</a>' },
            { context: '023-<a target="_blank"   href="' + urlposition + '真心真意过一生.jpg">真心真意过一生</a>' },
            { context: '031-<a target="_blank"   href="' + urlposition + '摘下满天星.jpg">摘下满天星</a>' },
            { context: '041-<a target="_blank"   href="' + urlposition + '雨碎江南.jpg">雨碎江南</a>' },
            { context: '045-<a target="_blank"   href="' + urlposition + '有所思.jpg">有所思</a>' },
            { context: '047-<a target="_blank"   href="' + urlposition + '友谊地久天长.jpg">友谊地久天长</a>' },
            { context: '058-<a target="_blank"   href="' + urlposition + '一曲红尘.jpg">一曲红尘</a>' },
            { context: '060-<a target="_blank"   href="' + urlposition + '一个师傅三徒弟.jpg">一个师傅三徒弟</a>' },
            { context: '078-<a target="_blank"   href="' + urlposition + '小李飞刀.jpg">小李飞刀</a>' },
            { context: '094-<a target="_blank"   href="' + urlposition + '夕阳之歌.jpg">夕阳之歌</a>' },
            { context: '100-<a target="_blank"   href="' + urlposition + '我只在乎你.jpg">我只在乎你</a>' },
            { context: '104-<a target="_blank"   href="' + urlposition + '我的祖国.jpg">我的祖国</a>' },
            { context: '110-<a target="_blank"   href="' + urlposition + '忘情水.jpg">忘情水</a>' },
            { context: '111-<a target="_blank"   href="' + urlposition + '忘了我.jpg">忘了我</a>' },
            { context: '138-<a target="_blank"   href="' + urlposition + '市集.jpg">市集</a>' },
            { context: '154-<a target="_blank"   href="' + urlposition + '人生何处不相逢.jpg">人生何处不相逢</a>' },
            { context: '158-<a target="_blank"   href="' + urlposition + '晴空月儿明.jpg">晴空月儿明</a>' },
            { context: '169-<a target="_blank"   href="' + urlposition + '千本樱.jpg">千本樱</a>' },
            { context: '178-<a target="_blank"   href="' + urlposition + '女儿情.jpg">女儿情</a>' },
            { context: '181-<a target="_blank"   href="' + urlposition + '你的眼神.jpg">你的眼神</a>' },
            { context: '195-<a target="_blank"   href="' + urlposition + '民得平安天下安.jpg">民得平安天下安</a>' },
            { context: '201-<a target="_blank"   href="' + urlposition + '美丽的草原我的家.jpg">美丽的草原我的家</a>' },
            { context: '206-<a target="_blank"   href="' + urlposition + '绿野仙踪.jpg">绿野仙踪</a>' },
            { context: '212-<a target="_blank"   href="' + urlposition + '两两相忘.jpg">两两相忘</a>' },
            { context: '215-<a target="_blank"   href="' + urlposition + '恋曲1990.jpg">恋曲1990</a>' },
            { context: '221-<a target="_blank"   href="' + urlposition + '康定情歌.jpg">康定情歌</a>' },
            { context: '234-<a target="_blank"   href="' + urlposition + '江山无限.jpg">江山无限</a>' },
            { context: '251-<a target="_blank"   href="' + urlposition + '海阔天空.jpg">海阔天空</a>' },
            { context: '256-<a target="_blank"   href="' + urlposition + '故乡的原风景.jpg">故乡的原风景</a>' },
            { context: '258-<a target="_blank"   href="' + urlposition + '歌声与微笑.jpg">歌声与微笑</a>' },
            { context: '270-<a target="_blank"   href="' + urlposition + '东风志.jpg">东风志</a>' },
            { context: '272-<a target="_blank"   href="' + urlposition + '刀剑如梦.jpg">刀剑如梦</a>' },
            { context: '281-<a target="_blank"   href="' + urlposition + '窗外.jpg">窗外</a>' },
            { context: '284-<a target="_blank"   href="' + urlposition + '痴情冢.jpg">痴情冢</a>' },
            { context: '290-<a target="_blank"   href="' + urlposition + '彩云追月.jpg">彩云追月</a>' },
            { context: '303-<a target="_blank"   href="' + urlposition + '敖包相会.jpg">敖包相会</a>' },
            { context: '315-<a target="_blank"   href="' + urlposition + '潮湿的心.jpg">潮湿的心</a>' },
        ]
    }, {
        title: "#F调的简谱",
        data: [
            { context: '001-<a target="_blank"   href="' + urlposition + '左手指月.jpg">左手指月</a>' },
            { context: '057-<a target="_blank"   href="' + urlposition + '一曲相思.jpg">一曲相思</a>' },
            { context: '108-<a target="_blank"   href="' + urlposition + '未闻花名.jpg">未闻花名</a>' },
            { context: '164-<a target="_blank"   href="' + urlposition + '青花.jpg">青花</a>' },
            { context: '177-<a target="_blank"   href="' + urlposition + '女人花.jpg">女人花</a>' },
            { context: '245-<a target="_blank"   href="' + urlposition + '红尘清歌.jpg">红尘清歌</a>' },
            { context: '287-<a target="_blank"   href="' + urlposition + '刹那芳华曲.jpg">刹那芳华曲</a>' },
            { context: '299-<a target="_blank"   href="' + urlposition + '拜无忧.jpg">拜无忧</a>' },
            { context: '308-<a target="_blank"   href="' + urlposition + '祝你一路顺风.jpg">祝你一路顺风</a>' },
        ]
    }, {
        title: "G调的简谱(D作2)",
        data: [
            { context: '013-<a target="_blank"   href="' + urlposition + '纵横江湖.jpg">纵横江湖</a>' },
            { context: '019-<a target="_blank"   href="' + urlposition + '中华民谣.jpg">中华民谣</a>' },
            { context: '024-<a target="_blank"   href="' + urlposition + '真心英雄.jpg">真心英雄</a>' },
            { context: '035-<a target="_blank"   href="' + urlposition + '再回首.jpg">再回首</a>' },
            { context: '038-<a target="_blank"   href="' + urlposition + '月光下的凤尾竹.jpg">月光下的凤尾竹</a>' },
            { context: '049-<a target="_blank"   href="' + urlposition + '勇气.jpg">勇气</a>' },
            { context: '054-<a target="_blank"   href="' + urlposition + '沂蒙山小调.jpg">沂蒙山小调</a>' },
            { context: '069-<a target="_blank"   href="' + urlposition + '新鸳鸯蝴蝶梦.jpg">新鸳鸯蝴蝶梦</a>' },
            { context: '072-<a target="_blank"   href="' + urlposition + '谢谢你的爱.jpg">谢谢你的爱</a>' },
            { context: '090-<a target="_blank"   href="' + urlposition + '乡间的小路.jpg">乡间的小路</a>' },
            { context: '093-<a target="_blank"   href="' + urlposition + '希望.jpg">希望</a>' },
            { context: '095-<a target="_blank"   href="' + urlposition + '雾里看花.jpg">雾里看花</a>' },
            { context: '098-<a target="_blank"   href="' + urlposition + '五百年沧海桑田.jpg">五百年沧海桑田</a>' },
            { context: '102-<a target="_blank"   href="' + urlposition + '我和我的祖国.jpg">我和我的祖国</a>' },
            { context: '109-<a target="_blank"   href="' + urlposition + '为了谁.jpg">为了谁</a>' },
            { context: '116-<a target="_blank"   href="' + urlposition + '晚秋.jpg">晚秋</a>' },
            { context: '120-<a target="_blank"   href="' + urlposition + '铁血丹心.jpg">铁血丹心</a>' },
            { context: '140-<a target="_blank"   href="' + urlposition + '世界第一等.jpg">世界第一等</a>' },
            { context: '146-<a target="_blank"   href="' + urlposition + '少年壮志不言愁.jpg">少年壮志不言愁</a>' },
            { context: '148-<a target="_blank"   href="' + urlposition + '闪亮的日子.jpg">闪亮的日子</a>' },
            { context: '176-<a target="_blank"   href="' + urlposition + '朋友.jpg">朋友</a>' },
            { context: '179-<a target="_blank"   href="' + urlposition + '挪威的森林.jpg">挪威的森林</a>' },
            { context: '182-<a target="_blank"   href="' + urlposition + '你.jpg">你</a>' },
            { context: '184-<a target="_blank"   href="' + urlposition + '男儿无泪.jpg">男儿无泪</a>' },
            { context: '191-<a target="_blank"   href="' + urlposition + '明月天涯.jpg">明月天涯</a>' },
            { context: '197-<a target="_blank"   href="' + urlposition + '梦醒时分.jpg">梦醒时分</a>' },
            { context: '202-<a target="_blank"   href="' + urlposition + '梅花三弄.jpg">梅花三弄</a>' },
            { context: '204-<a target="_blank"   href="' + urlposition + '毛主席的话儿记心上.jpg">毛主席的话儿记心上</a>' },
            { context: '207-<a target="_blank"   href="' + urlposition + '乱红.jpg">乱红</a>' },
            { context: '211-<a target="_blank"   href="' + urlposition + '两只蝴蝶.jpg">两只蝴蝶</a>' },
            { context: '218-<a target="_blank"   href="' + urlposition + '兰花草.jpg">兰花草</a>' },
            { context: '232-<a target="_blank"   href="' + urlposition + '今生你作伴.jpg">今生你作伴</a>' },
            { context: '236-<a target="_blank"   href="' + urlposition + '江湖笑.jpg">江湖笑</a>' },
            { context: '238-<a target="_blank"   href="' + urlposition + '回梦游仙.jpg">回梦游仙</a>' },
            { context: '241-<a target="_blank"   href="' + urlposition + '鸿雁.jpg">鸿雁</a>' },
            { context: '242-<a target="_blank"   href="' + urlposition + '红叶舞秋山.jpg">红叶舞秋山</a>' },
            { context: '246-<a target="_blank"   href="' + urlposition + '好人一生平安.jpg">好人一生平安</a>' },
            { context: '252-<a target="_blank"   href="' + urlposition + '国歌.jpg">国歌</a>' },
            { context: '267-<a target="_blank"   href="' + urlposition + '断桥残雪.jpg">断桥残雪</a>' },
            { context: '271-<a target="_blank"   href="' + urlposition + '丁香花.jpg">丁香花</a>' },
            { context: '275-<a target="_blank"   href="' + urlposition + '弹起我心爱的土琵琶.jpg">弹起我心爱的土琵琶</a>' },
            { context: '285-<a target="_blank"   href="' + urlposition + '城里的月光.jpg">城里的月光</a>' },
            { context: '292-<a target="_blank"   href="' + urlposition + '不再犹豫.jpg">不再犹豫</a>' },
            { context: '293-<a target="_blank"   href="' + urlposition + '不谓侠.jpg">不谓侠</a>' },
            { context: '295-<a target="_blank"   href="' + urlposition + '被遗忘的时光.jpg">被遗忘的时光</a>' },
            { context: '296-<a target="_blank"   href="' + urlposition + '背包.jpg">背包</a>' },
            { context: '305-<a target="_blank"   href="' + urlposition + '爱江山更爱美人.jpg">爱江山更爱美人</a>' },
            { context: '313-<a target="_blank"   href="' + urlposition + '故事就是故事.jpg">故事就是故事</a>' },
        ]
    }, {
        title: "bA调的简谱",
        data: [
            { context: '018-<a target="_blank"   href="' + urlposition + '祝福.jpg">祝福</a>' },
            { context: '075-<a target="_blank"   href="' + urlposition + '笑八仙.jpg">笑八仙</a>' },
            { context: '124-<a target="_blank"   href="' + urlposition + '天下第一.jpg">天下第一</a>' },
            { context: '135-<a target="_blank"   href="' + urlposition + '手纸～拝启1.jpg">手纸～拝启 十五の君</a>' },
            { context: '136-<a target="_blank"   href="' + urlposition + '手纸～拝启2.jpg">手纸～拝启 十五の君</a>' },
            { context: '139-<a target="_blank"   href="' + urlposition + '世界由我创造.jpg">世界由我创造</a>' },
            { context: '171-<a target="_blank"   href="' + urlposition + '萍聚.jpg">萍聚</a>' },
            { context: '187-<a target="_blank"   href="' + urlposition + '莫失莫忘.jpg">莫失莫忘</a>' },
            { context: '190-<a target="_blank"   href="' + urlposition + '明月夜.jpg">明月夜</a>' },
            { context: '220-<a target="_blank"   href="' + urlposition + '来生缘.jpg">来生缘</a>' },
            { context: '237-<a target="_blank"   href="' + urlposition + '剑啸江湖.jpg">剑啸江湖</a>' },
            { context: '262-<a target="_blank"   href="' + urlposition + '风筝误.jpg">风筝误</a>' },
            { context: '265-<a target="_blank"   href="' + urlposition + '风的季节.jpg">风的季节</a>' },
            { context: '280-<a target="_blank"   href="' + urlposition + '辞九门的回忆.jpg">辞九门的回忆</a>' },
            { context: '316-<a target="_blank"   href="' + urlposition + '西海情歌.jpg">西海情歌</a>' },
        ]
    }, {
        title: "A调的简谱(E做2)",
        data: [
            { context: '005-<a target="_blank"   href="' + urlposition + '醉拳.jpg">醉拳</a>' },
            { context: '015-<a target="_blank"   href="' + urlposition + '追风的女儿.jpg">追风的女儿</a>' },
            { context: '033-<a target="_blank"   href="' + urlposition + '在那遥远的地方.jpg">在那遥远的地方</a>' },
            { context: '048-<a target="_blank"   href="' + urlposition + '用心良苦.jpg">用心良苦</a>' },
            { context: '066-<a target="_blank"   href="' + urlposition + '雪花女神龙.jpg">雪花女神龙</a>' },
            { context: '077-<a target="_blank"   href="' + urlposition + '小仙女.jpg">小仙女</a>' },
            { context: '085-<a target="_blank"   href="' + urlposition + '向天再借五百年.jpg">向天再借五百年</a>' },
            { context: '088-<a target="_blank"   href="' + urlposition + '相思风雨中.jpg">相思风雨中</a>' },
            { context: '101-<a target="_blank"   href="' + urlposition + '我心永恒.jpg">我心永恒</a>' },
            { context: '113-<a target="_blank"   href="' + urlposition + '往事只能回味.jpg">往事只能回味</a>' },
            { context: '134-<a target="_blank"   href="' + urlposition + '双侠.jpg">双侠</a>' },
            { context: '145-<a target="_blank"   href="' + urlposition + '神话.jpg">神话</a>' },
            { context: '151-<a target="_blank"   href="' + urlposition + '三大纪律八项注意.jpg">三大纪律八项注意</a>' },
            { context: '155-<a target="_blank"   href="' + urlposition + '人间情多.jpg">人间情多</a>' },
            { context: '163-<a target="_blank"   href="' + urlposition + '青花瓷.jpg">青花瓷</a>' },
            { context: '198-<a target="_blank"   href="' + urlposition + '梦驼铃.jpg">梦驼铃</a>' },
            { context: '227-<a target="_blank"   href="' + urlposition + '精忠报国.jpg">精忠报国</a>' },
            { context: '249-<a target="_blank"   href="' + urlposition + '好春光.jpg">好春光</a>' },
            { context: '250-<a target="_blank"   href="' + urlposition + '海浪.jpg">海浪</a>' },
            { context: '254-<a target="_blank"   href="' + urlposition + '滚滚红尘.jpg">滚滚红尘</a>' },
            { context: '277-<a target="_blank"   href="' + urlposition + '大约在冬季.jpg">大约在冬季</a>' },
            { context: '288-<a target="_blank"   href="' + urlposition + '曾经最美.jpg">曾经最美</a>' },
            { context: '289-<a target="_blank"   href="' + urlposition + '沧海一声笑.jpg">沧海一声笑</a>' },
            { context: '309-<a target="_blank"   href="' + urlposition + '看我跃马扬鞭.jpg">看我跃马扬鞭</a>' },
        ]
    }, {
        title: "bB调的简谱",
        data: [
            { context: '009-<a target="_blank"   href="' + urlposition + '最美的情缘.jpg">最美的情缘</a>' },
            { context: '011-<a target="_blank"   href="' + urlposition + '最初的梦想.jpg">最初的梦想</a>' },
            { context: '021-<a target="_blank"   href="' + urlposition + '知心爱人.jpg">知心爱人</a>' },
            { context: '027-<a target="_blank"   href="' + urlposition + '丈夫歌.jpg">丈夫歌</a>' },
            { context: '030-<a target="_blank"   href="' + urlposition + '张三的歌.jpg">张三的歌</a>' },
            { context: '040-<a target="_blank"   href="' + urlposition + '遇上你是我的缘.jpg">遇上你是我的缘</a>' },
            { context: '043-<a target="_blank"   href="' + urlposition + '虞美人.jpg">虞美人</a>' },
            { context: '055-<a target="_blank"   href="' + urlposition + '一直很安静.jpg">一直很安静</a>' },
            { context: '059-<a target="_blank"   href="' + urlposition + '一剪梅.jpg">一剪梅</a>' },
            { context: '065-<a target="_blank"   href="' + urlposition + '雪千寻.jpg">雪千寻</a>' },
            { context: '080-<a target="_blank"   href="' + urlposition + '小芳.jpg">小芳</a>' },
            { context: '099-<a target="_blank"   href="' + urlposition + '卧龙吟.jpg">卧龙吟</a>' },
            { context: '123-<a target="_blank"   href="' + urlposition + '天仙子.jpg">天仙子</a>' },
            { context: '127-<a target="_blank"   href="' + urlposition + '桃花渡.jpg">桃花渡</a>' },
            { context: '128-<a target="_blank"   href="' + urlposition + '涛声依旧.jpg">涛声依旧</a>' },
            { context: '129<a target="_blank"   href="' + urlposition + '太多.jpg">太多</a>' },
            { context: '132-<a target="_blank"   href="' + urlposition + '水月.jpg">水月</a>' },
            { context: '144-<a target="_blank"   href="' + urlposition + '神话情话.jpg">神话情话</a>' },
            { context: '160-<a target="_blank"   href="' + urlposition + '清明上河图.jpg">清明上河图</a>' },
            { context: '167-<a target="_blank"   href="' + urlposition + '千年风雅.jpg">千年风雅</a>' },
            { context: '196-<a target="_blank"   href="' + urlposition + '梦中的蝴蝶.jpg">梦中的蝴蝶</a><span onclick="openImg(this)">展示图片</span>' },
            { context: '208-<a target="_blank"   href="' + urlposition + '留什么给你.jpg">留什么给你</a>' },
            { context: '216-<a target="_blank"   href="' + urlposition + '历史的天空.jpg">历史的天空</a>' },  
            { context: '225-<a target="_blank"   href="' + urlposition + '九月九的酒.jpg">九月九的酒</a>' },
            { context: '239-<a target="_blank"   href="' + urlposition + '挥着翅膀的女孩.jpg">挥着翅膀的女孩</a>' },
            { context: '257-<a target="_blank"   href="' + urlposition + '孤星独吟.jpg">孤星独吟</a>' },
            { context: '264-<a target="_blank"   href="' + urlposition + '风居住的街道.jpg">风居住的街道</a>' },
            { context: '279-<a target="_blank"   href="' + urlposition + '大海.jpg">大海</a>' },
            { context: '282-<a target="_blank"   href="' + urlposition + '穿越时空的思念.jpg">穿越时空的思念</a>' },
            { context: '297-<a target="_blank"   href="' + urlposition + '北国之春.jpg">北国之春</a>' },
            { context: '306-<a target="_blank"   href="' + urlposition + '爱不释手.jpg">爱不释手</a>' },
            { context: '311-<a target="_blank"   href="' + urlposition + '月亮惹的祸.jpg">月亮惹的祸</a>' },
            { context: '314-<a target="_blank"   href="' + urlposition + '我们站在雨中.jpg">我们站在雨中</a>' },
        ]
    }, {
        title: "B调的简谱",
        data: [
            { context: '006-<a target="_blank"   href="' + urlposition + '醉梦前尘.jpg">醉梦前尘</a>' },
            { context: '029-<a target="_blank"   href="' + urlposition + '长歌一曲.jpg">长歌一曲</a>' },
            { context: '086-<a target="_blank"   href="' + urlposition + '想起.jpg">想起</a>' },
            { context: '103-<a target="_blank"   href="' + urlposition + '我和草原有个约定.jpg">我和草原有个约定</a>' },
            { context: '168-<a target="_blank"   href="' + urlposition + '千古绝唱.jpg">千古绝唱</a>' },
            { context: '248-<a target="_blank"   href="' + urlposition + '好大一棵树.jpg">好大一棵树</a>' },
            { context: '261-<a target="_blank"   href="' + urlposition + '风中有朵雨做的云.jpg">风中有朵雨做的云</a>' },
            { context: '294-<a target="_blank"   href="' + urlposition + '笔记.jpg">笔记</a>' },
        ]
    }]
}
// var num = 0
// for(var i=0;i<demo01.data.length;i++){
//     for(var j=0;j<demo01.data[i].data.length;j++){
//    num++
//     }

// }
// console.log(num)
data = [demo01]
function findName(str){
    var title = $(".findname").val()
    for(var i=1;i<demo01.data.length;i++){
        var aaa = demo01.data[i].data
        aaa.forEach(e => {
            // console.log(e.context)
            if(e.context.indexOf(title) > 0){
                demo01.data[0].data.push(e);
            }
        });
       
    }
}

function openImg(e){
    var imgUrl = $(e).parent("div").children("a").attr("href");
    var imgmark = '<img src="'+imgUrl+'" style="max-width:100%;">';
    var div1 = '<div  style="max-width:100%;position: fixed;top: 0px;right: 0px; overflow-y:auto; height: 100%;"  onclick="closeImg(this)">'+imgmark+' </div>'
    
   
    $("body").append(div1);               
}

function closeImg(e){
    $(e).remove();
}