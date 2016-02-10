jQuery(function($){
	$(document).ready(function(){
		$("h3.rescue-toggle-trigger").click(function(){
			$(this).toggleClass("active").next().slideToggle("fast");return false;
		});
	});
});