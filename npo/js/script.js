document.addEventListener('DOMContentLoaded', function () {

	//------------slider gallery-----------------------

	let sliderGallery = () => {
		let swiperGallery = new Swiper('.gallery__slider', {
			slidesPerView: 1,
			spaceBetween: 30,
			loop: true,
			pagination: {
				el: ".gallery__pagination",
				type: "bullets",
				clickable: true,
			},
			// navigation: {
			//     nextEl: '.gallery__next',
			//     prevEl: '.gallery__prev',
			// },
			// breakpoints: {
			// 	0: {
			// 		slidesPerView: 1,
			// 	},
			// 	570: {
			// 		slidesPerView: 2,
			// 	},
			// 	769: {
			// 		slidesPerView: 4,
			// 	}
			// }
		});

	};
	sliderGallery();

	//------------slider review-----------------------

	let sliderReview = () => {


		let SwiperReview = new Swiper('.review__slider', {
			slidesPerView: 1,
			spaceBetween: 30,
			loop: true,
			watchSlidesProgress: true,
			allowTouchMove: false,
		});
		let SwiperSubReview = new Swiper('.review__subslider', {
			watchSlidesProgress: true,
			slidesPerView: 7,
			spaceBetween: 30,
			centeredSlides: true,
			loop: true,
			thumbs: {
				swiper: SwiperReview,
			},
			pagination: {
				el: ".review__pagination",
				type: "bullets",
				clickable: true,
			},
			navigation: {
				nextEl: '.review__next',
				prevEl: '.review__prev',
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				571: {
					slidesPerView: 3,
				},
				1025: {
					slidesPerView: 5,
				},
				1301: {
					slidesPerView: 7,
				}
			}
		});
	};
	sliderReview();


	//------------slider cert-----------------------

	let sliderCert = () => {
		let swiperCert = new Swiper('.cert__slider', {
			slidesPerView: 'auto',
			spaceBetween: 30,
			loop: true,
			centeredSlides: true,
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
	sliderCert();

	//------------------------------accordion-----------------------------

	function initAcc(elem, option) {
		document.addEventListener('click', function (e) {
			if (!e.target.closest('.a-btn')) {
				if (document.querySelector(`${elem} > .active`)) {
					document.querySelector(`${elem} > .active`).classList.remove('active')
				}
				return;
			}
			else {
				if (!e.target.closest('.a-container').classList.contains('active')) {
					if (option == true) {
						var elementList = document.querySelectorAll(elem + ' .a-container');
						Array.prototype.forEach.call(elementList, function (e) {
							e.classList.remove('active');
						});
					}
					e.target.closest('.a-container').classList.add('active');
				} else {
					e.target.closest('.a-container').classList.remove('active');
				}
			}
		});
	}

	initAcc('.accordion_v1', true);


	//---------phone mask---------------------------------------

	if (document.querySelector('.phone-mask')) {
		document.querySelectorAll('.phone-mask').forEach(el => {
			let mask = IMask(el, { mask: '+{7}(000)000-00-00' })
		})
	}

	//-----------------------header search -------------------------------

	document.querySelector('.header__search').addEventListener('mouseenter', searchBtn)
	document.querySelector('.header__search').addEventListener('mouseleave', searchBtn)

	function searchBtn(e) {
		if (!e.target.closest('.search-open')) {
			document.querySelector('.header__wrapper').classList.add('search-open')
		} else {
			document.querySelector('.header__wrapper').classList.remove('search-open')
		}
	}

	//-----------------------header submenu--------------------------------



	if (window.innerWidth < 1300) {
		document.querySelectorAll('.nav__item_has-children').forEach(el => {
			el.addEventListener('click', (e) => {
				if (!e.target.closest('.submenu-opened')) {
					e.preventDefault()

					if (document.querySelector('.submenu-opened')) {
						document.querySelectorAll('.submenu-opened').forEach(elem => {
							elem.classList.remove('submenu-opened')
						})
					}
					el.classList.add('submenu-opened')
					console.log(2);
				}
			})
		})
	}


	//-----------------------------header mobile menu-----------------------------

	document.addEventListener('click', menuHide)
	function menuHide(e) {
		if (document.querySelector('.nav-opened') && !e.target.closest('.header__panel') && !e.target.closest('.header__menu-btn')) {
			document.querySelector('.nav-opened').classList.remove('nav-opened')
			if (document.querySelector('.submenu-opened')) {
				document.querySelectorAll('.submenu-opened').forEach(elem => {
					elem.classList.remove('submenu-opened')
				})
			}
		}
	}

	document.querySelector('.header__menu-btn').addEventListener('click', (e) => {
		if (!e.target.closest('.nav-opened')) {
			document.querySelector('.header').classList.add('nav-opened')
			if (window.innerWidth < 570) {
				document.body.style.overflow = 'hidden'
			}
		} else {
			document.querySelector('.header').classList.remove('nav-opened')
			if (window.innerWidth < 570) {
				document.body.style.overflow = 'auto'
			}
		}
	})

	//---------------------------scroll up btn------------------------------
	if (document.querySelector('.scroll-up')) {
		document.querySelector('.scroll-up').addEventListener('click', (e) => {
			window.scrollTo({
				top: 0,
				left: 0,
				behavior: 'smooth'
			})
		})
	}

	document.addEventListener('scroll', (e) => {
		if (window.scrollY > 500) {
			document.querySelector('.scroll-up').classList.add('scroll-up_show')
		} else {
			document.querySelector('.scroll-up').classList.remove('scroll-up_show')
		}
	})

	//------------------------review subslider replace----------------------

	if (window.innerWidth < 570 && document.querySelector('.review__subslider')) {
		document.querySelector('.review__subslider').parentElement.prepend(document.querySelector('.review__subslider'))
	}


	//--------------------------------read more--------------------------------

	document.querySelectorAll('.read-more__btn').forEach(el => {
		el.addEventListener('click', (e) => {
			if (!e.target.closest('.read-more')) {
				if (document.querySelectorAll('.read-more')) {
					for (let j = 0; j < document.querySelectorAll('.read-more').length; j++) {
						document.querySelectorAll('.read-more > .read-more__btn')[j].innerHTML = 'Открыть весь список'
						document.querySelectorAll('.read-more')[0].classList.remove('read-more')
					}
				}
				e.target.closest('.read-more__wrapper').classList.add('read-more')
				e.target.innerHTML = 'Скрыть'
			} else {
				for (let j = 0; j < document.querySelectorAll('.read-more').length; j++) {
					document.querySelectorAll('.read-more > .read-more__btn')[j].innerHTML = 'Открыть весь список'
					document.querySelectorAll('.read-more')[0].classList.remove('read-more')
				}
			}
		})
	});

	if (document.querySelector('#map')) {
		var myMap;
		ymaps.ready(init);

		function init() {
			myMap = new ymaps.Map('map', {
				center: [59.878432, 30.258340], // СПб
				zoom: 18
			}, {
				searchControlProvider: 'yandex#search'
			});

			myPlacemark = new ymaps.Placemark([59.878432, 30.258340],
				{ balloonContent: 'НПО Техобеспечение', },
				{ iconColor: '#c9283b' });


			myMap.geoObjects
				.add(myPlacemark)

			if (window.innerWidth < 1023) {
				myMap.behaviors
					.disable(['drag', 'rightMouseButtonMagnifier']);
				//  - drag - перемещение карты при нажатой левой кнопки мыши;
				//  - magnifier.rightButton - увеличение области, выделенной правой кнопкой мыши.
			}
		}
	}
});



