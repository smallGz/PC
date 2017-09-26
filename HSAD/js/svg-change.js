$(document).ready(function() {
	$("img").each(function() {
		if($(this).attr("src") != null){
			var imgSrc = $(this).attr("src").replace(".svg",".png");
				 	 $(this).attr('src', imgSrc);
		}
    });
	$("*").each(function(){
		if($(this).css('background-image') != "none"){
			var backgroundImgSrc = $(this).css('background-image');
			var _src = backgroundImgSrc.replace(/^url\(["']?/, '').replace(/["']?\)$/, '');
			if(backgroundImgSrc.match('.svg')){
				//console.log("오호 통과");
				backgroundImgSrc = $(this).css('background-image').replace(".svg",".png");
				$(this).css("background-image",backgroundImgSrc);
			}
		}
	});
});
