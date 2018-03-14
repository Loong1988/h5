/**
 * Created by jack on 2016/7/8.
 */
$(document).ready(function(){

var Obtn=document.getElementById("bbtn");
var Omain=document.getElementById("main")
var Obtn1=document.getElementById("btn1")
var Obtn2=document.getElementById("btn2")
var Obtn3=document.getElementById("btn3")
var Obtn4=document.getElementById("btn4")
var Obtn5=document.getElementById("btn5")
var Owrap1=document.getElementById("wrap1")
var Owrap2=document.getElementById("wrap2")
var Owrap3=document.getElementById("wrap3")
var Owrap5=document.getElementById("wrap5")
var OBB1=document.getElementById("bb1")
var OBB2=document.getElementById("bb2")
var OBB3=document.getElementById("bb3")
var OBB5=document.getElementById("bb5")
var Osub=document.getElementById("sub")
var Oadd=document.getElementById("add")
var Otext=document.getElementById("tenderAmount")
Obtn.onclick=function(){
    Omain.style.display="block"
    Owrap1.style.display="none"
    Owrap2.style.display="none"
    Owrap3.style.display="none"
    Owrap5.style.display="none"
}
Obtn1.onclick=function(){
    Omain.style.display="none"
    Owrap5.style.display="none"
}
Obtn2.onclick=function(){
    Omain.style.display="none"
    Owrap1.style.display="block"
    Owrap2.style.display="none"
    Owrap3.style.display="none"
    Owrap5.style.display="none"
}
Obtn3.onclick=function(){
    Omain.style.display="none"
    Owrap1.style.display="none"
    Owrap2.style.display="block"
    Owrap3.style.display="none"
    Owrap5.style.display="none"
}
Obtn4.onclick=function(){
    Omain.style.display="none"
    Owrap1.style.display="none"
    Owrap2.style.display="none"
    Owrap3.style.display="block"
    Owrap5.style.display="none"
}
Obtn5.onclick=function(){
    Omain.style.display="none"
    Owrap1.style.display="none"
    Owrap2.style.display="none"
    Owrap3.style.display="none"
    Owrap5.style.display="block"
}
OBB1.onclick=function(){
    Owrap1.style.display="none"

}
OBB2.onclick=function(){
    Owrap2.style.display="none"

}
OBB3.onclick=function(){
    Owrap3.style.display="none"

}
OBB5.onclick=function(){
    Owrap5.style.display="none"

}
var num=0
Osub.onclick=function(){
    num--
    if(num<=0){
        num=0
    }
    Otext.value=num+"00"

}
Oadd.onclick=function(){
    num++
    Otext.value=num+"00"

};

/*   图片放大  start   */

(function () {
    var wrap = $('[data-img-wrap]');

    $('[data-preview]').click(function(event) {
        $('#bigImg').attr('src', $(this).attr('src'));
        wrap.fadeIn();
    });
    $('#imgClose').click(function () {
       wrap.fadeOut();
    });
})();

/*   图片放大  end   */

});

/**
 * Created by jack on 2016/7/10.
 */
