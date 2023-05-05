document.addEventListener('DOMContentLoaded', function () {
	//------------slider main-----------------------

	let sliderMain = () => {
		let SwiperMain = new Swiper('.main-page__slider', {
			slidesPerView: 1,
			spaceBetween: 30,
			loop: true,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			// allowTouchMove: false,

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
	sliderMain();

	//-------------- slider offer--------------------

	let sliderOffer = () => {
		let SwiperOffer = new Swiper('.offer__slider', {
			slidesPerView: 1,
			spaceBetween: 30,
			loop: true,
			autoplay: {
				delay: 3500,
				disableOnInteraction: false,
			},
			pagination: {
				el: ".offer-pagination",
				type: "bullets",
				clickable: true,
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
	sliderOffer();

	//---------------------slider experts-------------------------

	let sliderExp = () => {
		let SwiperSubExp = new Swiper('.expert__subslider', {
			slidesPerView: 4,
			spaceBetween: 30,
			freeMode: true,

			watchSlidesProgress: true,

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
		let SwiperExp = new Swiper('.expert__slider', {
			slidesPerView: 1,
			spaceBetween: 30,
			allowTouchMove: false,
			autoHeight: true,
			thumbs: {
				swiper: SwiperSubExp,
			},
			pagination: {
				el: ".expert-pagination",
				type: "bullets",
				clickable: true,
			},
			breakpoints: {
				0: {
					allowTouchMove: true,
				},
				1025: {
					allowTouchMove: false,
				}
			}
		});
	};
	sliderExp();


	//-------------- slider patient--------------------

	let sliderPatient = () => {
		let SwiperPatient = new Swiper('.patient__slider', {
			slidesPerView: 3,
			spaceBetween: 30,
			pagination: {
				el: ".patient-pagination",
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
				}
			}
		});
	};
	sliderPatient();

	//-------------- slider review--------------------

	let sliderReview = () => {
		let SwiperReview = new Swiper('.review__slider', {
			slidesPerView: 3,
			spaceBetween: 30,
			pagination: {
				el: ".review-pagination",
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
				}
			}
		});
	};
	sliderReview();

	//-------------- slider license--------------------

	let sliderLicense = () => {
		let SwiperLicense = new Swiper('.license__slider', {
			slidesPerView: 4,
			spaceBetween: 30,
			breakpoints: {
				0: {
					slidesPerView: 2.4,
					spaceBetween: 20,
					freeMode: true,
				},
				570: {
					slidesPerView: 3,
					spaceBetween: 20,
					freeMode: true,

				},
				769: {
					slidesPerView: 4,
				},
				1025: {
					slidesPerView: 3,
				},
				1401: {
					slidesPerView: 4,
				}
			}
		});
	};
	sliderLicense();

	//-------------- slider advantage--------------------

	let sliderAdvantge = () => {
		let SwiperAdvantage = new Swiper('.advantage__slider', {
			slidesPerView: 3,
			spaceBetween: 30,
			pagination: {
				el: ".advantage-pagination",
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
				1201: {
					slidesPerView: 3,
				}
			}
		});
	};
	sliderAdvantge();

	//-------------- slider stage--------------------

	let sliderStage = () => {
		let SwiperStage = new Swiper('.stage__slider', {
			slidesPerView: 3,
			spaceBetween: 50,
			autoHeight: true,
			pagination: {
				el: ".stage-pagination",
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
				}
			}
		});
	};

	if (window.innerWidth < 1024) {
		sliderStage();
	}


	//------------------h2 span tag adder -------------------------

	for (let i = 0; i < document.querySelectorAll('.h2').length; i++) {
		let titleContent = document.querySelectorAll('.h2')[i].innerHTML
		let splitContent = titleContent.split(' ')
		splitContent.splice(-1, 0, '<span>')
		splitContent.push('</span>')
		let resultContent = splitContent.join(' ')
		document.querySelectorAll('.h2')[i].innerHTML = resultContent
	}

	//----------nav menu -------------------------------------

	document.querySelector('.header__menu-btn').addEventListener('click', navMenu)

	for (let i = 0; i < document.querySelectorAll('.nav-panel__item').length; i++) {
		document.querySelectorAll('.nav-panel__item')[i].addEventListener('click', navMenu)
	}

	function navMenu(e) {

		if (!document.querySelector('.header').closest('.nav-opened')) {
			document.querySelector('.header').classList.add('nav-opened')
			document.body.style.overflow = 'hidden'
		} else {
			document.querySelector('.header').classList.remove('nav-opened')
			document.body.style.overflow = 'auto'

		}
	}

	//----------read-more -------------------------------------

	for (let i = 0; i < document.querySelectorAll('.read-more__btn').length; i++) {
		document.querySelectorAll('.read-more__btn')[i].addEventListener('click', () => {
			document.querySelectorAll('.read-more__wrapper')[i].classList.add('read-more')
		})
	}
});



var myMap;
ymaps.ready(init);

function init() {
	myMap = new ymaps.Map('map', {
		center: [60.034239, 30.246250], // СПб
		zoom: 18
	}, {
		searchControlProvider: 'yandex#search'
	});

	myPlacemark = new ymaps.Placemark([60.034239, 30.246300],
		{ balloonContent: 'Детское отделение "Стомазаврики"' },
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


