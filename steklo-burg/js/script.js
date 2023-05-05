document.addEventListener('DOMContentLoaded', function () {

	//--------main  slider-------------
	let sliderMain = () => {
		let SwiperMain = new Swiper('.main__slider ', {
			slidesPerView: 1,
			spaceBetween: 10,
			allowTouchMove: false,
			navigation: {
				nextEl: '.main-button-next',
				prevEl: '.main-button-prev',
			},
			pagination: {
				el: ".main-pagination",
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
		});
	};
	sliderMain();


	//--------gallery  slider-------------
	let sliderGallery = () => {
		let SwiperGallery = new Swiper('.gallery__slider ', {
			slidesPerView: 3,
			spaceBetween: 10,

			navigation: {
				nextEl: '.gallery-button-next',
				prevEl: '.gallery-button-prev',
			},
			pagination: {
				el: ".gallery-pagination",
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
			scrollbar: {
				el: '.gallery-scrollbar',
				draggable: true,
			},

			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				570: {
					slidesPerView: 2,
				},
				1000: {
					slidesPerView: 3,
				}
			}
		});
	};
	sliderGallery();


	//--------reason  slider-------------
	let sliderReason = () => {
		let SwiperGallery = new Swiper('.reason__slider ', {
			// spaceBetween: 10,
			slidesPerView: 3,
			slidesPerColumn: 2,
			slidesPerGroup: 3,
			scrollbar: {
				el: '.reason-scrollbar',
				draggable: true,
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
					slidesPerColumn: 1,
					slidesPerGroup: 1,
					spaceBetween: 10,
				},
				769: {
					spaceBetween: 0,
					slidesPerView: 3,
					slidesPerColumn: 2,
					slidesPerGroup: 3,
				}
			}
		});
	};
	sliderReason();

	//------------pagination separation line----------------

	function paginationLine() {
		if (document.querySelectorAll('.slider-count-pagination ')) {
			for (let i = 0; i < document.querySelectorAll('.slider-count-pagination ').length; i++) {

				let total = document.querySelectorAll('.swiper-wrapper')[i].querySelectorAll('.swiper-slide').length;
				if (`${total}`.length == 1) {
					document.querySelectorAll('.slider-count-pagination ')[i].innerHTML = `<span class="swiper-pagination-current">01</span>|<span class="swiper-pagination-total">0${total}</span>`
				} else {
					document.querySelectorAll('.slider-count-pagination ')[i].innerHTML = `<span class="swiper-pagination-current">01</span>|<span class="swiper-pagination-total">${total}</span>`
				}
			}
		}
	}

	paginationLine();

	//---------phone mask-----------

	if (document.querySelectorAll('.phone-mask')) {
		for (let i = 0; i < document.querySelectorAll('.phone-mask').length; i++) {
			eval(`let phoneMask${i} = IMask(document.querySelectorAll('.phone-mask')[${i}], { mask: '+{7}(000)000-00-00' }); `)
		}
	}

	//--------nav btn menu------------------

	if (document.querySelector('.nav__mobile_menu-btn')) {
		document.querySelector('.nav__mobile_menu-btn').addEventListener('click', navMenu)
		for (let i = 0; i < document.querySelectorAll('.nav__links > ul > li > a').length; i++) {
			document.querySelectorAll('.nav__links > ul > li > a')[i].addEventListener('click', navMenu)
		}
	}
	function navMenu(event) {
		if (!event.target.closest('.nav-opened')) {
			document.querySelector('.nav').classList.add('nav-opened');
			document.body.style.overflowY = 'hidden'
		} else {
			document.querySelector('.nav').classList.remove('nav-opened')
			document.body.style.overflowY = 'auto'
		}
	}

	//----------------read-more------------------------


	if (document.querySelector('.read-more__btn')) {
		for (let i = 0; i < document.querySelectorAll('.read-more__btn').length; i++) {
			document.querySelectorAll('.read-more__btn')[i].addEventListener('click', readMore)
		}
	}

	function readMore(e) {
		if (!e.target.closest('.read-more')) {
			for (let i = 0; i < document.querySelectorAll('.read-more__btn.read-more').length; i++) {
				document.querySelectorAll('.read-more__btn.read-more')[i].innerHTML = 'Читать далее'
				document.querySelector('.read-more').classList.remove('read-more')
				document.querySelector('.read-more').classList.remove('read-more')
			}
			e.target.classList.add('read-more')
			e.target.innerHTML = 'Скрыть'
			e.target.closest('.read-more__text').classList.add('read-more')
		} else {

			for (let i = 0; i < document.querySelectorAll('.read-more__btn.read-more').length; i++) {
				document.querySelectorAll('.read-more__btn.read-more')[i].innerHTML = 'Читать далее'
				document.querySelector('.read-more').classList.remove('read-more')
				document.querySelector('.read-more').classList.remove('read-more')
			}
		}
	}

	//---------gallery btn title -----------------

	if (document.querySelector('.gallery__nav_btn') && window.innerWidth < 570) {
		document.querySelector('.gallery__nav_btn').addEventListener('click', galleryNavBtn)
	}

	function galleryNavBtn(e) {
		if (!e.target.closest('.gallery-opened')) {
			e.target.classList.add('gallery-opened')
			e.target.parentElement.parentElement.querySelector('.gallery__nav').classList.add('gallery-opened')
		} else {
			document.querySelector('.gallery-opened').classList.remove('gallery-opened')
			document.querySelector('.gallery-opened').classList.remove('gallery-opened')
		}
	}

	//--------catalog nav accordion-------------

	function initAcc(elem, option) {
		document.addEventListener('click', function (e) {
			if (!e.target.matches(elem + ' .a-btn')) return;
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

	initAcc('.accordion.v1', true);
	initAcc('.accordion.v2', false);

	function catalogArrow() {
		if (document.querySelector('.v1')) {
			for (let i = 0; i < document.querySelectorAll('.a-container').length; i++) {
				if (document.querySelectorAll('.a-container')[i].children.length < 2) {
					document.querySelectorAll('.a-container > .a-btn > span ')[i].style.display = 'none'
				}
			}
		}
	}
	catalogArrow()

	//------------show more btn -------------------------

	if (document.querySelector('.show-more__btn')) {
		for (let i = 0; i < document.querySelectorAll('.show-more__btn ').length; i++) {
			document.querySelectorAll('.show-more__btn ')[i].addEventListener('click', btnAppearance)
		}
	}

	function btnAppearance(e) {
		for (let i = 0; i < e.target.parentElement.querySelector('.show-more').children.length; i++) {
			e.target.parentElement.querySelector('.show-more').children[i].style.display = 'flex'
		}
		e.target.style.display = 'none'
	}

	//-----------up-btn-------------------------

	if (document.querySelector('.up__btn')) {
		document.addEventListener('scroll', scrollBtn);
		document.querySelector('.up__btn').addEventListener('click', upBtn)
	}

	function scrollBtn() {
		if (window.pageYOffset < 400) return
		document.querySelector('.up__btn').style.display = 'flex';
	}


	function upBtn() {
		window.scrollTo(0, 0);
		document.querySelector('.up__btn').style.display = 'none';
	};
});
