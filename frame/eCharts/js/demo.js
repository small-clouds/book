var option={
    title:{text:"标题测试"},
    tooltip: {
       show: true,  // 展示
        trigger: 'axis' // 堆积折线图
    },
    legend: {
        data:['销量','额度']
    },
    xAxis : [
        {
            type : 'category',
            data : ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            "name":"销量",
            "type":"line",
            "data":[5, 20, 400, 10, 10, 20]
        },
        {
            "name":"额度",
            "type":"line",
            "data":[15, 25, 42, 20, 50, 10]
        }
    ]
}
var option1={
    title:{text:"标题测试1"},
    tooltip: {
        show: true
    },
    legend: {
        data:['销量','额度']
    },
    xAxis : [
        {
            type : 'category',
            data : ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            "name":"销量",
            "type":"line",
            "data":[5, 20, 400, 10, 10, 20]
        },
        {
            "name":"额度",
            "type":"line",
            "data":[15, 25, 42, 20, 50, 10]
        }
    ]
}
var myChart = echarts.init(document.getElementById('demo')); 
var myChart1 = echarts.init(document.getElementById('demo1')); 
myChart.setOption(option);
myChart1.setOption(option1);