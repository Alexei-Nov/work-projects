document.addEventListener('DOMContentLoaded', function () {

	//--------main page slider-------------
	let sliderMP = () => {
		let MPSwiper = new Swiper('.main-page__slider ', {
			slidesPerView: 1,
			spaceBetween: 10,
			navigation: {
				nextEl: '.main-page-button-next',
				prevEl: '.main-page-button-prev',
			},

		});
	};
	sliderMP();

	//--------collection slider-------------
	let sliderCollection = () => {
		let collectionSwiper = new Swiper('.collection__slider ', {
			slidesPerView: 3,
			spaceBetween: 30,
			loop: true,
			pagination: {
				el: ".collection-pagination",
				type: "fraction"
			},
			navigation: {
				nextEl: '.collection-button-next',
				prevEl: '.collection-button-prev',
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				570: {
					slidesPerView: 2,
				},
				1101: {
					slidesPerView: 4,
				}
			}
		});
	};
	sliderCollection();


	//--------our-new slider-------------
	let sliderOurNew = () => {
		let ourNewSwiper = new Swiper('.our-new__slider ', {
			slidesPerView: 6,
			spaceBetween: 30,
			navigation: {
				nextEl: '.our-new-button-next',
				prevEl: '.our-new-button-prev',
			},
			pagination: {
				el: ".our-new-pagination",
				type: "fraction"
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				491: {
					slidesPerView: 2,
				},
				800: {
					slidesPerView: 3,
				},
				1000: {
					slidesPerView: 4,
				},
				1401: {
					slidesPerView: 6,
				},
			}
		});
	};
	sliderOurNew();


	//--------lookbook slider-------------
	let sliderLookbook = () => {
		let lookbookSwiper = new Swiper('.lookbook__slider ', {
			slidesPerView: 1,
			spaceBetween: 30,
			navigation: {
				nextEl: '.lookbook-button-next',
				prevEl: '.lookbook-button-prev',
			},
			pagination: {
				el: ".lookbook-pagination",
				type: "fraction"
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				491: {
					slidesPerView: 2,
				},
				1201: {
					slidesPerView: 1,
				},
			}
		});
	};
	sliderLookbook();



	//--------vk slider-------------

	if (document.querySelector('.vk__slider ')) {
		let sliderVk = () => {
			let vkSwiper = new Swiper('.vk__slider ', {
				slidesPerView: 6,
				spaceBetween: 30,
				navigation: {
					nextEl: '.vk-button-next',
					prevEl: '.vk-button-prev',
				},
				pagination: {
					el: ".vk-pagination",
					type: "fraction"
				},
				breakpoints: {
					0: {
						slidesPerView: 1,
					},
					570: {
						slidesPerView: 2,
					},
					768: {
						slidesPerView: 3,
					},
					1000: {
						slidesPerView: 4,
					},
					1401: {
						slidesPerView: 6,
					},
				}
			});
		};
		sliderVk();
	}

	//--------hit-sale slider-------------


	let sliderTab = () => {
		let tabSwiper = new Swiper('.hit-sale__tab_silder', {
			slidesPerView: 4,
			spaceBetween: 30,
			pagination: {
				el: ".hit-sale-pagination",
				type: "fraction"
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
					allowTouchMove: true,
				},
				491: {
					slidesPerView: 2,
				},
				768: {
					slidesPerView: 3,
				},
				1000: {
					slidesPerView: 4,
					allowTouchMove: false,
				},
			}
		});
	};
	sliderTab();

	//--------card page slider-------------


	let sliderCardPage = () => {
		let CardPageSwiper = new Swiper('.card-page__slider', {
			slidesPerView: 3,
			spaceBetween: 30,
			navigation: {
				nextEl: '.card-page-button-next',
				prevEl: '.card-page-button-prev',
			},
			pagination: {
				el: ".card-page-pagination",
				type: "fraction"
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
					direction: 'horizontal',
				},
				570: {
					slidesPerView: 2,
					direction: 'horizontal',

				},
				1101: {
					slidesPerView: 1,
					direction: 'horizontal',

				},
				1200: {
					slidesPerView: 3,
					direction: 'vertical',
				},
			}
		});
	};
	sliderCardPage();

	//--------order history slider-------------

	let sliderOrderHistory = () => {
		let orderHistorySwiper = new Swiper('.order-history__slider', {
			slidesPerView: 6,
			spaceBetween: 30,
			navigation: {
				nextEl: '.order-history-button-next',
				prevEl: '.order-history-button-prev',
			},
			pagination: {
				el: ".order-history-pagination",
				type: "fraction"
			},
			observeParents: true,
			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				425: {
					slidesPerView: 2,
				},
				570: {
					slidesPerView: 3,
				},
				700: {
					slidesPerView: 4,
				},
				1000: {
					slidesPerView: 6,
				},
			}
		});
	};
	sliderOrderHistory()
	// if (document.querySelector('.user-profile__tab-2') && document.querySelector('.user-profile__tab-2').closest('.active')) {
	// 	sliderOrderHistory()
	// }


	// let sliderOrderHistory = () => {

	// 	for (let i = 0; i < document.querySelectorAll('.order-history__slider').length; i++) {

	// 		eval(`let orderHistorySwiper${i}= new Swiper('.order-history__slider', {
	// 			slidesPerView: 6,
	// 			spaceBetween: 30,
	// 			navigation: {
	// 				nextEl: '.order-history-button-next',
	// 				prevEl: '.order-history-button-prev',
	// 			},
	// 			pagination: {
	// 				el: ".order-history-pagination${i}",
	// 				type: "fraction"
	// 			},
	// 			observeParents: true,

	// 			breakpoints: {
	// 				0: {
	// 					slidesPerView: 1,
	// 				},
	// 				425: {
	// 					slidesPerView: 2,
	// 				},
	// 				570: {
	// 					slidesPerView: 3,
	// 				},
	// 				700: {
	// 					slidesPerView: 4,
	// 				},
	// 				1000: {
	// 					slidesPerView: 6,
	// 				},
	// 			}
	// 		});`)
	// 	}
	// };

	// if (document.querySelector('.user-profile__tab-2') && document.querySelector('.user-profile__tab-2').closest('.active')) {
	// 	for (let i = 0; i < document.querySelectorAll('.order-history__slider').length; i++) {
	// 		eval(`sliderOrderHistory${i}()`)
	// 	}
	// }

	//--------order slider-------------


	let sliderOrder = () => {
		let orderSwiper = new Swiper('.order__slider', {
			slidesPerView: 6,
			spaceBetween: 30,
			navigation: {
				nextEl: '.order-button-next',
				prevEl: '.order-button-prev',
			},
			pagination: {
				el: ".order-pagination",
				type: "fraction"
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				425: {
					slidesPerView: 2,
				},
				570: {
					slidesPerView: 3,
				},
				700: {
					slidesPerView: 4,
				},
				1000: {
					slidesPerView: 6,
				},
			}
		});
	};
	sliderOrder()


	//--------collaboration slider-------------


	let sliderCollaboration = () => {
		let collaborationSwiper = new Swiper('.exp__collaboration_slider', {
			// slidesPerView: 1,
			spaceBetween: 30,
			pagination: {
				el: '.collaboration-pagination',
				type: 'fraction'
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 2,
				},
				1200: {
					slidesPerView: 3,
				}
			}
		});
	};
	sliderCollaboration();



	//--------model slider-------------


	let sliderModel = () => {
		let modelSwiper = new Swiper('.exp__model_slider', {
			slidesPerView: 'auto',
			spaceBetween: 30,
			pagination: {
				el: '.model-pagination',
				type: 'fraction'
			},
			navigation: {
				nextEl: '.model-button-next',
				prevEl: '.model-button-prev',
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				571: {
					slidesPerView: 2,
				},
				900: {
					slidesPerView: 3,
				},
				1201: {
					slidesPerView: 4,
				},
				1401: {
					slidesPerView: 5,
				},
			}
		});
	};
	sliderModel();

	//--------business slider-------------


	let sliderBusiness = () => {
		let businessSwiper = new Swiper('.exp__business_slider', {
			slidesPerView: 'auto',
			spaceBetween: 0,
			pagination: {
				el: '.business-pagination',
				type: 'fraction'
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
					spaceBetween: 30,
				},
				880: {
					slidesPerView: 'auto',
					spaceBetween: 0,
				}
			}
		});
	};

	if (window.innerWidth < 880) {
		sliderBusiness();
	}

	//--------solution slider-------------


	let sliderSolution = () => {
		let solutionSwiper = new Swiper('.partner__solution_slider', {
			slidesPerView: 1,
			spaceBetween: 30,
			pagination: {
				el: '.solution-pagination',
				type: 'fraction'
			},
			// breakpoints: {
			// 	0: {
			// 		slidesPerView: 1,
			// 	},
			// 	880: {
			// 		slidesPerView: 3,
			// 	}
			// }
		});
	};

	if (window.innerWidth < 880) {
		sliderSolution();
	}

	//--------article slider-------------


	let sliderArticle = () => {
		let articleSwiper = new Swiper('.partner__article_slider', {
			slidesPerView: 3,
			spaceBetween: 30,
			pagination: {
				el: '.article-pagination',
				type: 'fraction'
			},
			navigation: {
				nextEl: '.model-button-next',
				prevEl: '.model-button-prev',
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
	sliderArticle();


	//----------tab hit-sale --------------------

	if (document.querySelector('.hit-sale__tab_title')) {

		let tabTitle = document.querySelector('.hit-sale__tab_title').querySelectorAll('.p');
		let tabBody = document.querySelector('.hit-sale__tab_body').querySelectorAll('.hit-sale__tab');

		for (let i = 0; i < tabTitle.length; i++) {
			tabTitle[i].addEventListener('click', tabSale)
		}

		function tabSale(e) {

			if (!e.target.closest('.tab')) {
				tabTitle.forEach(el => el.classList.remove('tab'));
				tabBody.forEach(el => el.classList.remove('tab'));
				e.target.classList.add('tab')

				for (let i = 0; i < tabTitle.length; i++) {
					if (tabTitle[i].closest('.tab')) {
						tabBody[i].classList.add('tab')
					}
				}
			}
		}

	}


	//-----------footer phone replace--------------------

	let footerPhone = document.querySelector('.footer__phone');

	if (footerPhone && window.innerWidth < 672) {
		let replacedPhone = document.createElement('div');
		footerPhone.style.display = 'none'
		replacedPhone.innerHTML = footerPhone.innerHTML;
		replacedPhone.classList.add('footer__phone');
		document.querySelector('.footer__body_wrapper').prepend(replacedPhone)
	}


	//----------------Nav accordeon--------------------------

	function initAcc(elem, option) {
		document.addEventListener('click', function (e) {
			if (!e.target.matches(elem + ' .a-btn')) {
				return
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

	function hoverNav() {
		for (let i = 0; i < document.querySelectorAll('.nav__link').length; i++) {
			document.querySelectorAll('.nav__link')[i].addEventListener('mouseover', initAccHover);
		}
	}

	function initAccHover(e) {
		if (!e.target.closest('.a-container.active')) {
			if (document.querySelector('.v1 .active')) {
				document.querySelector('.v1 .active').classList.remove('active')
			}
			e.target.parentElement.classList.add('active');
			document.addEventListener('mouseover', (event) => {
				if (!event.target.closest('.active') && document.querySelector('.v1 .active')) {
					document.querySelector('.v1 .active').classList.remove('active')
				}
			})
		}

	}


	if (window.innerWidth > 1100) {
		hoverNav()
	} else if (window.innerWidth <= 1100) {
		initAcc('.accordion.v1', true);
	}

	initAcc('.accordion.v2', true);
	initAcc('.accordion.v3', true);

	//-----------------nav menu btn-----------------------

	if (document.querySelector('.nav__close-btn')) {
		let navBtn = document.querySelector('.nav__close-btn');
		navBtn.addEventListener('click', navMenu)
	}

	function navMenu(e) {
		if (e.target.closest('.nav__icon_search')) return

		if (!document.querySelector('.nav').closest('.opened') && window.innerWidth < 1100) {
			if (e.target.closest('.nav__icons')) return
			document.querySelector('.nav').classList.add('opened')
			document.body.style.overflowY = 'hidden'
		}
		else {
			document.querySelector('.nav').classList.remove('opened')
			document.body.style.overflowY = 'auto'
		}
	}

	//-------------nav menu link---------------------------

	// if (document.querySelectorAll('.nav__link')) {
	// 	for (let i = 0; i < document.querySelectorAll('.nav__link').length; i++) {
	// 		document.querySelectorAll('.nav__link')[i].addEventListener('click', navMenuLink);
	// 	}
	// 	for (let i = 0; i < document.querySelectorAll('.nav__icon').length; i++) {
	// 		document.querySelectorAll('.nav__icon')[i].addEventListener('click', navMenuLink);
	// 	}
	// 	for (let i = 0; i < document.querySelectorAll('.a-panel > a').length; i++) {
	// 		document.querySelectorAll('.a-panel > a')[i].addEventListener('click', navMenuLink);
	// 	}
	// }

	// function navMenuLink(e) {
	// 	if (!e.target.closest('.a-container')) {
	// 		navMenu(e);
	// 	} else if (e.target.closest('.a-container.active')) {
	// 		navMenu(e);
	// 	}
	// }

	//----------catalog sort------------------

	if (document.querySelector('.dropbtn')) {


		document.querySelector('.dropbtn').addEventListener('click', dropBtnSort);

		function dropBtnSort() {
			document.querySelector('.dropdown-content').classList.toggle('show');
			document.querySelector('.dropbtn').classList.toggle('show');
		}

		window.onclick = function (event) {
			if (!event.target.matches('.dropbtn')) {
				var dropdowns = document.getElementsByClassName("dropdown-content");

				for (let i = 0; i < dropdowns.length; i++) {
					var openDropdown = dropdowns[i];
					if (openDropdown.classList.contains('show')) {
						openDropdown.classList.remove('show');
					}
					if (document.querySelector('.dropbtn').closest('.show')) {
						document.querySelector('.dropbtn').classList.toggle('show');
					}
				}
			}
		}

	}
	//-------------catalog filter------------------------

	if (document.querySelector('.catalog__filter_btn')) {

		document.querySelector('.catalog__filter_btn-close').addEventListener('click', filterClose);
		document.querySelector('.catalog__filter_btn').addEventListener('click', filterOpen);

		function filterClose() {
			document.querySelector('.catalog__filter').classList.add('closed');
		};

		function filterOpen() {
			document.querySelector('.catalog__filter').classList.remove('closed');

			// if (document.querySelector('.filter__btns')) {
			// 	if (window.innerHeight > 1110) {
			// 		document.body.style.overflowY = 'hidden'
			// 	} else {
			// 		document.addEventListener('scroll', filterScrollSection)
			// 	}
			// } else {
			// 	if (window.innerHeight > 640) {
			// 		document.body.style.overflowY = 'hidden'
			// 	} else {
			// 		document.addEventListener('scroll', filterScroll)
			// 	}
			// }
		};

		function filterScrollSection() {
			let scroll = window.pageYOffset;
			let pageHeight = window.innerHeight;
			if (scroll + pageHeight > 1090) {
				document.querySelector('.v2:last-of-type > div:last-of-type').scrollIntoView({ block: 'end' })
			};

		}
		function filterScroll() {
			let scroll = window.pageYOffset;
			let pageHeight = window.innerHeight;
			if (scroll + pageHeight > 610) {
				document.querySelector('.v2:last-of-type > div:last-of-type').scrollIntoView({ block: 'end' })
			};

		}
	}
	//--------------filter size------------------------------

	for (let i = 0; i < document.querySelectorAll('.filter__size_item').length; i++) {
		document.querySelectorAll('.filter__size_item')[i].addEventListener('click', filterSize);
	}

	function filterSize(e) {
		if (!e.target.closest('.size-selected')) {
			e.target.classList.add('size-selected')
		}
		else {
			e.target.classList.remove('size-selected')
		}
	}

	//------------filter color--------------------------------

	for (let i = 0; i < document.querySelectorAll('.filter__color_item').length; i++) {
		document.querySelectorAll('.filter__color_item')[i].addEventListener('click', filterColor);
	}

	function filterColor(e) {
		if (!e.target.closest('.color-selected')) {
			e.target.classList.add('color-selected')
		}
		else {
			e.target.classList.remove('color-selected')
		}
	}


	//---------phone mask-----------

	if (document.querySelectorAll('.phone-mask')) {
		for (let i = 0; i < document.querySelectorAll('.phone-mask').length; i++) {
			eval(`let phoneMask${i} = IMask(document.querySelectorAll('.phone-mask')[${i}], { mask: '+{7}(000)000-00-00' }); `)
		}
	}

	//-----------filter cost----------------------------------


	if (document.getElementById('filter-cost-1')) {
		var minNumberMask = IMask(document.getElementById('filter-cost-1'), {
			mask: Number,
			min: 1,
			max: 10000000,
			thousandsSeparator: ' '
		});
		var maxNumberMask = IMask(document.getElementById('filter-cost-2'), {
			mask: Number,
			min: 1,
			max: 10000000,
			thousandsSeparator: ' '
		});
	}

	//-----------------card page like-------------------------------

	if (document.querySelector('.like')) {
		document.querySelector('.like').addEventListener('click', likeFill)
	}

	function likeFill(e) {
		if (!e.target.closest('.liked')) {
			e.target.classList.add('liked');

		} else {
			e.target.classList.remove('liked');
		}
	}

	//------------------card page slider--------------------------------

	if (document.querySelector('.card-page__slider')) {
		document.querySelector('.card-page__slider').addEventListener('click', sliderBig)

		function sliderBig(e) {
			if (e.target.closest('.card-page__slide')) {
				let bigImg = e.target.parentElement.innerHTML;
				document.querySelector('.card-page__img_big').innerHTML = bigImg;
			}
		}
		if (window.innerWidth < 1200) {
			document.querySelector('.card-page__img_big').style.display = 'none'
		}
	}
	//--------------replace card name & cost-------------------

	if (document.querySelector('.card-page__replace')) {
		if (window.innerWidth < 1000) {
			let replaceItem = document.querySelector('.card-page__replace');
			let newReplaceItem = document.createElement('div');
			newReplaceItem.innerHTML = replaceItem.innerHTML;
			newReplaceItem.classList.add('card-page__replace');
			replaceItem.style.display = 'none';
			document.querySelector('.card-page__wrapper').prepend(newReplaceItem)
		}
	}

	//----------tab customer--------------------

	// if (document.querySelector('.customer__tab_title')) {

	// 	let tabTitle = document.querySelector('.customer__tab_title').querySelectorAll('p');
	// 	let tabBody = document.querySelector('.customer__tab_body').querySelectorAll('.customer__tab');

	// 	for (let i = 0; i < tabTitle.length; i++) {
	// 		tabTitle[i].addEventListener('click', tabSale)
	// 	}

	// 	function tabSale(e) {

	// 		if (!e.target.closest('.active')) {
	// 			tabTitle.forEach(el => el.classList.remove('active'));
	// 			tabBody.forEach(el => el.classList.remove('active'));
	// 			e.target.classList.add('active')

	// 			for (let i = 0; i < tabTitle.length; i++) {
	// 				if (tabTitle[i].closest('.active')) {
	// 					tabBody[i].classList.add('active')
	// 				}
	// 			}
	// 		}
	// 	}
	// }

	//----------tab user-profile--------------------

	// if (document.querySelector('.user-profile__tab_title') && document.querySelector('.user-profile__tab_body')) {

	// 	let tabTitle = document.querySelector('.user-profile__tab_title').querySelectorAll('p');
	// 	let tabBody = document.querySelector('.user-profile__tab_body').querySelectorAll('.user-profile__tab');

	// 	for (let i = 0; i < tabTitle.length; i++) {
	// 		tabTitle[i].addEventListener('click', tabSale)
	// 	}

	// 	function tabSale(e) {

	// 		if (!e.target.closest('.active')) {
	// 			tabTitle.forEach(el => el.classList.remove('active'));
	// 			tabBody.forEach(el => el.classList.remove('active'));
	// 			e.target.classList.add('active')

	// 			for (let i = 0; i < tabTitle.length; i++) {
	// 				if (tabTitle[i].closest('.active')) {
	// 					tabBody[i].classList.add('active')
	// 				}
	// 			}
	// 		}
	// 	}
	// }

	//----------tab registration--------------------

	// if (document.querySelector('.registration__tab_title')) {

	// 	let tabTitle = document.querySelector('.registration__tab_title').querySelectorAll('p');
	// 	let tabBody = document.querySelector('.registration__tab_body').querySelectorAll('.registration__tab');

	// 	for (let i = 0; i < tabTitle.length; i++) {
	// 		tabTitle[i].addEventListener('click', tabSale)
	// 	}

	// 	function tabSale(e) {

	// 		if (!e.target.closest('.active')) {
	// 			tabTitle.forEach(el => el.classList.remove('active'));
	// 			tabBody.forEach(el => el.classList.remove('active'));
	// 			e.target.classList.add('active')

	// 			for (let i = 0; i < tabTitle.length; i++) {
	// 				if (tabTitle[i].closest('.active')) {
	// 					tabBody[i].classList.add('active')
	// 				}
	// 			}
	// 		}
	// 	}
	// }

	//--------------read more btn---------------------------

	// if (document.querySelectorAll('.read-more__text')[0].style.heigth < 100) {
	// }

	if (document.querySelector('.read-more__btn')) {

		let readMoreBtn = document.querySelectorAll('.read-more__btn');

		for (let i = 0; i < readMoreBtn.length; i++) {
			readMoreBtn[i].addEventListener('click', showReadMore);
		}
	}

	function showReadMore(e) {
		for (let i = 0; i < document.querySelectorAll('.read-more__btn').length; i++) {
			document.querySelectorAll('.read-more__btn')[i].innerHTML = 'Читать далее';
		}

		if (!e.target.closest('.read-more')) {
			if (document.querySelectorAll('.read-more')) {
				for (let i = 0; i < document.querySelectorAll('.read-more').length; i++) {
					for (let j = 0; j < i; j++) {
						document.querySelectorAll('.read-more')[0].classList.remove('read-more');
						document.querySelectorAll('.read-more')[0].classList.remove('read-more');
					}
				}
			}

			e.target.classList.add('read-more');
			e.target.innerHTML = 'Скрыть'
			e.target.parentElement.querySelector('.read-more__text').classList.add('read-more')
		}
		else if (document.querySelectorAll('.read-more')) {


			for (let i = 0; i < document.querySelectorAll('.read-more').length; i++) {
				for (let j = 0; j < i; j++) {
					document.querySelectorAll('.read-more')[0].classList.remove('read-more');
					document.querySelectorAll('.read-more')[0].classList.remove('read-more');
					document.querySelectorAll('.read-more__btn')[i].innerHTML = 'Читать далее';
				}
			}
		}

	}

	//------------counter------------------

	// document.addEventListener('click', cardCounter)

	// function cardCounter(e) {
	// 	if (!e.target.closest('.counter__wrapper')) return

	// 	if (e.target.closest('.counter-plus')) {
	// 		e.target.parentElement.querySelector('input').value++
	// 	}
	// 	else if (e.target.closest('.counter-min')) {
	// 		if (e.target.parentElement.querySelector('input').value == 1) return
	// 		e.target.parentElement.querySelector('input').value--
	// 	}
	// }


	//--------------rerender user-prodile tab slider-----------------------

	// document.addEventListener('click', tabListener)

	// function tabListener(e) {
	// 	if (e.target.closest('.user-profile__tab_title')) {
	// 		if (e.target.closest('.user-profile__tab_title-1')) {
	// 			sliderOrder();
	// 		} else if (e.target.closest('.user-profile__tab_title-2')) {
	// 			sliderOrderHistory();
	// 		}
	// 	}
	// }

	//-------------card like--------------------------------

	if (document.querySelectorAll('.card-like')) {
		for (let i = 0; i < document.querySelectorAll('.card-like').length; i++) {
			document.querySelectorAll('.card-like')[i].addEventListener('click', like)
		}
	}


	function like(e) {
		if (!e.target.closest('.liked')) {
			e.target.parentElement.classList.add('liked')
		} else if (e.target.closest('.liked')) {
			e.target.parentElement.classList.remove('liked')
		}
	}

	//---------- basket order table replace ----------------------

	if (document.querySelector('.user-profile__basket_item_wrapper') && window.innerWidth < 769) {

		let orderTable = document.querySelector('.user-profile__title').querySelector('p');
		let replacedOrederTable = document.createElement('p');

		for (let i = 0; i < document.querySelectorAll('.user-profile__basket_item').length; i++) {
			replacedOrederTable = document.createElement('p');
			replacedOrederTable.classList.add('user-profile__replaced_table');
			replacedOrederTable.innerHTML = orderTable.innerHTML;
			document.querySelectorAll('.user-profile__basket_item_wrapper')[i].after(replacedOrederTable)
		}
	}

	//------------ tab menu btn  ------------------------------

	if (document.querySelector('.user-profile__tab_menu-btn') && window.innerWidth < 900) {
		document.querySelector('.user-profile__tab_menu-btn').addEventListener('click', tabMenuBtn);
		document.querySelector('.user-profile__tab_menu-close-btn').addEventListener('click', tabMenuBtn);
		for (let i = 0; i < document.querySelector('.user-profile__tab_title').querySelectorAll('p').length; i++) {
			document.querySelector('.user-profile__tab_title').querySelectorAll('p')[i].addEventListener('click', tabMenuBtn);
		}
	}

	function tabMenuBtn(e) {
		if (!e.target.closest('.opened')) {
			document.querySelector('.user-profile__tab_header').classList.add('opened')
			document.body.style.overflowY = 'hidden'
		} else {
			document.querySelector('.user-profile__tab_header').classList.remove('opened')
			document.body.style.overflowY = 'auto'

		}
	}

	//-------------nav search-------------------------------

	if (document.querySelectorAll('.nav__icon_search')) {
		for (let i = 0; i < document.querySelectorAll('.nav__icon_search').length; i++) {
			document.querySelectorAll('.nav__icon_search')[i].addEventListener('click', navSearch)
		}
	}

	function navSearch(e) {
		if (!e.target.closest('.search')) {
			document.querySelector('.nav').classList.add('search')
			document.addEventListener('click', closeSearch)
		} else {
			document.querySelector('.nav').classList.remove('search')
		}
	}
	function closeSearch(e) {
		if (!e.target.closest('.nav__search') && !e.target.closest('.nav__icon_search')) {
			document.querySelector('.nav').classList.remove('search')
		}
	}

	//--------------------price limits slider----------------------------
	if (document.getElementById('slider__prise')) {
		$(function () {
			$('#slider__prise').slider({
				range: true,
				min: 1000,
				max: 20000,
				step: 100,
				values: ['1000', '20000'],
				change: function (event, ui) {
					$('.plots__slide').each(function () {
						if ($(this).attr('data-price') < ui.values[0]) {
							$(this).addClass('hide-price');
							reinitSlider();
						}
						else if ($(this).attr('data-price') > ui.values[1]) {
							$(this).addClass('hide-price');
							reinitSlider();

						} else {
							$(this).removeClass('hide-price');
							reinitSlider();

						}

					});
				},
				slide: function (event, ui) {
					$('#min__prise').val(ui.values[0]) + " ₽";
					$('#max__prise').val(ui.values[1]) + " ₽";
				}
			});

			$('#slider__square').slider({
				range: true,
				min: 0.1,
				max: 5,
				step: 0.1,
				values: ['0.1', '5'],
				change: function (event, ui) {

					$('.plots__slide').each(function () {
						if ($(this).attr('data-area') < ui.values[0]) {
							$(this).addClass('hide-area');
							reinitSlider();
						}
						else if ($(this).attr('data-area') > ui.values[1]) {
							$(this).addClass('hide-area');
							reinitSlider();
						} else {
							$(this).removeClass('hide-area');
							reinitSlider();
						}
					});
				},
				slide: function (event, ui) {
					$('#min__square').val(ui.values[0] + " Га");
					$('#max__square').val(ui.values[1] + " Га");
				}
			});
			$('#slider__square').draggable();
			$('#slider__prise').draggable();
		});
	}

	//-----------catalog link preventdefault------------------

	for (let i = 0; i < document.querySelectorAll('.catalog__nav-item_has-children').length; i++) {
		document.querySelectorAll('.catalog__nav-item_has-children')[i].addEventListener('click', (e) => {
			if (e.target.closest('span') || !e.target.closest('.active')) {
				e.preventDefault()
			}
		})
	}



});

