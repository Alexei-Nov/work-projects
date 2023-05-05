document.addEventListener('DOMContentLoaded', function () {

	//------------slider loop-----------------------

	let sliderLoop = () => {
		let SwiperLoop = new Swiper('.loop__slider', {
			slidesPerView: 3,
			spaceBetween: 30,

			breakpoints: {
				0: {
					slidesPerView: 1.17,
					spaceBetween: 15,
				},
				769: {
					slidesPerView: 2.3,
				},
				1025: {
					slidesPerView: 3,
				}
			}
		});
	};
	sliderLoop();



	//------------slider example-----------------------

	let sliderExample = () => {
		let SwiperExample = new Swiper('.example__slider', {
			slidesPerView: 1,
			spaceBetween: 30,
			// pagination: {
			// 	el: ".collection-pagination",
			// 	type: "fraction"
			// },
			scrollbar: {
				el: '.example-scrollbar',
				draggable: true,
			},
			// breakpoints: {
			// 	0: {
			// 		slidesPerView: 1,
			// 	},
			// 	1251: {
			// 		slidesPerView: 1,
			// 	}
			// }
		});
	};
	sliderExample();


	//------------subslider example-----------------------

	let sliderExampleSub = () => {
		let SwiperExampleSub = new Swiper('.example__subslider', {
			slidesPerView: 1,
			spaceBetween: 30,
			// observer: true,
			// observeSlideChildren: true,
			nested: true,

			navigation: {
				nextEl: '.example-next',
				prevEl: '.example-prev',
			},
			// breakpoints: {
			// 	0: {
			// 		slidesPerView: 1,
			// 	},
			// 	1251: {
			// 		slidesPerView: 1,
			// 	}
			// }
		});
	};
	sliderExampleSub();



	//------------slider about company-----------------------

	let sliderAboutCompany = () => {
		let SwiperAboutCompany = new Swiper('.about-company__slider', {
			slidesPerView: 1,
			spaceBetween: 30,

			observer: true,
			observeSlideChildren: true,
			navigation: {
				nextEl: '.about-company-next',
				prevEl: '.about-company-prev',
			},
			// breakpoints: {
			// 	0: {
			// 		slidesPerView: 1,
			// 	},
			// 	1251: {
			// 		slidesPerView: 1,
			// 	}
			// }
		});
	};
	sliderAboutCompany();


	//------------slider photo-----------------------

	let sliderPhoto = () => {
		let SwiperPhoto = new Swiper('.photo__slider', {
			slidesPerView: 2,
			spaceBetween: 30,
			loop: true,
			breakpoints: {
				0: {
					slidesPerView: 1,
					spaceBetween: 8,
				},
				769: {
					slidesPerView: 2,
				}
			}
		});
	};
	sliderPhoto();

	//------------slider project-item-----------------------

	let sliderProject = () => {
		let SwiperProject = new Swiper('.project-item__slider', {
			slidesPerView: 2,
			spaceBetween: 20,
			direction: "vertical",
			navigation: {
				nextEl: '.project-item-next',
				prevEl: '.project-item-prev',
			},
			watchSlidesProgress: true,
			freeMode: true,
			breakpoints: {
				0: {
					direction: "horizontal",
					slidesPerView: 1,
					spaceBetween: 8,
				},
				769: {
					direction: "horizontal",
					slidesPerView: 2,
					spaceBetween: 8,
				},
				1201: {
					direction: "vertical",
					slidesPerView: 4,
					spaceBetween: 20,
				}
			},

		});

		let SwiperProject2 = new Swiper('.project-item__slider-2', {
			slidesPerView: 1,
			spaceBetween: 20,
			navigation: {
				nextEl: '.project-item-next',
				prevEl: '.project-item-prev',
			},
			thumbs: {
				swiper: SwiperProject,
			},
			// breakpoints: {
			// 	0: {
			// 		direction: "horizontal",
			// 		slidesPerView: 1,
			// 		spaceBetween: 8,
			// 	},
			// 	769: {
			// 		direction: "horizontal",
			// 		slidesPerView: 2,
			// 		spaceBetween: 8,
			// 	},
			// 	1201: {
			// 		direction: "vertical",
			// 		slidesPerView: 4,
			// 		spaceBetween: 20,
			// 	}
			// }
		});
	};
	sliderProject();


	//------------slider contacts-----------------------

	let sliderContacts = () => {
		let SwiperContacts = new Swiper('.contacts__slider', {
			slidesPerView: 1,
			spaceBetween: 30,
			navigation: {
				nextEl: '.contacts-next',
				prevEl: '.contacts-prev',
			},
			// breakpoints: {
			// 	0: {
			// 		slidesPerView: 1,
			// 	},
			// 	769: {
			// 		slidesPerView: 2,
			// 	},
			// 	1201: {
			// 		slidesPerView: 4,
			// 	}
			// }
		});
	};
	sliderContacts();

	//------------slider about nest -----------------------

	let sliderAboutNest = () => {
		let SwiperAboutNest = new Swiper('.about-nest__slider', {
			slidesPerView: 1,
			spaceBetween: 30,
			navigation: {
				nextEl: '.about-nest-next',
				prevEl: '.about-nest-prev',
			},
			// breakpoints: {
			// 	0: {
			// 		slidesPerView: 1,
			// 	},
			// 	769: {
			// 		slidesPerView: 2,
			// 	},
			// 	1201: {
			// 		slidesPerView: 4,
			// 	}
			// }
		});
	};
	sliderAboutNest();

	//------------slider license -----------------------


	let sliderLicense = () => {
		let SwiperLicense = new Swiper('.license__slider', {
			slidesPerView: 4,
			spaceBetween: 30,
			loop: true,
			navigation: {
				nextEl: '.license-next',
				prevEl: '.license-prev',
			},
			breakpoints: {
				0: {
					slidesPerView: 3,
					// effect: 'coverflow',
					// coverflowEffect: {
					// 	rotate: 0,
					// 	slideShadows: false,
					// },
				},
				769: {
					slidesPerView: 3,
				},
				1401: {
					slidesPerView: 4,
				}
			}
		});
	};

	let sliderLicenseMobile = () => {
		let SwiperLicenseMobile = new Swiper('.license__slider', {
			slidesPerView: 4,
			spaceBetween: -100,
			loop: true,
			navigation: {
				nextEl: '.license-next',
				prevEl: '.license-prev',
			},
			effect: 'coverflow',
			coverflowEffect: {
				rotate: 0,
				slideShadows: false,
				depth: 100,
				scale: 0.58,
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
					loop: false,
				},

				769: {
					slidesPerView: 3,
				},
				1401: {
					slidesPerView: 4,
				}
			}
		});
	};

	if (window.innerWidth > 768) {
		sliderLicense();
	} else {
		sliderLicenseMobile();
	}

	//-----------------------file btn--------------------------

	if (document.querySelector('.form__load-btn')) {
		for (let i = 0; i < document.querySelectorAll('.form__load-btn').length; i++) {
			document.querySelectorAll('.form__load-btn')[i].addEventListener('click', () => {
				document.querySelectorAll('.file-btn')[i].click()
			})
			document.querySelectorAll('.file-btn')[i].addEventListener('change', () => {
				let loadBtn = document.querySelectorAll('.file-btn')[i].closest('.form__load-btn-wrapper')
				let loadBtnWidth = getComputedStyle(loadBtn).width.split('').slice(0, -2).join('')
				let charCount = Math.floor(loadBtnWidth / 16)

				if (window.innerWidth < 570 && document.querySelectorAll('.file-btn')[i].closest('.form__load-btn-wrapper_wide')) {
					charCount = Math.floor(loadBtnWidth / 11)
				}
				else if (document.querySelectorAll('.file-btn')[i].closest('.form__load-btn-wrapper_wide')) {
					charCount = Math.floor(loadBtnWidth / 15)
				};

				if (document.querySelector('.file-btn').files[0].name.length - 4 > charCount) {
					let name = document.querySelector('.file-btn').files[0].name.split('').slice(0, charCount).join('')
					document.querySelectorAll('.form__load-btn')[i].innerHTML = name + '...'
					return
				}
				document.querySelectorAll('.form__load-btn')[i].innerHTML = document.querySelector('.file-btn').files[0].name
			})
		}
	}

	//-------------------accordion------------------------------

	function initAcc(elem, option) {
		document.addEventListener('click', function (e) {
			if (!e.target.matches(elem + ' .a-btn')) {
				if (document.querySelector(`${elem} > .active`)) {
					document.querySelector(`${elem} > .active`).classList.remove('active')
				}
				return;
			}
			else {
				if (!e.target.parentElement.classList.contains('active')) {
					if (option == true) {
						var elementList = document.querySelectorAll(elem + ' .a-container');
						Array.prototype.forEach.call(elementList, function (e) {
							e.classList.remove('active');
						});
					}
					e.target.parentElement.classList.add('active');
				} else {
					e.target.parentElement.classList.remove('active');
				}
			}
		});
	}

	initAcc('.accordion', true);

	//------------------tab----------------------------

	if (document.querySelector('.tab__header')) {
		for (let i = 0; i < document.querySelectorAll('.tab__link').length; i++) {
			document.querySelectorAll('.tab__link')[i].addEventListener('click', tab)
		}
	}

	function tab(e) {
		let currentTab = e.target.closest('.tab')

		if (!e.target.closest('.tab__link-active')) {
			e.target.closest('.tab').querySelector('.tab__link-active').classList.remove('tab__link-active')
			e.target.classList.add('tab__link-active')
			sliderAboutCompany();
		}

		for (let i = 0; i < currentTab.querySelectorAll('.tab__link').length; i++) {
			if (currentTab.querySelectorAll('.tab__link')[i].closest('.tab__link-active')) {
				e.target.closest('.tab').querySelector('.tab__item-active').classList.remove('tab__item-active')
				currentTab.querySelectorAll('.tab__item')[i].classList.add('tab__item-active')
			}

		}
	}

	//---------------nav-----------------------------

	if (window.innerWidth < 1024) {
		document.querySelector('.nav-panel__wrapper').addEventListener('click', navMenu)
		document.querySelector('.header__menu-btn').addEventListener('click', navMenu)
	}

	function navMenu(e) {
		if (e.target.closest('.header__menu-btn')) {
			if (!e.target.closest('.nav-active')) {
				document.querySelector('.nav-panel__wrapper').classList.add('nav-active')
				document.querySelector('.header__menu-btn').classList.add('nav-active')
				document.body.style.overflow = 'hidden'
			} else {
				document.querySelector('.nav-panel__wrapper').classList.remove('nav-active')
				document.querySelector('.header__menu-btn').classList.remove('nav-active')
				document.body.style.overflow = 'auto'
			}
		}
		else if (e.target.closest('.nav-panel__item > a') || !e.target.closest('.nav-panel__body')) {
			document.querySelector('.nav-panel__wrapper').classList.remove('nav-active')
			document.querySelector('.header__menu-btn').classList.remove('nav-active')
			document.body.style.overflow = 'auto'
		}


	}



	//-------------gift replace------------------------

	if (document.querySelector('.catalog') && document.querySelector('.gift') && window.innerWidth < 661) {
		let newEl = document.createElement('section')
		newEl.innerHTML = document.querySelector('.gift').innerHTML
		document.querySelector('.gift').remove()
		newEl.classList.add('gift')
		document.querySelector('.catalog__item:nth-child(6)').after(newEl)
	}

	//---------phone mask-----------

	if (document.querySelectorAll('.phone-mask')) {
		for (let i = 0; i < document.querySelectorAll('.phone-mask').length; i++) {
			eval(`let phoneMask${i} = IMask(document.querySelectorAll('.phone-mask')[${i}], { mask: '+{7}(000)000-00-00' }); `)
		}
	}

	//------------------project item slider--------------------------------

	// if (document.querySelector('.project-item__slider')) {
	// 	document.querySelector('.project-item__slider').addEventListener('click', sliderBig)

	// 	function sliderBig(e) {
	// 		if (e.target.closest('.project-item__slide')) {
	// 			let img = e.target.src;
	// 			document.querySelector('.project-item__img-big > a > img').src = img
	// 			document.querySelector('.project-item__img-big > a').href = img
	// 		}
	// 	}

	// }
});




var myMap;
ymaps.ready(init);

function init() {
	myMap = new ymaps.Map('map', {
		center: [59.903963, 30.322237],
		zoom: 15
	}, {
		searchControlProvider: 'yandex#search'
	});

	myPlacemark = new ymaps.Placemark([59.903963, 30.322237],
		{ balloonContent: 'Дворянское гнездо' },
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