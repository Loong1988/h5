/**
 * Created by jack on 2016/7/8.
 */

var Obtn=document.getElementById("btn");
var Omain=document.getElementById("main")
var Obtn1=document.getElementById("btn1")
var Obtn2=document.getElementById("btn2")
var Obtn3=document.getElementById("btn3")
var Obtn4=document.getElementById("btn4")
var Owrap1=document.getElementById("wrap1")
var Owrap2=document.getElementById("wrap2")
var Owrap3=document.getElementById("wrap3")
var OBB1=document.getElementById("bb1")
var OBB2=document.getElementById("bb2")
var OBB3=document.getElementById("bb3")
Obtn.onclick=function(){
    Omain.style.display="block"
    Owrap1.style.display="none"
    Owrap2.style.display="none"
    Owrap3.style.display="none"
}
Obtn1.onclick=function(){
    Omain.style.display="none"
}
Obtn2.onclick=function(){
    Omain.style.display="none"
    Owrap1.style.display="block"
    Owrap2.style.display="none"
    Owrap3.style.display="none"
}
Obtn3.onclick=function(){
    Omain.style.display="none"
    Owrap1.style.display="none"
    Owrap2.style.display="block"
    Owrap3.style.display="none"
}
Obtn4.onclick=function(){
    Omain.style.display="none"
    Owrap1.style.display="none"
    Owrap2.style.display="none"
    Owrap3.style.display="block"
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


/**
 * Created by jack on 2016/7/11.
 */
