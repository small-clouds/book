var url = location.search;
var file = "";
var i = 0;//
var data = [];
if (url.indexOf("?") != -1) {
    var url1 = url.substr(1).split("&");
    file = url1[0] + "?" + Math.random()
    i = url1[1] - 1;
}
var loadJs = function (src) {
    var script = document.createElement("script");
    script.src = src;
    document.head.appendChild(script);
}
function cav(){
     var canvas = document.getElementById("cas");
    var ctx = canvas.getContext("2d");

    resize();
    window.onresize = resize;

    function resize(){
        canvas.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        canvas.height = (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight);
    }

    var RAF = (function () {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
                    window.setTimeout(callback, 1000 / 60);
                };
    })();

    // 鼠标活动时，获取鼠标坐标
    var warea = {x: null, y: null, max: 20000};
    window.onmousemove = function(e){
        e = e || window.event;

        warea.x = e.clientX+3;
        warea.y = e.clientY+6;
    };
    window.onmouseout = function(e){
        warea.x = null;
        warea.y = null;
    };

    // 添加粒子
    // x，y为粒子坐标，xa, ya为粒子xy轴加速度，max为连线的最大距离
    var dots = [];
    for(var i=0;i<300;i++){
        var x = Math.random()*canvas.width;
        var y = Math.random()*canvas.height;
        var xa = Math.random() * 2 - 1;
        var ya = Math.random() * 2 - 1;

        dots.push({
            x: x,
            y: y,
            xa: xa,
            ya: ya,
            max: 6000
        })
    }

    // 延迟100秒开始执行动画，如果立即执行有时位置计算会出错
    setTimeout(function(){
        animate();
    }, 100);

    // 每一帧循环的逻辑
    function animate(){
        ctx.clearRect(0,0,canvas.width, canvas.height);

        // 将鼠标坐标添加进去，产生一个用于比对距离的点数组
        var ndots  = [warea].concat(dots);

        dots.forEach(function(dot){

            // 粒子位移
            dot.x += dot.xa;
            dot.y += dot.ya;

            // 遇到边界将加速度反向
            dot.xa *= (dot.x > canvas.width || dot.x < 0)? -1 : 1;
            dot.ya *= (dot.y > canvas.height || dot.y < 0)? -1 : 1;

            // 绘制点
            ctx.fillRect(dot.x - 0.5, dot.y - 0.5, 1, 1);

            // 循环比对粒子间的距离
            for (var i = 0; i < ndots.length; i++) {
                var d2 = ndots[i];

                if (dot === d2 || d2.x === null || d2.y === null) continue;

                var xc = dot.x - d2.x;
                var yc = dot.y - d2.y;

                // 两个粒子之间的距离
                var dis = xc * xc + yc * yc;

                // 距离比
                var ratio;

                // 如果两个粒子之间的距离小于粒子对象的max值，则在两个粒子间画线
                if(dis < d2.max){

                    // 如果是鼠标，则让粒子向鼠标的位置移动
                    if (d2 === warea && dis > (d2.max / 2)) {
                        dot.x -= xc * 0.03;
                        dot.y -= yc * 0.03;
                    }

                    // 计算距离比
                    ratio = (d2.max - dis) / d2.max;

                    // 画线
                    ctx.beginPath();
                    ctx.lineWidth = ratio/2;
                    ctx.strokeStyle = 'rgba(0,0,0,' + (ratio + 0.2) + ')';
                    ctx.moveTo(dot.x , dot.y);
                    ctx.lineTo(d2.x , d2.y);
                    ctx.stroke();
                }
            }

            // 将已经计算过的粒子从数组中删除
            ndots.splice(ndots.indexOf(dot), 1);
        });

        RAF(animate);
    }
}
loadJs(file);
function onloadvue() {
    var app1 = new Vue({
        el: '#demoMain',
        data: data[i]
    });
    //下拉选框
    $('.demoMain').on('click', function (e) {
        ($(e.target)[0].tagName == 'H2' || $(e.target)[0].tagName == 'H3') ? $(e.target).next().toggle(500) : false;
    })
    //弹窗显示
    $(".pop").on("click", function () {
        $(".pop_w").toggle();
    })
    $('.ceshi').on('click', function (e) {
        ($(e.target)[0].tagName == 'H2' || $(e.target)[0].tagName == 'H3') ? $(e.target).next().toggle(500) : false;
    });
   // cav();
}
//下拉选框
    $('.demoMain').on('click', function (e) {
        ($(e.target)[0].tagName == 'H2' || $(e.target)[0].tagName == 'H3') ? $(e.target).next().toggle(500) : false;
    })
/*
var demo ={
    title: "页面标题",
    name: "小标题",
    data:[{
        title:"h2的标题",
        data:[
            {context:"h2内容"},
            {
                title:"h3标题",
                data:[
                    {context:"h3内容"}
                ]
            }
        ]
    }]
}
   <!-- 声明文档使用的字符编码 -->
    <meta charset='utf-8'>
    <!-- 优先使用 IE 最新版本和 Chrome -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <!-- 页面描述 -->
    <meta name="description" content="不超过150个字符"/>
    <!-- 页面关键词 -->
    <meta name="keywords" content=""/>
    <!-- 网页作者 -->
    <meta name="author" content="name, email@gmail.com"/>
    <!-- 搜索引擎抓取 -->
    <meta name="robots" content="index,follow"/>
    <!-- 为移动设备添加 viewport -->
    <meta name="viewport" content="initial-scale=1, maximum-scale=3, minimum-scale=1, user-scalable=no">
    <!-- `width=device-width` 会导致 iPhone 5 添加到主屏后以 WebApp 全屏模式打开页面时出现黑边 http://bigc.at/ios-webapp-viewport-meta.orz -->
 
    <!-- iOS 设备 begin -->
    <meta name="apple-mobile-web-app-title" content="标题">
    <!-- 添加到主屏后的标题（iOS 6 新增） -->
    <meta name="apple-mobile-web-app-capable" content="yes"/>
    <!-- 是否启用 WebApp 全屏模式，删除苹果默认的工具栏和菜单栏 -->
 
    <meta name="apple-itunes-app" content="app-id=myAppStoreID, affiliate-data=myAffiliateData, app-argument=myURL">
    <!-- 添加智能 App 广告条 Smart App Banner（iOS 6+ Safari） -->
    <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
    <!-- 设置苹果工具栏颜色 -->
    <meta name="format-detection" content="telphone=no, email=no"/>
    <!-- 忽略页面中的数字识别为电话，忽略email识别 -->
    <!-- 启用360浏览器的极速模式(webkit) -->
    <meta name="renderer" content="webkit">
    <!-- 避免IE使用兼容模式 -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- 不让百度转码 -->
    <meta http-equiv="Cache-Control" content="no-siteapp" />
    <!-- 针对手持设备优化，主要是针对一些老的不识别viewport的浏览器，比如黑莓 -->
    <meta name="HandheldFriendly" content="true">
    <!-- 微软的老式浏览器 -->
    <meta name="MobileOptimized" content="320">
    <!-- uc强制竖屏 -->
    <meta name="screen-orientation" content="portrait">
    <!-- QQ强制竖屏 -->
    <meta name="x5-orientation" content="portrait">
    <!-- UC强制全屏 -->
    <meta name="full-screen" content="yes">
    <!-- QQ强制全屏 -->
    <meta name="x5-fullscreen" content="true">
    <!-- UC应用模式 -->
    <meta name="browsermode" content="application">
    <!-- QQ应用模式 -->
    <meta name="x5-page-mode" content="app">
    <!-- windows phone 点击无高光 -->
    <meta name="msapplication-tap-highlight" content="no">
    <!-- iOS 图标 begin -->
    <link rel="apple-touch-icon-precomposed" href="/apple-touch-icon-57x57-precomposed.png"/>
    <!-- iPhone 和 iTouch，默认 57x57 像素，必须有 -->
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="/apple-touch-icon-114x114-precomposed.png"/>
    <!-- Retina iPhone 和 Retina iTouch，114x114 像素，可以没有，但推荐有 -->
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="/apple-touch-icon-144x144-precomposed.png"/>
    <!-- Retina iPad，144x144 像素，可以没有，但推荐有 -->
    <!-- iOS 图标 end -->
 
    <!-- iOS 启动画面 begin -->
    <link rel="apple-touch-startup-image" sizes="768x1004" href="/splash-screen-768x1004.png"/>
    <!-- iPad 竖屏 768 x 1004（标准分辨率） -->
    <link rel="apple-touch-startup-image" sizes="1536x2008" href="/splash-screen-1536x2008.png"/>
    <!-- iPad 竖屏 1536x2008（Retina） -->
    <link rel="apple-touch-startup-image" sizes="1024x748" href="/Default-Portrait-1024x748.png"/>
    <!-- iPad 横屏 1024x748（标准分辨率） -->
    <link rel="apple-touch-startup-image" sizes="2048x1496" href="/splash-screen-2048x1496.png"/>
    <!-- iPad 横屏 2048x1496（Retina） -->
 
    <link rel="apple-touch-startup-image" href="/splash-screen-320x480.png"/>
    <!-- iPhone/iPod Touch 竖屏 320x480 (标准分辨率) -->
    <link rel="apple-touch-startup-image" sizes="640x960" href="/splash-screen-640x960.png"/>
    <!-- iPhone/iPod Touch 竖屏 640x960 (Retina) -->
    <link rel="apple-touch-startup-image" sizes="640x1136" href="/splash-screen-640x1136.png"/>
    <!-- iPhone 5/iPod Touch 5 竖屏 640x1136 (Retina) -->
    <!-- iOS 启动画面 end -->
 
    <!-- iOS 设备 end -->
    <meta name="msapplication-TileColor" content="#000"/>
    <!-- Windows 8 磁贴颜色 -->
    <meta name="msapplication-TileImage" content="icon.png"/>
    <!-- Windows 8 磁贴图标 -->
 
    <link rel="alternate" type="application/rss+xml" title="RSS" href="/rss.xml"/>
    <!-- 添加 RSS 订阅 -->
    <link rel="shortcut icon" type="image/ico" href="/favicon.ico"/>
    <!-- 添加 favicon icon -->

    <!-- sns 社交标签 begin -->
    <!-- 参考微博API -->
    <meta property="og:type" content="类型" />
    <meta property="og:url" content="URL地址" />
    <meta property="og:title" content="标题" />
    <meta property="og:image" content="图片" />
    <meta property="og:description" content="描述" />
    <!-- sns 社交标签 end -->
 */