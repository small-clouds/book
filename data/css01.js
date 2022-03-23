//css基础
var demo01 = {
    title: "css基础知识",
    name: "css基础知识",
    data: [{
        title: "css 知识架构图",
        data: [
            { context: '<a href="data/images/css01.jpg">css知识架构图</a>' },
        ]
    }, {
        title: "选择器与优先级",
        data: [
            { context: 'style(行内) > #(id) > .(class) > 标签(div)' },
            { context: '行内  >  内部样式  > 外部样式' },
        ]
    }, {
        title: "样式简介",
        data: [
            { context: '字体：font' },
            { context: '背景：background / 背景图：background-image' },
            { context: '宽高:width height' },
            { context: '行高：line-height' },
            { context: '下划线：text-decoration underline' },
        ]
    }, {
        title: "盒模型",
        data: [
            { context: '外边距 margin' },
            { context: '边框 border' },
            { context: '内边距 padding' },
            { context: '注：<span class="remark">后面接单位： 上右下左</span>' },
        ]
    }, {
        title: "浮动布局",
        data: [
            { context: 'float：  left/right' },
            { context: '清除浮动  clear：both' },
            { context: '定位 position relatice absolute z-index：' },
        ]
    }, {
        title: "伪类",
        data: [
            { context: ':link 链接' },
            { context: ':visited 浏览过' },
            { context: ':hover 悬停' },
            { context: ':active 点击' },
        ]
    }]
}
//单选框高度居中的六种方法
var demo02 = {
    title: '常用css合集',
    name: "常用css合集",
    data: [{
        title: "单选框高度居中的六种方法",
        data: [
            { concode: '1', context: '<p><input type="radio" name="radio" id="radio1" class="input1"/><label for="radio1">解决方法一</label></p>' },
            { context: '.input1{vertical-align:text-bottom; margin-bottom:-1px; *margin-bottom:-4px;}' },
            { context: '.input2{height:13px; vertical-align:text-top; margin-top:0;}' },
            { context: '.input3{height:15px; vertical-align:bottom; margin-bottom:-1px; margin-bottom:-2px\9; *margin-bottom:0px;}' },
            { context: '.input4{height:14px; vertical-align:top; margin-top:1px; margin-top:0\9;}' },
            { context: '.input5{vertical-align:middle; margin-top:-2px;}' },
            { context: '.input6{vertical-align:-3px;}' },
        ]
    }, {
        title: "css经典布局",
        data: [
            { context: '.div1 .team-inf {float: left;width: 200px;}' },
            { context: '.div1 .logo-group {float: right;padding: 0;width: 120px;height: 420px;}' },
            { context: '.div1 .team-intro {margin: 0 140px 0 220px;}' },
        ]
    },]
}

/***
 //强制换行
 word-break:break-all; 
word-wrap:break-word; 


//溢出省略号
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap
 */

data = [demo01, demo02]