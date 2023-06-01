document.addEventListener('DOMContentLoaded', function () {

	// slider home
	let sliderHome = () => {
		let SwiperHome = new Swiper('.home-slider__container', {
			slidesPerView: 1,
			spaceBetween: 30,
			loop: true,
			centeredSlides: true,
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
			breakpoints: {
				0: {
					slidesPerView: 1,
					spaceBetween: 10,
				},
				768: {
					slidesPerView: 1.25,
					spaceBetween: 20,
				},
				1024: {
					slidesPerView: 1,
					spaceBetween: 30,
				},
			}
		});
	};
	sliderHome()

	// slider default
	let sliderDefault = () => {
		let SwiperDefault = new Swiper('.default-slider__container', {
			slidesPerView: 'auto',
			spaceBetween: 30,
			loop: true,
			autoHeight: true,
			pagination: {
				el: ".default-slider__pagination",
				type: 'bullets',
				clickable: true,
			},
			navigation: {
				nextEl: '.default-slider__next',
				prevEl: '.default-slider__prev',
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
					spaceBetween: 15,
				},
				680: {
					slidesPerView: 2,
				},
				768: {
					slidesPerView: 'auto',
				},
			}
		});
	};
	sliderDefault()

	// slider card
	let sliderCard = () => {
		let SwiperCard = new Swiper('.card__gallery', {
			slidesPerView: 1,
			spaceBetween: 30,
			loop: true,
			nested: true,
			pagination: {
				el: ".card__gallery-pagination",
				type: 'bullets',
				clickable: true,
			},

		});
	};
	sliderCard()

	// slider category
	let sliderCategory = () => {
		let SwiperCategory = new Swiper('.category__slider', {
			slidesPerView: 1,
			spaceBetween: 30,
			loop: true,
			pagination: {
				el: ".category__pagination",
				type: 'bullets',
				clickable: true,
			},
			navigation: {
				nextEl: '.category__next',
				prevEl: '.category__prev',
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				570: {
					slidesPerView: 2,
				},
				768: {
					slidesPerView: 3,
				},
				1200: {
					slidesPerView: 4,
				}
			}
		});
	};
	sliderCategory()

	// slider partners
	let sliderPartners = () => {
		let SwiperPartners = new Swiper('.partners__slider', {
			slidesPerView: 'auto',
			spaceBetween: 24,
			loop: true,
			pagination: {
				el: ".partners__pagination",
				type: 'bullets',
				clickable: true,
			},
			navigation: {
				nextEl: '.partners__next',
				prevEl: '.partners__prev',
			},
			breakpoints: {
				0: {
					spaceBetween: 10,
				},
				570: {
					spaceBetween: 24,
				}
			}
		});
	};
	sliderPartners()

	// slider Tab
	let sliderTab = () => {
		let SwiperTab = new Swiper('.tab-slider__container', {
			slidesPerView: 1,
			spaceBetween: 30,
			loop: true,
			pagination: {
				el: ".tab-slider__pagination",
				type: 'bullets',
				clickable: true,
			},
			navigation: {
				nextEl: '.tab-slider__next',
				prevEl: '.tab-slider__prev',
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				570: {
					slidesPerView: 2,
				},
				768: {
					slidesPerView: 3,
				},
				1200: {
					slidesPerView: 4,
				}
			}
		});
	};
	sliderTab()


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
				el.querySelector('.dropdown__title-text').innerHTML = e.target.innerText
			}
		})
	})


	// compare-icon
	document.querySelectorAll('.icon').forEach(el => {
		el.addEventListener('click', (e) => {
			el.classList.toggle('icon_active')
		})
	})


	// tab
	document.querySelectorAll('.tab').forEach(el => {
		el.addEventListener('click', (e) => {
			if (e.target.closest('.tab__link')) {
				el.querySelectorAll('.tab__link').forEach(elem => {
					elem.classList.remove('tab__link-active')
				})
				e.target.classList.add('tab__link-active')

				el.querySelectorAll('.tab__item').forEach(elem => {
					elem.classList.remove('tab__item-active')
				})
				let index = [...e.target.parentElement.children].indexOf(e.target)
				el.querySelectorAll('.tab__item')[index].classList.add('tab__item-active')
			}
		})
	})


	// replace header search form
	if (window.innerWidth < 570) {
		let cloneEl = document.querySelector('.header__search').cloneNode(true)
		document.querySelector('.header__mid').append(cloneEl)
		document.querySelector('.header__body .header__search').remove()
	}


	// accordion footer nav
	if (window.innerWidth < 570) {
		document.querySelectorAll('.footer__nav-item_has-children').forEach(el => {
			el.addEventListener('click', (e) => {
				if (!e.target.closest('.footer__nav-item_open')) {
					e.preventDefault()
					document.querySelectorAll('.footer__nav-item_open').forEach(elem => {
						elem.classList.remove('footer__nav-item_open')
						elem.querySelector('.footer__subnav').style.height = 0
					})
					el.classList.add('footer__nav-item_open')
					el.querySelector('.footer__subnav').style.height = el.querySelector('.footer__subnav').scrollHeight + 'px'
				} else {
					document.querySelectorAll('.footer__nav-item_open').forEach(elem => {
						elem.classList.remove('footer__nav-item_open')
						elem.querySelector('.footer__subnav').style.height = 0
					})
				}
			})
		})
	}

	// popup info
	document.querySelectorAll('.popup-info').forEach(el => {
		el.addEventListener('click', (e) => {
			if (e.target.closest('.popup-info__close')) {
				el.classList.add('popup-info_hide')
			}
		})
	})

}) 