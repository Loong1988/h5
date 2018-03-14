$(function(){
	$(".w_bottom_a1").click(function(){
		$(this).addClass("w_active");
		$(".w_active .w_bottom_img1").attr("src","images/shouye_sel.png");
		$(this).parent().siblings().children().removeClass("w_active");
		$(".w_bottom_img2").attr("src","images/touzi_nor.png");
		$(".w_bottom_img3").attr("src","images/wode_nor.png");
		$(".w_bottom_img4").attr("src","images/faxian_nor.png");
	});
	$(".w_bottom_a2").click(function(){
		$(this).addClass("w_active");
		$(".w_active .w_bottom_img2").attr("src","images/touzi_sel.png");
		$(this).parent().siblings().children().removeClass("w_active");
		$(".w_bottom_img1").attr("src","images/shouye_nor.png");
		$(".w_bottom_img3").attr("src","images/wode_nor.png");
		$(".w_bottom_img4").attr("src","images/faxian_nor.png");
	});
	$(".w_bottom_a3").click(function(){
		$(this).addClass("w_active");
		$(".w_active .w_bottom_img3").attr("src","images/wode_sel.png");
		$(this).parent().siblings().children().removeClass("w_active");
		$(".w_bottom_img1").attr("src","images/shouye_nor.png");
		$(".w_bottom_img2").attr("src","images/touzi_nor.png");
		$(".w_bottom_img4").attr("src","images/faxian_nor.png");
	});
	$(".w_bottom_a4").click(function(){
		$(this).addClass("w_active");
		$(".w_active .w_bottom_img4").attr("src","images/faxian_sel.png");
		$(this).parent().siblings().children().removeClass("w_active");
		$(".w_bottom_img1").attr("src","images/shouye_nor.png");
		$(".w_bottom_img2").attr("src","images/touzi_nor.png");
		$(".w_bottom_img3").attr("src","images/wode_nor.png");
	});
/*banner 图片自适应*/
function imgReload()
{
	var imgHeight = 0;
	var wtmp = $("body").width();
	$("#w_index_banner ul li").each(function(){
        $(this).css({width:wtmp + "px"});
    });
	$(".sliderimg").each(function(){
		$(this).css({width:wtmp + "px"});
		imgHeight = $(this).height();
	});
}

$(window).resize(function(){imgReload();});

$(document).ready(function(e) {
	imgReload();
  /*  var unslider06 = $('#w_index_banner').unslider({
		dots: false,
		fluid: true
	});*/
$(".wd_cont_l a").each(function(){
	$(this).mouseover(function(){
		$(this).css("background","#fff5eb")
  })
	$(this).mouseout(function(){
		$(this).css("background","white")
	})
})

});




});

