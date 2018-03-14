
$(document).ready(function(){
function popUp(title,closeBoxId) { 
         var bh = $("body").height(); 
         var bw = $("body").width();
         $(".popTitName").html(title);
         $(".mask").css({ 
                    height:bh, 
                    width:bw, 
                    display:"block" 
          }); 
          $("#"+closeBoxId).show(); 
} 
//关闭灰色 jQuery 遮罩 
function closePop(closeBoxId) { 
          $(".mask").hide();
          $("#"+closeBoxId).hide();
} 

//倒计时60s
var wait = 60;
function time(o) {
    if (wait == 0) {
        o.removeAttribute("disabled");
        o.value = "发送验证码";
        wait = 60;
    } else {
        o.setAttribute("disabled", true);
        o.value = "重新发送(" + wait + ")";
        wait--;
        setTimeout(function () {
                time(o)
            },
            1000)
    }
}
document.getElementById("btn1").onclick = function () {
    time(this);
}
document.getElementById("btn2").onclick = function () {
    time(this);
}
document.getElementById("btn3").onclick = function () {
    time(this);
}
document.getElementById("btn4").onclick = function () {
    time(this);
}

$("#phone-one").click(function(){
    $("#modification-one").show()
})
$("#click").click(function(){
    $("#modification-one").hide()
    $("#modification-two").show()
})
});