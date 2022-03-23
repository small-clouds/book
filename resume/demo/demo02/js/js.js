$(document).ready(function(){
	$(".name").blur(function(){
		if($(".name").val() == ""){
			alert("你输入的姓名不能为空");
		}
	});
	$(".tel").blur(function(){
		var tel=$(".tel").val();										
		var isPhone = /^([0-9]{3,4}-)?[0-9]{7,8}$/;
		var isMob=/^((\+?86)|(\(\+86\)))?(13[012356789][0-9]{8}|15[012356789][0-9]{8}|18[02356789][0-9]{8}|147[0-9]{8}|1349[0-9]{7})$/;
		if(isMob.test(tel)||isPhone.test(tel)){
			return true;
		}else{
			alert("请输入正确电话号码");
		}					
	});
	
	$(".email").blur(function(){
		var email=$(".email").val();
		var tely = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/ 
		var re = new RegExp(tely);
			if(email == ""){
				alert("你输入的邮箱不能为空");
			}else if(re.test(email)){
				return true;
			}else{
				alert("请输入正确的邮箱")
			}							
	});
	$(".mes").blur(function(){
		var mes = $(".mes").val();
		if(mes.length < 10){
			alert("字数不能小于10个");
		}
	});
});