document.addEventListener('DOMContentLoaded', function () {

	// slider home
	let sliderHome = () => {
		let SwiperHome = new Swiper('.home-slider__container', {
			slidesPerView: 1,
			spaceBetween: 30,
			loop: true,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
				waitForTransition: false,
			},

			pagination: {
				el: ".home-slider__pagination",
				type: 'bullets',
				clickable: true,
			},
			navigation: {
				nextEl: '.home-slider__next',
				prevEl: '.home-slider__prev',
			},
		});
	};
	sliderHome()

	// slider default
	let sliderDefault = () => {
		let SwiperDefault = new Swiper('.default-slider__container', {
			slidesPerView: 'auto',
			spaceBetween: 30,
			loop: true,
			pagination: {
				el: ".default-slider__pagination",
				type: 'bullets',
				clickable: true,
			},
			navigation: {
				nextEl: '.default-slider__next',
				prevEl: '.default-slider__prev',
			},
		});
	};
	sliderDefault()

	// phone mask
	document.querySelectorAll('[type="tel"]').forEach(el => {
		let mask = IMask(el, { mask: '+{7}(000)000-00-00' })
	})

	// sticky header
	document.addEventListener('scroll', (e) => {
		if (window.pageYOffset > 30) {
			document.querySelector('.body-wrapper').classList.add('header-stick')
		} else {
			document.querySelector('.body-wrapper').classList.remove('header-stick')
		}
	})

	// dropdown
	document.querySelectorAll('.dropdown').forEach(el => {
		el.addEventListener('click', (e) => {
			el.classList.toggle('dropdown_active')
			if (e.target.closest('.dropdown__list')) {
				el.querySelector('.dropdown__title').innerHTML = e.target.innerText
			}
		})
	})

})