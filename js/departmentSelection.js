$(function(){
	$('.mui-scroll-left-list').on('click',function(){
		$(this).addClass('active').siblings('.mui-scroll-left-list').removeClass('active');
	});
	
	$('.mui-radio').on('click',function(){
		if($(this).hasClass('active')){
			$(this).removeClass('active').find('input').attr("checked", false);
		}else{
			$(this).addClass('active').find('input').attr("checked", true);
		}
	});
	
})