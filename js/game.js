var loadbox = document.getElementsByClassName("loadbox");
var loadboxplus = document.getElementsByClassName("loadboxplus");

var rightt = document.getElementsByClassName('rightt');
var type = document.getElementsByClassName('type')[0];
var li = type.getElementsByTagName('li');

var titleMenu = document.getElementsByClassName('titleMenu')[0];
var ul = titleMenu.getElementsByTagName('ul')[0];
var Menuli = ul.getElementsByTagName('li');

for(var i = 0; i < loadbox.length; i++) {
	loadbox[i].index = i;

	loadbox[i].onmouseover = function() {
		loadboxplus[this.index].style.display = "block";
	}

	loadbox[i].onmouseout = function() {
		loadboxplus[this.index].style.display = "none";
	}
}

for(var i = 0; i < li.length; i++) {
	li[i].index = i;

	li[i].onclick = function() {
		for(var j = 0; j < rightt.length; j++) {
			rightt[j].id = '';
			li[j].className = ' ';
		}
		rightt[this.index].id = 'checked';
		this.className = "checked";

		Menuli[Menuli.length - 1].innerHTML;
		Menuli[Menuli.length - 1].innerHTML = '<span></span>' + this.id;
	}
}