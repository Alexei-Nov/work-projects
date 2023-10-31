document.addEventListener('DOMContentLoaded', function () {

	// slider gallery
	let sliderGallery = () => {
		let SwiperGallery = new Swiper('.gallery__slider', {
			slidesPerView: 1,
			spaceBetween: 40,
			allowTouchMove: false,
			// freeMode: true,
			speed: 800,
			mousewheel: {
				releaseOnEdges: true,
			},
			pagination: {
				el: ".gallery__pagination",
				type: 'custom',
				renderCustom: function (swiper, current, total) {
					if (current < 10) {
						current = '0' + current;
					}
					if (total < 10) {
						total = '0' + total;
					}
					return '<span class="slider-num swiper-pagination-current">' + current + '/' + '<span class="slider-num swiper-pagination-total gray-text">' + total + '</span>'
				},
			},
			scrollbar: {
				el: ".gallery__scrollbar",
				draggable: true,
			},
			navigation: {
				nextEl: '.gallery__next',
				prevEl: '.gallery__prev',
			},
			breakpoints: {
				0: {
					spaceBetween: 20,
					allowTouchMove: true,
					speed: 400,
				},
				1201: {
					spaceBetween: 40,
					allowTouchMove: false,
					speed: 800,
				},
			}
		});
	};
	sliderGallery()

});