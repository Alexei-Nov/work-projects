document.addEventListener('DOMContentLoaded', function () {
	// slider about
	let SwiperAbout
	let sliderAbout = () => {
		SwiperAbout = new Swiper('.about__slider', {
			slidesPerView: 1,
			spaceBetween: 20,
			pagination: {
				el: ".about__slider-pagination",
				type: 'bullets',
				clicable: true,
			},
			navigation: {
				nextEl: '.about__next',
				prevEl: '.about__prev',
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
		SwiperAbout.on('slideChange', function () {
			let slideNum = SwiperAbout.activeIndex + 1
			document.querySelector('.about__pagination-arrow').setAttribute('data-position', slideNum)
		});
	};
	sliderAbout()


	// about pagination 
	document.querySelectorAll('.about__pagination').forEach(wrapper => {
		let arrow = wrapper.querySelector('.about__pagination-arrow')
		wrapper.querySelectorAll('.about__pagination-item').forEach(item => {
			let slideNum = item.getAttribute('data-position')
			item.addEventListener('click', (e) => {
				arrow.setAttribute('data-position', slideNum)
				SwiperAbout.slideTo(slideNum - 1)
			})
		})
	})


	// phone mask
	document.querySelectorAll('[type="tel"]').forEach(el => {
		let mask = IMask(el, { mask: '+{7}(000)000-00-00' })
	})


	// header menu btn
	document.querySelectorAll('.header__menu-btn').forEach(btn => {
		btn.addEventListener('click', (e) => {
			document.querySelector('body').classList.toggle('header-open')
		})
	})

	document.querySelectorAll('.nav__link').forEach(btn => {
		btn.addEventListener('click', (e) => {
			document.querySelector('body').classList.remove('header-open')
		})
	})


	// accordion
	document.querySelectorAll('.accordion').forEach(accordion => {
		let itemArr = accordion.querySelectorAll('.accordion__item')
		itemArr.forEach(item => {

			let btn = item.querySelector('.accordion__btn')
			let body = item.querySelector('.accordion__body')
			item.closest('.accordion__item_open') ? body.style.maxHeight = item.scrollHeight + 'px' : body.style.maxHeight = 0

			btn.addEventListener('click', (e) => {
				if (!item.closest('.accordion__item_open')) {
					item.classList.add('accordion__item_open')
					body.style.maxHeight = item.scrollHeight + 'px'
				} else {
					item.classList.remove('accordion__item_open')
					body.style.maxHeight = 0
				}
			})
		})
	})


	// catalog menu btn
	document.querySelectorAll('.catalog__filter-btn').forEach(btn => {
		btn.addEventListener('click', (e) => {
			document.querySelector('.catalog').classList.toggle('catalog_menu-open')
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
		{ balloonContent: 'ул. Тестовская, д.10', },
		{ iconColor: '#c52c18' });

	myMap.geoObjects.add(myPlacemark)

	if (window.innerWidth < 1023) {
		myMap.behaviors.disable(['drag', 'rightMouseButtonMagnifier']);
		//  - drag - перемещение карты при нажатой левой кнопки мыши;
		//  - magnifier.rightButton - увеличение области, выделенной правой кнопкой мыши.
	}
}

window.onload = () => {
	ymaps.ready(() => {
		initMap([55.751801, 37.532646], 'map')
	})
}


