var mySwiper = new Swiper('.swiper-container', {
});

var mySwiper = new Swiper('.swiper-container', {
  speed: 2000,
  loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true
	}
});
