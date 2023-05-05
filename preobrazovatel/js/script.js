document.addEventListener('DOMContentLoaded', function () {
	//------------slider partner-----------------------

	let sliderPartner = () => {
		let swiperPartner = new Swiper('.partner-slider__container', {
			slidesPerView: 5,
			spaceBetween: 40,
			loop: true,
			navigation: {
				nextEl: '.partner-next',
				prevEl: '.partner-prev',
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				570: {
					slidesPerView: 2,
				},
				769: {
					slidesPerView: 3,
				},
				1025: {
					slidesPerView: 4,
				},
				1201: {
					slidesPerView: 5,
				}
			}
		});
	};
	sliderPartner();


	//------------slider right-----------------------

	let sliderRight = () => {
		let swiperRight = new Swiper('.slider-right', {
			slidesPerView: 'auto',
			spaceBetween: -10,
			scrollbar: {
				el: ".slider-right-scrollbar ",
				draggable: true,
			},

			// breakpoints: {
			// 	0: {
			// 		slidesPerView: 1.17,
			// 		spaceBetween: 15,
			// 	},
			// 	769: {
			// 		slidesPerView: 2.3,
			// 	},
			// 	1025: {
			// 		slidesPerView: 3,
			// 	}
			// }
		});
	};
	sliderRight();

	//------------slider left-----------------------

	let sliderLeft = () => {
		let swiperLeft = new Swiper('.slider-left', {
			slidesPerView: 'auto',
			spaceBetween: -10,
			scrollbar: {
				el: ".slider-left-scrollbar ",
				draggable: true,
			},
			initialSlide: 2000,

			// breakpoints: {
			// 	0: {
			// 		initialSlide: 0,
			// 	},
			// 	769: {
			// 		initialSlide: 0,
			// 	},
			// 	1025: {
			// 	}
			// }
		});
	};
	sliderLeft();


	//---------------smooth scroll---------------------------------

	let currentAttribute
	let blockPosition

	document.querySelectorAll('.anchor').forEach((el => {
		el.addEventListener('click', (e) => {
			e.preventDefault()
			currentAttribute = el.getAttribute('data-link')
			blockPosition = document.getElementById(currentAttribute).offsetTop

			window.scroll({
				top: blockPosition,
				left: 0,
				behavior: 'smooth'
			});
		})
	}))

	//-----------------replace title-----------------------------------

	if (window.innerWidth < 1024) {
		document.querySelectorAll('.replace-title').forEach(el => {
			let clone = el.querySelector('.small-title').cloneNode(true)
			el.appendChild(clone);
			el.querySelector('.small-title').remove()
			clone.classList.add('small-title')
		})
	}

	//----------------menu---------------------------------------

	document.querySelector('.header__menu-btn').addEventListener('click', (e) => {
		if (!e.target.closest('.menu-open')) {
			document.querySelector('.header').classList.add('menu-open')
		} else {
			document.querySelector('.header').classList.remove('menu-open')
		}
	})

	document.addEventListener('click', (e) => {
		if (!e.target.closest('.header__menu-btn') && document.querySelector('.menu-open')) {
			document.querySelector('.menu-open').classList.remove('menu-open')
		}
	})


	//-----------------phone mask---------------------------
	if (document.querySelector('.phone-mask')) {
		document.querySelectorAll('.phone-mask').forEach(el => {
			let mask = IMask(el, { mask: '+{7}(000)000-00-00' })
		})
	}

});




var myMap;
ymaps.ready(init);



function init() {

	if (window.innerWidth < 1400) {
		myMap = new ymaps.Map('map', {
			center: [59.922634, 30.410515], // СПб
			zoom: 18
		}, {
			searchControlProvider: 'yandex#search'
		});
	} else {
		myMap = new ymaps.Map('map', {
			center: [59.922634, 30.408515], // СПб
			zoom: 18
		}, {
			searchControlProvider: 'yandex#search'
		});
	}

	myPlacemark = new ymaps.Placemark([59.922634, 30.410515],
		{ balloonContent: 'ЭнергоРегионСервис' },
		{ iconLayout: 'default#image', });

	myMap.geoObjects
		.add(myPlacemark)

	if (window.innerWidth < 1024) {
		myMap.behaviors
			.disable(['drag', 'rightMouseButtonMagnifier']);
		//  - drag - перемещение карты при нажатой левой кнопки мыши;
		//  - magnifier.rightButton - увеличение области, выделенной правой кнопкой мыши.
	}
}


