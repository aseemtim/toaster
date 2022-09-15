/* slide_show.js */
$(document).ready(function(){
	// create and array of images
	var image, imageCounter = 0, imageCache = [];
	
	$("#slides img").each(function(){
		image = new Image();
		image.src = $(this).attr("src");
		imageCache[imageCounter] = image;
		imageCounter++;
	}); // end preload
	
	// start slide show
	imageCounter = 0;
	var nextImage;
	setInterval(function(){
		$("#slide").fadeOut(3000,
			function(){
				imageCounter = (imageCounter + 1) % imageCache.length;
				nextImage = imageCache[imageCounter];
				$("#slide").attr("src", nextImage.src).fadeIn(1000);
			}
		);
	}, 3000); // end of setInterval
	
}); // end of ready











