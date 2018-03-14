

function numAnimat1 (cla) {
	var sttime=30;
	var end=1500;//结束时间
	var num=$(cla).html()*1;
	$(cla).html('')
	var start=setInterval(function () {
		sttime+=30;
		var v=parseInt(num/1000*sttime)
		if(sttime<end&&v<num){
			//var v=(num/1000*sttime).toFixed(2);	

			$(cla).html(v)	
		}else{
			$(cla).html(num)	
			clearInterval(start)
		}
	},30);
}
function numAnimat2 (cla) {
		var sttime=30;
	var end=1500;//结束时间
	var num=$(cla).html()*1;
	$(cla).html('')
	var start=setInterval(function () {
		sttime+=30;
		var v=parseInt(num/1000*sttime)
		if(sttime<end&&v<num){
			//var v=(num/1000*sttime).toFixed(2);	

			$(cla).html(v)	
		}else{
			$(cla).html(num)	
			clearInterval(start)
		}
	},30);
}
function numAnimat3 (cla) {
		var sttime=30;
	var end=1500;//结束时间
	var num=$(cla).html()*1;
	$(cla).html('')
	var start=setInterval(function () {
		sttime+=30;
		var v=parseInt(num/1000*sttime)
		if(sttime<end&&v<num){
			//var v=(num/1000*sttime).toFixed(2);	

			$(cla).html(v)	
		}else{
			$(cla).html(num)	
			clearInterval(start)
		}
	},30);
}
function numAnimat4 (cla) {
		var sttime=30;
	var end=1500;//结束时间
	var num=$(cla).html()*1;
	$(cla).html('')
	var start=setInterval(function () {
		sttime+=30;
		var v=parseInt(num/1000*sttime)
		if(sttime<end&&v<num){
			//var v=(num/1000*sttime).toFixed(2);	

			$(cla).html(v)	
		}else{
			$(cla).html(num)	
			clearInterval(start)
		}
	},30);
}
function numAnimat5 (cla) {
		var sttime=30;
	var end=1500;//结束时间
	var num=$(cla).html()*1;
	$(cla).html('')
	var start=setInterval(function () {
		sttime+=30;
		var v=parseInt(num/1000*sttime)
		if(sttime<end&&v<num){
			//var v=(num/1000*sttime).toFixed(2);	

			$(cla).html(v)	
		}else{
			$(cla).html(num)	
			clearInterval(start)
		}
	},30);
}
numAnimat1('.change_num1');
numAnimat2('.change_num2');
numAnimat3('.change_num3');
numAnimat4('.change_num4');
numAnimat5('.change_num5');