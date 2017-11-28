// console.log($("a[href=hehe]").html())
$.each([1, 2, 3, 4], function (key, value) {
    console.log(key + ":" + value)
})

$("div").each(function (e, v) {
    console.log($(v).text())
})

$.ajax({
    url: "hello.do",
    type: 'GET',
    async: true,
    data: "username",
    success: function () {
        alert(data);
    }
})

$.get(
    "url.do", 
    { "username": "zhangsan", "pwd": "12345" },
    function (data) {
        console.log(data);
})
$.post(
    "url.do", 
    { "username": "zhangsan", "pwd": "12345" },
    function (data) {
        console.log(data);
})