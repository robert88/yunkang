function selectAll(){

	var $list = $(".downloadList")

	/*全选*/
	$(".J-selectAll").on("change","input",function(){
		if($(this).prop("checked")){
			$list.find(".J-label-box").addClass("checked").find("input").prop("checked",true)
		}else{
			$list.find(".J-label-box").removeClass("checked").find("input").prop("checked",false)
		}
		$(".J-select-num").html($list.find(".J-label-box.checked").length)
	})

	/*单个选择*/
    $list.on("change",".J-label-box input",function () {

    	var checkednum = $list.find(".J-label-box.checked").length
		var totalnum = $list.find(".J-label-box").length;

		/*全部选中*/
    	if(checkednum== totalnum&&checkednum!=0){
            $(".J-selectAll").addClass("checked").find("input").prop("checked",true)
		}
        console.log(checkednum, totalnum)
		/*全部未选中*/
		if(checkednum==0){
            $(".J-selectAll").removeClass("checked").find("input").prop("checked",false)
		}

        $(".J-select-num").html(checkednum)
    })

}

selectAll();