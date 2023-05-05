document.addEventListener('DOMContentLoaded', function () {

	//Слайдер before-after
	let sliderBA = () => {
		let baSwiper = new Swiper('.before-after__slider ', {
			slidesPerView: 1,
			spaceBetween: 30,
			simulateTouch: false,
			scrollbar: {
				el: ".before-after-scrollbar",
			},
			navigation: {
				nextEl: '.before-after-button-next',
				prevEl: '.before-after-button-prev',
			},
		});
		baSwiper.allowTouchMove = false;
	};
	sliderBA();


	//Слайдер Клиника
	let sliderClinica = () => {
		let clinicaSwiper = new Swiper('.clinica__slider ', {
			slidesPerView: 1,
			spaceBetween: 30,
			scrollbar: {
				el: ".clinica-scrollbar",
			},
			navigation: {
				nextEl: '.clinica-button-next',
				prevEl: '.clinica-button-prev',
			},

		});
	};
	sliderClinica();


	// Hello slider
	let sliderHello = () => {
		let helloSwiper = new Swiper('.hello__slider ', {
			slidesPerView: 3.5,
			spaceBetween: 30,
			navigation: {
				nextEl: '.hello-button-next',
				prevEl: '.hello-button-prev',
			},
			scrollbar: {
				el: ".hello-scrollbar",
			},
			breakpoints: {
				0: {
					slidesPerView: 2,
					scrollbar: {
						el: ".hello-scrollbar",
					},
				},
				1000: {
					slidesPerView: 3.5,
					spaceBetween: 30,
					navigation: {
						nextEl: '.hello-button-next',
						prevEl: '.hello-button-prev',
					},
				}
			}
		});
	};
	sliderHello();


	// Video slider
	let sliderVideo = () => {
		let videoSwiper = new Swiper('.video__slider ', {
			slidesPerView: 2,
			spaceBetween: 30,
			centeredSlides: true,
			navigation: {
				nextEl: '.video-button-next',
				prevEl: '.video-button-prev',
			},
			scrollbar: {
				el: ".video-scrollbar",
			},
			effect: 'coverflow',
			coverflowEffect: {
				rotate: 0,
				depth: 600,
				slideShadows: false,
			},
			breakpoints: {
				100: {
					effect: 'none',
					centeredSlides: false,
					slidesPerView: 1,
				},
				1000: {
					effect: 'coverflow',
					centeredSlides: true,
					slidesPerView: 2,
				}
			}
		});
	};
	sliderVideo();

	// if (window.innerWidth < 1000) {
	// 	videoSwiper.destroy();
	// }


	// doctor slider
	let sliderDoc = () => {
		let DocSwiper = new Swiper('.doc__slider ', {
			slidesPerView: 1,
			spaceBetween: 30,
			navigation: {
				nextEl: '.doc-button-next',
				prevEl: '.doc-button-prev',
			},
			breakpoints: {
				0: {
					scrollbar: {
						el: ".doc-main-scrollbar",
					},
				},
				1000: {
					simulateTouch: false,
				}
			}
		});
	};
	sliderDoc();


	// doctor subslider
	let subSliderDoc = () => {
		let docSubSwiper = new Swiper('.doc__subslider ', {
			slidesPerView: 2.5,
			spaceBetween: 30,
			scrollbar: {
				el: ".doc-scrollbar",
			},
			nested: true,
			breakpoints: {
				1000: {
					slidesPerView: 2,
				},
				0: {
					scrollbar: false
				}
			}
		});
	};
	subSliderDoc();

	// Certificate slider

	let sliderCertificate = () => {
		let certificateSwiper = new Swiper('.certificate__slider ', {
			spaceBetween: 30,
			slidesPerView: "auto",
			navigation: {
				nextEl: '.certificate-button-next',
				prevEl: '.certificate-button-prev',
			},
			scrollbar: {
				el: ".certificate-scrollbar",
			},
			breakpoints: {
				100: {
					slidesPerView: 1,
				},
				500: {
					slidesPerView: 3,
				},
				1000: {
					slidesPerView: 4,
				},
				1400: {
					slidesPerView: 6,
				}
			}
		});
	};
	sliderCertificate();


	// consult-btn change position

	let consultBtnChange = () => {
		if (window.innerWidth < 1400) {
			document.querySelectorAll('.price__consult_btn')[0].remove();
			document.querySelectorAll('.price__consult_btn')[0].remove();
			document.querySelector('.consult_item1').innerHTML += `<div class="price__consult_btn btn-main"><a href="#popup" data-fancybox>Записаться</a>`
		}
		if (window.innerWidth < 1000) {
			let creditInnerHTML = document.querySelector('.price__credit').innerHTML;
			let div = document.createElement('div');

			div.innerHTML = creditInnerHTML;
			document.querySelector('.price__credit').remove();
			div.classList.add('price__credit')
			document.querySelector('.price__consult').before(div);
		}
	}

	consultBtnChange();


	//----Accordeon----------------

	function initAcc(elem, option) {
		document.addEventListener('click', function (e) {
			if (!e.target.closest(elem + ' .a-btn')) return;
			else {
				if (!e.target.parentElement.classList.contains('active')) {
					if (option == true) {
						var elementList = document.querySelectorAll(elem + ' .a-container');
						Array.prototype.forEach.call(elementList, function (e) {
							e.classList.remove('active');
						});
					}
					e.target.parentElement.classList.add('active');
					e.target.parentElement.parentElement.classList.add('active');
				}
				else {
					e.target.parentElement.classList.remove('active');
					e.target.parentElement.parentElement.classList.remove('active');
				}
			}
		});
	}

	if (window.innerWidth < 1000) {
		document.querySelectorAll('.price__row')[0].classList.add('a-container');
		document.querySelectorAll('.price__row')[1].classList.add('a-container');
		document.querySelectorAll('.price__cards')[0].classList.add('a-panel');
		document.querySelectorAll('.price__cards')[1].classList.add('a-panel');
		document.querySelectorAll('.price__text')[0].classList.add('a-btn');
		document.querySelectorAll('.price__text')[1].classList.add('a-btn');
	}

	initAcc('.accordion.v1', true);
	initAcc('.accordion.v2', true);

	//----Nav Menu-----------------

	let navMenu = document.querySelector('.nav-mobile__btns');
	let navMenuItem = document.querySelectorAll('.nav-mobile__item');
	for (let i = 0; i < navMenuItem.length; i++) {
		navMenuItem[i].addEventListener('click', menuClick);
	}
	navMenu.addEventListener('click', menuClick);

	let menuStatus = false

	function menuClick(event) {
		console.log(2);
		// if (!event.target.closest('.nav-mobile__menu')) return

		menuStatus = !menuStatus;

		if (menuStatus) {
			document.querySelector('.nav-mobile__wrapper').classList.add('active')
			document.body.style.overflowY = 'hidden'
		}
		else if (!menuStatus) {
			document.querySelector('.nav-mobile__wrapper').classList.remove('active')
			document.body.style.overflowY = 'auto'

		}
	}

	// ------------before/after slider--------------

	for (let i = 0; i < document.querySelectorAll('.before-after__slide').length; i++) {
		new BeerSlider(document.getElementById(`slider${i + 1}`));
	}

	// --------------before-after show more--------------

	let showMoreBtn = document.querySelector('.before-after__body_btn');
	showMoreBtn.addEventListener('click', showMore);

	let btnStatus = false;

	function showMore(e) {

		btnStatus = !btnStatus;
		let parentWrapper = e.target.parentElement;
		parentWrapper.classList.add('open');
		childElem = parentWrapper.querySelectorAll('.stage__item')

		let elemCount = 2;
		if (window.innerWidth < 1000) {
			elemCount = 0;
		}

		if (btnStatus) {
			parentWrapper.classList.add('open');
			for (let i = 0; i < childElem.length; i++) {
				if (i > elemCount) {
					childElem[i].style.display = 'flex'
				}
			}
			showMoreBtn.innerHTML = 'Скрыть';
		} else {
			parentWrapper.classList.remove('open');
			for (let i = 0; i < childElem.length; i++) {
				if (i > elemCount) {
					childElem[i].style.display = 'none'
				}
			}
			showMoreBtn.innerHTML = 'Показать еще';
		}
	}

	//-----------advantage show more--------------------------

	let advShowMoreBtn = document.querySelector('.advantage__body_btn');
	advShowMoreBtn.addEventListener('click', advShowMore);

	function advShowMore(e) {
		if (!document.querySelector('.advantage__body').closest('.opened')) {
			document.querySelector('.advantage__body').classList.add('opened')
			advShowMoreBtn.innerHTML = 'Скрыть'
		} else {
			document.querySelector('.advantage__body').classList.remove('opened');
			advShowMoreBtn.innerHTML = 'Показать еще'
		}


	}

	//-------------Read more----------------------

	let readMoreBtn = document.querySelectorAll('.read-more');
	document.addEventListener('click', readMore);

	function readMore(e) {
		if (!e.target.closest('.read-more')) return

		let parentWrapper = e.target.parentElement;
		childElem = parentWrapper.querySelector('.read-more__text')

		if (!e.target.closest('.show-more')) {
			if (document.querySelectorAll('.show-more')) {
				for (let i = 0; i < document.querySelectorAll('.show-more').length; i++) {
					document.querySelectorAll('.read-more.show-more')[i].innerHTML = 'Читать далее';
					document.querySelectorAll('.read-more.show-more')[i].classList.remove('show-more')
					document.querySelectorAll('.show-more')[i].classList.remove('show-more')
				}
			}
			childElem.classList.add('show-more');
			e.target.classList.add('show-more');
			e.target.innerHTML = 'Скрыть';
		} else {
			if (document.querySelectorAll('.show-more')) {
				for (let i = 0; i < document.querySelectorAll('.show-more').length; i++) {
					document.querySelectorAll('.read-more.show-more')[i].innerHTML = 'Читать далее';
					document.querySelectorAll('.read-more.show-more')[i].classList.remove('show-more')
					document.querySelectorAll('.show-more')[i].classList.remove('show-more')
				}
			}
			childElem.classList.remove('show-more');
			e.target.classList.remove('show-more');
			e.target.innerHTML = 'Читать далее';
		}
	}

	//------------mask input --------------------
	var phoneMask1 = IMask(document.getElementById('phone-mask1'), {
		mask: '+{7}(000)000-00-00'
	});
	var phoneMask1 = IMask(document.getElementById('phone-mask2'), {
		mask: '+{7}(000)000-00-00'
	});
	var phoneMask1 = IMask(document.getElementById('phone-mask3'), {
		mask: '+{7}(000)000-00-00'
	});
	var phoneMask1 = IMask(document.getElementById('phone-mask4'), {
		mask: '+{7}(000)000-00-00'
	});


	//----------advantage img replace----------------------

	if (window.innerWidth < 1400) {
		let advImgHTML = document.querySelector('.advantage__item_img').innerHTML;
		let newImg = document.createElement('div');
		newImg.innerHTML = advImgHTML;
		document.querySelector('.advantage__wrapper').append(newImg);
		document.querySelectorAll('.advantage__item_img')[0].remove();
		newImg.classList.add('advantage__item_img');
	}
});