//需要看访问的参数
//面试题目录
var demo01 = {
    title: "面试题总结",
    name: "",
    data: [
        { context: "JAVA面试题一部", url: "detail.html?data/question01.js&01" }
    ]
};
//算法目录
var demo02 = {
    title: "算法",
    name: "",
    data: [
        { context: "算法基础", url: "detail.html?data/ALG01.js&01" }
    ]
}
//数据库目录
var demo03 = {
    title: "Mysql学习目录",
    name: "Mysql学习目录",
    data: [
        { context: "Mysql基础", url: "detail.html?data/sql01.js&02" },
        { context: "常见思路 方法", url: "detail.html?data/sql01.js&01" },
        { context: "数据库优化方案", url: "detail.html?data/sql01.js&03" },
        { context: "那些年的sql语句", url: "data/doc/sql/demo01.sql" },
        { context: "脚本 中国省市区", url: "data/doc/sql/china.sql" },
        { context: "高并发处理方案", url: "detail.html?data/sql01.js&04" },
    ]
}
//java目录
var demo04 = {
    title: "java学习目录",
    name: "java学习目录",
    data: [
        { url: "detail.html?data/java01.js&01", context: "基础知识回顾- 开发环境" },
        { url: "detail.html?data/java01.js&02", context: "流程控制语句" },
        { url: "detail.html?data/java01.js&03", context: "基本数据类型", },
        { url: "detail.html?data/java01.js&04", context: "运算符/逻辑运算符/位运算符/标识符/分隔符", },
        { url: "detail.html?data/java01.js&05", context: "变量 成员变量 局部变量 常量", },
        { url: "detail.html?data/java01.js&06", context: "代码块 静态static 初始化代码块", },
        { url: "detail.html?data/java01.js&07", context: "数组", },
        { url: "detail.html?data/java01.js&08", context: "面向对象 类和对象", },
        { url: "detail.html?data/java01.js&10", context: "修饰符", },
        { url: "detail.html?data/java01.js&11", context: "类之间的关系", },
        { url: "detail.html?data/java01.js&12", context: "容器和集合", },
        { url: "detail.html?data/java01.js&09", context: "多线程", },
        { context: "内部类 垃圾回收 异常", url: "Java/demo/demo14.html" },
        { context: "Oracle数据库", url: "Java/demo/demo15.html" },
        { context: "JDBC 数据库连接 java database connect  和DBCP", url: "Java/demo/demo18.html" },
        { context: "I/O流  input output stream", url: "Java/demo/demo19.html" },
        { context: "设计模式", url: "Java/demo/demo21.html" },
        { context: "XML解析技术", url: "Java/demo/demo22.html" },
        { url: "detail.html?data/java01.js&16", context: "递归和数据结构", },
        { context: "经典题目", url: "Java/demo/demo25.html" },
        { url: "detail.html?data/java01.js&14", context: "关于java的内存泄漏" },
        { url: "detail.html?data/java01.js&13", context: "JAVAEE、myEclipse和Tomcat bs/cs" },
        { url: "detail.html?data/java01.js&15", context: "Servlet" },
        { url: "Java/demo/demo37.html", context: "请求方式、响应方式（重定向和转发）、中文乱码、上传下载" },
        { url: "Java/demo/demo38.html", context: "MVC介绍" },
        { url: "Java/demo/demo39.html", context: "JSP简介和JSTL" },
        { url: "Java/demo/demo30.html", context: "会话跟踪技术Cookie / Session" },
        { url: "Java/demo/demo31.html", context: "EL表达式log4j 日志" },
        { url: "Java/demo/demo32.html", context: "ajax和json" },
        { url: "Java/demo/demo33.html", context: "过滤器和监听器" }
    ]
}
// 文章目录
var demo05 = {
    title: "文章收集",
    name: "文章收集",
    data: [
        { url: "detail.html?data/article01.js&01", context: "鬼谷子全集" },
        { url: "detail.html?data/article01.js&02", context: "左传部分" },
        { url: "detail.html?data/article01.js&03", context: "现代文章" },
        { url: "detail.html?data/article01.js&04", context: "孙子兵法全集" },
        { url: "detail.html?data/article01.js&05", context: "东周列国志部分" },
    ]
}
//css学习目录
var demo06={
    title: "css学习目录",
    name: "css学习目录",
    data: [
        { url: "detail.html?data/css01.js&01", context: "css基础知识" },
        { url: "detail.html?data/css01.js&02", context: "常用css" },
    ]
}
//php目录
var demo07={
    title: "php目录",
    name: "php目录",
    data: [
        { url: "detail.html?data/php01.js&01", context: "数据类型" },
        { url: "detail.html?data/php01.js&02", context: "运算符" },
        { url: "php/demo/demo03.html", context: "流程控制和循环语句" },
        { url: "php/demo/demo04.html", context: "函数/变量" },
        { url: "php/demo/demo05.html", context: "位运算" },
        { url: "php/demo/demo06.html", context: "数组 排序" },
        { url: "php/demo/demo07.html", context: "类和对象" },
        { url: "php/demo/demo08.html", context: "static关键字" },
        { url: "php/demo/demo09.html", context: "面向对象编程的三大特性 封装继承多态 抽象类和接口" },
        { url: "php/demo/demo11.html", context: "错误和异常处理" },
        { url: "php/demo/demo12.html", context: "php流程时序图" },
        { url: "php/demo/demo13.html", context: "http请求详解(从这)" },
        { url: "php/demo/demo14.html", context: "mysql扩展库" },
        { url: "php/demo/demo16.html", context: "预定义超全局数组 九大内置对象" },
        { url: "php/demo/demo17.html", context: "cookie和session技术" },
        { url: "php/demo/demo18.html", context: "php文件编程 I/O流" },
        { url: "php/demo/demo19.html", context: "php绘图技术" },
        { url: "php/demo/demo21.html", context: "php ajax技术" },
    ]
}
var demo08={
    title: "简谱",
    name: "简谱目录",
    data: [
         { url: "detail.html?data/jianpu01.js&01", context: "A" },
    ],
}
data = [demo01, demo02, demo03, demo04, demo05,demo06,demo07,demo08]