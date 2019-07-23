$(function(){
	
	$('.mui-scroll-list').on('click',function(){
		$(this).find('input').attr('checked',true);
		$(this).siblings('.mui-scroll-list').find('input').attr('checked',false);
	
		if($(this).attr('state-data') === '1'){
			$(this).find('input').attr('checked',false);
			mui.alert('当前预约已满，请换时间段进行预约！','提示');
		}
		
	});
	
	//获取日期
	var myDate = new Date();
 	$('#muiDataTime').html(timestampToTime(myDate));
	var day = myDate.getDay();
	var weeks = ["0","1","2","3","4","5","6"];
    var week = weeks[day]; //根据星期值，从数组中获取对应的星期字符串
	console.log(week);
	
	
	
	//星期选择
	$('.mui-week-select-div').on('click',function(){
		$(this).addClass('mui-active').siblings('.mui-week-select-div').removeClass('mui-active');
		
	})
	
	//提交预约
	$('#sureBtn').on('click',function(){
		window.location.href = './successfulAppointment.html';
	});
	
	
	
});

function focusChange(){
	if($('#spec').val() == '请输入您的情况'){
		$('#spec').val(' ');
	}
}

function BlurChange(){
	if($('#spec').val() == ' '){
		$('#spec').val('请输入您的情况');
	}
}

function specChange(){
	$('#specSpan').html($('#spec').val().length);
}


//时间戳转时间
function timestampToTime(timestamp) {
        var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        var D = date.getDate() + ' ';
        var h = date.getHours() + ':';
        var m = date.getMinutes();
        return Y+M+D;
}