//基础知识回顾- 开发环境
var demo01 = {
    title: "基础知识回顾- 开发环境",
    name: "基础知识回顾- 开发环境",
    data: [{
        title: "JDK ---java  develop kit开发包",
        data: [
            { context: "包含jre java  环境 " },
            { context: "jre里面包含 jvm 虚拟机" },
            { context: "" },
            { context: " " }
        ]
    }, {
        title: "java优点",
        data: [
            { context: "简单开源" },
            { context: "面向对象" },
            { context: "分布式" },
            { context: " 高性能 /多线程 /健壮安全" },
            { context: " （与系统无关）跨平台性 可移植 解释性" }
        ]
    }, {
        title: "javase",
        data: [
            { context: "java基础  敏捷性特别高" }
        ]
    }, {
        title: "安装",
        data: [
            { context: "安装JDk" },
            { context: "安装完成后会询问是否安装jre 取消即可 <span class='remark'>jdk是包含jre</span>" },
            { context: "傻瓜式安装，一路确定 一路下一步" },
            { context: " 注： <span class='remark'>路径不能有中文，不能有特殊字符</span>" },
            { context: " 验证：在jdk的bin目录下 输入命令javac 出现提示说明安装成功" }
        ]
    }, {
        title: "java环境的配置",
        data: [
            { context: "<span class='remark'>作用：</span>在任何目录下都能使用javac命令，所以需要配置环境变量" },
            { context: "环境变量位置：计算机属性->高级系统设置->高级(选项卡)->环境变量" },
            { context: "变量JAVA_HOME  值(jdk的安装路径): C:\\Program Files\\Java\\jdk1.7.0_09;" },
            { context: "变量PATH  值：%JAVA_HOME%\\bin; 动态获取bin" },
            { context: "变量CLASSPATH 值： ;%JAVA_HOME%\\lib\\dt.jar;%JAVA_HOME%\\lib\\tools.jar;  " }
        ]
    }]
}
//流程控制语句
var demo02 = {
    title: "流程控制语句",
    name: "流程控制语句",
    data: [{
        title: "流程控制语句",
        data: [
            { context: "if() / / if()..else if(){}.... / / if()..else{}" },
            { context: "没啥讲的 就是if条件语句  " },
            { context: "嘿嘿！！！！" }
        ]
    }, {
        title: "三元运算符--三目运算符",
        data: [
            { context: "条件 ？ exp1 ：exp2;" },
            { context: 'System.out.println("该学生的等级为"+ (num5 >= 90 ? "A" : num5 >= 60 ? "B" : "C")); ' }
        ]
    }, {
        title: "switch",
        data: [
            { context: 'key的类型需要说一下 double 和float long不行' },
            { context: 'switch（expr1）中，expr1是一个整数表达式。因此传递给 switch 和 case 语句的参数应该是 int、 short、 char 或者 byte。long,string(1.5以前 以后支持了) 都不能作用于swtich。' },
            { context: '常用 int char String final型的变量(必须是编译时的常量)<span class="remark">case后面必须接常量！！！  </span>' },
            { context: '1.5以前 不能String 还是少用为好 //break case 下坠' },
            { context: 'switch(key){case key: break;}' },
            { context: '' },
        ]
    }, {
        title: "while和 do{}while()",
        data: [
            { context: '内存溢出 == 内存泄漏' },
            { context: '死循环 忘关流了' },
            { context: '循环要写程序出口' },
            { context: '不能写死循环' },
            { context: '循环嵌套 ' },
            { context: '乘方的形式递增' }
        ]
    }, {
        title: "for循环 不能写死循环 看上面",
        data: [
            { context: 'for (int i = 0; i <10; i++) {System.out.println(i); }' },
            { context: '' }
        ]
    }, {
        title: "",
        data: [
            { context: '' },
            { context: '' }
        ]
    }]
}
//基本数据类型
var demo03 = {
    title: "基本数据类型",
    name: "基本数据类型",
    supdata: [
        { context: '注：<span class="remark"> 对于Object超类 只能与引用类型相容 不能和基本数据类型相融</span>' },
    ],
    data: [{
        title: "数值型 默认值 0",
        data: [
            { context: 'long--> Long长整型' },
            { context: 'int--> Integer 整型' },
            { context: 'short -->Short 短整型' },
            { context: 'byte-->Byte 字节型' },
        ]
    }, {
        title: "浮点型 默认值0.0",
        data: [
            { context: '单精度float -->Float' },
            { context: '双精度 double-->Double' },
        ]
    }, {
        title: "字符型 默认值 ''",
        data: [
            { context: 'char-->Charset' },
            { context: '注: <span  class="remark">只能用单引号</span>' },
            { context: '注: <span  class="remark">与阿斯科码有关 可以转成int</span>' },
        ]
    }, {
        title: "布尔型",
        data: [
            { context: 'boolean-->Boolean' },
            { context: '两个值 true /false' }
        ]
    }]
}
var demo04 = {
    title: "运算符/逻辑运算符/位运算符/标识符/分隔符",
    name: "运算符/逻辑运算符/位运算符/标识符/分隔符",
    data: [
        {
            title: '算术运算符',
            data: [
                { context: '+   _   *   /   %;   ++  --   +=   -+   *=    /+   %=' },
                { context: '注：<span class="remark">算术运算符有优先级问题</span>' },
            ]
        }, {
            title: '逻辑运算符',
            data: [
                { context: '&&与  ||或 !非' },
                { context: '注:<span class="remark">逻辑与 或 前面符合条件将不执行与，或后面的判断</span>' },
                { context: '注:<span class="remark">逻辑与 可以进行逻辑判断  不满足条件时后面的不进行</span>' },
            ]
        }, {
            title: '位运算符',
            data: [
                { context: '// 位运算 6种' },
                { context: '//二进制 逢二进一 （0,1）' },
                { context: '//源码 反码 补码' },
                { context: '//1. 二进制的最高位是 符号位 0表正数 1 表 负数' },
                { context: '//2.正数的 原码 反码 补码 都一样' },
                { context: '//原码 用二进制表示的数 这个数就是源码' },
                { context: '//负数的反码 符号位不变 其余全部取反' },
                { context: '// 负数的补码 为 他的反码 +1' },
                { context: '// 0的反码补码都是0' },
                { context: '// ××××计算机运算时 都是以补码的方式来运算的×××××' },
                { context: '// 按位与& 两位全1 结果为1' },
            ]
        }, {
            title: '标识符 -- 程序员自己能起名字的就是标识符',
            data: [
                { context: '包括：工程名 包名 类名 属性名 方法名' },
                { context: '字母 数字 下划线 $ ' },
                { context: '大小写敏感 长度无限制 ' },
                { context: '数字不能开头' },
                { context: '不能使用Java的关键字 和保留字' },
                { context: '关键字 java语言已经赋予特殊含义的 main class public 所有java 的关i键字 全是小写' },
                { context: '保留字 goto' },
                { context: '注：<span class="remark">见名知意 /驼峰式命名法</span>' },
            ]
        }, {
            title: '分隔符',
            data: [
                { context: '结尾只认-----  ";"' },
            ]
        }
    ]
}
var demo05 = {
    title: "变量 成员变量 局部变量 常量",
    name: "变量 成员变量 局部变量 常量",
    data: [
        {
            title: '',
            data: [
                { context: '' },
                { context: '' },
                { context: '' },
                { context: '' },
                { context: '' },
            ]
        }
    ]
}
data = [demo01, demo02, demo03, demo04,demo05]