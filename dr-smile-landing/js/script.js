document.addEventListener('DOMContentLoaded', function () {

	//------------slider staff-----------------------

	let sliderStaff = () => {
		let swiperStaff = new Swiper('.staff__slider', {
			slidesPerView: 1,
			spaceBetween: 30,
			loop: true,
			pagination: {
				el: ".staff__pagination",
				type: "bullets",
				clickable: true,
			},
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
				waitForTransition: false,
			},
			// breakpoints: {
			// 	0: {
			// 		slidesPerView: 1,
			// 	},
			// 	769: {
			// 		slidesPerView: 2,
			// 	},
			// 	1201: {
			// 		slidesPerView: 3,
			// 	},
			// 	1501: {
			// 		slidesPerView: 4,
			// 	}
			// }
		});
	};
	sliderStaff();

	//------------slider review-----------------------

	let sliderReview = () => {
		let swiperReview = new Swiper('.review__slider', {
			slidesPerView: 3,
			spaceBetween: 30,
			autoHeight: true,
			loop: true,
			pagination: {
				el: ".review__pagination",
				type: "bullets",
				clickable: true,
			},

			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				769: {
					slidesPerView: 2,
				},
				1025: {
					slidesPerView: 3,
				},
			}
		});
	};
	sliderReview();

	//---------phone mask---------------------------------------

	if (document.querySelector('.phone-mask')) {
		document.querySelectorAll('.phone-mask').forEach(el => {
			let mask = IMask(el, { mask: '+{7}(000)000-00-00' })
		})
	}

	//--------------------onload animations-------------------------

	window.onload = () => {
		document.querySelector('.body-wrapper').classList.add('onload-animation')
	}



	let onePercentOfDocumentHeight = (document.body.scrollHeight - window.innerHeight) / 100

	document.addEventListener("scroll", (e) => {
		//--------------------- on view animation------------------------
		if (document.querySelector('.on-view') && document.querySelector('.on-view').offsetTop < window.scrollY + 600) {
			document.querySelector('.on-view').classList.remove('on-view')
		}

		//--------------------------progress bar--------------------------
		document.querySelector('.progress-bar').style.width = `${window.scrollY / onePercentOfDocumentHeight}%`

		//--------------------------scroll btn-----------------------------
		if (window.scrollY > 600) {
			document.querySelector('.scroll-btn').classList.add('scroll-btn__active')
		} else {
			if (document.querySelector('.scroll-btn__active')) {
				document.querySelector('.scroll-btn').classList.remove('scroll-btn__active')
			}
		}
	})


	if (document.querySelector('.scroll-btn')) {
		document.querySelector('.scroll-btn').addEventListener('click', (e) => {
			window.scrollTo({
				top: 0,
				left: 0,
				behavior: 'smooth'
			})
		})
	}

	//---------------------animation delay------------------------------
	document.querySelectorAll('.advantages__item').forEach((el, index) => {
		el.style.transitionDelay = `${index / 5}s`
	})

	//----------------------nav replace----------------------------------
	if (window.innerWidth < 1024) {
		let clone = document.createElement('div')
		clone.innerHTML = document.querySelector('.header__nav').innerHTML
		document.querySelector('.header__nav').remove()
		clone.classList.add('header__nav')
		document.querySelector('.header__panel-body').prepend(clone)
	}


	//--------------------------------menu open---------------------------
	document.querySelector('.header__menu-btn').addEventListener('click', menu)
	document.querySelector('.header__cross').addEventListener('click', menu)
	document.querySelector('.header__panel').addEventListener('click', (e) => {
		if (!e.target.closest('.header__panel-body') ||
			e.target.closest('.header__nav-item') ||
			e.target.closest('.header__panel-link') ||
			e.target.closest('.header__panel-btn')) {
			menu(e)
		} else {
			return
		}
	})

	function menu(e) {
		if (!e.target.closest('.header-opened')) {
			document.querySelector('.header').classList.add('header-opened')
			document.body.style.overflow = 'hidden'
		} else {
			document.querySelector('.header').classList.remove('header-opened')
			document.body.style.overflow = 'auto'
		}
	}




	//---------------smooth anchor scroll---------------------------------
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

	//-----------------------founder img replace-----------------------------
	if (window.innerWidth < 768) {
		let clone = document.createElement('div')
		clone.innerHTML = document.querySelector('.founder__img').innerHTML
		document.querySelector('.founder__img').remove()
		clone.classList.add('founder__img', 'br-20')
		document.querySelector('.founder__subtitle').after(clone)
	}
});



var myMap;
ymaps.ready(init);

function init() {
	myMap = new ymaps.Map('map', {
		center: [55.76, 37.64], // Москва
		zoom: 13
	}, {
		searchControlProvider: 'yandex#search'
	});

	myPlacemark = new ymaps.Placemark([55.770102, 37.664554],
		{ balloonContent: 'Доктор Смайл' },
		{ iconLayout: 'default#image', });

	myPlacemark2 = new ymaps.Placemark([55.742093, 37.632134],
		{ balloonContent: 'Доктор Смайл' },
		{ iconLayout: 'default#image', });

	myMap.geoObjects
		.add(myPlacemark)
		.add(myPlacemark2);

	if (window.innerWidth < 1023) {
		myMap.behaviors
			.disable(['drag', 'rightMouseButtonMagnifier']);
		//  - drag - перемещение карты при нажатой левой кнопки мыши;
		//  - magnifier.rightButton - увеличение области, выделенной правой кнопкой мыши.
	}
}
