$(function () {
	//首页大图轮播
    (function(){
        
        //鼠标滑过显示二维码
		$(window).trigger("resize");
		$(".QQ1").hover(function() {
		   $(".bg5 p").show()
		}, function() {
		   $(".bg5 p").hide()
		});
		$(".qqtb").hover(function(){
			$(".bg6 p").show()
		},function(){
			$(".bg6 p").hide()
		})
		$(".weixin2").hover(function() {
		   $(".bg4").show()
		}, function() {
			$(".bg4").hide()
		});
    })();
});