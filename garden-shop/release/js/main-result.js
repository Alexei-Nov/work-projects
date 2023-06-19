document.addEventListener('DOMContentLoaded', function () {

	// slider home
	let sliderHome = () => {
		let SwiperHome = new Swiper('.home-slider__container', {
			slidesPerView: 1,
			spaceBetween: 30,
			loop: true,
			centeredSlides: true,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
				waitForTransition: false,
			},

			pagination: {
				el: ".home-slider__pagination",
				type: 'bullets',
				clickable: true,
			},
			navigation: {
				nextEl: '.home-slider__next',
				prevEl: '.home-slider__prev',
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
					spaceBetween: 10,
				},
				769: {
					slidesPerView: 1.25,
					spaceBetween: 20,
				},
				1024: {
					slidesPerView: 1,
					spaceBetween: 30,
				},
			}
		});
	};
	sliderHome()

	// slider default
	let sliderDefault = () => {
		let SwiperDefault = new Swiper('.default-slider__container', {
			slidesPerView: 'auto',
			spaceBetween: 30,
			loop: true,
			autoHeight: true,
			pagination: {
				el: ".default-slider__pagination",
				type: 'bullets',
				clickable: true,
			},
			navigation: {
				nextEl: '.default-slider__next',
				prevEl: '.default-slider__prev',
			},
			scrollbar: {
				el: '.default-slider__scrollbar',
				draggable: true,
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
					spaceBetween: 15,
				},
				680: {
					slidesPerView: 2,
					spaceBetween: 15,
				},
				769: {
					slidesPerView: 'auto',
					spaceBetween: 15,
				},
				991: {
					spaceBetween: 30,
				}
			}
		});

		// update slider when tab changes
		document.querySelectorAll('.default-slider').forEach((el, index) => {
			if (el.closest('.tab')) {
				el.closest('.tab').querySelectorAll('.tab__header').forEach(elem => {
					elem.addEventListener('click', (e) => {
						SwiperDefault[index].update()
					})
				})
			}
		})
	};
	sliderDefault()

	// slider card
	let sliderCard = () => {
		let SwiperCard = new Swiper('.card__gallery', {
			slidesPerView: 1,
			spaceBetween: 30,
			loop: true,
			nested: true,
			pagination: {
				el: ".card__gallery-pagination",
				type: 'bullets',
				clickable: true,
			},

		});
	};
	sliderCard()

	// slider category
	let sliderCategory = () => {
		let SwiperCategory = new Swiper('.category__slider', {
			slidesPerView: 1,
			spaceBetween: 30,
			loop: true,
			pagination: {
				el: ".category__pagination",
				type: 'bullets',
				clickable: true,
			},
			navigation: {
				nextEl: '.category__next',
				prevEl: '.category__prev',
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
					spaceBetween: 15,
				},
				570: {
					slidesPerView: 2,
					spaceBetween: 15,
				},
				769: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
				1200: {
					slidesPerView: 4,
				}
			}
		});
	};
	sliderCategory()

	// slider partners
	let sliderPartners = () => {
		let SwiperPartners = new Swiper('.partners__slider', {
			slidesPerView: 'auto',
			spaceBetween: 24,
			loop: true,
			pagination: {
				el: ".partners__pagination",
				type: 'bullets',
				clickable: true,
			},
			navigation: {
				nextEl: '.partners__next',
				prevEl: '.partners__prev',
			},
			breakpoints: {
				0: {
					spaceBetween: 10,
					slidesPerView: 2,
				},
				570: {
					spaceBetween: 24,
					slidesPerView: 'auto',
				}
			}
		});
	};
	sliderPartners()

	// slider Tab
	let sliderTab = () => {
		let SwiperTab = new Swiper('.tab-slider__container', {
			slidesPerView: 1,
			spaceBetween: 30,
			loop: true,
			pagination: {
				el: ".tab-slider__pagination",
				type: 'bullets',
				clickable: true,
			},
			navigation: {
				nextEl: '.tab-slider__next',
				prevEl: '.tab-slider__prev',
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
					spaceBetween: 15,
				},
				570: {
					slidesPerView: 2,
					spaceBetween: 15,
				},
				769: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
				1300: {
					slidesPerView: 4,
				}
			}
		});
	};
	sliderTab()

	// slider review
	let sliderReview = () => {
		let SwiperReview = new Swiper('.review__slider', {
			slidesPerView: 'auto',
			spaceBetween: 30,
			autoHeight: true,
			navigation: {
				nextEl: '.review__next',
				prevEl: '.review__prev',
			},
			scrollbar: {
				el: '.review__scrollbar',
				draggable: true,
			},
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
	sliderReview()

	// slider detail-block
	let sliderDetailBlock = () => {
		let SwiperDetailBlock = new Swiper('.detail-block__slider', {
			slidesPerView: 1,
			spaceBetween: 30,
			navigation: {
				nextEl: '.detail-block__next',
				prevEl: '.detail-block__prev',
			},
			pagination: {
				el: ".detail-block__pagination",
				type: 'bullets',
				clickable: true,
			},
		});
	};
	sliderDetailBlock()


	// slider advantages
	let sliderAdvantages = () => {
		let SwiperAdvantages = new Swiper('.advantages__slider', {
			slidesPerView: 4,
			spaceBetween: 30,
			grid: {
				rows: 2,
			},
			scrollbar: {
				el: '.advantages__scrollbar',
				draggable: true,
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
					spaceBetween: 15,
				},
				570: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
				769: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
				1025: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			}
		});
	};
	sliderAdvantages()


	// slider video-review
	let sliderVideoReview = () => {
		let SubswiperVideoReview = new Swiper('.video-review__subslider', {
			slidesPerView: '3',
			spaceBetween: 20,
			direction: 'vertical',
			watchSlidesProgress: true,
			scrollbar: {
				el: '.video-review__scrollbar',
				draggable: true,
			},
			pagination: {
				el: ".video-review__pagination",
				type: 'bullets',
				clickable: true,
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
					direction: 'horizontal',
				},
				570: {
					slidesPerView: 2.5,
					direction: 'horizontal',
				},
				1025: {
					slidesPerView: 3,
					direction: 'vertical',
				},
			}
		});

		let SwiperVideoReview = new Swiper('.video-review__slider', {
			slidesPerView: 1,
			spaceBetween: 30,
			thumbs: {
				swiper: SubswiperVideoReview,
			},
		});

	};
	sliderVideoReview()



	// phone mask
	document.querySelectorAll('[type="tel"]').forEach(el => {
		let mask = IMask(el, { mask: '+{7}(000)000-00-00' })
	})


	// sticky header
	document.addEventListener('scroll', (e) => {
		if (window.pageYOffset > 30) {
			document.querySelector('.body-wrapper').classList.add('header-stick')
		} else {
			document.querySelector('.body-wrapper').classList.remove('header-stick')
		}
	})

	// dropdown
	document.querySelectorAll('.dropdown').forEach(el => {
		el.addEventListener('click', (e) => {
			el.classList.toggle('dropdown_active')
			if (e.target.closest('.dropdown__list')) {
				el.querySelector('.dropdown__title-text').innerHTML = e.target.innerText
			}
		})
	})


	// compare-icon
	document.querySelectorAll('.icon').forEach(el => {
		el.addEventListener('click', (e) => {
			el.classList.toggle('icon_active')
		})
	})


	// tab
	document.querySelectorAll('.tab').forEach(el => {
		el.addEventListener('click', (e) => {
			if (e.target.closest('.tab__link')) {
				el.querySelectorAll('.tab__link').forEach(elem => {
					elem.classList.remove('tab__link-active')
				})
				e.target.classList.add('tab__link-active')

				el.querySelectorAll('.tab__item').forEach(elem => {
					elem.classList.remove('tab__item-active')
				})
				let index = [...e.target.parentElement.children].indexOf(e.target)
				el.querySelectorAll('.tab__item')[index].classList.add('tab__item-active')
			}
		})
	})


	// replace header search form
	if (window.innerWidth < 570) {
		let cloneEl = document.querySelector('.header__search').cloneNode(true)
		document.querySelector('.header__mid').append(cloneEl)
		document.querySelector('.header__body .header__search').remove()
	}


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
					e.target.closest('.a-container').querySelector('.a-panel').style.height = e.target.closest('.a-container').querySelector('.a-panel').scrollHeight + 'px'
				} else {
					e.target.closest('.a-container').classList.remove('a-container_open');
					e.target.closest('.a-container').querySelector('.a-panel').style.height = 0
				}
			}
		});
	}


	// catalog filter accordion
	initAcc('.accordion_v2', false)


	// footer nav and catalog list accordion
	if (window.innerWidth < 570) {
		initAcc('.accordion_v1', true)
	}


	// popup info
	document.querySelectorAll('.popup-info').forEach(el => {
		el.addEventListener('click', (e) => {
			if (e.target.closest('.popup-info__close')) {
				el.classList.add('popup-info_hide')
			}
		})
	})


	// menu 
	document.querySelector('.menu').addEventListener('click', (e) => {
		if (e.target.closest('.menu__btn')) {
			document.querySelector('body').classList.toggle('menu-open')
		} else if (!e.target.closest('.menu__nav') && !e.target.closest('.menu__list')) {
			document.querySelector('body').classList.remove('menu-open')
		}
	})


	// tags
	document.querySelectorAll('.tags').forEach(el => {
		el.querySelector('.tags__btn').addEventListener('click', (e) => {
			let currentText = e.target.innerText
			let toggleText = e.target.getAttribute('data-toggle-text')
			e.target.setAttribute('data-toggle-text', currentText)
			e.target.innerText = toggleText
			el.classList.toggle('tags_open')
		})
	})


	// catalog range slider
	document.querySelectorAll('.catalog .range-slider').forEach(el => {
		let rangeLimits
		el.getAttribute('data-limits') ? rangeLimits = el.getAttribute('data-limits').split(',') : rangeLimits = [0, 100]
		let rangeStep
		el.getAttribute('data-step') ? rangeStep = el.getAttribute('data-step') : rangeStep = 10
		let rangeUnit
		el.getAttribute('data-unit') ? rangeUnit = el.getAttribute('data-unit') : rangeUnit = ''

		var catalogRangeSlider = new rSlider({
			target: el.querySelector('.range-slider__slider'),
			values: { min: +rangeLimits[0], max: +rangeLimits[1] },
			step: rangeStep,
			range: true,
			scale: false,
			labels: false,
			tooltip: false,
			onChange: function (vals) {
				let valueArr = catalogRangeSlider.getValue().split(',')
				el.querySelector('.range-slider__input_min').value = valueArr[0] + rangeUnit
				el.querySelector('.range-slider__input_max').value = valueArr[1] + rangeUnit
			}
		});
	})


	// catalog sort
	document.querySelectorAll('.catalog__sort').forEach(el => {
		el.addEventListener('click', (e) => {
			if (e.target.closest('.catalog__sort-item')) {
				el.querySelectorAll('.catalog__sort-item_active').forEach(elem => {
					elem.classList.remove('catalog__sort-item_active')
				})
				e.target.closest('.catalog__sort-item').classList.add('catalog__sort-item_active')
				el.classList.remove('catalog__sort_open')
			} else if (e.target.closest('.catalog__sort-title')) {
				el.classList.toggle('catalog__sort_open')
			}
		})
	})


	// catalog template
	document.querySelectorAll('.catalog__template-item').forEach(el => {
		el.addEventListener('click', (e) => {
			document.querySelectorAll('.catalog__template-item_active').forEach(elem => {
				elem.classList.remove('catalog__template-item_active')
			})
			el.classList.add('catalog__template-item_active')
		})
	})


	// catalog filter
	document.querySelectorAll('.catalog__filter').forEach(el => {
		el.addEventListener('click', (e) => {
			if (!e.target.closest('.catalog__filter-wrapper')) {
				document.querySelector('body').classList.remove('filter-open')
			}
		})
	})

	document.querySelectorAll('.catalog__filter-menu-btn').forEach(el => {
		el.addEventListener('click', (e) => {
			document.querySelector('body').classList.toggle('filter-open')
		})
	})


	// acnhor
	document.querySelectorAll('.anchor').forEach((el => {
		el.addEventListener('click', (e) => {
			e.preventDefault()
			let currentAnchor = e.target.href.split('#').slice(1).join('')
			let blockPosition = document.getElementById(currentAnchor).offsetTop - 276
			window.scroll({
				top: blockPosition,
				left: 0,
				behavior: 'smooth'
			});
		})
	}))


	// info item popup
	document.addEventListener('click', (e) => {
		if (e.target.closest('.info-item__btn') && !e.target.closest('.info-item_open')
			|| e.target.closest('.info-item__popup') && !e.target.closest('.info-item__btn')) {
			document.querySelectorAll('.info-item').forEach(el => {
				el.classList.remove('info-item_open')
			})
			e.target.closest('.info-item').classList.add('info-item_open')
		} else {
			document.querySelectorAll('.info-item').forEach(el => {
				el.classList.remove('info-item_open')
			})
		}
	})


	// card basket icon
	document.querySelectorAll('.card-basket').forEach(el => {
		el.addEventListener('click', (e) => {
			el.classList.toggle('card-basket_add')
		})
	})


	// fancybox defaults
	Fancybox.bind('[data-fancybox]', {
		autoFocus: false,
		dragToClose: false,
	});


	// quiz range slider
	function quizRangeSliderFunc() {

		document.querySelectorAll('.quiz__stage_active .range-slider').forEach(el => {
			el.querySelectorAll('.rs-container').forEach(elem => {
				elem.remove()
			})
			let rangeLimits
			el.getAttribute('data-limits') ? rangeLimits = el.getAttribute('data-limits').split(',') : rangeLimits = [0, 100]
			let rangeStep
			el.getAttribute('data-step') ? rangeStep = el.getAttribute('data-step') : rangeStep = 10
			let rangeUnit
			el.getAttribute('data-unit') ? rangeUnit = el.getAttribute('data-unit') : rangeUnit = ''

			quizRangeSlider ? quizRangeSlider.destroy() : ''
			var quizRangeSlider = new rSlider({
				target: el.querySelector('.range-slider__slider'),
				values: { min: +rangeLimits[0], max: +rangeLimits[1] },
				step: rangeStep,
				range: false,
				scale: false,
				labels: false,
				tooltip: true,
				onChange: function (vals) {
					el.querySelector('.range-slider__input_max').value = vals + rangeUnit
				}
			});
		})
	}


	document.querySelectorAll('a[href="#popup-quiz"]').forEach(el => {
		el.addEventListener('click', (e) => {
			setTimeout(() => {
				quizRangeSliderFunc()
			}, 10)
		})
	})


	// quiz
	document.querySelectorAll('.quiz').forEach(quiz => {
		let activeStageNum = 0
		let stagesCount = quiz.querySelectorAll('.quiz__stage').length
		let activeStageObj = quiz.querySelectorAll('.quiz__stage')[activeStageNum]
		let prevBtn = quiz.querySelector('.quiz__prev')
		let nextBtn = quiz.querySelector('.quiz__next')

		inputCheck()

		quiz.querySelectorAll('.quiz__btn').forEach(btn => {
			btn.addEventListener('click', (e) => {
				btn.closest('.quiz__prev') ? activeStageNum-- : activeStageNum++
				activeStageObj = quiz.querySelectorAll('.quiz__stage')[activeStageNum]


				endPointCheck()
				updateDiscountBar()
				updateStage()
				updateProgressBar()
				inputCheck()
			})
		})

		quiz.addEventListener('input', inputCheck)

		nextBtn.addEventListener('click', (e) => {
			setTimeout(() => {
				quizRangeSliderFunc()
			}, 0)
		})

		function inputCheck() {
			let inputArr = 0
			activeStageObj.querySelectorAll('input').forEach(input => {
				let inputType = input.getAttribute('type')
				if ((input.checked && (inputType == 'radio' || inputType == 'checkbox')) || input.value != '' && !(inputType == 'radio' || inputType == 'checkbox')) {
					inputArr++
				}
			})
			if (inputArr > 0) {
				nextBtn.classList.remove('quiz__btn_disable')
			} else {
				nextBtn.classList.add('quiz__btn_disable')
			}
		}

		function endPointCheck() {
			if (activeStageNum == 0) {
				prevBtn.classList.add('quiz__btn_remove')
			} else {
				prevBtn.classList.remove('quiz__btn_remove')
			}

			if (activeStageNum == stagesCount - 1) {
				replaceBtn()
			}
			nextBtn.classList.remove('quiz__btn_disable')
		}

		function updateDiscountBar() {
			quiz.querySelectorAll('.quiz__discount-item_active').forEach(item => {
				item.classList.remove('quiz__discount-item_active')
			})
			quiz.querySelectorAll('.quiz__discount-item').forEach((item, index) => {
				if (index <= activeStageNum) {
					item.classList.add('quiz__discount-item_active')
				}
			})

			quiz.querySelector('.quiz__discount-total-num ').innerText = quiz.querySelector(`.quiz__discount-item_active:nth-child(${activeStageNum + 1}) span`).innerText
		}

		function updateStage() {
			quiz.querySelectorAll('.quiz__stage_active').forEach(stage => {
				stage.classList.remove('quiz__stage_active')
			})
			activeStageObj.classList.add('quiz__stage_active')
		}

		function updateProgressBar() {
			let progressNum = Math.floor(100 / (stagesCount - 1) * (activeStageNum))
			quiz.querySelector('.quiz__progress-title span').innerHTML = progressNum + '%'
			quiz.querySelector('.quiz__progress-fill').style.width = progressNum + '%'
		}

		function replaceBtn() {
			let sendBtn = document.createElement('input')
			sendBtn.setAttribute('type', 'submit')
			sendBtn.setAttribute('value', 'Показать результат')
			sendBtn.classList.add('btn')
			sendBtn.classList.add('quiz__btn-send-form')
			nextBtn.after(sendBtn)
			nextBtn.remove()
			prevBtn.remove()
		}
	})


	// calendar
	let date = new Date
	const calendar = new VanillaCalendar('.vanilla-calendar', {
		settings: {
			lang: 'ru',
		},
		date: {
			min: '1920-01-01',
			max: date.toISOString().split('T')[0],
		},
		actions: {
			clickDay(event, dates) {
				event.target.closest('.input').querySelector('.input__field').value = dates
			},
		},
	});
	calendar.init();

	document.querySelectorAll('.input_with-calendar').forEach(input => {
		input.addEventListener('click', (e) => {
			if (!e.target.closest('.input__calendar')
				&& !e.target.closest('.vanilla-calendar-header')
				&& !e.target.closest('.vanilla-calendar-months')
				&& !e.target.closest('.vanilla-calendar-years')) {
				input.classList.toggle('input_calendar-open')
			}
		})
	})


	// 3d render
	function show_3d(pid, add_compl_id) {
		add_compl_id = add_compl_id || '';
		if (!pid) return;
		$.ajax({
			url: './product_3d_ajax.php',
			type: 'POST',
			cache: false,
			dataType: 'json',
			data: 'pid=' + pid + '&add_compl_id=' + add_compl_id,
			success: function (res) {
				var title = res['title'];
				var fold = res['fold'];

				var windowHeight = $(window).height();
				var windowWidth = $(window).width();

				var img_w = 1280;
				var img_h = 720;

				var z = img_w / img_h;

				img_h = windowHeight - 150;

				if (img_w > windowWidth - 90) {
					img_w = windowWidth - 90;
					img_w = img_w > 1280 ? 1280 : img_w;
					img_h = img_w / z;
				} else {
					img_w = img_h * z;
					if (img_w > 1280) {
						img_w = 1280;
						img_h = img_w / z;
					}
				}

				open_modal('#modal_3d');

				setTimeout(function () {
					$('.spritespin').spritespin({
						source: SpriteSpin.sourceArray(fold + '/images-{lane}-{frame}.jpg', {
							lane: [0, 3],
							frame: [0, 35],
							digits: 2,
						}),
						width: img_w,
						height: img_h,
						frames: 36,
						lanes: 4,
						sense: 1,
						senseLane: 2,
						animate: false,
						plugins: ['progress', '360', 'drag'],
					});

				}, 100);
			},
			error: function () { },
		});
	}

	document.querySelectorAll('.btn-3d').forEach(btn => {
		btn.addEventListener('click', show_3d)
	})


	// password input toggle visibility
	document.querySelectorAll('.input__pass-toggle').forEach(btn => {
		let input = btn.closest('.input').querySelector('.input__field')
		btn.addEventListener('click', (e) => {
			btn.classList.toggle('input__pass-toggle_show')
			input.getAttribute('type') == 'password' ? input.setAttribute('type', 'text') : input.setAttribute('type', 'password')
		})
	})
})



window.onload = () => {
	// read more 
	document.querySelectorAll('.read-more').forEach(el => {
		let btn = el.querySelector('.read-more__btn')
		let text = el.querySelector('.read-more__text')

		let limitHeight = +text.style.maxHeight.split('').slice(0, -2).join('')
		let fullHeight = text.scrollHeight

		if (limitHeight >= fullHeight) {
			btn.remove()
			el.classList.toggle('read-more_open')
		}

		btn.addEventListener('click', (e) => {
			e.target.closest('.read-more_open') ? text.style.maxHeight = limitHeight + 'px' : text.style.maxHeight = fullHeight + 'px'

			let currentText = btn.innerHTML
			let toggleText = btn.getAttribute('data-toggle-text')
			btn.setAttribute('data-toggle-text', currentText)
			btn.innerText = toggleText
			el.classList.toggle('read-more_open')
		})
	});
}