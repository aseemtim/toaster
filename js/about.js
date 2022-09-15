"use strict";
$(document).ready(function() {
	$("#about h2").click(function(evt) {
		$(this).toggleClass("minus");
		if ($(this).attr("class") !== "minus") {
            $(this).next().slideUp(750, "easeInExpo");
		} else {
            $(this).next().slideDown(1000, "easeOutExpo");
		}
		evt.preventDefault();
	});
	
	$("#about").find("a:first").focus();
	
});