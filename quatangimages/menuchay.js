// ------------------------menu chay 1-----------------------------------------------

var menuTopMargin = -0; // -410
var menuSpeed = 15;
var timerSpeed = 200;
var timer;
var heightLimit = 0;

function checkMenu() {
	if(document.body.offsetHeight > heightLimit) {
		var reTimer = timerSpeed;
		var startPoint = parseInt(document.all.sMenu.style.top,10);
		var endPoint = document.body.scrollTop;
		endPoint = (menuTopMargin <= endPoint ) ? endPoint - menuTopMargin : 0;
		if(startPoint != endPoint) {
			moveAmount = Math.ceil(Math.abs(endPoint - startPoint) / 15);
			document.all.sMenu.style.top = parseInt(document.all.sMenu.style.top,10) + ((endPoint<startPoint) ? -moveAmount : moveAmount);
			reTimer = menuSpeed;
		}
	} else document.all.sMenu.style.top = 0;
	timer = setTimeout("checkMenu();",reTimer);
}

function initMenu() {
	if(document.body.offsetHeight > heightLimit) document.all.sMenu.style.top = document.body.scrollTop;
	checkMenu();
}
// ------------------------/ menu chay-----------------------------------------------


// ------------------------menu chay 2-----------------------------------------------

var menuTopMargin1 = -0; // -410
var menuSpeed1 = 15;
var timer1Speed1 = 200;
var timer1;
var heightLimit1 = 0;

function checkMenu1() {
	if(document.body.offsetHeight > heightLimit1) {
		var retimer1 = timer1Speed1;
		var startPoint1 = parseInt(document.all.sMenu1.style.top,10);
		var endPoint1 = document.body.scrollTop;
		endPoint1 = (menuTopMargin1 <= endPoint1 ) ? endPoint1 - menuTopMargin1 : 0;
		if(startPoint1 != endPoint1) {
			moveAmount = Math.ceil(Math.abs(endPoint1 - startPoint1) / 15);
			document.all.sMenu1.style.top = parseInt(document.all.sMenu1.style.top,10) + ((endPoint1<startPoint1) ? -moveAmount : moveAmount);
			retimer1 = menuSpeed1;
		}
	} else document.all.sMenu1.style.top = 0;
	timer1 = setTimeout("checkMenu1();",retimer1);
}

function initMenu1() {
	if(document.body.offsetHeight > heightLimit1) document.all.sMenu1.style.top = document.body.scrollTop;
	checkMenu1();
}
// ------------------------/ menu chay 2-----------------------------------------------
