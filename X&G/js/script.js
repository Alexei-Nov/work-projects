//--------slider main----------------------------------
let sliderMain = () => {
	let SwiperMain = new Swiper('.main-block__slider ', {
		slidesPerView: 1,
		spaceBetween: 30,
		speed: 900,
		pagination: {
			el: ".main-block__pagination",
			type: "bullets",
		},
	});
};


//--------slider new-block----------------------------------
let sliderNewBlock = () => {
	let SwiperNewBlock = new Swiper('.new-block__slider ', {
		slidesPerView: 'auto',
		spaceBetween: 15,
		speed: 700,
		navigation: {
			nextEl: '.new-block__next',
			prevEl: '.new-block__prev',
		},
		scrollbar: {
			el: '.new-block__scrollbar',
			draggable: true,
		},
		breakpoints: {
			0: {
				slidesPerView: 1.3,
			},
			570: {
				slidesPerView: 'auto',
			}
		}
	});
};


//--------slider gallery----------------------------------
let sliderGallery = () => {
	let SwiperGallery = new Swiper('.gallery__slider ', {
		slidesPerView: 'auto',
		spaceBetween: 17,
		speed: 700,
		navigation: {
			nextEl: '.gallery__next',
			prevEl: '.gallery__prev',
		},
		scrollbar: {
			el: '.gallery__scrollbar',
			draggable: true,
		},
		breakpoints: {
			0: {
				slidesPerView: 1.3,
			},
			570: {
				slidesPerView: 'auto',
			}
		}
	});
};


//--------slider partners----------------------------------
let sliderPartners = () => {
	let SwiperPartners = new Swiper('.partners__slider ', {
		slidesPerView: 'auto',
		spaceBetween: 60,
		speed: 700,
		navigation: {
			nextEl: '.partners__next',
			prevEl: '.partners__prev',
		},
		breakpoints: {
			0: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
			769: {
				slidesPerView: 'auto',
			}
		}
	});
};


//--------slider tile----------------------------------
let sliderTile = () => {
	if (window.innerWidth < 1024) {
		let SwiperTile = new Swiper('.tile__slider ', {
			slidesPerView: 'auto',
			spaceBetween: 15,
			speed: 700,
			loop: true,
			scrollbar: {
				el: '.tile__scrollbar',
				draggable: true,
			},
		});
	}
};


//--------slider review----------------------------------
let sliderReview = () => {
	let SwiperReview = new Swiper('.review__slider ', {
		slidesPerView: 'auto',
		spaceBetween: 60,
		speed: 1000,
		navigation: {
			nextEl: '.review__next',
			prevEl: '.review__prev',
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			570: {
				slidesPerView: 'auto',
			}
		}
	});
};

//--------slider detail----------------------------------
let sliderDetail = () => {
	if (window.innerWidth < 1024) {
		let SwiperDetailSub = new Swiper('.detail__subslider ', {
			slidesPerView: 'auto',
			spaceBetween: 15,
			speed: 1000,
			centeredSlides: true,
			breakpoints: {
				0: {
					slidesPerView: 3,
				},
				570: {
					slidesPerView: 'auto',
				}
			},
		});
		let SwiperDetail = new Swiper('.detail__slider ', {
			slidesPerView: 1,
			spaceBetween: 15,
			speed: 1000,
			navigation: {
				nextEl: '.detail__next',
				prevEl: '.detail__prev',
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				570: {
					slidesPerView: 2,
				}
			},
			// thumbs: {
			// 	swiper: SwiperDetailSub,
			// },
		});

		SwiperDetailSub.controller.control = SwiperDetail
		SwiperDetail.controller.control = SwiperDetailSub

	}
};

// sliders init
window.onload = () => {
	sliderMain()
	sliderNewBlock()
	sliderGallery()
	sliderTile()
	sliderReview()
	sliderPartners()
	sliderDetail()
}

document.addEventListener('DOMContentLoaded', function () {



	// nav menu
	document.querySelectorAll('.nav__item_has-children > .nav__link').forEach(el => {
		el.addEventListener('mouseover', (e) => {
			if (!el.closest('.nav__item_has-children-open')) {
				document.querySelectorAll('.nav__item_has-children-open').forEach(elem => {
					elem.classList.remove('nav__item_has-children-open')
				})
				el.closest('.nav__item_has-children').classList.add('nav__item_has-children-open')
			}
		})
	})
	document.querySelector('.header').addEventListener('mouseleave', (e) => {
		document.querySelectorAll('.nav__item_has-children-open').forEach(elem => {
			elem.classList.remove('nav__item_has-children-open')
		})
	})
	document.querySelectorAll('.menu-btn').forEach(el => {
		el.addEventListener('click', (e) => {
			document.querySelectorAll('.nav__item_has-children-open').forEach(elem => {
				elem.classList.remove('nav__item_has-children-open')
			})
			document.querySelector('.header').classList.toggle('header_menu-panel-open')
			document.querySelector('body').classList.toggle('overflow-hidden')
		})
	})


	// nav mobile menu
	if (window.innerWidth < 1024) {
		document.querySelectorAll('.menu__item_has-children').forEach(el => {
			el.addEventListener('click', (e) => {

				if (!e.target.closest('.menu__item_open')) {
					document.querySelectorAll('.menu__item_open').forEach(elem => {
						elem.querySelector('.menu__submenu-panel').style.height = 0;
						elem.classList.remove('menu__item_open')
					})

					e.preventDefault()
					el.classList.add('menu__item_open')
					el.querySelector('.menu__submenu-panel').style.height = el.querySelector('.menu__submenu-panel').scrollHeight + 1 + 'px';
					console.log(el.querySelector('.menu__submenu-panel').scrollHeight);
				}

			})
		})
	}


	// card like
	document.querySelectorAll('.card__heart').forEach(el => {
		el.addEventListener('click', (e) => {
			el.classList.toggle('card__heart_fill')
		})
	})


	// from basket to fav btn
	document.querySelectorAll('.basket__item-btn_heart').forEach(el => {
		el.addEventListener('click', (e) => {
			el.classList.toggle('basket__item-btn_heart-fill')
		})
	})


	//phone mask
	document.querySelectorAll('[type="tel"]').forEach(el => {
		let mask = IMask(el, { mask: '+{7}(000)000-00-00' })
	})


	// stage tabs
	document.querySelectorAll('.stage__item').forEach(el => {
		el.addEventListener('click', (e) => {
			document.querySelectorAll('.stage__item_active').forEach(elem => {
				elem.classList.remove('stage__item_active')
			})
			el.classList.toggle('stage__item_active')

			document.querySelectorAll('.stage__item').forEach(elem => {
				elem.style.pointerEvents = 'none'
				setTimeout(() => {
					elem.style.pointerEvents = 'all'
				}, 800)
			})
		})
	})

	document.querySelectorAll('.stage__btn').forEach(el => {
		el.addEventListener('click', (e) => {
			let currentItemNumber
			let i = 0;
			document.querySelectorAll('.stage__item').forEach(elem => {
				if (elem.closest('.stage__item_active')) {
					currentItemNumber = i;
				}
				i++
			})

			if (el.closest('.stage__btn_prev')) {
				if (document.querySelectorAll('.stage__item')[currentItemNumber - 1]) {
					document.querySelectorAll('.stage__item_active').forEach(elem => {
						elem.classList.remove('stage__item_active')
					})
					document.querySelectorAll('.stage__item')[currentItemNumber - 1].classList.toggle('stage__item_active')
				}

			} else if (el.closest('.stage__btn_next')) {
				if (document.querySelectorAll('.stage__item')[currentItemNumber + 1]) {
					document.querySelectorAll('.stage__item_active').forEach(elem => {
						elem.classList.remove('stage__item_active')
					})
					document.querySelectorAll('.stage__item')[currentItemNumber + 1].classList.toggle('stage__item_active')
				}
			}

			el.style.pointerEvents = 'none'
			setTimeout(() => {
				el.style.pointerEvents = 'all'
			}, 800)

		})
	})

	// accordion
	function initAcc(elem, option) {
		document.addEventListener('click', function (e) {
			if (!e.target.closest('.a-btn')) {
				if (document.querySelector(`${elem} > .a-container_open`) && option == true) {
					document.querySelector(`${elem} > .a-container_open .a-panel`).style.height = 0
					document.querySelector(`${elem} > .a-container_open`).classList.remove('a-container_open')
				}
				return;
			}
			else if (e.target.closest(`${elem}`)) {
				if (!e.target.closest('.a-container').classList.contains('a-container_open')) {
					e.preventDefault()
					if (option == true) {
						var elementList = document.querySelectorAll(elem + ' .a-container');
						Array.prototype.forEach.call(elementList, function (e) {
							e.classList.remove('a-container_open');
							e.querySelector('.a-panel').style.height = 0
						});
					}
					e.target.closest('.a-container').classList.add('a-container_open');
					e.target.closest('.a-container').querySelector('.a-panel').style.height = e.target.closest('.a-container').querySelector('.a-panel').scrollHeight + 1 + 'px'
				} else {
					e.target.closest('.a-container').classList.remove('a-container_open');
					e.target.closest('.a-container').querySelector('.a-panel').style.height = 0
				}
			}
		});
	}

	initAcc('.accordion_v1', true);
	initAcc('.accordion_v2', false);
	initAcc('.accordion_v3', true);


	// range price slider
	if (document.querySelector('#slider-scale')) {
		let minValue = +document.querySelector('#min__prise').value
		let maxValue = +document.querySelector('#max__prise').value
		function rangeSlider(minCurrent, maxCurrent) {
			$('#slider-scale').slider({
				range: true,
				min: minValue,
				max: maxValue,
				step: 100,
				values: [minCurrent, maxCurrent],
				slide: function (event, ui) {
					$('#min__prise').val(ui.values[0]);
					$('#max__prise').val(ui.values[1]);
				}
			});
			$('#slider-scale').draggable();
		};

		rangeSlider(minValue, maxValue)

		document.querySelectorAll('.range-slider__input').forEach(el => {
			el.addEventListener('input', (e) => {
				rangeSlider(document.querySelector('#min__prise').value, document.querySelector('#max__prise').value)
			})
		})

		document.querySelectorAll('.range-slider__input').forEach(el => {
			let mask = IMask(el, { mask: Number })
		})
	}


	// filter menu
	document.querySelectorAll('.catalog__filter-menu-btn').forEach(el => {
		el.addEventListener('click', (e) => {
			e.target.closest('.catalog').classList.toggle('catalog_menu-open')
		})
	})


	// disable auto focus popup
	Fancybox.bind('[data-fancybox]', {
		autoFocus: false,
	});


	// toggle filter options 
	function toggleClass(...classNameArr) {
		classNameArr.forEach(className => {
			document.querySelectorAll('.' + className).forEach(el => {
				el.addEventListener('click', (e) => {
					el.classList.toggle(className + '_selected')
				})
			})
		})
	}
	toggleClass('filter-color', 'filter-option', 'detail__fav-btn')


	// read more 
	document.querySelectorAll('.read-more__btn').forEach(el => {
		let toggleText = el.getAttribute('data-toggle-text')
		let currentText = el.innerHTML
		let limitHeight = +getComputedStyle(el.closest('.read-more').querySelector('.read-more__text')).height.split('').slice(0, -2).join('')
		let fullHeight = el.closest('.read-more').querySelector('.read-more__text').scrollHeight + 25

		if (limitHeight >= fullHeight) {
			el.remove()
		}

		el.addEventListener('click', (e) => {
			if (!e.target.closest('.read-more_show')) {
				document.querySelectorAll('.read-more_show').forEach(elem => {
					elem.querySelector('.read-more__btn').innerHTML = currentText
					elem.classList.remove('read-more_show')
					elem.querySelector('.read-more__text').style.maxHeight = limitHeight + 'px'
				})
				e.target.closest('.read-more').classList.add('read-more_show')
				e.target.innerHTML = toggleText
				el.closest('.read-more').querySelector('.read-more__text').style.maxHeight = fullHeight + 'px'

			} else {
				document.querySelectorAll('.read-more_show').forEach(elem => {
					elem.querySelector('.read-more__btn').innerHTML = currentText
					elem.classList.remove('read-more_show')
					elem.querySelector('.read-more__text').style.maxHeight = limitHeight + 'px'
				})
			}
		})
	});


	// tabs
	document.querySelectorAll('.tab__item').forEach(el => {
		el.style.display = 'none'
	})
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


	// rating input
	document.querySelectorAll('.rating-field').forEach((element, index) => {
		element.querySelectorAll('.rating-field__star').forEach(el => {
			el.addEventListener('click', (e) => {
				document.querySelectorAll('.rating-field__star_active').forEach(elem => {
					elem.classList.remove('rating-field__star_active')
				})
				el.classList.toggle('rating-field__star_active')
				let increment = 0;
				let ratingValue
				document.querySelectorAll('.rating-field__star').forEach(elem => {
					increment++
					if (elem.closest('.rating-field__star_active')) {
						ratingValue = increment
					}
				})
				element.querySelector('.rating-input').value = ratingValue
			})
		})
	});


	// order steps
	document.querySelectorAll('.order__item').forEach((el, index) => {
		if (index == 0) {
			el.querySelector('.order__content').style.height = el.querySelector('.order__content').scrollHeight + 'px'
		}
		if (el.querySelector('.order__next-btn')) {
			let btn = el.querySelector('.order__next-btn')
			btn.addEventListener('click', (e) => {
				if (btn.closest('.order__item_filled') && document.querySelectorAll('.order__item')[index + 1]) {
					let nextItemContent = document.querySelectorAll('.order__item')[index + 1].querySelector('.order__content')
					nextItemContent.style.height = nextItemContent.scrollHeight + 2 + 'px'
					el.querySelector('.order__content').style.height = 0;
					document.querySelectorAll('.order__item_active').forEach(elem => {
						elem.classList.remove('order__item_active')
					})
					document.querySelectorAll('.order__item')[index + 1].classList.add('order__item_active')
				}
			})
		}
		if (el.querySelector('.order__prev-btn')) {
			let btn = el.querySelector('.order__prev-btn')
			btn.addEventListener('click', (e) => {
				if (document.querySelectorAll('.order__item')[index - 1]) {
					let prevItemContent = document.querySelectorAll('.order__item')[index - 1].querySelector('.order__content')
					prevItemContent.style.height = prevItemContent.scrollHeight + 2 + 'px'
					el.querySelector('.order__content').style.height = 0;
					document.querySelectorAll('.order__item_active').forEach(elem => {
						elem.classList.remove('order__item_active')
					})
					document.querySelectorAll('.order__item')[index - 1].classList.add('order__item_active')
				}
			})
		}
		if (!el.querySelector('input')) {
			el.classList.add('order__item_filled')
		} else {
			let filledInputs = 1;
			if (el.querySelector('input:not([type="radio"])')) {
				filledInputs = 0;
			}
			let filledInputsArr = []
			el.querySelectorAll('input:not([type="radio"])').forEach((elem, i) => {
				filledInputsArr[i] = 0;
				elem.addEventListener('input', (e) => {
					filledInputsArr[i] = 0;
					if (e.target.value) {
						filledInputsArr[i] = 1;
					}
					let emptyInputsArr = filledInputsArr.filter(num => num == 0)
					if (emptyInputsArr.length == 0) {
						filledInputs = 1;
					} else {
						filledInputs = 0;
					}
				})
			})
			let checkedInputs = 1;
			if (el.querySelector('input[type="radio"]')) {
				checkedInputs = 0;
			}
			el.querySelectorAll('input[type="radio"]').forEach((elem, i) => {
				elem.addEventListener('input', (e) => {
					if (e.target.checked) {
						checkedInputs = 1;
					}
				})
			})
			el.querySelectorAll('input').forEach(elem => {
				elem.addEventListener('input', (e) => {
					if (checkedInputs && filledInputs) {
						el.classList.add('order__item_filled')
					} else {
						if (el.closest('.order__item_filled')) {
							el.classList.remove('order__item_filled')
						}
					}
				})
			})
		}
	})


	// dropdown
	document.querySelectorAll('.dropdown__item').forEach(el => {
		el.addEventListener('click', (e) => {
			e.target.closest('.dropdown').querySelector('.dropdown__btn').innerHTML = e.target.innerHTML
		})
	})

});

var myMap;
ymaps.ready(init);

function init() {
	if (document.querySelector('#map')) {
		myMap = new ymaps.Map('map', {
			center: [59.996497, 30.785094], // СПб
			zoom: 18,
			controls: ['zoomControl']
		}, {
			searchControlProvider: 'yandex#search'
		});

		myPlacemark = new ymaps.Placemark([59.996497, 30.785094],
			{ balloonContent: 'X&G', },
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
