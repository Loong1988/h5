
(function ($) {
    /**
     * nav_child_li_div: li 标签的父 div
     */
    var defaults = {
            top_btn: ".top_btn",
            top_speed: 600,
            top_height: 4,
            nav_time: 400,
            nav_div_class: ".next_area",
            nav_child_li_div: "div",
            nav_init_zIndex: 5,
            nav_end_zIndex: 10,
            nav_down_div_class: ".glob"
    }

	$.fn.rightNavigate = function (option) {

		var obj = $(this);
		var options = $.extend(defaults, option);
		topNavigate(options);
		rightNavigate(options);
	}

    var topNavigate = function (options) {
        $(options.top_btn).css({display: "none"});
        $(window).scroll(function() {
            var top = $(this).scrollTop();
            w_Height = parseInt($(this).height() / options.top_height);
            if (top > w_Height) {
                $(options.top_btn).fadeIn();
            }  else {
                $(options.top_btn).fadeOut();
            }
        } );

        $(options.top_btn).click(function() {
            $("html,body").animate({scrollTop: 0}, options.top_speed);
            return false;
        } );
    };

    /** 置顶以外 其它导航 方法. */
    var rightNavigate = function (options) {
        var next_areaWidth = $(options.nav_div_class).width() + 500;

        $(options.nav_div_class).css("right",-next_areaWidth+"px");
		var z=1;
		var i;
		var j=i;
		$("div",options.nav_div_class).click(function(){
			return false;
			})
        $("li", options.nav_child_li_div).click(function() { 
				i=$(this).index();
				if(i!=j){
						j=i;
						z=1;
					}
				var ex = /^\d+$/;
				if(!ex.test(z/2)){
					
					$(this).css("z-index", options.nav_init_zIndex);
	
					$(this).siblings().find(".next_area").stop().animate( {'right':-next_areaWidth+'px'} ,0);
					$(this).siblings().find(".glob").stop().animate( {'top':'1px'} ,options.nav_time);
					
					$(options.nav_down_div_class, this).stop().animate( {'top':'-70px'} , options.nav_time);
	
					$(options.nav_div_class,this).stop().animate( {'right':'70px'} , options.nav_time);
					
					}else{
						          					
					$(options.nav_down_div_class, this).stop().animate( {'top':'1px'} , options.nav_time);
	
					$(options.nav_div_class, this).stop().animate( {'right':-next_areaWidth+'px'} ,0);
	
					$(this).css("z-index", options.nav_end_zIndex);

					}
					z++;
        } );
		
    }

})(jQuery);