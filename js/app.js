$(document).ready(function(){
	$("#iniciarAnimacion").click(function(){
		$("img").animate({"left":"600px"});
		$("img").animate({"top":"500px"});
		$("img").hide(2000);
		$("img").show(2000);
		$("img").animate({"left":"150px"});
		$("img").animate({"top":"200px"});
	});

	$("#detenerAnimacion").click(function(){
		$("img").stop()
	});

	function animacion(){
		$("img").animate({"left":"600px"});
		$("img").animate({"top":"500px"});
		$("img").hide(2000);
		$("img").show(2000);
		$("img").animate({"left":"150px"});
		$("img").animate({"top":"200px"});
	}
});