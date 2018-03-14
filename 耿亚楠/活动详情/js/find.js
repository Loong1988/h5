$(function(){
   $('.cont_table a').click(function(){
        $t=$(this).index();
        len = $('.cont_table').children('a').length-1;
   	    $(this).siblings().removeClass('current');
   	    $(this).addClass('current');
   	    $('.content').css('display','none');
   	    $('.content').eq($t).css('display','block');
   	    
   })
 $(".content dl").each(function(){
     $(this).mouseover(function(){
         $(this).css("background","#f7f7f7")
     })
     $(this).mouseout(function(){
         $(this).css("background","none")
     })
 })
    $(".content li").each(function(){
        $(this).mouseover(function(){
            $(this).css("background","#f7f7f7")
        })
        $(this).mouseout(function(){
            $(this).css("background","none")
        })
    })
})
