function toggle(eles, active) {
	console.log(active);
	for(var i = 0; i < eles.length; i++) {
		eles[i].className = "hidden";
	}
	eles[active].className = "body222 hidden";
}
var aBtn = document.getElementsByClassName("btn");
var aIem = document.getElementsByClassName("hidden");

for(var i = 0; i < aBtn.length; i++) {
	aBtn[i].tab = i;
	aBtn[i].onclick = function() {
		toggle(aIem, this.tab);
	}
}