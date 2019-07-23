$(function(){
	$('#regSubmitBtn').on('click',function(){
		if($('#userPhone').val() == ''){
			mui.alert('请输入手机号','提示');
		}else if(!validateTel($('#userPhone').val())){
			mui.alert('请输入正确的手机号','提示');
		}else if($('#userVerificationCode').val() == ''){
			mui.alert('请输入短信验证码','提示');
		}else if($('#userImgCode').val() == ''){
			mui.alert('请输入图形验证码','提示');
		}/*else if(!$('#checkboxSure').is(':checked')){
			mui.alert('请勾选协议','提示');
		}*/else{
			goPerInfoPage();
		}
		
	})
})

function goPerInfoPage(){
	//TODO 进行注册逻辑,注册成功后进行下面页面跳转
	window.location.href = './perInfo.html';
	
}
