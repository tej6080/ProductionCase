$(document).ready(function() {
// 在数组中创建两个变量，分别用月和日的名称
var monthNames = [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12" ]; 
var dayNames= ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]

// 创建一个newDate（）对象
var newDate = new Date();
// 从Date对象提取当前日期
newDate.setDate(newDate.getDate());
// 输出日期，日期，月份和年份    
//$('#Date').html(dayNames[newDate.getDay()] + " " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());
$('#Date').html(newDate.getFullYear() + "-" + monthNames[newDate.getMonth()] + '-' + newDate.getDate());

$('#Week').html(dayNames[newDate.getDay()]);

setInterval( function() {
	// 创建一个新的Date（）对象并提取访问者当前时间的秒数
	var seconds = new Date().getSeconds();
	// 将前导零添加到秒值
	$("#sec").html(( seconds < 10 ? "0" : "" ) + seconds);
	},1000);
	
setInterval( function() {
	// 创建一个新的Date（）对象并提取访问者当前时间的分钟数
	var minutes = new Date().getMinutes();
	// 在分钟值上添加前导零
	$("#min").html(( minutes < 10 ? "0" : "" ) + minutes);
    },1000);
	
setInterval( function() {
	// 创建一个新的Date（）对象并提取访问者当前时间的小时数
	var hours = new Date().getHours();
	// 将小时数前导零
	$("#hours").html(( hours < 10 ? "0" : "" ) + hours);
    }, 1000);
	
});









