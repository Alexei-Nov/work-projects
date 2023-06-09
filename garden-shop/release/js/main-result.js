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


	// quiz range slider
	document.querySelectorAll('.quiz .range-slider').forEach(el => {
		let rangeLimits
		el.getAttribute('data-limits') ? rangeLimits = el.getAttribute('data-limits').split(',') : rangeLimits = [0, 100]
		let rangeStep
		el.getAttribute('data-step') ? rangeStep = el.getAttribute('data-step') : rangeStep = 10
		let rangeUnit
		el.getAttribute('data-unit') ? rangeUnit = el.getAttribute('data-unit') : rangeUnit = ''

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
			console.log(blockPosition);
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


	// remove autofocus
	Fancybox.bind('[data-fancybox]', {
		autoFocus: false,
	});


	// quiz
	document.querySelectorAll('.quiz').forEach(quiz => {
		let activeStageNum = 0
		let stagesCount = quiz.querySelectorAll('.quiz__stage').length
		let activeStageObj = quiz.querySelectorAll('.quiz__stage')[activeStageNum]
		let prevBtn = quiz.querySelector('.quiz__prev')
		let nextBtn = quiz.querySelector('.quiz__next')


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
!function(){"use strict";var t=function(t){this.input=null,this.inputDisplay=null,this.slider=null,this.sliderWidth=0,this.sliderLeft=0,this.pointerWidth=0,this.pointerR=null,this.pointerL=null,this.activePointer=null,this.selected=null,this.scale=null,this.step=0,this.tipL=null,this.tipR=null,this.timeout=null,this.valRange=!1,this.values={start:null,end:null},this.conf={target:null,values:null,set:null,range:!1,width:null,scale:!0,labels:!0,tooltip:!0,step:null,disabled:!1,onChange:null},this.cls={container:"rs-container",background:"rs-bg",selected:"rs-selected",pointer:"rs-pointer",scale:"rs-scale",noscale:"rs-noscale",tip:"rs-tooltip"};for(var i in this.conf)t.hasOwnProperty(i)&&(this.conf[i]=t[i]);this.init()};t.prototype.init=function(){return"object"==typeof this.conf.target?this.input=this.conf.target:this.input=document.getElementById(this.conf.target.replace("#","")),this.input?(this.inputDisplay=getComputedStyle(this.input,null).display,this.input.style.display="none",this.valRange=!(this.conf.values instanceof Array),!this.valRange||this.conf.values.hasOwnProperty("min")&&this.conf.values.hasOwnProperty("max")?this.createSlider():console.log("Missing min or max value...")):console.log("Cannot find target element...")},t.prototype.createSlider=function(){return this.slider=i("div",this.cls.container),this.slider.innerHTML='<div class="rs-bg"></div>',this.selected=i("div",this.cls.selected),this.pointerL=i("div",this.cls.pointer,["dir","left"]),this.scale=i("div",this.cls.scale),this.conf.tooltip&&(this.tipL=i("div",this.cls.tip),this.tipR=i("div",this.cls.tip),this.pointerL.appendChild(this.tipL)),this.slider.appendChild(this.selected),this.slider.appendChild(this.scale),this.slider.appendChild(this.pointerL),this.conf.range&&(this.pointerR=i("div",this.cls.pointer,["dir","right"]),this.conf.tooltip&&this.pointerR.appendChild(this.tipR),this.slider.appendChild(this.pointerR)),this.input.parentNode.insertBefore(this.slider,this.input.nextSibling),this.conf.width&&(this.slider.style.width=parseInt(this.conf.width)+"px"),this.sliderLeft=this.slider.getBoundingClientRect().left,this.sliderWidth=this.slider.clientWidth,this.pointerWidth=this.pointerL.clientWidth,this.conf.scale||this.slider.classList.add(this.cls.noscale),this.setInitialValues()},t.prototype.setInitialValues=function(){if(this.disabled(this.conf.disabled),this.valRange&&(this.conf.values=s(this.conf)),this.values.start=0,this.values.end=this.conf.range?this.conf.values.length-1:0,this.conf.set&&this.conf.set.length&&n(this.conf)){var t=this.conf.set;this.conf.range?(this.values.start=this.conf.values.indexOf(t[0]),this.values.end=this.conf.set[1]?this.conf.values.indexOf(t[1]):null):this.values.end=this.conf.values.indexOf(t[0])}return this.createScale()},t.prototype.createScale=function(t){this.step=this.sliderWidth/(this.conf.values.length-1);for(var e=0,s=this.conf.values.length;e<s;e++){var n=i("span"),l=i("ins");n.appendChild(l),this.scale.appendChild(n),n.style.width=e===s-1?0:this.step+"px",this.conf.labels?l.innerHTML=this.conf.values[e]:0!==e&&e!==s-1||(l.innerHTML=this.conf.values[e]),l.style.marginLeft=l.clientWidth/2*-1+"px"}return this.addEvents()},t.prototype.updateScale=function(){this.step=this.sliderWidth/(this.conf.values.length-1);for(var t=this.slider.querySelectorAll("span"),i=0,e=t.length;i<e;i++)t[i].style.width=this.step+"px";return this.setValues()},t.prototype.addEvents=function(){var t=this.slider.querySelectorAll("."+this.cls.pointer),i=this.slider.querySelectorAll("span");e(document,"mousemove touchmove",this.move.bind(this)),e(document,"mouseup touchend touchcancel",this.drop.bind(this));for(var s=0,n=t.length;s<n;s++)e(t[s],"mousedown touchstart",this.drag.bind(this));for(var s=0,n=i.length;s<n;s++)e(i[s],"click",this.onClickPiece.bind(this));return window.addEventListener("resize",this.onResize.bind(this)),this.setValues()},t.prototype.drag=function(t){if(t.preventDefault(),!this.conf.disabled){var i=t.target.getAttribute("data-dir");return"left"===i&&(this.activePointer=this.pointerL),"right"===i&&(this.activePointer=this.pointerR),this.slider.classList.add("sliding")}},t.prototype.move=function(t){if(this.activePointer&&!this.conf.disabled){var i=("touchmove"===t.type?t.touches[0].clientX:t.pageX)-this.sliderLeft-this.pointerWidth/2;return(i=Math.round(i/this.step))<=0&&(i=0),i>this.conf.values.length-1&&(i=this.conf.values.length-1),this.conf.range?(this.activePointer===this.pointerL&&(this.values.start=i),this.activePointer===this.pointerR&&(this.values.end=i)):this.values.end=i,this.setValues()}},t.prototype.drop=function(){this.activePointer=null},t.prototype.setValues=function(t,i){var e=this.conf.range?"start":"end";return t&&this.conf.values.indexOf(t)>-1&&(this.values[e]=this.conf.values.indexOf(t)),i&&this.conf.values.indexOf(i)>-1&&(this.values.end=this.conf.values.indexOf(i)),this.conf.range&&this.values.start>this.values.end&&(this.values.start=this.values.end),this.pointerL.style.left=this.values[e]*this.step-this.pointerWidth/2+"px",this.conf.range?(this.conf.tooltip&&(this.tipL.innerHTML=this.conf.values[this.values.start],this.tipR.innerHTML=this.conf.values[this.values.end]),this.input.value=this.conf.values[this.values.start]+","+this.conf.values[this.values.end],this.pointerR.style.left=this.values.end*this.step-this.pointerWidth/2+"px"):(this.conf.tooltip&&(this.tipL.innerHTML=this.conf.values[this.values.end]),this.input.value=this.conf.values[this.values.end]),this.values.end>this.conf.values.length-1&&(this.values.end=this.conf.values.length-1),this.values.start<0&&(this.values.start=0),this.selected.style.width=(this.values.end-this.values.start)*this.step+"px",this.selected.style.left=this.values.start*this.step+"px",this.onChange()},t.prototype.onClickPiece=function(t){if(!this.conf.disabled){var i=Math.round((t.clientX-this.sliderLeft)/this.step);return i>this.conf.values.length-1&&(i=this.conf.values.length-1),i<0&&(i=0),this.conf.range&&i-this.values.start<=this.values.end-i?this.values.start=i:this.values.end=i,this.slider.classList.remove("sliding"),this.setValues()}},t.prototype.onChange=function(){var t=this;this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(function(){if(t.conf.onChange&&"function"==typeof t.conf.onChange)return t.conf.onChange(t.input.value)},500)},t.prototype.onResize=function(){return this.sliderLeft=this.slider.getBoundingClientRect().left,this.sliderWidth=this.slider.clientWidth,this.updateScale()},t.prototype.disabled=function(t){this.conf.disabled=t,this.slider.classList[t?"add":"remove"]("disabled")},t.prototype.getValue=function(){return this.input.value},t.prototype.destroy=function(){this.input.style.display=this.inputDisplay,this.slider.remove()};var i=function(t,i,e){var s=document.createElement(t);return i&&(s.className=i),e&&2===e.length&&s.setAttribute("data-"+e[0],e[1]),s},e=function(t,i,e){for(var s=i.split(" "),n=0,l=s.length;n<l;n++)t.addEventListener(s[n],e)},s=function(t){var i=[],e=t.values.max-t.values.min;if(!t.step)return console.log("No step defined..."),[t.values.min,t.values.max];for(var s=0,n=e/t.step;s<n;s++)i.push(t.values.min+s*t.step);return i.indexOf(t.values.max)<0&&i.push(t.values.max),i},n=function(t){return!t.set||t.set.length<1?null:t.values.indexOf(t.set[0])<0?null:!t.range||!(t.set.length<2||t.values.indexOf(t.set[1])<0)||null};window.rSlider=t}();