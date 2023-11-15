const swiper = new Swiper(".swiper-intro", {
	// loop: true,
	slidesPerView: 1,
	centeredSlides: true,
	// spaceBetween: 100,
	// autoplay: { delay: 2000 },

	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},

	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

const swiper2 = new Swiper(".swiper-messages", {
	loop: true,
	slidesPerView: 2,
	centeredSlides: true,
	// spaceBetween: 100,
	autoplay: { delay: 2000 },

	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});
