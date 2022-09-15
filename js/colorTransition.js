$(document).ready(function() {
	$("#btnChange").click(function() {
        var color = 'rgb(' + 
                     Math.floor(Math.random() * 256) + ',' +
                     Math.floor(Math.random() * 256) + ',' +
                     Math.floor(Math.random() * 256) + ')';
		$("body, #btnChange").animate({
            backgroundColor: color
        }, 1000);
	});
	
	$("#btnChange").focus();
	
});