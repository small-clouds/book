//php 数据类型
var demo01 = {
    title: "数据类型",
    name: "数据类型",
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
//运算符
var demo02 = {
    title: "运算符",
    name: "运算符",
    data: [{
        title: "赋值运算符",
        data: [
            { context: '赋值	等同于	描述' },
            { context: 'x = y	x = y	右侧表达式为左侧运算数设置值。' },
            { context: 'x += y	x = x + y	加' },
            { context: 'x -= y	x = x - y	减' },
            { context: 'x *= y	x = x * y	乘' },
            { context: 'x /= y	x = x / y	除' },
            { context: 'x %= y	x = x % y	模数' },
        ]
    },{
        title: "字符串运算符",
        data: [
            { context: '. 串接 $txt1 = "Hello" $txt2 = $txt1 . " world!" 现在 $txt2 包含 "Hello world!"' },
            { context: '.= 串接赋值 $txt1 = "Hello" $txt1 .= " world!" 现在 $txt1 包含 "Hello world!"' },
        ]
    },{
        title: "算术运算符",
        data: [
            { context: '+(加) —(减) *(乘) /(除) %(取模)' },
        ]
    },{
        title: "递增/递减运算符",
        data: [
            { context: '++$x 前递增 $x 加一递增，然后返回 $x' },
            { context: '$x++ 后递增 返回 $x，然后 $x 加一递增' },
            { context: '--$x 前递减 $x 减一递减，然后返回 $x' },
            { context: '$x-- 后递减 返回 $x，然后 $x 减一递减' },
        ]
    },{
        title: "逻辑运算符",
        data: [
            { context: '运算符	名称	例子	结果' },
            { context: '==	等于	$x == $y	如果 $x 等于 $y，则返回 true。' },
            { context: '===	全等（完全相同）	$x === $y	如果 $x 等于 $y，且它们类型相同，则返回 true。' },
            { context: '!=	不等于	$x != $y	如果 $x 不等于 $y，则返回 true。' },
            { context: '<>	不等于	$x <> $y	如果 $x 不等于 $y，则返回 true。' },
            { context: '!==	不全等（完全不同）	$x !== $y	如果 $x 不等于 $y，或它们类型不相同，则返回 true。' },
            { context: '>	大于	$x > $y	如果 $x 大于 $y，则返回 true。' },
            { context: '<	大于	$x < $y	如果 $x 小于 $y，则返回 true。' },
            { context: '>=	大于或等于	$x >= $y	如果 $x 大于或者等于 $y，则返回 true.' },
            { context: '<=	小于或等于	$x <= $y	如果 $x 小于或者等于 $y，则返回 true。' },
        ]
    },{
        title: "比较运算符",
        data: [
            { context: '运算符	名称	例子	结果' },
            { context: 'and	与	$x and $y	如果 $x 和 $y 都为 true，则返回 true。' },
            { context: 'or	或	$x or $y	如果 $x 和 $y 至少有一个为 true，则返回 true。' },
            { context: 'xor	异或	$x xor $y	如果 $x 和 $y 有且仅有一个为 true，则返回 true。' },
            { context: '&&	与	$x && $y	如果 $x 和 $y 都为 true，则返回 true。' },
            { context: '||	或	$x || $y	如果 $x 和 $y 至少有一个为 true，则返回 true。' },
            { context: '!	非	!$x	如果 $x 不为 true，则返回 true。' },
        ]
    },{
        title: "类型运算符",
        data: [
            { context: 'cat1 instanceof className; 判断某一变量是不是某一类的' },
        ]
    },{
        title: "三元运算符",
        data: [
            { context: '$c = 10 > 20 ? "hello" : "world";' },
        ]
    },]
}

data = [demo01, demo02]