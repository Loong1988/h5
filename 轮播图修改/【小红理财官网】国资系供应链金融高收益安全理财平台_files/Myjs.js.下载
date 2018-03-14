// JavaScript Document
$(function() {

	//首页公告轮播
	//$(".announce_con").Scroll({line:1,speed:500,timer:3000,up:"announce_btn_up",down:"announce_btn_down",visible:1});
	//$(".rank_month").Scroll({line:6,speed:500,timer:3000,visible:6});
	$(".rank_tabs a").eq(1).click(function(){
		$(".rank_week").Scroll({line:6,speed:500,timer:3000,visible:6});
		})
	$(".rank_tabs a").eq(2).click(function(){
		$(".rank_day").Scroll({line:6,speed:500,timer:3000,visible:6});
		})
	
	//右侧计算器弹框ie下bug
	$(".select_input").mouseleave(function (event) {
		 event.stopPropagation();
	});
	
	//点击密码框弹出提示
	$('.text_pass').click(function(){
		$('.pass_tips').css({display:'block'});
		});
		
	//离开密码框提示消失
	$('.text_pass').blur(function(){
		$('.pass_tips').css({display:'none'});
	});
	
	/*我的账户页左侧导航*/
	$(".side_menu>li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		})
	
	//表格样式
	$('.grid_loan tr:even').addClass("even");
	$('.grid_loan tr:last-child').addClass("last");
	$('.grid_loan2 tr:even td').addClass("double_line");
	
	
	//公告轮播
	//$(".announce_info").Scroll({line:1,speed:500,timer:3000,up:"announce_btn_up",down:"announce_btn_down",visible:1}); 
	
	//进度条
	$('.progress').each(function(index, el) {
		var progresswidth=$(this).parent().find('.progress_text').text();
		if(progresswidth>=100){
			$(this).find('.color').css('width','100%');
		}else{
			$(this).find('.color').css('width',progresswidth+'%');
		}
	});
		
	//注册推荐人
	$(".form_optional").click(function(){
		$(this).parent().next(".item").toggle();
		$(this).children("em").toggleClass("arrowdown02"); 
	})
	$("input").focus(function(){
		$(this).css("border","1px #e24439 solid");	
	});
	$("input").blur(function(){
		$(this).css("border","1px #e2e2e2 solid");
	});
	
	
	$(".text_pass").focus(function(){
		$(".form_tip02").show();
	});
	$(".text_pass").blur(function(){
		$(".form_tip02").hide();
	});
	
	rightNav();

	$("input:password").bind("copy cut paste",function(e){
		return false;
	})
	
	$(".Huiform").Validform({
		tiptype : 3,
		ignoreHidden : true,
		showAllError : true,
		usePlugin : {
			passwordstrength : {
				minLen : 6,
				maxLen : 20
			}
		},
		datatype:{
			"n6": /^\d{6}$/,
			"pw6-20":/^(?![0-9]+$)(?![a-zA-Z]+$)(?![`~!@#$%^&*()_+=\\|{}\[\]'":;,.<>/?-]+$)[`~!@#$%^&*()_+=\\|{}\[\]'":;,.<>/?0-9a-zA-Z-]{6,20}$/,
			"m_tel":/\d{2,5}-\d{7,8}(-\d{1,})?$/,
			"rate":/^[1-9][0-9]?(\.\d)?$/,
			"z2-6" : /^[\u4E00-\u9FA5\uf900-\ufa2d]{2,6}$/,
			"txtContactMobile":function(gets,obj,curform,regxp){
				/*参数gets是获取到的表单元素值，
				obj为当前表单元素，
				curform为当前验证的表单，
				regxp为内置的一些正则表达式的引用。*/
				var rdValue= $("input[name='rdContactMobile']:checked").val();
				if (rdValue == '0') {
					return true;
				} else {
					var reg=regxp["m"],
					mobile=curform.find("#txtContactMobile");
					if(reg.test(mobile.val())){return true;}
					return false;
				}
			}
		}
	});

	$('.checklogin').click(function(event){
		if (isLogin == false) {
			layer_show('430','370','登录','/loginlayer.page?c=' + $(this).attr('id'));
			event.stopImmediatePropagation();
			return false;
		}
	});
})
function rightNav(){
	var option = {
            top_btn: ".top_btn",
            top_speed: 600,
            top_height: 4,
            nav_time: 400,
            nav_div_class: ".next_area",
            nav_child_li_div: $("#rightsead"),
            nav_init_zIndex: 5,
            nav_end_zIndex: 10,
            nav_down_div_class: ".glob"
    }
	
	$().rightNavigate(option);
}

function layer_show(w,h,title,url){
	if (w == null || w == '') {
		w=800;
	};
	if (h == null || h == '') {
		h=($(window).height() - 50);
	};
	if (title == null || title == '') {
		title=false;
	};
	if (url == null || url == '') {
		url="404.html";
	};
	var left = ($(window).width() - w)/2;
	$.layer({
		type: 2,
		shadeClose: true,
		title: title,
		maxmin:false,
		shadeClose: true,
		closeBtn: [0, true],
		shade: [0.8, '#000'],
		border: [0],
		offset: ['20px',left+'px'],
		area: [w+'px', h +'px'],
		iframe: {src: url}
	});
}

function getCode(){
	if ($("#txtUserPhone").val() == "")
	{
		alert("请输入手机号码!");
		return;
	}
	var flag =  $("#ifSend").val() ;
	if(flag !=null && flag =="true"){
		$("#lnkChange").click();
	}
}

// 加入收藏 兼容360和IE6
function addToFavorites(sTitle,sURL) {
	try {
		window.external.AddFavorite(sURL, sTitle);
	}
	catch (e) {
		try {
			window.sidebar.addPanel(sTitle, sURL, "");
		}
		catch (e) {
			alert("加入收藏失败，请使用Ctrl+D进行添加");
		}
	}
}

// 处理键盘事件 禁止后退键（Backspace）密码或单行、多行文本框除外
function banBackSpace(e){
	var ev = e || window.event;// 获取event对象
	var obj = ev.target || ev.srcElement;// 获取事件源

	var t = obj.type || obj.getAttribute('type');// 获取事件源类型

	// 获取作为判断条件的事件类型
	var vReadOnly = obj.getAttribute('readonly');
	var vEnabled = obj.getAttribute('enabled');
	// 处理null值情况
	vReadOnly = (vReadOnly == null) ? false : vReadOnly;
	vEnabled = (vEnabled == null) ? true : vEnabled;

	// 当敲Backspace键时，事件源类型为密码或单行、多行文本的，
	// 并且readonly属性为true或enabled属性为false的，则退格键失效
	var flag1=(ev.keyCode == 8 && (t=="password" || t=="text" || t=="textarea")
				&& (vReadOnly==true || vEnabled!=true))?true:false;  

	// 当敲Backspace键时，事件源类型非密码或单行、多行文本的，则退格键失效
	var flag2=(ev.keyCode == 8 && t != "password" && t != "text" && t != "textarea")
				?true:false;

	// 判断
	if(flag2){
		return false;
	}
	if(flag1){
		return false;
	}
}