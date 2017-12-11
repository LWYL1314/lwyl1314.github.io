$(document).ready(function(){
	//关键字搜索
	var keyword = '请输入关键字';
	$('#birds').val(keyword).bind('focus',function(){
		if(this.value==keyword){
			this.value='';
			this.className='focus-text';
		}
	}).bind('blur',function(){
		if(this.value==''){
			this.value=keyword;
			this.className='blur-text';
		}
	});
	
	//导航下拉菜单
	$('.nav-con li:last').addClass('last');
	$('.nav-con li').hover(function(){
		$(this).find('.nav-sub').show();
		$(this).addClass('current');
		},function(){
		$(this).find('.nav-sub').hide();
		$(this).removeClass('current');
	});
	$('.nav-sub li').hover(function(){
		$(this).find('.nav-sub-01').show();
		},function(){
		$(this).find('.nav-sub-01').hide();
	});
	
	//图片上下滚动
	var len = $('.slide-trigger li').length;
	var index = 0;
	$('.slide-trigger li:last').addClass('last');
	$('.slide-trigger li').mouseenter(function(){
		index = $('.slide-trigger li').index(this);
		slide(index);
	});
	$('.slide').hover(function(){
		if(autoplay){
			clearInterval(autoplay);
		}
		},function(){
			autoplay = setInterval(function(){
					slide(index);
						index++;
					if(index==len){
						index=0;
					}	
				},6000)
	});
	var autoplay = setInterval(function(){
			slide(index);
				index++;
			if(index==len){
				index=0;
			}	
		},6000)
	function slide(index){
		$('.slide-clip').stop().animate({top:-235*index},400);
		$('.slide-trigger li').eq(index).addClass('current').siblings().removeClass('current');
	}
	
	//选项卡
	$('.tab li:last').addClass('last');
	$('.tabcon:gt(0)').hide();
	$('.tab li').mouseenter(function(){
		$(this).addClass('current').siblings('.tab li').removeClass('current');
		$('.tabcon:eq('+$(this).index()+')').show().siblings('.tabcon').hide();
		return false;
	});
	
	//图片左右滚动
	var size = $('.slide-btn span').length;
	var num = 0;
	$('.slide-btn span').mouseenter(function(){
		num = $('.slide-btn span').index(this);
		showImg(num);
	});
	$('.semain-con').hover(function(){
		if(goplay){
			clearInterval(goplay);
		}
		},function(){
			goplay = setInterval(function(){
					showImg(num);
						num++;
					if(num==size){
						num=0;
					}	
				},6000)
	});
	var goplay = setInterval(function(){
			showImg(num);
				num++;
			if(num==size){
				num=0;
			}	
		},6000)
	function showImg(num){
		$('.slide-items').stop().animate({left:-219*num},400);
		$('.slide-btn span').eq(num).addClass('current').siblings().removeClass('current');
	}
	
});