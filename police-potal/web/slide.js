/*轮播效果*/
$(".slide-contain").carousel({
    prev:false,
    next:false,
    item: ".slide-item",
    itemWrap: ".slide-wrap",
    time: 300,
    fixArrow:false,
    loop: true,
    nextLoop:true,
    autoPlay: true,
    autoPlayTime: 3000,
    dir: "left"
});