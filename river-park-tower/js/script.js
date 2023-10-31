document.addEventListener('DOMContentLoaded', function () {

	// slider home
	let sliderHome = () => {
		let SwiperHome = new Swiper('.home__body-slider', {
			slidesPerView: 1,
			spaceBetween: 0,
			loop: true,
			allowTouchMove: false,
			autoplay: {
				delay: 2000,
			},
			speed: 800,

			pagination: {
				el: ".home__pagination",
				type: 'fraction',
			},
		});

		let SubSwiperHome = new Swiper('.home__bg-slider', {
			slidesPerView: 1,
			spaceBetween: 0,
			loop: true,
			allowTouchMove: false,
			speed: 800,
		});

		SwiperHome.controller.control = SubSwiperHome

	};
	sliderHome()


	// anchor
	document.querySelectorAll('.anchor').forEach((el => {
		el.addEventListener('click', (e) => {
			e.preventDefault()
			let currentAnchor = e.target.href.split('#').slice(1).join('')
			let blockPosition = document.getElementById(currentAnchor).offsetTop

			window.scroll({
				top: blockPosition,
				left: 0,
				behavior: 'smooth'
			});
		})
	}))


	// hover nav item
	let navArr = document.querySelectorAll('.nav__item')
	navArr.forEach(item => {
		item.addEventListener('mouseover', (e) => {
			navArr.forEach(elem => {
				elem.classList.toggle('nav__item_hide')
			})
			item.classList.remove('nav__item_hide')
		})
		item.addEventListener('mouseout', (e) => {
			navArr.forEach(elem => {
				elem.classList.toggle('nav__item_hide')
			})
			item.classList.remove('nav__item_hide')
		})
	})


	// menu btn
	document.querySelectorAll('.header__menu-btn').forEach(btn => {
		btn.addEventListener('click', (e) => {
			document.querySelector('body').classList.toggle('header-open')
		})
	})
	document.querySelectorAll('.header a').forEach(btn => {
		btn.addEventListener('click', (e) => {
			document.querySelector('body').classList.remove('header-open')
		})
	})



	// slider text with picture
	document.querySelectorAll('.text-pic').forEach(slider => {
		let selector = "#" + slider.getAttribute('id')

		if (slider.querySelectorAll('.text-pic__slide').length > 1) {
			let SwiperTextPic = new Swiper(selector + ' .text-pic__slider', {
				slidesPerView: 1,
				spaceBetween: 30,
				loop: true,
				pagination: {
					el: ".text-pic__pagination",
					type: 'fraction',
				},
				navigation: {
					nextEl: selector + ' .text-pic__next',
					prevEl: selector + ' .text-pic__prev',
				},
				breakpoints: {
					0: {
						spaceBetween: 10,
					},
					1024: {
						spaceBetween: 30,
					},
				}
			});
			if (slider.querySelector('.text-pic__subslider')) {
				selector = "#sub" + slider.getAttribute('id')
				let subSwiperTextPic = new Swiper(selector, {
					slidesPerView: 1,
					spaceBetween: 30,
					loop: true,
					breakpoints: {
						0: {
							spaceBetween: 10,
						},
						1024: {
							spaceBetween: 30,
						},
					}
				});
				SwiperTextPic.controller.control = subSwiperTextPic
				subSwiperTextPic.controller.control = SwiperTextPic
			}
		} else {
			slider.closest('.text-pic').classList.add('text-pic_slider-disable')
		}
	})


	// slider gallery
	let sliderGallery = () => {
		let SwiperGallery = new Swiper('.gallery__slider', {
			slidesPerView: 1,
			spaceBetween: 20,
			loop: true,
			loopedSlides: 3,
			centeredSlides: true,

			pagination: {
				el: ".gallery__pagination",
				type: 'fraction',
			},
			navigation: {
				nextEl: '.gallery__next',
				prevEl: '.gallery__prev',
			},
			breakpoints: {
				0: {
					spaceBetween: 10,
				},
				1201: {
					spaceBetween: 20,
				},
			}
		});
	};
	sliderGallery()

	// slider banner
	document.querySelectorAll('.banner').forEach(slider => {
		let selector = "#" + slider.getAttribute('id')

		if (slider.querySelectorAll('.banner__slide').length > 1) {
			let SwiperBanner = new Swiper(selector + ' .banner__slider', {
				slidesPerView: 1,
				spaceBetween: 30,
				loop: true,
				pagination: {
					el: ".banner__pagination",
					type: 'fraction',
				},
				navigation: {
					nextEl: '.banner__next',
					prevEl: '.banner__prev',
				},
				breakpoints: {
					0: {
						spaceBetween: 10,
					},
					1024: {
						spaceBetween: 30,
					},
				}
			});
			if (slider.querySelector('.banner__subslider')) {
				selector = '#' + slider.querySelector('.banner__subslider').getAttribute('id')
				let subSwiperBanner = new Swiper(selector, {
					slidesPerView: 1,
					spaceBetween: 30,
					loop: true,
					autoHeight: true,
					breakpoints: {
						0: {
							spaceBetween: 10,
						},
						1024: {
							spaceBetween: 30,
						},
					}
				});
				SwiperBanner.controller.control = subSwiperBanner
				subSwiperBanner.controller.control = SwiperBanner
			}
		} else {
			slider.classList.add('banner_slider-disable')
		}
	})


	// fancybox defaults
	Fancybox.bind('[data-fancybox]', {
		autoFocus: false,
		// dragToClose: false,
	});


	// phone mask
	document.querySelectorAll('[type="tel"]').forEach(el => {
		let mask = IMask(el, { mask: '+{7}(000)000-00-00' })
	})


	// anchor
	document.querySelectorAll('.anchor').forEach((el => {
		el.addEventListener('click', (e) => {
			e.preventDefault()
			let currentAnchor = e.target.href.split('#').slice(1).join('')
			let blockPosition = document.getElementById(currentAnchor).offsetTop - 50

			window.scroll({
				top: blockPosition,
				left: 0,
				behavior: 'smooth'
			});
		})
	}))


	// srcoll up btn
	document.querySelectorAll('.scroll-up-btn').forEach((btn => {
		btn.addEventListener('click', (e) => {
			window.scroll({
				top: 0,
				left: 0,
				behavior: 'smooth'
			});
		})
	}))


	// request
	const requestURL = "send.php"

	function request(method, url, body = null) {
		const headers = {
			'Content-Type': 'application/json'
		}
		const params = {
			method: method,
			body: JSON.stringify(body),
			headers: headers
		}
		method == 'GET' ? delete params.body : ''// GET method cannot have body

		return fetch(url, params)
			.then(response => {
				if (response.ok) {
					return response
				}
				return response.json().then(error => {
					const er = new Error('Ошибка')
					er.data = error
					throw er
				})
			})
	}


	// send form
	document.querySelectorAll('form').forEach(form => {
		let nameInput = form.querySelector('input[name="name"]')
		let phoneInput = form.querySelector('input[name="phone"]')

		let popup = document.querySelector('.popup')

		form.addEventListener('submit', (e) => {
			let body = {
				name: nameInput.value,
				phone: phoneInput.value,
			}
			e.preventDefault()
			request('POST', requestURL, body)
				.then(data => {
					const fancybox = new Fancybox([
						{
							src: popup,
							type: "html",
						},
					]);
					nameInput.value = null
					phoneInput.value = null
				})
				.catch(err => console.log(err))

		})
	})



	// tab
	document.querySelectorAll('.tab').forEach(el => {
		el.addEventListener('click', (e) => {
			if (e.target.closest('.tab__link')) {
				el.querySelectorAll('.tab__link').forEach(elem => {
					elem.classList.remove('tab__link_active')
				})
				e.target.classList.add('tab__link_active')

				el.querySelectorAll('.tab__item').forEach(elem => {
					elem.classList.remove('tab__item_active')
				})
				let index = [...e.target.parentElement.children].indexOf(e.target)
				el.querySelectorAll('.tab__item')[index].classList.add('tab__item_active')
			}
		})
	})


	// prevent btn
	document.querySelectorAll('.map-3d__bg').forEach(el => {
		el.addEventListener('click', (e) => {
			el.classList.add('map-3d__bg_disable')
		})
	})


	// header color change
	let oldScroll = 0
	document.addEventListener('scroll', (e) => {
		if (window.pageYOffset > window.innerHeight * 1.51) {
			document.querySelector('.header').classList.add('header_fixed')
		} else {
			document.querySelector('.header').classList.remove('header_fixed')
		}

		// let currentScroll = window.pageYOffset
		// if (oldScroll > currentScroll) {
		// 	document.querySelector('.header').classList.remove('header_hide')
		// } else {
		// 	document.querySelector('.header').classList.add('header_hide')
		// }
		// oldScroll = currentScroll
	})


});

