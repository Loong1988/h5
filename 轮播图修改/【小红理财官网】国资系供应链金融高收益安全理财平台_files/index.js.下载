$(function () {



	var scrollTimer = null;
	var delay = 2000;
	//1.鼠标对新闻触发mouseout事件后每2s调用scrollNews() 
	//2.鼠标对新闻触发mouseover事件后停止调用scrollNews() 
	//3.初次加载页面触发鼠标对新闻的mouseout事件 
	//4.只有一个公告时不滚动
	if ($('div.scrollNews').find('li').length > 1) {
		$('div.scrollNews').hover(function () {
			clearInterval(scrollTimer);
		}, function () {
			scrollTimer = setInterval(function () {
				scrollNews();
			}, delay);
		}).triggerHandler('mouseout');
	}


	/*  	环形进度条  start  	*/
	$('[data-deg]').each(function () {
		/*   计算度数  */
		var deg = (parseFloat($(this).data('deg')) / 100) * 180 + 45;
		/*   属性设置  */
		var rotate = 'rotate(' + deg + 'deg)';
		$(this).css({
			'-webkit-transform': rotate,
			'-moz-transform': rotate,
			'-ms-transform': rotate,
			transform: rotate
		});
	});

	/*  	环形进度条  end	   */
});
//滚动新闻 
function scrollNews() {
	var $news = $('div.scrollNews>ul');
	var $lineHeight = $news.find('li:first').height();
	$news.animate({ 'marginTop': -$lineHeight + 'px' }, 1000, function () {

		$news.css({ margin: 0 }).find('li:first').appendTo($news);
	});
	// var Head = document.getElementById("headerBanner")
	// var num = 5
	// /*头部五秒自动隐藏*/
	// setInterval(function () {
	// 	num--
	// 	if (num <= 0) {
	// 		Head.style.display = "none"
	// 	}
	// }, 1000)
}
