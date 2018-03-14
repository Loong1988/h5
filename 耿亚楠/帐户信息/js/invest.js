/* Created by lina on 2016/7/13.*/
$(document).ready(function() {
    var li=$("#nav ul li");
    li.click(function () {
        $(this).addClass('actv').siblings().removeClass('actv');
        var index = li.index(this);
        $('div.tab > .tab-cont').eq(index).show().siblings().hide();
    });
});