document.addEventListener('DOMContentLoaded', function () {

	//------------slider 1-----------------------
	let slider1 = () => {
		let Swiper1 = new Swiper('.slider-1__container', {
			slidesPerView: 2,
			spaceBetween: 30,
			// loop: true,
			pagination: {
				el: ".slider-1-pagination",
				type: "bullets",
				clickable: true,
			},
			navigation: {
				nextEl: '.slider-1-next',
				prevEl: '.slider-1-prev',
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				1251: {
					slidesPerView: 2,
				}
			}
		});
	};
	slider1();

	//------------slider 2----------------------
	let slider2 = () => {
		let Swiper2 = new Swiper('.slider-2__container', {
			slidesPerView: 3,
			spaceBetween: 30,
			// loop: true,
			pagination: {
				el: ".slider-2-pagination",
				type: "bullets",
				clickable: true,
			},
			navigation: {
				nextEl: '.slider-2-next',
				prevEl: '.slider-2-prev',
			},

			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				769: {
					slidesPerView: 2,
				},
				1001: {
					slidesPerView: 3,
				}
			}
		});
	};
	slider2();

	//------------slider 3----------------------
	let slider3 = () => {
		let Swiper3 = new Swiper('.slider-3__container', {
			slidesPerView: 'auto',
			spaceBetween: 30,
			loop: true,
			pagination: {
				el: ".slider-3-pagination",
				type: "bullets",
				clickable: true,
			},
			navigation: {
				nextEl: '.slider-3-next',
				prevEl: '.slider-3-prev',
			},

			// breakpoints: {
			// 	0: {
			// 		slidesPerView: 1,
			// 	},
			// 	571: {
			// 		slidesPerView: 'auto',
			// 		centeredSlides: true,
			// 	},
			// 	1201: {
			// 		slidesPerView: 2,
			// 		centeredSlides: false,
			// 	}
			// }
		});
	};
	slider3();

	//------------slider 4----------------------
	let slider4 = () => {
		let Swiper4 = new Swiper('.slider-4__container', {
			slidesPerView: 4,
			spaceBetween: 95,
			loop: true,
			pagination: {
				el: ".slider-4-pagination",
				type: "bullets",
				clickable: true,
			},
			navigation: {
				nextEl: '.slider-4-next',
				prevEl: '.slider-4-prev',
			},

			breakpoints: {
				0: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				1025: {
					slidesPerView: 4,
				}
			}
		});
	};
	slider4();

	//------------slider 5-----------------------
	let slider5 = () => {
		let Swiper5 = new Swiper('.slider-5__container', {
			slidesPerView: 2,
			spaceBetween: 30,
			// loop: true,
			pagination: {
				el: ".slider-5-pagination",
				type: "bullets",
				clickable: true,
			},
			navigation: {
				nextEl: '.slider-5-next',
				prevEl: '.slider-5-prev',
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				571: {
					slidesPerView: 1,
				},
				1025: {
					slidesPerView: 2,
				}
			}
		});
	};
	slider5();


	//------------slider line-----------------------
	let sliderLine = () => {
		let SwiperLine = new Swiper('.line-adv__slider', {
			slidesPerView: 4,
			spaceBetween: 30,
			pagination: {
				el: ".line-adv-pagination",
				type: "bullets",
				clickable: true,
			},

			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				570: {
					slidesPerView: 2,
				},
				1025: {
					slidesPerView: 4,
				}
			}
		});
	};
	sliderLine();


	//------------slider license-----------------------
	let sliderLicense = () => {
		let SwiperLicense = new Swiper('.license__slider', {
			slidesPerView: 'auto',
			spaceBetween: 30,
			pagination: {
				el: ".license-pagination",
				type: "bullets",
				clickable: true,
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
				1024: {
					slidesPerView: 2,
				},
				1401: {
					slidesPerView: 3,
				}
			}
		});
	};
	sliderLicense();




	//------------phone mask--------------------------------
	if (document.querySelectorAll('.phone-mask')) {
		for (let i = 0; i < document.querySelectorAll('.phone-mask').length; i++) {
			eval(`let phoneMask${i} = IMask(document.querySelectorAll('.phone-mask')[${i}], { mask: '+{7}(000)000-00-00' }); `)
		}
	}

	//------------footer qr-code replace------------------------

	window.innerWidth < 768 ? replaceQr() : false


	function replaceQr() {
		let newEl = document.createElement('div')
		newEl.innerHTML = document.querySelector('.footer__qr-div').innerHTML
		document.querySelector('.footer__qr-div').remove()
		newEl.classList.add('footer__qr-div')
		document.querySelector('.footer__nastart').before(newEl)

		let newLine = document.createElement('div')
		newLine.innerHTML = document.querySelector('.footer__copy').innerHTML
		document.querySelector('.footer__copy').remove()
		newLine.classList.add('footer__copy')

		document.querySelector('.footer__nastart').before(newLine)
	}

	//----------------------nav menu---------------------------------

	document.querySelector('.nav__menu-btn').addEventListener('click', navMenu)
	for (let i = 0; i < document.querySelectorAll('.nav-submenu').length; i++) {
		document.querySelectorAll('.nav-submenu')[i].addEventListener('click', navSubmenu)
	}

	for (let i = 0; i < document.querySelectorAll('.nav__link').length; i++) {
		document.querySelectorAll('.nav__link')[i].addEventListener('click', navLink)
	}

	for (let i = 0; i < document.querySelectorAll('.nav__dropdown > li').length; i++) {
		document.querySelectorAll('.nav__dropdown > li')[i].addEventListener('click', navMenu)
	}

	function navMenu() {
		if (document.querySelector('.submenu-opened')) {
			document.querySelector('.submenu-opened').classList.remove('submenu-opened')
			document.querySelector('.sub').classList.remove('sub')
		}

		if (!document.querySelector('.header').closest('.opened')) {
			document.querySelector('.header').classList.add('opened')
			document.body.style.overflowY = 'hidden'
		} else {
			document.querySelector('.header').classList.remove('opened')
			document.body.style.overflowY = 'auto'
		}
	}

	function navSubmenu(e) {
		if (!e.target.parentElement.parentElement.closest('.submenu-opened')) {
			e.target.parentElement.parentElement.classList.add('submenu-opened')
			e.target.parentElement.classList.add('sub')

		} else {
			e.target.parentElement.parentElement.classList.remove('submenu-opened')
			e.target.parentElement.classList.remove('sub')
		}
	}

	function navLink(e) {
		if (e.target.closest('.nav-submenu')) {
			return
		} else {
			navMenu()
		}

	}

	//--------------------tile dropdown---------------------------

	if (window.innerWidth < 768) {
		document.querySelector('.tile__item_list').addEventListener('click', tileDropdown)
	}

	function tileDropdown(e) {
		if (!e.target.closest('.list-active')) {
			document.querySelector('.tile__item_list').classList.add('list-active')
		} else {
			document.querySelector('.tile__item_list').classList.remove('list-active')
		}
	}

});




var myMap;
ymaps.ready(init);

function init() {
	myMap = new ymaps.Map('map', {
		center: [59.923414, 30.352888], // СПб
		zoom: 18
	}, {
		searchControlProvider: 'yandex#search'
	});

	myPlacemark = new ymaps.Placemark([59.923414, 30.352888],
		{ balloonContent: 'Клиника ЕС' },
		{ iconLayout: 'default#image', });


	myMap.geoObjects
		.add(myPlacemark)

	if (window.innerWidth < 1023) {
		myMap.behaviors
			.disable(['drag', 'rightMouseButtonMagnifier']);
		//  - drag - перемещение карты при нажатой левой кнопки мыши;
		//  - magnifier.rightButton - увеличение области, выделенной правой кнопкой мыши.
	}
}