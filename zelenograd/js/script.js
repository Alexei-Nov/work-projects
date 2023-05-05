// ----------------------sliders parameters----------------------

let sliderAboutUs = () => {
	let SwiperSubAboutUs = new Swiper('.about-us__subslider', {
		slidesPerView: 3,
		spaceBetween: 40,
		watchSlidesProgress: true,
	});

	let SwiperAboutUs = new Swiper('.about-us__slider', {
		slidesPerView: 1,
		spaceBetween: 30,

		thumbs: {
			swiper: SwiperSubAboutUs,
		},
		breakpoints: {
			0: {
				navigation: false,
				pagination: {
					el: ".about-us__pagination",
					type: 'bullets',
				},
			},
			1025: {
				navigation: {
					nextEl: '.about-us__next',
					prevEl: '.about-us__prev',
				},
				pagination: {
					el: ".about-us__pagination",
					type: 'custom',
					renderCustom: function (swiper, current, total) {
						if (current < 10) {
							current = '0' + current;
						}
						if (total < 10) {
							total = '0' + total;
						}
						return '<span class="slider-num swiper-pagination-current">' + current + '</span>' + '<span class="slider-line"></span>' + '<span class="slider-num swiper-pagination-total">' + total + '</span>'
					},
				},
			},
		},
	});
};

let sliderReview = () => {
	let SwiperReview = new Swiper('.review__slider', {
		slidesPerView: 1,
		spaceBetween: 30,
		autoHeight: true,

		breakpoints: {
			0: {
				navigation: false,
				pagination: {
					el: ".review__pagination",
					type: 'bullets',
				},
			},
			1025: {
				navigation: {
					nextEl: '.review__next',
					prevEl: '.review__prev',
				},
				pagination: {
					el: ".review__pagination",
					type: 'custom',
					renderCustom: function (swiper, current, total) {
						if (current < 10) {
							current = '0' + current;
						}
						if (total < 10) {
							total = '0' + total;
						}
						return '<span class="slider-num swiper-pagination-current">' + current + '</span>' + '<span class="slider-line"></span>' + '<span class="slider-num swiper-pagination-total">' + total + '</span>'
					},
				},
			},
		},
	});
	if (document.querySelector('.review__slider')) {
		document.querySelector('.review__slider').addEventListener('click', (e) => {
			let i = 0
			let interval = setInterval((e) => {
				SwiperReview.updateAutoHeight()
				i++
				if (i > 100) {
					clearInterval(interval)
				}
				console.log(1);
			}, 5)
		})
	}

};

let sliderMain = () => {
	let SwiperMain = new Swiper('.main-block__slider', {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		allowTouchMove: false,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
			waitForTransition: false,
		},

		pagination: {
			el: ".main-block__pagination",
			type: 'custom',
			renderCustom: function (swiper, current, total) {
				if (current < 10) {
					current = '0' + current;
				}
				if (total < 10) {
					total = '0' + total;
				}
				return '<span class="slider-num swiper-pagination-current">' + current + '</span>' + '<span class="slider-line"></span>' + '<span class="slider-num swiper-pagination-total">' + total + '</span>'
			},
		},
		navigation: {
			nextEl: '.main-block__next',
			prevEl: '.main-block__prev',
		},
	});
};

let sliderStages = () => {
	let SwiperStages = new Swiper('.stages__slider', {
		slidesPerView: 3,
		spaceBetween: 30,
		pagination: {
			el: ".stages__pagination",
			type: 'bullets',
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
				navigation: false,
				pagination: {
					el: ".stages__pagination",
					type: 'bullets',
				},
			},
			571: {
				slidesPerView: 2,
			},
			769: {
				slidesPerView: 3,
			},
			1025: {
				navigation: {
					nextEl: '.stages__next',
					prevEl: '.stages__prev',
				},
				pagination: {
					el: ".stages__pagination",
					type: 'custom',
					renderCustom: function (swiper, current, total) {
						if (current < 10) {
							current = '0' + current;
						}
						if (total < 10) {
							total = '0' + total;
						}
						return '<span class="slider-num swiper-pagination-current">' + current + '</span>' + '<span class="slider-line"></span>' + '<span class="slider-num swiper-pagination-total">' + total + '</span>'
					},
				},
			},
		},
	});
};

let sliderPrice = () => {
	let SwiperPrice = new Swiper('.price__slider', {
		slidesPerView: 3,
		spaceBetween: 30,
		autoHeight: true,
		pagination: {
			el: ".price__pagination",
			type: 'bullets',
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			1024: {
				slidesPerView: 2,
			},
			1300: {
				slidesPerView: 3,
			},
		},
	});
};

let sliderGallery = () => {
	let SwiperGallery = new Swiper('.gallery__slider', {
		slidesPerView: 3,
		spaceBetween: 30,
		pagination: {
			el: ".gallery__pagination",
			type: 'bullets',
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
				navigation: false,
				pagination: {
					el: ".gallery__pagination",
					type: 'bullets',
				},
			},
			571: {
				slidesPerView: 2,
			},
			769: {
				slidesPerView: 3,
			},
			1025: {
				navigation: {
					nextEl: '.gallery__next',
					prevEl: '.gallery__prev',
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
						return '<span class="slider-num swiper-pagination-current">' + current + '</span>' + '<span class="slider-line"></span>' + '<span class="slider-num swiper-pagination-total">' + total + '</span>'
					},
				},
			},
		},
	});
};

document.addEventListener('DOMContentLoaded', function () {
	// ---------------------------sliders init------------------

	sliderAboutUs();
	sliderReview();
	sliderMain();
	sliderStages();
	sliderPrice();
	sliderGallery();


	//------------------tab----------------------------

	document.querySelectorAll('.tab__link').forEach(el => {
		el.addEventListener('click', (e) => {
			let currentTab = e.target.closest('.tab')
			if (!e.target.closest('.tab__link-active')) {
				e.target.closest('.tab').querySelector('.tab__link-active').classList.remove('tab__link-active')
				e.target.classList.add('tab__link-active')
			}
			for (let i = 0; i < currentTab.querySelectorAll('.tab__link').length; i++) {
				if (currentTab.querySelectorAll('.tab__link')[i].closest('.tab__link-active')) {
					e.target.closest('.tab').querySelector('.tab__item-active').classList.remove('tab__item-active')
					currentTab.querySelectorAll('.tab__item')[i].classList.add('tab__item-active')
				}
			}
		})
	})

	//-----------------------popup----------------------

	Fancybox.bind('[data-fancybox]', {
		autoFocus: false,
	});

	//---------------------------header menu-------------------

	document.querySelector('.header__menu-btn').addEventListener('click', (e) => {
		e.target.closest('body').classList.toggle('header_open')

	})

	document.querySelectorAll('.nav__item_has-children .nav__link').forEach(el => {
		el.addEventListener('click', (e) => {
			if (!e.target.closest('.nav__item_open')) {
				e.preventDefault()
			}
			e.target.closest('.nav__item_lvl1').classList.toggle('nav__item_open')
		})
	})



});


window.onload = () => {
	// -----------------------read more btn--------------------

	document.querySelectorAll('.read-more__btn').forEach(el => {
		let toggleText = el.getAttribute('toggle-text')
		let currentText = el.innerHTML
		let limitHeight = +getComputedStyle(el.closest('.read-more').querySelector('.read-more__text')).height.split('').slice(0, -2).join('')
		let fullHeight = el.closest('.read-more').querySelector('.read-more__text').scrollHeight

		if (limitHeight >= fullHeight - 3) {
			el.remove()
		}

		el.addEventListener('click', (e) => {
			if (!e.target.closest('.read-more_show')) {
				document.querySelectorAll('.read-more_show').forEach(elem => {
					elem.querySelector('.read-more__btn').innerHTML = currentText
					elem.classList.remove('read-more_show')
					elem.querySelector('.read-more__text').style.maxHeight = limitHeight + 'px'
				})
				e.target.closest('.read-more').classList.add('read-more_show')
				e.target.innerHTML = toggleText
				el.closest('.read-more').querySelector('.read-more__text').style.maxHeight = fullHeight + 'px'

			} else {
				document.querySelectorAll('.read-more_show').forEach(elem => {
					elem.querySelector('.read-more__btn').innerHTML = currentText
					elem.classList.remove('read-more_show')
					elem.querySelector('.read-more__text').style.maxHeight = limitHeight + 'px'
				})
			}
		})
	});
}