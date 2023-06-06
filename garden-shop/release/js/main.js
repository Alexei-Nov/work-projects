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

	// slider review
	let sliderReview = () => {
		let SwiperReview = new Swiper('.review__slider', {
			slidesPerView: 'auto',
			spaceBetween: 30,
			autoHeight: true,
			navigation: {
				nextEl: '.review__next',
				prevEl: '.review__prev',
			},
			scrollbar: {
				el: '.review__scrollbar',
				draggable: true,
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				570: {
					slidesPerView: 'auto',
				},
			}
		});
	};
	sliderReview()


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


	// accordion
	function initAcc(elem, option) {
		document.addEventListener('click', function (e) {
			if (!e.target.closest('.a-btn')) {
				if (document.querySelector(`${elem} > .a-container_open`) && option == true) {
					document.querySelector(`${elem} > .a-container_open .a-panel`).style.height = 0
					document.querySelector(`${elem} > .a-container_open`).classList.remove('a-container_open')
				}
				return;
			}
			else if (e.target.closest(`${elem}`)) {
				if (!e.target.closest('.a-container').classList.contains('a-container_open')) {
					e.preventDefault()
					if (option == true) {
						var elementList = document.querySelectorAll(elem + ' .a-container');
						Array.prototype.forEach.call(elementList, function (e) {
							e.classList.remove('a-container_open');
							e.querySelector('.a-panel').style.height = 0
						});
					}
					e.target.closest('.a-container').classList.add('a-container_open');
					e.target.closest('.a-container').querySelector('.a-panel').style.height = e.target.closest('.a-container').querySelector('.a-panel').scrollHeight + 'px'
				} else {
					e.target.closest('.a-container').classList.remove('a-container_open');
					e.target.closest('.a-container').querySelector('.a-panel').style.height = 0
				}
			}
		});
	}


	// catalog filter accordion
	initAcc('.accordion_v2', false)


	// footer nav and catalog list accordion
	if (window.innerWidth < 570) {
		initAcc('.accordion_v1', true)
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


	// range slider
	document.querySelectorAll('.range-slider').forEach(el => {
		let rangeLimits
		el.getAttribute('data-limits') ? rangeLimits = el.getAttribute('data-limits').split(',') : rangeLimits = [0, 100]
		let rangeStep
		el.getAttribute('data-step') ? rangeStep = el.getAttribute('data-step') : rangeStep = 10
		let rangeUnit
		el.getAttribute('data-unit') ? rangeUnit = el.getAttribute('data-unit') : rangeUnit = ''

		var rangeSlider = new rSlider({
			target: el.querySelector('.range-slider__slider'),
			values: { min: +rangeLimits[0], max: +rangeLimits[1] },
			step: rangeStep,
			range: true,
			scale: false,
			labels: false,
			tooltip: false,
			onChange: function (vals) {
				let valueArr = rangeSlider.getValue().split(',')
				el.querySelector('.range-slider__input_min').value = valueArr[0] + rangeUnit
				el.querySelector('.range-slider__input_max').value = valueArr[1] + rangeUnit
			}
		});
	})


	// catalog sort
	document.querySelectorAll('.catalog__sort').forEach(el => {
		el.addEventListener('click', (e) => {
			if (e.target.closest('.catalog__sort-item')) {
				el.querySelectorAll('.catalog__sort-item_active').forEach(elem => {
					elem.classList.remove('catalog__sort-item_active')
				})
				e.target.closest('.catalog__sort-item').classList.add('catalog__sort-item_active')
				el.classList.remove('catalog__sort_open')
			} else if (e.target.closest('.catalog__sort-title')) {
				el.classList.toggle('catalog__sort_open')
			}
		})
	})


	// catalog template
	document.querySelectorAll('.catalog__template-item').forEach(el => {
		el.addEventListener('click', (e) => {
			document.querySelectorAll('.catalog__template-item_active').forEach(elem => {
				elem.classList.remove('catalog__template-item_active')
			})
			el.classList.add('catalog__template-item_active')
		})
	})


	// catalog filter
	document.querySelectorAll('.catalog__filter').forEach(el => {
		el.addEventListener('click', (e) => {
			if (!e.target.closest('.catalog__filter-wrapper')) {
				document.querySelector('body').classList.remove('filter-open')
			}
		})
	})

	document.querySelectorAll('.catalog__filter-menu-btn').forEach(el => {
		el.addEventListener('click', (e) => {
			document.querySelector('body').classList.toggle('filter-open')
		})
	})

})


window.onload = () => {
	// read more 
	document.querySelectorAll('.read-more').forEach(el => {
		let btn = el.querySelector('.read-more__btn')
		let text = el.querySelector('.read-more__text')

		let limitHeight = +text.style.maxHeight.split('').slice(0, -2).join('')
		let fullHeight = text.scrollHeight

		if (limitHeight >= fullHeight) {
			btn.remove()
			el.classList.toggle('read-more_open')
		}

		btn.addEventListener('click', (e) => {
			e.target.closest('.read-more_open') ? text.style.maxHeight = limitHeight + 'px' : text.style.maxHeight = fullHeight + 'px'

			let currentText = btn.innerHTML
			let toggleText = btn.getAttribute('data-toggle-text')
			btn.setAttribute('data-toggle-text', currentText)
			btn.innerText = toggleText
			el.classList.toggle('read-more_open')
		})
	});
}