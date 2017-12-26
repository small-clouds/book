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
loadJs(file);
$(function () {
    setTimeout(function () {
        try {
            var app1 = new Vue({
                el: '#demoMain',
                data: data[i]
            });
        } catch (e) {
            console.log(e);
        }
        //下拉选框
        $('.demoMain').on('click', function (e) {
            ($(e.target)[0].tagName == 'H2' || $(e.target)[0].tagName == 'H3') ? $(e.target).next().toggle(500) : false;
        })
        //弹窗显示
        $(".pop").on("click", function () {
            $(".pop_w").toggle();
        })
    }, 500)
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
 */