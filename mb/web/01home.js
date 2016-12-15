
function initupdownswiper(){
    // /*左右切换*/
    var $porduct = $(".product-swiper-wrapper");
    var productx = 0;
    var navListh = 0
    var $navList = $(".product .list");
    var $wrap = $(".wrap");
    function slideLeftNav(translateX){
        var maxw = $wrap.width()*0.65;
        var x =translateX+productx;
        x = x<(-maxw-20)?(-maxw-20):x;
        x = x>20?20:x;
       transition.call( $porduct,0)
       transform.call( $porduct,'translate3d(' + x+ 'px, 0,0)')
    }
    function bindGoHome(){
        $(".goHomeBtn").click(function () {
            var x = $wrap.width()*0.65;
            transition.call( $porduct,500)
            transform.call( $porduct,'translate3d(-' + x+ 'px, 0,0)')
            vSwiper.params.allowSwipeToNext = true;
            vSwiper.params.allowSwipeToPrev = true;
            updateGoHome();
            return false
        })
    }
    function bindGoProduct(){
        $(".productBtn").click(function () {
            var x =0
            transition.call( $porduct,500)
            transform.call( $porduct,'translate3d(' + x+ 'px, 0,0)')
            vSwiper.params.allowSwipeToNext = false;
            vSwiper.params.allowSwipeToPrev = false;
            updateGoProduct();
            return false
        })
    }
    function updateGoHome(){
        $(".reactTop").animate({opacity:1},500).data("hide",false)
        $(".reactBottom").animate({opacity:1},500)
        $(".goHomeBtn").css("opacity",1).hide().animate({opacity:0},500);;
        $(".productBtn").css("opacity",0).show().animate({opacity:1},500);;

    }
    function updateGoProduct(){
        $(".reactTop").animate({opacity:0},500).data("hide",true)
        $(".reactBottom").animate({opacity:0},500)
        $(".goHomeBtn").css("opacity",0).show().animate({opacity:1},500);
        $(".productBtn").css("opacity",1).hide().animate({opacity:0},500);
    }
    function updateLeftNav(translateX,s) {
        var halfw = $wrap.width()*0.4;
        var maxw = $wrap.width()*0.65;
        /*超过一半*/
        if(Math.abs(translateX)>halfw){
            if(translateX>0){
                transition.call( $porduct,500)
                transform.call( $porduct,'translate3d(0px, 0,0)')
                updateGoProduct()
            }else{
                s.params.allowSwipeToNext = true;
                s.params.allowSwipeToPrev = true;
                transition.call( $porduct,500)
                transform.call( $porduct,'translate3d(-' +maxw+ 'px, 0,0)')

                updateGoHome()
            }
        /*还原*/
        }else{
            if($(".reactTop").data("hide")==false){
                s.params.allowSwipeToNext = true;
                s.params.allowSwipeToPrev = true;
            }
            transition.call( $porduct,500)
            transform.call( $porduct,'translate3d(' +productx+ 'px, 0,0)')
        }
    }
    function transformNav(translatey) {
        var maxh = $navList.innerHeight()-$porduct.height();
        var y =translatey+navListh;
        y = y<(-maxh-20)?(-maxh-20):y;
        y = y>20?20:y;
        transition.call( $navList,0)
        transform.call( $navList,'translate3d( 0,' + y+ 'px,0)')
    }
    function updateNavList(){
        var h = getTranslate($navList[0],"y",vSwiper);
        if(h>0){
            transition.call( $navList,500)
            transform.call( $navList,'translate3d( 0,0px,0)')
        }
        var maxh = $navList.innerHeight()-$porduct.height();
        if(h<-maxh){
            transition.call( $navList,500)
            transform.call( $navList,'translate3d( 0,-'+maxh+'px,0)')
        }
    }
    function transform(transform) {
        for (var i = 0; i < this.length; i++) {
            var elStyle = this[i].style;
            elStyle.webkitTransform = elStyle.MsTransform = elStyle.msTransform = elStyle.MozTransform = elStyle.OTransform = elStyle.transform = transform;
        }
        return this;
    }
    function transition(duration) {
        if (typeof duration !== 'string') {
            duration = duration + 'ms';
        }
        for (var i = 0; i < this.length; i++) {
            var elStyle = this[i].style;
            elStyle.webkitTransitionDuration = elStyle.MsTransitionDuration = elStyle.msTransitionDuration = elStyle.MozTransitionDuration = elStyle.OTransitionDuration = elStyle.transitionDuration = duration;
        }
        return this;
    }
     function getTranslate(el, axis,s) {
        var matrix, curTransform, curStyle, transformMatrix;

        // automatic axis detection
        if (typeof axis === 'undefined') {
            axis = 'x';
        }

        if (s.params.virtualTranslate) {
            return s.rtl ? -s.translate : s.translate;
        }

        curStyle = window.getComputedStyle(el, null);
        if (window.WebKitCSSMatrix) {
            curTransform = curStyle.transform || curStyle.webkitTransform;
            if (curTransform.split(',').length > 6) {
                curTransform = curTransform.split(', ').map(function(a){
                    return a.replace(',','.');
                }).join(', ');
            }
            // Some old versions of Webkit choke when 'none' is passed; pass
            // empty string instead in this case
            transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
        }
        else {
            transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform  || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
            matrix = transformMatrix.toString().split(',');
        }

        if (axis === 'x') {
            //Latest Chrome and webkits Fix
            if (window.WebKitCSSMatrix)
                curTransform = transformMatrix.m41;
            //Crazy IE10 Matrix
            else if (matrix.length === 16)
                curTransform = parseFloat(matrix[12]);
            //Normal Browsers
            else
                curTransform = parseFloat(matrix[4]);
        }
        if (axis === 'y') {
            //Latest Chrome and webkits Fix
            if (window.WebKitCSSMatrix)
                curTransform = transformMatrix.m42;
            //Crazy IE10 Matrix
            else if (matrix.length === 16)
                curTransform = parseFloat(matrix[13]);
            //Normal Browsers
            else
                curTransform = parseFloat(matrix[5]);
        }
        if (s.rtl && curTransform) curTransform = -curTransform;
        return curTransform || 0;
    };

    /*上下切换*/
    var startFlag = false;
    var curDir = "vertical";
    var curTarget = null;

    var vSwiper = new Swiper('.swiper-vertical-container', {
        direction: 'vertical',
        nextButton: ".J-next",
        prevButton: ".J-prev",
        wrapperClass:"swiper-vertical-wrapper",
        // touchMoveStopPropagation:false,
        initialSlide:1,
        onTouchStart:function (s,e) {
            productx =getTranslate($porduct[0],"x",vSwiper);
            navListh =getTranslate($navList[0],"y",vSwiper);
            console.log(e)
            if(e.target == $navList[0] || $(e.target).parents(".product .list").length){
                curTarget ="navList";
            }


        },
        onTouchMove:function(e){

            var s = vSwiper;

            //必须在第二页
            if(vSwiper.activeIndex!=1){
                s.params.allowSwipeToNext = true;
                s.params.allowSwipeToPrev = true;
                return
            }

            /*左右*/
            if( s.params.allowSwipeToPrev==false&&curDir=="horizontal"){
                slideLeftNav(s.touches.currentX - s.touches.startX);
                return
            }
            console.log(curTarget=="navList",curDir=="vertical",s.params.allowSwipeToPrev==false)
            /*nav的上下*/
            if( s.params.allowSwipeToPrev==false&&curDir=="vertical"&&curTarget=="navList"){
                transformNav(s.touches.currentY - s.touches.startY);
                return
            }

            //防抖动
            if(s.touches.currentY ==s.touches.startY&&Math.abs(s.touches.currentX - s.touches.startX)<2){
                return;
            }


            /*按下执行一次*/
            if(startFlag==true){
                return
            }
            startFlag = true;

            var  touchAngle = Math.atan2(Math.abs(s.touches.currentY - s.touches.startY), Math.abs(s.touches.currentX - s.touches.startX)) * 180 / Math.PI;

            if(90 - touchAngle > s.params.touchAngle){
                curDir = "horizontal"
                s.params.allowSwipeToNext = false;
                s.params.allowSwipeToPrev = false;
            }else{
                curDir = "vertical"
            }

        },onTouchEnd:function () {
            var s = vSwiper;
            startFlag = false;


            /*左右*/
            if( s.params.allowSwipeToPrev==false){
                if(curDir=="horizontal"){
                    updateLeftNav(s.touches.currentX - s.touches.startX,s);
                }else if(curTarget=="navList"){
                    updateNavList()
                }
            }
            curTarget = null;
            curDir = "vertical";

        }
    })

    bindGoHome()
    bindGoProduct()

}
/*初始化时间*/
function initdate() {
    var date = new Date();
    $("#indexPage").find(".year").html(date.format("yy年MM月"))
    $("#indexPage").find(".day").html(date.getDate())
    $("#indexPage").find(".week").html(' 星期'+'日一二三四五六'.charAt(date.getDay()))
    $("#indexPage").find(".time").html(date.format("hh:mm"));
    setTimeout(initdate,3000)
}
function initMore(){
    $(".J-more").click(function () {
        var $this = $(this);
        $this.parent().find("dl").toggle();
    })
}
/*初始化*/
initupdownswiper();
initdate();
initMore();
