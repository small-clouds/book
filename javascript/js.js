// 解决浏览器时间无效 不兼容问题
var activestarttime = document.getElementById("activestarttime"); // 获取时间
var activestarttime_date=(new Date(activestarttime.value.replace(/-/g,"/"))).getTime(); // 转换成时间戳



var jsonStr ={"name":"张三","pwd":"123456","age":"123"};
alert(jsonStr.name);

var jsonStr ='{"name":"张三","pwd":"123456","age":"123"}';
var data="zhangsan,123456,123"

alert(jsonStr.name);