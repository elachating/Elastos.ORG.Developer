function login_popup(){
  $("#emailModal").modal("hide");
  $("#regModal").modal("hide");
  $("#loginModal").modal("show");
}
function reg_popup(){
  $("#emailModal").modal("hide");
  $("#loginModal").modal("hide");
  $("#regModal").modal("show");
}
function email_popup(){
  $("#loginModal").modal("hide");
  $("#regModal").modal("hide");
  $("#emailModal").modal("show");
}
function forgetpwd_popup(){
  $("#emailModal").modal("hide");
  $("#regModal").modal("hide");
  $("#loginModal").modal("hide");
  $("#forgetpwdModal").modal("show");
}
function confirmemail_popup(){
  $("#emailModal").modal("hide");
  $("#regModal").modal("hide");
  $("#loginModal").modal("hide");
  $("#forgetpwdModal").modal("hide");
  $("#confirmemailcodeModal").modal("show");
}

function restpwd_popup(){
  $("#emailModal").modal("hide");
  $("#regModal").modal("hide");
  $("#loginModal").modal("hide");
  $("#forgetpwdModal").modal("hide");
  $("#confirmemailcodeModal").modal("hide");
  $("#resetpwdModal").modal("show");
}

$(".globalLoginBtn").on("click",login_popup);
$("#jumplogin").on("click",login_popup);
$("#jumplogins").on("click",login_popup);
$("#jumploginsa").on("click",login_popup);
$("#jumpreg").on("click",reg_popup);
$("#jump_reg").on("click",reg_popup);
//$("#regbtns").on("click",email_popup);
$("#forgetpwdbtn").on("click",forgetpwd_popup);
$("#forgetemail").keyup(function(){
	var reg1 = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)/;
    if(reg1.test($(this).val()) == false ) {
		$(".forgetemail_tip").show();
		$(".forgetemail_tip").html("邮箱格式不正确!");
	}else{
		$(".forgetemail_tip").html("");
		$("#sendemailbtn").css("background-color","#173045");
		$("#sendemailbtn").css("color","#18FFFF");
		/*if(isNull($(this).val()) || isNull($("#id_account_l").val())){
			$("#loginbtns").css("background-color","#CED6E3");
			$("#loginbtns").css("color","#fff");
		}else{
			$("#loginbtns").css("background-color","#173045");
			$("#loginbtns").css("color","#18FFFF");
		}
		*/
	}
});
$("#sendemailbtn").on("click",function(){
	var reg1 = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)/;
    if(reg1.test($("#forgetemail").val()) == false ) {
		$(".forgetemail_tip").show();
		$(".forgetemail_tip").html("验证码不能为空!");
		return false;
	}
	$.post(
		internationalWords.hosturl+'index.php/Home/Emailinfo/send',
		{tomail:$("#forgetemail").val()},
		function(data){
			if(data==1){
				window.localStorage.elaemail = $("#forgetemail").val();
				$("#forgetemail").val("");
				confirmemail_popup();
			}
		}
	)
});
$("#resendemailbtn").click(function(){
	$.post(
		internationalWords.hosturl+'index.php/Home/Emailinfo/send',
		{tomail:window.localStorage.elaemail},
		function(data){
			if(data==1){
			}
		}
	)
});
$("#resetbtn").click(function(){
	var newpwdd = $("#newpwdd").val();
	var confirmpwd = $("#confirmpwd").val();
	if(newpwdd!=confirmpwd && newpwdd!=""){
		$("#email_tip").show();
		$("#email_tip").html("两次输入密码不一致！");
		return false;
	}else{
		$("#email_tip").hide();
	}
	$.post(
		internationalWords.hosturl+'index.php/Home/Emailinfo/resetpwd',
		{npwd:newpwdd},
		function(data){
			if(data==1){
				 $("#resetpwdModal").modal("hide");
			}
		}
	)	
});
//$("#sendemailbtn").on("click",confirmemail_popup);
//$("#confirmemailcodebtn").on("click",restpwd_popup);
$("#emailcode").keyup(function(){
	if(isNull($(this).val())){
		$(".forgetemailcode_tip").show();
		$(".forgetemailcode_tip").html("登录账号不能为空或含有空格!");
	}else{
		$(".forgetemailcode_tip").html("");
		if(isNull($(this).val()) || isNull($("#id_password_l").val())){
			$("#confirmemailcodebtn").css("background-color","#CED6E3");
			$("#confirmemailcodebtn").css("color","#fff");
		}else{
			$("#confirmemailcodebtn").css("background-color","#173045");
			$("#confirmemailcodebtn").css("color","#18FFFF");
		}
	}
});
$("#confirmemailcodebtn").on("click",function(){
	$.post(
		internationalWords.hosturl+'index.php/Home/Emailinfo/checkmailcode',
		{mailcode:$("#emailcode").val()},
		function(data){
			if(data==1){
				$("#emailcode").val("");
				restpwd_popup();
			}else{
				$(".forgetemailcode_tip").show();
				$(".forgetemailcode_tip").html("邮箱验证码错误！");
			}
		}
	)
});




$("#id_account_l").keyup(function(){
	if(isNull($(this).val())){
		$(".login_tip").show();
		$(".login_tip").html("登录账号不能为空或含有空格!");
	}else{
		$(".login_tip").html("");
		if(isNull($(this).val()) || isNull($("#id_password_l").val())){
			$("#loginbtns").css("background-color","#CED6E3");
			$("#loginbtns").css("color","#fff");
		}else{
			$("#loginbtns").css("background-color","#173045");
			$("#loginbtns").css("color","#18FFFF");
		}
	}
	
});
$("#id_password_l").keyup(function(){
	if(isNull($(this).val())){
		$(".login_p_tip").show();
		$(".login_p_tip").html("登录密码不能为空或含有空格!");
	}else{
		    $(".login_p_tip").html("");
		if(isNull($(this).val()) || isNull($("#id_account_l").val())){
			$("#loginbtns").css("background-color","#CED6E3");
			$("#loginbtns").css("color","#fff");
		}else{
			$("#loginbtns").css("background-color","#173045");
			$("#loginbtns").css("color","#18FFFF");
		}
	}
});
function isNull(str) {
  if ( str == "" ) {
    return true;
  }
  var regu = "^[ ]+$";
  var re = new RegExp(regu);
  return re.test(str);
}

$("#id_account_reg_l").keyup(function(){
	if(isNull($(this).val())){
		$(".reg_tip").show();
		$(".reg_tip").html("注册账号不能为空或含有空格!");
	}else{
		$(".reg_tip").html("");
		if(isNull($(this).val()) || isNull($("#id_password_reg_l").val())){
			$("#regbtns").css("background-color","#CED6E3");
			$("#regbtns").css("color","#fff");
		}else{
			$("#regbtns").css("background-color","#173045");
			$("#regbtns").css("color","#18FFFF");
		}
	}
	
});
$("#id_password_reg_l").keyup(function(){
	if(isNull($(this).val())){
		$(".reg_p_tip").show();
		$(".reg_p_tip").html("注册密码不能为空或含有空格!");
	}else{
		$(".reg_p_tip").html("");
		if(isNull($(this).val()) || isNull($("#id_account_reg_l").val())){
			$("#regbtns").css("background-color","#CED6E3");
			$("#regbtns").css("color","#fff");
		}else{
			$("#regbtns").css("background-color","#173045");
			$("#regbtns").css("color","#18FFFF");
		}
	}
});
