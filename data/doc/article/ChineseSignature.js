var demo = {
    title: "经典短句抄录",
    name: "经典短句抄录",
    data: [{
        title: "经典短句集一",
        data: [
            { context: "机遇只垂青于那些追求她的人 Opportunity favors only those who pursue her." },
            { context: "盖世人读书，第一要有志，第二要有识，第三要有恒。有志则不甘为下流；有识则知学问无尽，不敢以一得自足，如河伯之观海，如井蛙之窥天，皆无识者也；有恒则断无不成之事。" },
            { context: "扬在脸上的自信、长在心里的善良、融进血液的骨气、刻在生命里的坚强！" },
            { context: "一大清早被闹钟吵醒，说明还活着~ 不得不从暖被窝爬出来，说明还没失业~ 衣服越来越紧了，说明吃的还算营养~ 收到一条短信，或吃饭聚聚，说明有人还想咱~ 听到别人的话有些刺耳，说明还有人注意你~ 从想着出国看看，说明生活还有点最求~ 很想休息，但是没批准，说明还有一定位置离不开岗位~ " },
            { context: "勿谓言之不预也" },
            { context: "每一个兔子都有一个大国梦。" },
            { context: "" },
            { context: "" },
            { context: "" },
            { context: "位卑未敢忘忧国  -- 《病起书怀》陆游" },
            { context: "万物有界，爱恨无由   -- 《狐妖小红娘》" },
            { context: "邪乎到家必有鬼   --- 《三体》" },
            { context: "什么是人，欲望满身。" },
            { context: "人生本是痴,不悟不成佛,不疯不成魔" },
            { context: "容易获得的东西，也容易失去。  -- 微博评论" },
            { context: "没有人意识到，有些人花了大量的精力就只是为了做个平常人。 --  阿尔贝·加缪" },
            { context: "我来这个世界，不是为了繁衍后代。而是来看花怎么开，水怎么流。太阳怎么升起，夕阳何时落下。我活在世上，无非想要明白些道理，遇见些有趣的事。 生命是一场偶然，我在其中寻找因果。" },
            { context: "现在大家都活在这个时代的移动互联网和碎片时间中，阅读成为一种奢侈，可是知识从来都是刚需不是吗？" },
            { context: "不是你浪费了时间，而是时间消耗了你的生命。" },
            { context: "想象的无限？你别逗了。想象怎么可能无限呢，想象全部是依托在认知上的，超越不了认知。  --- 《天才在做疯子在右》" },
            { context: "常人学道者千，而知道者一；知道者千，而志道者一；志道者千，而专精者一；专精者千，而勤久者一。是以学者众，而成者寡也。" },
            { context: "读书无嗜好，就能尽其多。不先泛览群书，则会无所适从或失之偏好，广然后深，博然后专。" },
            { context: "如果开心太难,那我祝你想哭就哭" },
            { context: "夫处世之道,亦即应变之术,岂可偏执一端? 用兵之道,亦然如此,皆贵在随机应变  -- 司马懿" },
            { context: "今生如果美好，我又何求来世 今生若不美好，我又何求来生" },
            { context: "如果这个世界真的有金山的话，这些洋船为什么要来我们的港口。也许我们已经站在金山上了。" },
            { context: "世人多疑他终将散    -- 《冠玉》 叶里" },
            { context: "你经历的每个地方，每个人，每件事，都需要你付出时间和生命，可你从来没付出感情，你总是冷冰冰地把它们扔掉，那你的努力是为了什么？为一个结果虚耗人生。   ---士兵突击" },
            { context: "循法之功，不足以高世；法古之学，不足以制今。" },
            { context: "欲达高峰,必忍其痛;欲予动容,必入其中;欲安思命,必避其凶;欲情难纵,必舍其空;欲心若怡,必展其宏;欲想成功,必有其梦;欲戴王冠,必承其重." },
            { context: "吃苦不是为了胜过别人，而是为了迎向生活的真实面貌。因为在苦难中，生命没有任何遮蔽可以展示其深度、广度、与高度。" },
            { context: "不管前方的路有多苦只要走的方向正确，不管多么崎岖不平，都比站在原地更接近幸福。" },
            { context: "如果不曾长途渴耗，则水只是水，但旱漠归来，则一碗凉水顿成为琼浆，如果不曾挨饿，则饭只是饭，但饥火中烧，却令人把白饭当做御膳享受。 " },
            { context: "人若是看透了自己，便不会小看别人" },
            { context: "一个人懂得只为瞬间而活，活在当下，懂得友好而仔细的欣赏路边的每朵小花，懂得珍惜每个游戏般的、极小的瞬间价值，那么生活就不能把他怎样。 --- 《荒原狼》 黑塞   特别关注8月" },
            { context: "这社会最不缺的就是懒人笨人，被爱是福音，被宠可不见得，尤其是，妈妈会死在前头，恋人会随时分手。  -- 特别关注8月刊" },
            { context: "女人老去，是从她停止学习开始的，所以有些人到六十岁还没老，有些人才18岁就已垂垂老矣。深以为然。读书，很大程度上能折射出一个人的气质与修养。我见过满头银发的老人，带着金丝眼镜，穿着旗袍，挎着篮子，气定神闲地穿梭于菜市场。我也见过三十出头的女人，衣衫松垮，眉头紧锁，说话像吵架，不顾场合的喋喋抱怨。美好是健康带来的，幸福是心情带来的，拥有了好心情，才能发现更多的美好！" },
            { context: "朝无幸位，民无幸生。–荀子" },
            { context: "为了做自己热爱的事情，你是否愿意做九十九件你讨厌的事情。 -- 扇贝" },
            { context: "春风再美也比不上你的笑，没见过你的人自然不会明了" },
            { context: "世间有许多奥妙，要留着不说出；世间有许多理想，也应该留着不实现。因为实现以后，跟着“我知道了！”的快慰便是“原来不过如是！”的失望。    -- 十二封信" },
            { context: "压死骆驼的，从来都不是最后一根稻草，而是每一根！" },
            { context: "人生在天地之间，若白驹之过隙，忽然而已" },
            { context: "要有最朴素的生活和最遥远的梦想，即使明日天寒地冻，路远马亡。  --- 七堇年" },
            { context: "看得见的就不要相信 正因为看不见 我们才有机会去相信  -- 我们与恶的距离" },
            { context: "其实东烘学究之厌恶新小说和白话诗，和新文学运动者之攻击读经和念古诗文，都是偏见。文学上只有好坏的分别，没有新旧的分别   --- 十二封信 谈作文" },
            { context: "在艺术田地里比在道德田地里，我们尤其要讲良心。稍有苟且，便不忠实。  -- 十二封信 谈作文" },
            { context: "人生总是这么痛苦吗？还是只有小时候这样？”  “总是如此”  -- 这个杀手不太冷" },
            { context: "后来才知道，好朋友通过努力争取来的，而是在各自的道路上奔跑时遇见的。" },
            { context: "人没有必要一直是对的，你也可以坏，我们不是为了让大家称赞才活着" },
            { context: "无论人生上到哪一层台阶，阶下有人在仰望你，阶上亦有人在俯视你。你抬头自卑，低头自得，唯有平视，才能看见真正的自己。  ——杨绛 ​​​​" },
            { context: "圆规为什么可以画圆？因为脚在走，心不变。你为什么不能圆梦？因为心不定，脚不动。   -- 微博" },
            { context: "太多的人，把努力当成了一种“人设”。而真正的努力，往往都悄无声息。 ​​​​   -- 微博" },
            { context: "“山本无忧，因雪白头；水本无忧，因风起皱”。——是风动，是铃动，还是心动？原是那林间野风，惹我一场哀恸。" },
            { context: "勇敢面对自己的时候是美丽的少女，退缩时就会变成风烛残年的老妇。   -- 哈尔的移动城堡" },
            { context: "清欢百味 不过粗茶饭 风雨满山川 莫道行路难 阴晴冷暖 无非布衣衫做个凡夫俗子也超然" },
            { context: "其实乐曲本身是最纯粹的东西，不带任何情感。奏者无心，闻者有意罢了！  -- 秦时明月 雪女" },
            { context: "小时候看宫崎骏的电影被里面的魔幻元素吸引，长大后被里面的纯真所感动。" },
            { context: "我朝国势之尊，超迈前古，其驭北虏西番南岛西洋诸夷，无汉之和亲，无唐之结盟，无宋之纳岁薄币，亦无兄弟敌国之礼————朱棣 " },
            { context: "我大明终其一朝276年,不和亲,不赔款,不割地,不纳贡,天子守国门,君王死社稷。" },
            { context: "世人都想拯救世界，却没人帮妈妈洗碗。 -- 网易云评论" },
            { context: "我们这群人 苦没有真正苦过 爱没有用力爱过 每天受着信息大潮的冲击 三观未定又备受曲折 贫穷不再是正义 又妄图不让金钱成为唯一的追求 过早看到了更大的世界 勤奋却又不过三天 热血透不过键盘和屏幕 回忆止于游戏 像一群没有根的孩子 在别人的经历和精神里吵闹 -- 网易云评论" },
            { context: "喜欢听纯音乐的人，都是纯粹的人，不喧哗、不世故，不擅长交际，和善待人，有自己的想法和信念。独守一隅，安定淡泊，内心世界极其丰富。愿爱听纯音乐的我们被这世界温柔相待。" },
            { context: "一命二运三风水,四积阴德五读书,六名七相八敬神,九交贵人十养生。" },
            { context: "富贵如龙，游进五湖四海；贫穷如虎，惊散九族六亲。" },
            { context: "三个基本错误，德薄而位尊，智小而谋大，力小而任重。" },
            { context: "学生是一日为师终身为父，子女是一日为父终生为师。" },
            { context: "斗地主隐藏配合：“和你合作真是太愉快了”（我就剩炸了 ）快点儿吧，我等的花儿都谢了。（意思让你不要接地主牌，我的牌很好直接过） 不要走，决战到天亮（不要走牌 我还有几个炸呢）你是MM还是GG啊（搭档叫你出对子）队友倒茶给你 让你炸他 但是你没有）你可以说 怎么又断线了网络怎么那么差啊" },
            { context: "拥有神的能力，但是不负责任、贪得无厌，而且连想要什么都不知道。天下危险，恐怕莫此为甚。" },
            { context: "只要有了活下去的理由，几乎什么都能够忍受。生活有意义，就算在困境中也能甘之如饴；生活无意义，就算在顺境中也度日如年。" },
            { context: "不安于现状却没有重新开始的勇气，有时候真的比一无所有还可怕。" },
            { context: "伟大的将军是自我实现的人。 —— 林肯" },
            { context: "鹰的翅膀，从不怨天太高" },
            { context: "只要是程序化，只要是说得清楚的东西，机器一定比你聪明。" },
            { context: "我不是一个主动的人，只是遇到合得来的人，就掩饰不住自己的热情，但是现在看来，很多事情都是自己单方面想得太美。" },
            { context: "自己行什么都行，靠山吃山，靠水吃水；自己不行，什么都不行，靠山山崩，靠水水流。" },
            { context: "说起床就起床，说干活就干活，说分手就分手，说收心就收心……这种人干什么都不会太差。不过有时候吧，该起床时再赖会儿，该干活时偏犯懒，说了分手还犹豫，想要收心不甘心，这样的人却偏偏朋友更多。对自己够狠的人令人生畏，管不住自己的人却更有人情味，生活往往就这么尴尬。 ​​​​—— 苏芩 ​​​​" },
            { context: "我们到了尴尬的年纪，此时谈爱已晚，谈死尚早，和年轻人谈经历太幼稚，和老人们谈人生太肤浅，想出去放纵一下又觉得喧嚣难忍，想一个人静静又心有不甘。想任性点，人家说你要成熟；想沉默些，人家说你装清高；想时尚点，人家说你有点妖；想朴素些，人家说你有点老。刚想消极放弃，却发现上有老，下有小" },
            { context: "“ 每个人的生命里，都有最艰难的那一年，将人生变得美好而辽阔。” —— 《岛上书店》" },
            { context: "总有一天，我要开个小理发店，剃5元一位的男头，用最顶尖的万元音箱放最喜欢的歌。" },
            { context: "以前我看到 “所爱隔山海，山海不可平” 那时我觉得 “海有舟可渡，山有路可行” 后来才发现 “山海皆可平，难平是人心”" },
            { context: "允许自己去在乎，不要回避你的情感，挥洒你的激情，再有真诚和勤奋，该来的自然会来。 ​​​​" },
            { context: "生气1小时＝熬夜6小时，所以啊，好好吃饭，好好睡觉，好好挣钱，好好花钱，不为不值得的人生气，不为不值得的事失眠，既然活着就好好活着，每分钟都为自己活着。" },
            { context: "人所缺乏的不是才干而是志向，不是成功的能力而是勤劳的意志" },
            { context: "我以为别人尊重我，是因为我很优秀；后来才明白，别人尊重我，是因为别人很优秀" },
            { context: "坚持的本身，就是一种不易" },
            { context: "种瓜得瓜 种豆得豆 施薄报薄 施厚报厚 有施无报。何异禽兽" },
            { context: "据《汉书&#8226;艺文志》载，兵家有四种，即兵形势家、兵权谋家、兵阴阳家和兵技巧家" },
            { context: "人心就是如此，见贵者谄，遇贱者骄，天上的风向变了，地上的草木也得跟着折腰，这就是生存之道。" },
            { context: "都是下九流。别谁也瞧不起谁。" },
            { context: "历史就在眼前 却证明不了" },
            { context: "人们常说人心不古，其实每个人都是人心 当年那个吝茶者是，我这个施茶者也是，当遇到他时，你就会感到人心不古，世风日下，当遇到我时，你就会感到世风尚好，人心有救" },
            { context: "假的太多 殊不知我们每个人 都是在组成这世界假的一部分" },
            { context: "所有的热闹过后 都如烟花散尽  热闹是他们的 我什么也没有" },
            { context: "仗义多晒屠狗辈 负心多是读书人" },
            { context: "这个世界上根本没有正确的选择，我们只不过是要努力奋斗，使当初的选择变得正确。" },
            { context: "不要试图鹤立鸡群，而要离开那群鸡" },
            { context: "社交网络最可怕的地方，在于把光阴虚度的好像很充实" },
            { context: "他们把对客户的研究了解，结合自身的长处，发挥到极致，---狼文化正解" },
            { context: "读书终是读自己 ----- 白岩松 （以上摘自2017.3.1）" },
            { context: "自由是见惯各种活法，却不羡慕，不嫉妒，不必是，安心走在自己的人生路上，不慌张，不急躁，在日复一日的坚持中活得越来越像自己" },
            { context: "天下若没有花，什么也不用提了，因为有花我们就得去闻；天下若没有鸟声，什么也不用提了，既然有了鸟声，我们就得去听，天下既然有了女人，我们就得去爱。就得怜香惜玉。" },
            { context: "智商低，情商高的人，总能有贵人相助；智商高，情商低的人，总觉得生不逢时" },
            // { context: "莫笑此生心不闲，流云惊风舞晴天 2016.9.30" },
            { context: "人们总是喜欢拿“顺其自然”来敷衍人生道路上的荆棘坎坷，却很少承认，真正的顺其自然，其实是竭尽所能之后的不强求，而非两手一摊的不作为。" },
            { context: "我们为什么非要读书不可呢？「你们给我好好觉醒吧。还不明白吗？读书，不是非做不可的事。而是想要去做的事。今后你们可能会碰到很多很多你们不知道的事。也会碰到很多你们觉得美好的、开心的、不可思议的事物。这时候做为一个人，自然想了解更多，学习更多。失去好奇心和求知欲的人，不能称为人，连猴子都不如。连自己生存的这个世界都不想理解。还能做什么呢？不论如何学习，只要人活著，就有很多不懂的东西。这个世界上有很多大人好像什么都懂的样子，那都是骗人的。进了大学也好，进了好公司也好，如果有活到老学到老的想法，那就有无限的可能性。失去好奇心的那一瞬间，人就死了。读书不是为了考试，而是为了成为出色的大人。 」 ----《女王的教室》" },
        ]
    }]
}

/**
 * 如果有人，总是在你们吵架、冷战之后，最先低头。不要觉得他真的就是错了，而是他更珍惜你，不愿让你不开心。
如果有人，总是无条件地帮你，为你着想，不要觉得他天生就该如此，只是他太在意你，所以心甘情愿付出。
这简单的道理，却并不是人人都懂。习惯了享受别人对你的好，就忘记了对方也同样需要你的真心相待。
 * 
 * 喜今日两姓联姻，一堂缔约，良缘永结，匹配同称。看此日桃花灼灼，宜室宜家，卜他年瓜瓞绵绵，尔昌尔炽。谨以白头之约，书向鸿笺，好将红叶之盟，载明鸳谱。
 * 
 * 唐朝的离婚协议： 愿妻娘子相离之后，重梳蝉鬓，美扫娥眉，巧逞窈窕之姿，选聘高官之主，弄影庭前，美效琴瑟合韵之态。解怨释结，更莫相憎;一别两宽，各生欢喜。
 * 
 * 我见众生皆草木 唯你是青山
 * 
 * 何为孤独？ 清风，艳日，无笑意。 可否具体？ 左拥，右抱，无情欲。 可否再具体。 不得你。
 * 
 * 自古痴情为情痴，从来情书难书情。笑谈少年多年少，常与生人道人生。
 * 
 * 愿你三冬暖 愿你春不寒； 愿你天黑有灯 下雨有伞；愿你一路上 有良人相伴。
 * 
 * 愿你三冬暖，愿你春不寒，愿你天黑有灯，下雨有伞，愿你一路上，有良人相伴。愿你所有快乐，无需假装。
 * 愿你此生尽兴，赤诚善良。愿时光能缓，愿故人不散；愿有人陪你颠沛流离，愿你惦念的人能和你道早安，
 * 愿你独闯的日子里不觉得孤单。愿你人间走一遭，圆满了三界六道，看透了是非善恶；从此福来心至，皆是逍遥。
 * 
 * 
 * 吾妹霓凰：见字如面，兄有三愿：一愿长安康，二愿常喜乐，三愿莫痴候。戎马倥偬，逝水如斯，不可彷徨独宿。今生奈何，情深缘浅，偷得朝夕已是奢
 *  苍天怜我。承君一诺，来生必践。青青河畔寻常人家，粗衣淡茶，共白头，长相守。兄 林殊 绝笔
 * 
 * 一愿长安康，二愿常喜乐，三愿良人伴，人生在世，甚是辛苦，不可颠沛流离。今生奈何，情深缘浅，故人聚首已是奢。临别赠言，赤诚善良，时光能缓。大美迁西寻常人家，福来心至，任逍遥，共白头。
 * 
 * 
 * 一别两宽，两不相欠
 * 
 * 分手后，我还认识你，不过不想再见你，你过的好，我不会祝福你，你过的不好，我不会嘲笑你。因为我们从此陌生。你的世界不再有我，我的世界不再有你。我不能再珍惜你，抱歉，我失去的，也是你失去的！
 * 
 * 
 */
data = [demo]