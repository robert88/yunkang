require("/public/js/module/nativeShare.js");
function bindGoTop() {
	$(".J-top").click(function () {
		$("body").scrollTop(0);
	})
}
function bindGoShare() {
	$(".J-share-btn").click(function () {
		$(".ls-container").css("overflow","hidden");
		$(".J-share-contain").addClass("slideShow")
		$(".mask").show()
	})
	$(".J-share-cancel").click(function () {
		$(".mask").hide()
		$(".ls-container").css("overflow","visible");
		$(".J-share-contain").removeClass("slideShow")
	})
}

	function WeiXinShareBtn() {
		new nativeShare("shareNode");
	}
/*init page*/
bindGoTop();
bindGoShare()
WeiXinShareBtn();