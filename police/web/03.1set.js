function setMargin(){
	var winH = $(window).height();
	var head = $("header").height();
	var ulH = $(".ls-container>ul").height()
		var h = (winH - head - ulH)/2;
		if(h<20){
			h=20
		}
	$(".ls-container>ul").css("marginTop",h)

	// var winw = $(window).width();
	// var headw = $("header").width();
	// var ulw = $(".ls-container>ul").width()
	// 	var w = (winw - headw - ulw)/2;
	// 	if(w<20){
	// 		w=20
	// 	}
	// $(".ls-container>ul").css("paddingLeft",w)


}
$(window).on("resize",function(){
setMargin()
})
setMargin()