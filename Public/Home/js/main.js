var internationalWords={};
var INKEY=1;

if(sessionStorage.getItem('internationalWords')!=null && sessionStorage.getItem('internationalWords')!=undefined){
	var INKEY0=sessionStorage.getItem('internationalWords');
}else{
	sessionStorage.setItem('internationalWords',1);
	var INKEY0 =1;
}
INKEY0?INKEY=INKEY0:INKEY0=1;
if(INKEY==1){
    internationalWords=internationalWordsZH;
	document.getElementById("setlang").innerHTML = "简体中文&nbsp;&nbsp;<img id='imgarrow' src='../../../Public/Home/images/down_arrow.png'>";
	document.getElementById("setlangs").innerHTML = "简体中文&nbsp;&nbsp;<img id='imgarrow' src='../../../Public/Home/images/down_arrow.png'>";
}else{
    internationalWords=internationalWordsEN;
	document.getElementById("setlang").innerHTML = "English&nbsp;&nbsp;<img id='imgarrow'  src='../../../Public/Home/images/down_arrow.png'>";
	document.getElementById("setlangs").innerHTML = "English&nbsp;&nbsp;<img id='imgarrow'  src='../../../Public/Home/images/down_arrow.png'>";
}
function change(num){
    if(num==1){
        sessionStorage.setItem('internationalWords',1);
		$.post(internationalWords.hosturl+'index.php/Home/Index/setlang',{lang:1},function(data){ location.reload();});
    }else{
        sessionStorage.setItem('internationalWords',2);
		$.post(internationalWords.hosturl+'index.php/Home/Index/setlang',{lang:2},function(data){ location.reload();});
    }
    console.log(sessionStorage.getItem('internationalWords'));
   
}
//INKEY==1?$('.dropdown-menu').css({'left':'-30px'}):$('.dropdown-menu').css({'left':'-60px'})
function guojihua(){
    //导航
    $('.nav-home').html(internationalWords.home);
    $('.nav-dapps').html(internationalWords.dapp);
    $('.nav-community').html(internationalWords.community);
    $('.nav-login').html(internationalWords.login);
    $('.nav-cn').html(internationalWords.langcn);
    $('.nav-en').html(internationalWords.langen);
    $('.nav_develop_subdoc').html(internationalWords.navdevlopdoc);
    $('.pcenter_myprofile').html(internationalWords.pcentersubprofile);
    $('.pcenter_gettoken').html(internationalWords.pcentergettoken);
    $('.pcenter_logout').html(internationalWords.logout);
    $('.oneparttitle').html(internationalWords.oneparttitle);
    $('.onepartsummary').html(internationalWords.onepartsummary);
    $('.onepartdocbtn').html(internationalWords.onepartdocbtn);
    $('.onepartvideobtn').html(internationalWords.onepartvideobtn);
    $('.towpartsubbtn').html(internationalWords.towpartsubbtn);
    $('.towparttitle').html(internationalWords.towparttitle);
    $('.towpartsubonetitle').html(internationalWords.towpartsubonetitle);
    $('.towpartsubonesummary').html(internationalWords.towpartsubonesummary);
    $('.towpartsubtowtitle').html(internationalWords.towpartsubtowtitle);
    $('.towpartsubtowsummary').html(internationalWords.towpartsubtowsummary);
    $('.towpartsubthreetitle').html(internationalWords.towpartsubthreetitle);
    $('.towpartsubthreesummary').html(internationalWords.towpartsubthreesummary);
    $('.towpartsubfourtitle').html(internationalWords.towpartsubfourtitle);
    $('.towpartsubfoursummary').html(internationalWords.towpartsubfoursummary);
    $('.threeparttitle').html(internationalWords.threeparttitle);
    $('.threepartone').html(internationalWords.threepartone);
    $('.threeparttow').html(internationalWords.threeparttow);
    $('.threepartthree').html(internationalWords.threepartthree);
    $('.threepartfour').html(internationalWords.threepartfour);
    $('.threepartfive').html(internationalWords.threepartfive);
    $('.fourpartcontents').html(internationalWords.fourpartcontents);
    $('.fourparttitle').html(internationalWords.fourparttitle);
    $('.fourpartbtn').html(internationalWords.fourpartbtn);
    $('.logintitle').html(internationalWords.logintitle);
    $('.logintitletip').html(internationalWords.logintitletip);
    $('.loginemail').attr("placeholder",internationalWords.loginemail);
    //$('.loginemailtip').html(internationalWords.loginemailtip);
    $('.loginepassword').attr("placeholder",internationalWords.loginepassword);
    //$('.loginepasswordtip').html(internationalWords.loginepasswordtip);
    $('.logineforgetpwd').html(internationalWords.logineforgetpwd);
    $('.loginenoaccount').html(internationalWords.loginenoaccount);
    $('.logincreatone').html(internationalWords.logincreatone);
    $('.logincontinue').html(internationalWords.logincontinue);
    $('.forgetpwd').html(internationalWords.forgetpwd);
    $('.forgetpwdtip').html(internationalWords.forgetpwdtip);
    $('.forgetpwdemail').attr("placeholder",internationalWords.forgetpwdemail);
    $('.forgetpwdesendmailbtn').html(internationalWords.forgetpwdesendmailbtn);
    $('.forgetpwdcode').html(internationalWords.forgetpwdcode);
    $('.forgetpwdresedncode').html(internationalWords.forgetpwdresedncode);
    $('.forgetpwdcodec').attr("placeholder",internationalWords.forgetpwdcodec);
    $('.resetpwd').html(internationalWords.resetpwd);
    $('.resetpwdnewpwd').attr("placeholder",internationalWords.resetpwdnewpwd);
    $('.resetpwdconfirmpwd').attr("placeholder",internationalWords.resetpwdconfirmpwd);
    $('.resetpwdbtn').html(internationalWords.resetpwdbtn);
    $('.signtitle').html(internationalWords.signuptitle);
    $('.signupemail').attr("placeholder",internationalWords.signemail);
    $('.signupepwd').attr("placeholder",internationalWords.signpwd);
    $('.signhavaaaccount').html(internationalWords.signhavaaaccount);
    $('.signupconfirmtitle').html(internationalWords.signupconfirmtitle);
    $('.signupconfirmsendmail').html(internationalWords.signupconfirmsendmail);
    $('.signupconfirmnorececode').html(internationalWords.signupconfirmnorececode);
    $('.signupconfirmcode').attr("placeholder",internationalWords.signupconfirmcode);
    $('.leftmenmyprofile').html(internationalWords.leftmenmyprofile);
    $('.leftmengettesttoken').html(internationalWords.leftmengettesttoken);
    $('.profileedit').html(internationalWords.profileedit);
    $('.profilebottomtip').html(internationalWords.profilebottomtip);
    $('.applytokentip').html(internationalWords.applytokentip);
    $('.applytokencreatbtn').html(internationalWords.applytokencreatbtn);
    $('.applytokenapplybtn').html(internationalWords.applytokenapplybtn);
    $('.applytokenlisttip').html(internationalWords.applytokenlisttip);
    $('.applytokenlisttitleone').html(internationalWords.applytokenlisttitleone);
    $('.applytokenlisttitletow').html(internationalWords.applytokenlisttitletow);
    $('.applytokenlisttitlethree').html(internationalWords.applytokenlisttitlethree);
    $('.profileedittitle').html(internationalWords.profileedittitle);
    $('.profileeditgeneral').html(internationalWords.profileeditgeneral);
    $('.profileeditemail').html(internationalWords.profileeditemail);
    $('.profileeditfirstname').html(internationalWords.profileeditfirstname);
    $('.profileeditlastname').html(internationalWords.profileeditlastname);
    $('.profileeditlocation').html(internationalWords.profileeditlocation);
    $('.profileeditbio').html(internationalWords.profileeditbio);
    $('.profileediturl').html(internationalWords.profileediturl);
    $('.profileeditcompany').html(internationalWords.profileeditcompany);
    $('.profileeditsave').html(internationalWords.profileeditsave);
    $('.planned').attr("title",internationalWords.planned);
    $('.docpagecomments').html(internationalWords.docpagecomments);
    $('.docpagecommentstip').attr("placeholder",internationalWords.docpagecommentstip);
    $('.docpagesendbtn').html(internationalWords.docpagesendbtn);
    $('.docpageresendbtn').html(internationalWords.docpageresendbtn);
    $('.docpagerecancelbtn').html(internationalWords.docpagerecancelbtn);
    $('.docpagerehowlike').html(internationalWords.docpagerehowlike);
    $('.docpageresearch').attr("placeholder",internationalWords.docpageresearch);
    $('.docpagedevlopdoc').html(internationalWords.docpagedevlopdoc);
    $('.commenttipscuf').html(internationalWords.docpagecommenttipscuf);
    $('.docpagehome').html(internationalWords.docpagehome);
    $('.emailconfirmation').html(internationalWords.signupconfirmtitle);
    $('.loginwechat').html(internationalWords.loginwechat);
    $('.commenttipc').html(internationalWords.docpagecommenttipc);
    $('.commenterror').html(internationalWords.docpagecommenterror);
    $('.loginscanqrcode').html(internationalWords.loginscanqrcode);
    $('.logouttipcuccful').html(internationalWords.logouttipsuccful);
    $('.logouttipfail').html(internationalWords.logouttipfail);
    $('#githubbinderror').html(internationalWords.githubbinderror);
    $('#bindsuc').html(internationalWords.bindsuc);
    $('.confirmunbind').html(internationalWords.confirmunbind);
    $('#removeuserbtnc').html(internationalWords.removeuserbtnc);
    $('#removeuserbtncan').html(internationalWords.removeuserbtncan);
    $('#removeuserbtncwechat').html(internationalWords.removeuserbtnc);
    $('#removeuserbtncanwechat').html(internationalWords.removeuserbtncan);
    $('#wechatbindedtip').html(internationalWords.wechatbindedtip);
    $('#loadsubmorebtn').html(internationalWords.docpagecommentsubloadmore);
    $('#loadmorebtn').html(internationalWords.docpagecommentloadmore);
    $('#checkemailbtn').html(internationalWords.checkemailbtn);
    $('.resendtip').html(internationalWords.resendtip);
	$(".gettokensuf").html(internationalWords.applytokensuccfully);
	$(".applytokentips").html(internationalWords.applytokentips);
	$(".bindgittip").attr("title",internationalWords.bindgittip);
	$(".bindwechattip").attr("title",internationalWords.bindwechattip);
	$(".binddidtip").attr("title",internationalWords.binddidtip);
	$(".pcenter_admin_console").html(internationalWords.leftmengetadminconsole);
	$(".notications").html(internationalWords.notications);
	$(".noticeviews").html(internationalWords.noticeviews);
	$(".noticeposted").html(internationalWords.noticeposted);
	$(".addnotications").html(internationalWords.noticationss);
	$(".noticedel").html(internationalWords.noticedel);
	$(".noticedit").html(internationalWords.noticedit);
	$(".noticepublish").html(internationalWords.noticepublish);
	$(".noticelastedit").html(internationalWords.noticelastedit);
	$(".newnotications").html(internationalWords.newnotications);
	$(".noticecancel").html(internationalWords.noticecancel);
	$(".noticetitle").html(internationalWords.noticetitle);
	$(".noticedescription").html(internationalWords.noticedescription);
	$(".noticepushset").html(internationalWords.noticepushset);
	$(".noticesendmail").html(internationalWords.noticesendmail);
	$(".noticeinwebsite").html(internationalWords.noticeinwebsite);
	$(".noticewho").html(internationalWords.noticewho);
	$(".noticeallusers").html(internationalWords.noticeallusers);
	$(".noticeonlineonly").html(internationalWords.noticeonlineonly);
	$(".noticeshowinhome").html(internationalWords.noticeshowinhome);
	$(".noticepublishnow").html(internationalWords.noticepublishnow);
	$(".noticescheduledpush").html(internationalWords.noticescheduledpush);
	$("#ishomepage").attr("data-on-text",internationalWords.noticeshowhomeis);
	$("#ishomepage").attr("data-off-text",internationalWords.noticeshowhomeno);
	$("#notifytitle").attr("placeholder",internationalWords.noticetitleplaceholder);
	$(".noticeview").html(internationalWords.noticeview);
	$(".newnotifytip").html(internationalWords.newnotifytip);
	$(".notifycenter").html(internationalWords.notifycenter);
	$(".delnotifysuccful").html(internationalWords.delnotifysuccful);
	$(".notifypublishtips").html(internationalWords.notifypublishtips);
	$(".notifytips").html(internationalWords.notifytips);
	$(".nav_forum").html(internationalWords.nav_forum);
	$(".addforumcls").html(internationalWords.addforumcls);
    $('#emailcode').attr("placeholder",internationalWords.emailcode);
	$(".loginscanqrcode_wechat").html(internationalWords.loginscanqrcode_wechat);
	$("#notify_year_tip").html(internationalWords.notify_year_tip);
	$("#notify_mon_tip").html(internationalWords.notify_mon_tip);
	$("#notify_day_tip").html(internationalWords.notify_day_tip);
	$("#notify_hour_tip").html(internationalWords.notify_hour_tip);
	$("#notify_minute_tip").html(internationalWords.notify_minute_tip);
	$("#pickdate").html(internationalWords.pickdate);
    $('.cancelbtnconfirm').html(internationalWords.removeuserbtncan);
    $('.confirm_push_time_tip').html(internationalWords.confirm_push_time_tip);
	
}
guojihua();

$(".link_icon").find("svg").mouseover(function(){

	$(this).children("path").attr("fill","#fff");
	$(this).children(":first").attr("fill","#434E71");
})
$(".link_icon").find("svg").mouseout(function(){

	$(this).children("path").attr("fill","#173045");
	$(this).children(":first").attr("fill","#434E71");
})
$(function () { $("[data-toggle='tooltip']").tooltip();});
 