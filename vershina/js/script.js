document.addEventListener('DOMContentLoaded', function () {
	//------------slider main-----------------------

	let sliderMain = () => {
		let SwiperSubMain = new Swiper('.main-page__subslider', {
			slidesPerView: 1,
			spaceBetween: 0,
			allowTouchMove: false,
			loop: true,
			watchSlidesProgress: true,
			pagination: {
				el: ".main-page__pagination-bullets",
				type: "bullets",
			},
		});

		let SwiperMain = new Swiper('.main-page__slider', {
			slidesPerView: 1,
			spaceBetween: 0,
			loop: true,
			allowTouchMove: false,

			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
				waitForTransition: false,
			},

			thumbs: {
				swiper: SwiperSubMain,
			},
			pagination: {
				el: ".main-page__pagination",
				type: "fraction",
				formatFractionCurrent: function (number) {
					if (number < 10) {
						number = '0' + number;
					}
					return number;
				},
				formatFractionTotal: function (number) {
					if (number < 10) {
						number = '0' + number;
					}
					return number;
				},
			},
			navigation: {
				nextEl: '.main-page__next',
				prevEl: '.main-page__prev',
			},
		});
	};
	sliderMain();


	//------------slider our-product-----------------------

	let sliderOurProduct = () => {
		let swiperOurProduct = new Swiper('.our-product__slider', {
			slidesPerView: 4,
			spaceBetween: 30,
			pagination: {
				el: ".our-product__pagination",
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
				},
				1501: {
					slidesPerView: 4,
				}
			}
		});
	};
	sliderOurProduct();


	//------------slider license-----------------------

	let sliderLicense = () => {
		let swiperLIcense = new Swiper('.license__slider', {
			slidesPerView: 'auto',
			spaceBetween: 30,
			loop: true,
			navigation: {
				nextEl: '.license__next',
				prevEl: '.license__prev',
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
	sliderLicense();

	//------------slider product-----------------------

	let sliderProduct = () => {
		let swiperProduct = new Swiper('.product__slider', {
			slidesPerView: 1,
			spaceBetween: 30,
			pagination: {
				el: ".product__pagination",
				type: "bullets",
				clickable: true,
			},
			loop: true,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
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
	sliderProduct();

	//------------slider template-----------------------

	let sliderTemplate = () => {
		let swiperTemplate = new Swiper('.template__slider', {
			slidesPerView: 1,
			spaceBetween: 30,
			autoHeight: true,
			pagination: {
				el: ".template__pagination",
				type: "bullets",
				clickable: true,
			},
		});
	};
	if (window.innerWidth < 1200) {
		sliderTemplate();
	}


	//--------------menu-------------------	
	document.querySelector('.header__menu-btn').addEventListener('click', navMenu)
	document.querySelector('.header__panel-cross').addEventListener('click', navMenu)
	document.querySelectorAll('.header__panel  a').forEach(el => {
		el.addEventListener('click', navMenu)
	})

	function navMenu(e) {
		if (!e.target.closest('.nav-open')) {
			document.querySelector('.header').classList.add('nav-open')
			document.body.style.overflow = 'hidden'
		} else {
			document.querySelector('.header').classList.remove('nav-open')
			document.body.style.overflow = 'auto'
		}
	}

	document.querySelectorAll('.panorama__btn').forEach(el => {
		el.addEventListener('click', (e) => {
			if (!e.target.closest('.panorama-closed')) {
				document.querySelector('.panorama').classList.add('panorama-closed')
			} else {
				document.querySelector('.panorama').classList.remove('panorama-closed')
			}
		})
	})

	//----------------autoplay slider-------------------------------

	if (document.querySelector('.main-page')) {
		document.querySelector('.main-page__prev').addEventListener('click', autoplay)
		document.querySelector('.main-page__next').addEventListener('click', autoplay)
		document.querySelector('.main-page__autoplay').style.animation = 'autoplay 3000ms infinite linear'
	}

	function autoplay(e) {
		document.querySelector('.main-page__autoplay').parentElement.append(document.querySelector('.main-page__autoplay'))
	}

	//------------------------appearance------------------------------------
	if (window.innerWidth > 1200) {
		document.addEventListener('scroll', (e) => {
			for (let i = 0; i < document.querySelectorAll('.block__appearance-item').length; i++) {
				if (document.querySelectorAll('.block__appearance-item')[i].offsetTop < window.pageYOffset + 500) {
					document.querySelectorAll('.block__appearance-item')[i].style.transform = 'none'
				}
			}
		})
	}

	//------------------tab----------------------------

	document.querySelectorAll('.tab__link').forEach(el => {
		el.addEventListener('click', (e) => {
			let currentTab = e.target.closest('.tab')
			if (!e.target.closest('.tab__link-active')) {
				e.target.closest('.tab').querySelector('.tab__link-active').classList.remove('tab__link-active')
				e.target.classList.add('tab__link-active')
			}
			for (let i = 0; i < currentTab.querySelectorAll('.tab__link').length; i++) {
				if (currentTab.querySelectorAll('.tab__link')[i].closest('.tab__link-active')) {
					e.target.closest('.tab').querySelector('.tab__item-active').classList.remove('tab__item-active')
					currentTab.querySelectorAll('.tab__item')[i].classList.add('tab__item-active')
				}
			}
		})
	})

	//---------phone mask---------------------------------------

	if (document.querySelector('.phone-mask')) {
		document.querySelectorAll('.phone-mask').forEach(el => {
			let mask = IMask(el, { mask: '+{7}(000)000-00-00' })
		})
	}


	//---------main-page slider description text replace--------------------

	if (window.innerWidth < 1200 && document.querySelector('.main-page')) {
		document.querySelectorAll('.main-page__subslide').forEach((el, index) => {
			let clone = document.createElement('div')
			clone.innerHTML = el.innerHTML
			clone.classList.add('main-page__subtitle')
			document.querySelectorAll('.main-page__slide')[index].append(clone)
		})
	}


	//------------------read-more btn----------------------------


	document.querySelectorAll('.read-more__btn').forEach(el => {
		el.addEventListener('click', (e) => {
			if (!e.target.closest('.read-more')) {
				if (document.querySelectorAll('.read-more')) {
					for (let j = 0; j < document.querySelectorAll('.read-more').length; j++) {
						document.querySelectorAll('.read-more > .read-more__btn')[j].innerHTML = 'Читать далее'
						document.querySelectorAll('.read-more')[0].classList.remove('read-more')
					}
				}
				e.target.closest('.read-more__wrapper').classList.add('read-more')
				e.target.innerHTML = 'Скрыть'
			} else {
				for (let j = 0; j < document.querySelectorAll('.read-more').length; j++) {
					document.querySelectorAll('.read-more > .read-more__btn')[j].innerHTML = 'Читать далее'
					document.querySelectorAll('.read-more')[0].classList.remove('read-more')
				}
			}
		})
	});


	//-----------------------upload--------------------------------

	if (document.querySelector('.upload')) {
		document.querySelector('.upload__btn').addEventListener('click', () => {
			document.querySelector('.upload__input').click()
		})

		document.querySelector('.upload__input').addEventListener('change', () => {
			document.querySelector('.upload__btn > span').innerHTML = document.querySelector('.upload__input').files[0].name
		})
	}


	//---------------------------custom select-----------------------------

	var x, i, j, l, ll, selElmnt, a, b, c;
	x = document.getElementsByClassName("custom-select");
	l = x.length;
	for (i = 0; i < l; i++) {
		selElmnt = x[i].getElementsByTagName("select")[0];
		ll = selElmnt.length;
		a = document.createElement("DIV");
		a.setAttribute("class", "select-selected");
		a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
		x[i].appendChild(a);
		b = document.createElement("DIV");
		b.setAttribute("class", "select-items select-hide");
		for (j = 1; j < ll; j++) {
			c = document.createElement("DIV");
			c.innerHTML = selElmnt.options[j].innerHTML;
			c.addEventListener("click", function (e) {
				var y, i, k, s, h, sl, yl;
				s = this.parentNode.parentNode.getElementsByTagName("select")[0];
				sl = s.length;
				h = this.parentNode.previousSibling;
				for (i = 0; i < sl; i++) {
					if (s.options[i].innerHTML == this.innerHTML) {
						s.selectedIndex = i;
						h.innerHTML = this.innerHTML;
						y = this.parentNode.getElementsByClassName("same-as-selected");
						yl = y.length;
						for (k = 0; k < yl; k++) {
							y[k].removeAttribute("class");
						}
						this.setAttribute("class", "same-as-selected");
						break;
					}
				}
				h.click();
			});
			b.appendChild(c);
		}
		x[i].appendChild(b);
		a.addEventListener("click", function (e) {
			e.stopPropagation();
			closeAllSelect(this);
			this.nextSibling.classList.toggle("select-hide");
			this.classList.toggle("select-arrow-active");
		});
	}
	function closeAllSelect(elmnt) {
		var x, y, i, xl, yl, arrNo = [];
		x = document.getElementsByClassName("select-items");
		y = document.getElementsByClassName("select-selected");
		xl = x.length;
		yl = y.length;
		for (i = 0; i < yl; i++) {
			if (elmnt == y[i]) {
				arrNo.push(i)
			} else {
				y[i].classList.remove("select-arrow-active");
			}
		}
		for (i = 0; i < xl; i++) {
			if (arrNo.indexOf(i)) {
				x[i].classList.add("select-hide");
			}
		}
	}
	document.addEventListener("click", closeAllSelect);


	//-------------------------date input-----------------------

	if (document.querySelector('.input_date')) {
		document.addEventListener('click', (e) => {
			if (e.target.closest('.input_date')) {
				e.target.type = 'date'
			}
			else if (!document.querySelector('.input_date').value) {
				document.querySelector('.input_date').type = 'text'
			}
		})
	}

	//---------------------hide panorama appearance item when header__wrapper is white-----------------

	if (document.querySelector('.header__wrapper_white')) {
		document.querySelector('.panorama').classList.add('panorama-closed')
	}


	//----------------------------show-more -------------------------------------

	if (document.querySelector('.show-more')) {
		document.querySelector('.show-more__btn').addEventListener('click', (e) => {
			if (!e.target.closest('.show-more_hide')) {
				document.querySelector('.show-more').classList.add('show-more_hide')
			} else {
				document.querySelector('.show-more').classList.remove('show-more_hide')
			}
		})
	}

	//--------------------------------card-page value select--------------------------


	if (document.querySelector('.card-page__props')) {
		document.querySelectorAll('.card-page__value-item').forEach((el, index) => {
			el.addEventListener('click', (e) => {
				if (!e.target.closest('.card-page__value-item_selected')) {
					document.querySelectorAll('.card-page__value-item_selected').forEach(elem => {
						elem.classList.remove('card-page__value-item_selected')
					})
					document.querySelector('.card-page__props').classList.add('card-page__show')
					e.target.classList.add('card-page__value-item_selected')

					document.querySelectorAll('.card-page__img > img').forEach(elem => {
						elem.classList.remove('card-page__current-img')
					})
					document.querySelectorAll('.card-page__img > img')[index].classList.add('card-page__current-img')
				} else {
					e.target.classList.remove('card-page__value-item_selected')
					document.querySelector('.card-page__props').classList.remove('card-page__show')
				}
			})
		})
	}

	//-------------------card page replace items---------------------------------

	if (document.querySelector('.card-page') && window.innerWidth < 1024) {
		document.querySelector('.container .title').innerHTML = document.querySelector('.card-page__name').innerHTML
		document.querySelector('.card-page__name').remove()

		let clone = document.querySelector('.card-page__table-link').cloneNode(true)
		document.querySelector('.card-page__table-link').remove()
		document.querySelector('.card-page__body').after(clone);
		clone.classList.add('card-page__table-link')
	}


	//------------------tab----------------------------

	document.querySelectorAll('.tab__link').forEach(el => {
		el.addEventListener('click', (e) => {
			let currentTab = e.target.closest('.tab')
			if (!e.target.closest('.tab__link-active')) {
				e.target.closest('.tab').querySelector('.tab__link-active').classList.remove('tab__link-active')
				e.target.classList.add('tab__link-active')
			}
			for (let i = 0; i < currentTab.querySelectorAll('.tab__link').length; i++) {
				if (currentTab.querySelectorAll('.tab__link')[i].closest('.tab__link-active')) {
					e.target.closest('.tab').querySelector('.tab__item-active').classList.remove('tab__item-active')
					currentTab.querySelectorAll('.tab__item')[i].classList.add('tab__item-active')
				}
			}
		})
	})


	//---------------------------scroll up btn------------------------------
	if (document.querySelector('.scroll-up-btn')) {
		document.querySelector('.scroll-up-btn').addEventListener('click', (e) => {
			window.scrollTo({
				top: 0,
				left: 0,
				behavior: 'smooth'
			})
		})
	}



	document.addEventListener('scroll', (e) => {
		if (window.scrollY > 500) {
			document.querySelector('.scroll-up-btn').classList.add('scroll-up-btn_show')
		} else {
			document.querySelector('.scroll-up-btn').classList.remove('scroll-up-btn_show')
		}
	})


	//----------------------------search btn---------------------------------

	document.querySelector('.header__search-icon').addEventListener('click', (e) => {
		if (!e.target.closest('.header__search-closed')) {
			document.querySelector('.header__search').classList.add('header__search-closed')
		} else {
			document.querySelector('.header__search').classList.remove('header__search-closed')
		}
	})

});


var myMap;
ymaps.ready(init);

function init() {
	myMap = new ymaps.Map('map', {
		center: [59.996497, 30.785094], // СПб
		zoom: 18
	}, {
		searchControlProvider: 'yandex#search'
	});

	myPlacemark = new ymaps.Placemark([59.996497, 30.785094],
		{ balloonContent: 'Завод Вершина', },
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

