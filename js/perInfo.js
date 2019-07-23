$(function(){
	$('#userBirthday').on('click',function(){
		var date = new Date();;//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var Y = date.getFullYear();
        var M = (date.getMonth()< 10 ? '0'+(date.getMonth()) : date.getMonth());
        var D = date.getDate();
 
		var dtPicker = new mui.DtPicker({
			 "type": "date",
			  beginDate: new Date(1900, 00, 01),//设置开始日期 
    		  endDate: new Date(Y, M, D),//设置结束日期 
		});
	    dtPicker.show(function (selectItems) { 
	        console.log(selectItems);//{text: "2016",value: 2016} 
	        $('#userBirthdayVal').val(selectItems.y.text+'年'+selectItems.m.text+'月'+selectItems.d.text+'日');
	    })
	})
	
	$('#sureBtn').on('click',function(){
		/*if($('#AccountNumber').val() == ''){
			mui.alert('请输入您的手机号','提示');
		}else if(!validateTel($('#AccountNumber').val())){
			mui.alert('请输入正确的手机号','提示');
		}else */
		if($('#userName').val() == ''){
			mui.alert('请输入用户姓名','提示');
		}else if($('#userBirthdayVal').val() == ''){
			mui.alert('请选择出生日期','提示');
		}else{
			goIndexPage();
		}
	})
})

function goIndexPage(){
	console.log('进行注册')
	//TODO  注册成功后的逻辑 ,设置成功后进行下面页面跳转;
	
	mui.alert('恭喜您注册成功',function(){
		window.location.href = './index.html';
	});
	//
	
}
