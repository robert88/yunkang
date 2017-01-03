
var mySwiper = new Swiper('.swiper-container', {
	autoplay:3000,
	speed: 1000,
	pagination: '.swiper-pagination',
	paginationBulletRender: function (swiper, index, className) {
		return '<span class="' + className + '">' + (index + 1) + '</span>';
	},
	paginationClickable:true
});