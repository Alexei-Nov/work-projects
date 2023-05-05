document.addEventListener('DOMContentLoaded', function () {


	//-------------- slider adv--------------------
	let sliderAdv = () => {
		let swiperAdv = new Swiper('.treatment-advantages__slider', {
			slidesPerView: 3,
			spaceBetween: 30,
			autoHeight: true,
			pagination: {
				el: ".treatment-advantages-pagination",
				type: "bullets",
				clickable: true,
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				769: {
					slidesPerView: 2,
					autoHeight: true,
				},
				1025: {
					slidesPerView: 3,
				}
			}
		});

	};
	sliderAdv();


	//-------------- slider stage--------------------
	let sliderStage = () => {
		let swiperStage = new Swiper('.stages__slider', {
			slidesPerView: 1.6,
			spaceBetween: 30,
			pagination: {
				el: ".stages-pagination",
				type: "bullets",
				clickable: true,
			},
			navigation: {
				nextEl: '.stages-next',
				prevEl: '.stages-prev',
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				571: {
					slidesPerView: 2,
				},
				1201: {
					slidesPerView: 1.6,
				}
			}
		});
		for (let i = 0; i < document.querySelectorAll('.stages__slide-count').length; i++) {
			document.querySelectorAll('.stages__slide-count > span')[i].innerHTML = i + 1
		}
	};
	sliderStage();


	//-------------- slider method--------------------
	let sliderMethod = () => {
		let swiperMethod = new Swiper('.method__slider', {
			slidesPerView: 3,
			spaceBetween: 30,
			pagination: {
				el: ".method-pagination",
				type: "bullets",
				clickable: true,
			},
			navigation: {
				nextEl: '.method-next',
				prevEl: '.method-prev',
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
		for (let i = 0; i < document.querySelectorAll('.method__count').length; i++) {
			document.querySelectorAll('.method__count')[i].innerHTML = i + 1
			if (document.querySelectorAll('.method__count').length < 10) {
				document.querySelectorAll('.method__count')[i].innerHTML = '0' + document.querySelectorAll('.method__count')[i].innerHTML;
			}
		}
	};
	sliderMethod();


	//-------------- slider example--------------------
	let sliderExample = () => {
		let swiperExample = new Swiper('.example__slider', {
			slidesPerView: 2,
			spaceBetween: 50,
			autoHeight: true,
			pagination: {
				el: ".example-pagination",
				type: "bullets",
				clickable: true,
			}, navigation: {
				nextEl: '.example-next',
				prevEl: '.example-prev',
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				769: {
					slidesPerView: 1,
					grid: {
						column: 2,
					},
				},
				1025: {
					slidesPerView: 2,
				}
			}
		});
	};
	sliderExample();


	//-------------- slider treatment--------------------
	let sliderTreatment = () => {
		let swiperTreatment = new Swiper('.treatment__slider', {
			slidesPerView: 2,
			spaceBetween: 30,
			pagination: {
				el: ".treatment-pagination",
				type: "bullets",
				clickable: true,
			}, navigation: {
				nextEl: '.treatment-next',
				prevEl: '.treatment-prev',
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				769: {
					slidesPerView: 1,
				},
				1025: {
					slidesPerView: 2,
				}
			}
		});
	};
	sliderTreatment();

	//---------------------slider review-------------------------

	let sliderReview = () => {
		let SwiperSubReview = new Swiper('.review__subslider', {
			slidesPerView: 3,
			spaceBetween: 30,
			watchSlidesProgress: true,
			centeredSlides: true,
			loop: true,

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
		let SwiperReview = new Swiper('.review__slider', {
			slidesPerView: 1,
			spaceBetween: 30,
			watchSlidesProgress: true,

			thumbs: {
				swiper: SwiperSubReview,
			},
			pagination: {
				el: ".review-pagination",
				type: "bullets",
				clickable: true,
			},
			// breakpoints: {
			// 	0: {
			// 		allowTouchMove: true,
			// 	},
			// 	1025: {
			// 		allowTouchMove: false,
			// 	}
			// }
		});
	};
	sliderReview();


	//------------------tab----------------------------
	if (document.querySelector('.tab__header')) {
		for (let i = 0; i < document.querySelectorAll('.tab__title').length; i++) {
			document.querySelectorAll('.tab__title')[i].addEventListener('click', tab)
		}
	}

	function tab(e) {
		let currentTab = e.target.closest('.tab')
		if (!e.target.closest('.title-active')) {
			e.target.closest('.tab').querySelector('.title-active').classList.remove('title-active')
			e.target.classList.add('title-active')
		}
		for (let i = 0; i < currentTab.querySelectorAll('.tab__title').length; i++) {
			if (currentTab.querySelectorAll('.tab__title')[i].closest('.title-active')) {
				e.target.closest('.tab').querySelector('.item-active').classList.remove('item-active')
				currentTab.querySelectorAll('.tab__item')[i].classList.add('item-active')
			}
		}
	}


	//-----------------------slider prev bullet---------------------------------
	document.addEventListener('touchend', prevBtn)
	document.addEventListener('mousemove', prevBtn)
	document.addEventListener('click', prevBtn)

	function prevBtn() {
		document.querySelectorAll('.slider-pagination').forEach(el => {
			for (let i = 0; i < el.querySelectorAll('.swiper-pagination-bullet').length; i++) {
				if (el.querySelectorAll('.swiper-pagination-bullet')[i].closest('.swiper-pagination-bullet-active') &&
					el.querySelectorAll('.swiper-pagination-bullet')[i - 1]) {
					if (el.querySelector('.swiper-pagination-bullet-prev')) {
						el.querySelector('.swiper-pagination-bullet-prev').classList.remove('swiper-pagination-bullet-prev')
					}
					el.querySelectorAll('.swiper-pagination-bullet')[i - 1].classList.add('swiper-pagination-bullet-prev')
				}
			}
		});
	}


	//-------------------------------accordion--------------------------------------------
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


	//-----------------------read-more-------------------------


	document.querySelectorAll('.read-more__btn').forEach(el => {
		el.addEventListener('click', (e) => {
			if (!e.target.closest('.read-more')) {
				if (document.querySelectorAll('.read-more')) {
					for (let j = 0; j < document.querySelectorAll('.read-more').length; j++) {
						document.querySelectorAll('.read-more')[0].classList.remove('read-more')
					}
				}
				e.target.closest('.read-more__wrapper').classList.add('read-more')
			} else {
				for (let j = 0; j < document.querySelectorAll('.read-more').length; j++) {
					document.querySelectorAll('.read-more')[0].classList.remove('read-more')
				}
			}
		})
	});

}); 
