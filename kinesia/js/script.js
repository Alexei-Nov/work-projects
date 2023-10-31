document.addEventListener('DOMContentLoaded', function () {
	// fancybox defaults
	Fancybox.bind('[data-fancybox]', {
		autoFocus: false,
		// dragToClose: false,
	});


	// phone mask
	document.querySelectorAll('[type="tel"]').forEach(el => {
		let mask = IMask(el, { mask: '+{7}(000)000-00-00' })
	})


	// slider gallery
	let sliderGallery = () => {
		let SwiperGallery = new Swiper('.gallery__slider', {
			slidesPerView: 2.5,
			spaceBetween: 20,

			navigation: {
				nextEl: '.gallery__next',
				prevEl: '.gallery__prev',
			},
			breakpoints: {
				0: {
					spaceBetween: 10,
					slidesPerView: 1.2,
				},
				571: {
					spaceBetween: 10,
					slidesPerView: 1.5,
				},
				769: {
					spaceBetween: 20,
					slidesPerView: 2.5,
				},
			}
		});
	};
	sliderGallery()


	// slider news
	let sliderNews = () => {
		let SubSwiperNews = new Swiper('.article__subslider', {
			slidesPerView: 'auto',
			spaceBetween: 20,
			watchSlidesProgress: true,
		});

		let SwiperNews = new Swiper('.article__slider', {
			slidesPerView: 1,
			spaceBetween: 20,
			thumbs: {
				swiper: SubSwiperNews,
			},
		});
	};
	sliderNews()


	// slider service
	// let sliderService = () => {
	// 	let SwiperService = new Swiper('.service__slider', {
	// 		slidesPerView: 4,
	// 		spaceBetween: 20,

	// 		breakpoints: {
	// 			0: {
	// 				spaceBetween: 10,
	// 				slidesPerView: 1,
	// 			},
	// 			571: {
	// 				spaceBetween: 10,
	// 				slidesPerView: 2,
	// 			},
	// 			769: {
	// 				spaceBetween: 20,
	// 				slidesPerView: 3,
	// 			},
	// 			1025: {
	// 				spaceBetween: 20,
	// 				slidesPerView: 4,
	// 			},
	// 		}
	// 	});
	// };
	// sliderService()


	// select
	document.querySelectorAll('.select').forEach(select => {
		let btn = select.querySelector('.select__title')
		let itemArr = select.querySelectorAll('.select__item')
		let input = select.querySelector('.select__input')
		btn.addEventListener('click', (e) => {
			select.classList.toggle('select_open')
		})
		itemArr.forEach((item, index) => {
			item.addEventListener('click', (e) => {
				btn.innerText = item.innerText
				input.querySelector('option[selected]') ? input.querySelector('option[selected]').removeAttribute('selected') : ''
				input.querySelectorAll('option')[index].setAttribute('selected', '')
				select.classList.remove('select_open')
			})
		})
	})


	// header menu
	document.querySelectorAll('.header__menu-btn').forEach(btn => {
		btn.addEventListener('click', (e) => {
			document.querySelector('body').classList.toggle('header-open')
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


	// accordion
	document.querySelectorAll('.accordion').forEach(accordion => {
		let itemArr = accordion.querySelectorAll('.accordion__item')
		itemArr.forEach(item => {

			let btn = item.querySelector('.accordion__btn')
			let body = item.querySelector('.accordion__body')
			if (!item.closest('.accordion__item_open')) {
				body.style.maxHeight = 0
			}
			btn.addEventListener('click', (e) => {

				if (!item.closest('.accordion__item_open')) {
					item.classList.add('accordion__item_open')
					body.style.maxHeight = body.scrollHeight + 'px'
				} else {
					item.classList.remove('accordion__item_open')
					body.style.maxHeight = 0
				}
			})
		})
	})


	// dropdown
	document.querySelectorAll('.dropdown').forEach(wrapper => {
		let btn = wrapper.querySelector('.dropdown__title')
		let btnText = wrapper.querySelector('.dropdown__title-text')
		let itemArr = wrapper.querySelectorAll('.dropdown__item')

		btn.addEventListener('click', (e) => {
			wrapper.classList.toggle('dropdown_open')
		})

		itemArr.forEach(item => {
			item.addEventListener('click', (e) => {
				btnText.innerText = item.innerText
				wrapper.classList.remove('dropdown_open')
			})
		})
	})

});



// map
function initMap(coords, id) {
	let myMap = new ymaps.Map(id, {
		center: coords,
		zoom: 15,
		controls: ['zoomControl']
	}, {
		searchControlProvider: 'yandex#search'
	});

	myPlacemark = new ymaps.Placemark(coords,
		{ balloonContent: 'Кинезия', },
		{ iconColor: '#0067ca' });

	myMap.geoObjects.add(myPlacemark)

	if (window.innerWidth < 1023) {
		myMap.behaviors.disable(['drag', 'rightMouseButtonMagnifier']);
		//  - drag - перемещение карты при нажатой левой кнопки мыши;
		//  - magnifier.rightButton - увеличение области, выделенной правой кнопкой мыши.
	}
}

window.onload = () => {
	ymaps.ready(() => {
		initMap([59.940082, 30.312814], 'map')
	})
}
