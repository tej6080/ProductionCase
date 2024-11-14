// JavaScript Document
window.onload = function () {
	var oTab = document.getElementById("slidingLabel");
	var aH3 = oTab.getElementsByTagName("h3");
	var aDiv = oTab.getElementsByTagName("li");
	for (var i = 0; i < aH3.length; i++) {
		aH3[i].index = i;
		//aH3[i].onmouseover=function()
		aH3[i].onclick = function () {
			for (var i = 0; i < aH3.length; i++) {
				aH3[i].className = "";
				aDiv[i].style.display = "none";
			};
			this.className = "slidingLabel_active";
			aDiv[this.index].style.display = "block";


			if (this.index === 2) {
				setTimeout(() => {
					initEchart1()
				}, 500)
			} else
			if (this.index === 1) {
				setTimeout(() => {
					initEchart2()
				}, 500)
			} else
			if (this.index === 0) {
				setTimeout(() => {
					initEchart3()
				}, 500)
			}
		};




	};
};