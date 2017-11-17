// 解决浏览器时间无效 不兼容问题
var activestarttime = document.getElementById("activestarttime"); // 获取时间
var activestarttime_date=(new Date(activestarttime.value.replace(/-/g,"/"))).getTime(); // 转换成时间戳