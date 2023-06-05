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
				769: {
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
					spaceBetween: 15,
				},
				769: {
					slidesPerView: 'auto',
					spaceBetween: 15,
				},
				991: {
					spaceBetween: 30,
				}
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
					spaceBetween: 15,
				},
				570: {
					slidesPerView: 2,
					spaceBetween: 15,
				},
				769: {
					slidesPerView: 3,
					spaceBetween: 30,
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
					slidesPerView: 2,
				},
				570: {
					spaceBetween: 24,
					slidesPerView: 'auto',
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
					spaceBetween: 15,
				},
				570: {
					slidesPerView: 2,
					spaceBetween: 15,
				},
				769: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
				1300: {
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

	function accordion(activeClass, elemClass) {
		if (!e.target.closest('.' + activeClass)) {
			e.preventDefault()
			document.querySelectorAll('.' + activeClass).forEach(elem => {
				elem.classList.remove(activeClass)
				elem.querySelector(elemClass).style.height = 0
			})
			el.classList.add(activeClass)
			el.querySelector(elemClass).style.height = el.querySelector(elemClass).scrollHeight + 'px'
		} else {
			document.querySelectorAll('.' + activeClass).forEach(elem => {
				elem.classList.remove(activeClass)
				elem.querySelector(elemClass).style.height = 0
			})
		}
	}

	// accordion footer nav
	if (window.innerWidth < 570) {
		document.querySelectorAll('.footer__nav-item_has-children').forEach(el => {
			el.addEventListener('click', accordion('footer__nav-item_open', 'footer__subnav'))
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


	// menu 
	document.querySelector('.menu').addEventListener('click', (e) => {
		if (e.target.closest('.menu__btn')) {
			document.querySelector('body').classList.toggle('menu-open')
		} else if (!e.target.closest('.menu__nav') && !e.target.closest('.menu__list')) {
			document.querySelector('body').classList.remove('menu-open')
		}
	})


	// catalog list
	if (window.innerWidth < 570) {
		document.querySelectorAll('.catalog-list__filter').forEach(el => {
			el.addEventListener('click', accordion('catalog-list__filter_open', 'catalog-list__filter-list'))
		})
	}


	// tags
	document.querySelectorAll('.tags').forEach(el => {
		el.querySelector('.tags__btn').addEventListener('click', (e) => {
			let currentText = e.target.innerText
			let toggleText = e.target.getAttribute('data-toggle-text')
			e.target.setAttribute('data-toggle-text', currentText)
			e.target.innerText = toggleText
			el.classList.toggle('tags_open')
		})
	})

}) 