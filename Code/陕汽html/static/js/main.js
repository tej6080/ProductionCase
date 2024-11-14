$(function(){
	// 展示时间
	IntervalTime()

	// 点击某一车间
	itemClick()

	// 底部点击伸缩
	arrowClick()

	// 设置下拉
	settingList()
})

// 轮播时间
function IntervalTime(){
	showTime()
	let t = setInterval(function(){
		showTime()
	}, 1000)
}
// 获取时间
function showTime(){
	let nowDate = new Date()
	let nowDateStr = moment(nowDate).format('YYYY-MM-DD')
	let nowTimeStr = moment(nowDate).format('HH:mm:ss')
	$('#DateShow').html(nowDateStr)
	$('#TimeShow').html(nowTimeStr)
}

function itemClick() {
	$('.factory .item').each(function(index, item){
		$(item).click(function(){
			console.log($(item).attr('data-idx'))

			$('.factory .item').hide()
			$('.show-data').fadeIn()

			initEcharts1()
			initEcharts2()

		})
	})

	$('.show-data .close').click(function(){
		$('.show-data').hide()
		$('.factory .item').fadeIn()
	})
}

function arrowClick() {
	$('.btm-data .arrow').click(function(){
		if($(this).hasClass('arrow-down')){
			$('.btm-data .upshow').hide()
			$('.btm-data .downshow').css('display', 'flex')
			$(this).removeClass('arrow-down').addClass('arrow-up')
		} else {
			$('.btm-data .downshow').hide()
			$('.btm-data .upshow').css('display', 'flex')
			$(this).removeClass('arrow-up').addClass('arrow-down')
			initEcharts3()
			initEcharts4()
			initEcharts5()
		}
	})
}

function settingList(){
	$('.hd-top .setting').hover(function(){
		$('.setting .navlist').show()
	},function(){
		$('.setting .navlist').hide()
	})
}