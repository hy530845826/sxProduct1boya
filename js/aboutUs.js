$(function() {
	//	var $cBoxList = $("#cBoxList")
	//var cBoxLiBox = cBoxList.getElementsByTagName("li")
	//	for(var i = 0; i < cBoxLiBox.length; i++) {
	//		cBoxLiBox[i].onclick = function() {
	//			for(var j = 0; j < cBoxLiBox.length; j++) {
	//				cBoxLiBox[j].className = "";
	//			}
	//			this.className = "checked";
	//		}
	//	}
	//jQuery代替注释中的js代码，更简便
	$('#cBoxList li').click(function() {
		var nowIndex = $(this).index();

		//导航变色
		$(this).siblings().removeClass("checked");
		$(this).addClass("checked");

		//内容隐藏
		$('article').addClass("hidden")
		$('article:eq(' + nowIndex + ')').removeClass("hidden")

		//右上字变动
		var $gg = $('.title .titleMenu li:last');

		//var thisValue = $(this).children('.listName').get(0).innerHTML;
		//thisValue = thisValue.replace(/\<span\>\<\/span\>/, '');
		//上方法比较麻烦可以直接text获得值

		var thisValue = $(this).children('.listName').text();
		$gg.get(0).innerHTML = '<span></span>' + thisValue;
	})
})