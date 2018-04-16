//A开头的简谱
var demo01 = {
    title: "分类A",
    name: "A开头的江浦",
    data: [{
        title: "基本数据类型-字符串(String)",
        data: [
            { context: '字符串声明有两种方式 单引号和双引号' },
            { context: '字符串的拼接用的是   . ' },
            { context: '单引号 按照字符串输出 单引号系统不做复杂的转义 单引号变量反应更快' },
            { context: '双引号 把变量解析出来 可以利用转义字符进行 对$转义' },
            { context: '转义字符 \\ 可以解决使用特殊符号问题' },
            { context: '特殊的\\n(换行) \\r(回车) \\t(制表) \\v(竖直方向) \\f(换页) \\$(美元标记)' },
            {
                title: '函数',
                data: [
                    { context: 'Strlen($str) 返回字符串字节数  utf8中文占三个  gbk2个' },
                    { context: 'mb_strlen($str,"utf-8") 返回字符串的个数' },
                    { context: 'strpos($str,search,int) 查找字符串位置函数 从int开始查找 search字符串 第一次出现的位置' },
                    { context: 'stripos($str,search,int) 查找字符串位置函数 从int开始查找 search字符串 最后一次出现的位置' },
                ]
            },
        ]
    }, {
        title: "基本数据类型-整型(int)",
        data: [
            { context: '整型值可以 二进制(0b) 八进制(0) 十进制 十六进制(0x) 所有的整型都是有符号的 +-' },
            { context: '最大值PHP_INT_MAX  最小值 PHP_INT_MIN 超过这个值 被解释称 float' },
            { context: '运算符能够自动对类型进行转换' },
        ]
    }, {
        title: "基本数据类型-浮点型(float,double)",
        data: [
            { context: '<span class="remark">永远也不要相信浮点数的精度</span>' },
            { context: '精度： 从左边开始 非0实数 14位数字 具体保留多少位 不知道' },
            { context: '双精度(double) 1位符号 11位指数 52位小数 8字节64位' },
            { context: '单精度(float) 1位符号 8位指数 23位小数 4字节32位' },
        ]
    }, {
        title: "基本数据类型-布尔(boolean)",
        data: [
            { context: '布尔值有两个值  true/false 且不区分大小写' },
            { context: '通常运算符返回的boolean会被传递给控制流程' },
            { context: '被认为false的值： false(boolean)；0(int)；0.0(float)；""(String) "0"(String)；Array()空；null； 空标记对象' },
        ]
    }, {
        title: "复合数据类型",
        data: [
            { context: '数组：数组能够在单独的变量名中存储一个或多个值。 分为索引，关联，多维数组' },
            { context: '对象：每个类的定义都以关键字 class 开头，后面跟着类名，后面跟着一对花括号，里面包含有类的属性与方法的定义一个类可以包含有属于自己的常量，变量（称为“属性”）以及函数（称为“方法”）' },
        ]
    }, {
        title: "特殊的数据类型-空值(null)/资源(resource)",
        data: [
            { context: 'null:空值顾名思义，表示没有为该变量设置任何值。另外，空值（null）不区分大小写，null 和 NULL 效果是一样的。' },
            { context: 'null的三种情况：没有赋值; 被赋值为 null; 被 unset() 函数处理过的变量' },
            { context: '资源是由专门的函数来建立和使用的，它是一种特殊的数据类型，并由程序员分配。在使用资源时，要及时的释放不需要的资源，如果忘记释放资源，系统自动启动垃圾回收机制，避免内存消耗殆尽。' },
        ]
    },]
}
/**
 千曲晓声

那些好听的而不会的
难念的经
偏偏喜欢你
飘雪（陈慧娴）
精忠报国
暖暖
弹起我心爱的土琵琶
A
爱江山更爱美人
敖包相会
B
北国之春
把悲伤留给自己
白狐
C
沧海一声笑
城里的月光
初见
成都
D
单身情歌
大海
E
F
飞雪玉花
G
故乡的原风景
敢问路在何方
国歌
H
海阔天空
I
J
旧梦不须记
久别的人
K
L
卧龙吟
乱红
另一种乡愁
M
梅花泪
梦里水乡
N
女儿情
男儿无泪
O
P
Q
倾国倾城
R
S
上海滩
神话
T
铁血丹心
U
V
W
问清
忘了我
枉凝眉
X
笑红尘
相思
小李飞刀
向天再借五百年
仙剑问情
雪花女神龙
潇洒走一回
雪中情
Y
雨碎江南
有所思
虞美人
Z
追风的女儿
丈夫歌
追梦人
 */
//data = [demo01]