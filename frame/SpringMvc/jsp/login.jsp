<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<base href="<%=basePath%>">

<title>My JSP 'login.jsp' starting page</title>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
<script type="text/javascript" src="jquery.min.js"></script>
<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
<script type="text/javascript">
	function subTest() {
	alert(1111);
		$.post("subTest.do", {
			method : "onlyadduser"
		}, function(result) {
			console.log(result);
			for(var i =0;i<result.length;i++){
				alert(result[i].loginname+"\t"+result[i].password)
			}
		});
	}
</script>
</head>

<body>
	单文件上传
	<br>
	<!--    <form action="upload.do"  method="post" enctype="multipart/form-data"> -->
	<form action="upload.do" method="post" enctype="multipart/form-data">
		登录名： <input type="text" name="loginname"><br> 密码 ：<input
			type="text" name="password"><br> IMAGE:<input
			type="file" name="myfile"><br> <input type="submit"
			value="提交">
	</form>
	多文件上传
	<br>
	<form action="uploads.do" method="post" enctype="multipart/form-data">
		登录名： <input type="text" name="loginname"><br> 密码 ：<input
			type="text" name="password"><br> IMAGE1:<input
			type="file" name="myfile"><br> IMAGE2:<input
			type="file" name="myfile"><br> IMAGE3:<input
			type="file" name="myfile"><br> <input type="submit"
			value="提交">
	</form>
	返回json格式的数据
	<br>

	<input type="button" value="弹出json" onclick="subTest()"><br>
	
	登录
	<br>
	<form action="login.do" method="post">
		登录名： <input type="text" name="loginname"><br> 密码 ：<input
			type="text" name="password"><br> <input type="submit"
			value="提交">
	</form>
	登录一
	<br>
	<form action="login1.do" method="post">
		登录名： <input type="text" name="loginname"><br> 密码 ：<input
			type="text" name="password"><br> <input type="submit"
			value="提交">
	</form>
	登录二
	<br>
	<form action="login.do" method="post">
		登录名： <input type="text" name="loginname"><br> 密码 ：<input
			type="text" name="password"><br> <input type="submit"
			value="提交">
	</form>
	登录三
	<br>
	<form action="login3.do" method="post">
		登录名： <input type="text" name="loginname"><br> 密码 ：<input
			type="text" name="password"><br> <input type="submit"
			value="提交">
	</form>
	登录四
	<br>
	<form action="login4.do" method="post">
		登录名： <input type="text" name="loginname"><br> 密码 ：<input
			type="text" name="password"><br> <input type="submit"
			value="提交">
	</form>
	登录五
	<br>
	<form action="login5.do" method="post">
		登录名： <input type="text" name="loginname"><br> 密码 ：<input
			type="text" name="password"><br> <input type="submit"
			value="提交">
	</form>
	登录六
	<br>
	<form action="login6.do" method="post">
		登录名： <input type="text" name="loginname"><br> 密码 ：<input
			type="text" name="password"><br> <input type="submit"
			value="提交">
	</form>
	登录七
	<br>
	<form action="login7.do" method="post">
		登录名： <input type="text" name="loginname"><br> 密码 ：<input
			type="text" name="password"><br> <input type="submit"
			value="提交">
	</form>
	登录八
	<br>
	<form action="login8.do" method="post">
		登录名： <input type="text" name="loginname"><br> 密码 ：<input
			type="text" name="password"><br> <input type="submit"
			value="提交">
	</form>
	登录九
	<br>
	<form action="login9.do" method="post">
		登录名： <input type="text" name="loginname"><br> 密码 ：<input
			type="text" name="password"><br> <input type="submit"
			value="提交">
	</form>
	登录六
	<br>
	<form action="login6.do" method="post">
		登录名： <input type="text" name="loginname"><br> 密码 ：<input
			type="text" name="password"><br> <input type="submit"
			value="提交">
	</form>

</body>
</html>
