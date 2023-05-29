//--------slider achieve----------------------------------
let sliderAchieve = () => {
	let SwiperAchieve = new Swiper('.achieve__slider ', {
		slidesPerView: 1,
		spaceBetween: 30,
		autoHeight: true,
		navigation: {
			nextEl: '.achieve-next',
			prevEl: '.achieve-prev',
		},
		pagination: {
			el: ".achieve-pagination",
			type: "fraction",
		},
		breakpoints: {
			0: {
				autoHeight: true,
			},
			1561: {
				autoHeight: false,
			}
		}
	});
};

//--------slider tile----------------------------------
let sliderTile = () => {
	let SwiperAchieve = new Swiper('.tile__slider ', {
		slidesPerView: 1,
		spaceBetween: 30,
	});
};


//------------slider team-----------------------
let sliderTeam = () => {
	let swiperTeam = new Swiper('.team__slider', {
		slidesPerView: 4,
		spaceBetween: 30,
		observer: true,
		observeParents: true,
		pagination: {
			el: ".team-pagination",
			type: "fraction",
		},
		navigation: {
			nextEl: '.team-next',
			prevEl: '.team-prev',
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
			},
			1301: {
				slidesPerView: 4,
			}
		}
	});
};


//------------slider service-----------------------
let sliderService = () => {
	let swiperService = new Swiper('.service__slider', {
		slidesPerView: 1,
		spaceBetween: 15,
		allowTouchMove: false,
		autoHeight: true,

		preventClicks: false,
		preventClicksPropagation: false,
		resistance: false,

		pagination: {
			el: ".service-pagination",
			type: "fraction",
		},
		navigation: {
			nextEl: '.service-next',
			prevEl: '.service-prev',
		},
	});
};


//------------slider review-----------------------
let sliderReview = () => {
	let swiperReview = new Swiper('.review__slider', {
		slidesPerView: 1,
		spaceBetween: 30,
		autoHeight: true,
		pagination: {
			el: ".review-pagination",
			type: "fraction",
		},
		navigation: {
			nextEl: '.review-next',
			prevEl: '.review-prev',
		},
	});
};


//------------slider partners-----------------------
let sliderPartners = () => {
	let swiperPartners = new Swiper('.partners__slider', {
		slidesPerView: 1,
		spaceBetween: 30,
		grid: {
			rows: 4,
		},
		pagination: {
			el: ".partners-pagination",
			type: "fraction",
		},
		navigation: {
			nextEl: '.partners-next',
			prevEl: '.partners-prev',
		},
		breakpoints: {
			0: {
				spaceBetween: 10,
			},
			570: {
				spaceBetween: 30,
			},

		}
	});
};


//------------slider blog-----------------------
let sliderBlog = () => {
	let swiperBlog = new Swiper('.blog__slider', {
		slidesPerView: 3,
		spaceBetween: 30,
		loop: true,
		breakpoints: {
			0: {
				spaceBetween: 10,
				slidesPerView: 1,
			},
			769: {
				spaceBetween: 30,
				slidesPerView: 2,
			},
			1025: {
				slidesPerView: 3,
			}
		}
	});
};

//------------slider code-----------------------
let sliderCode = () => {
	let swiperCode = new Swiper('.code__slider', {
		slidesPerView: 1,
		spaceBetween: 30,
		simulateTouch: false,
		allowTouchMove: false,
		pagination: {
			el: ".code-pagination",
			type: "fraction",
		},
		navigation: {
			nextEl: '.code-next',
			prevEl: '.code-prev',
		},
		breakpoints: {
			0: {
				spaceBetween: 10,
			},
			570: {
				spaceBetween: 30,
			},
		}
	});
};

//------------slider advantage-----------------------
let sliderAdvantage = () => {
	let swiperAdvantage = new Swiper('.advantage__slider', {
		slidesPerView: 1,
		spaceBetween: 0,
		autoHeight: true,
		pagination: {
			el: ".advantage-pagination",
			type: "fraction",
		},
		navigation: {
			nextEl: '.advantage-next',
			prevEl: '.advantage-prev',
		},
	});
};

//------------slider career-----------------------
let sliderCareer = () => {
	let swiperCareer = new Swiper('.career__slider', {
		slidesPerView: 3,
		spaceBetween: 30,
		// autoHeight: true,
		loop: true,
		coverflowEffect: {
			rotate: 50,
			stretch: 0,
			depth: 100,
			modifier: 1,
			slideShadows: true,
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

//------------slider cert-----------------------
let sliderCert = () => {
	let swiperCert = new Swiper('.cert__slider', {
		slidesPerView: 'auto',
		spaceBetween: 30,
		// loop: true,
		breakpoints: {
			0: {
				spaceBetween: 20,
			},
			571: {
				spaceBetween: 30,
			},

		},
		pagination: {
			el: ".cert-pagination",
			type: "fraction",
		},
		navigation: {
			nextEl: '.cert-next',
			prevEl: '.cert-prev',
		},
	});
};


//------------slider menu-----------------------
let sliderMenu = () => {
	let swiperMenu = new Swiper('.review-page__slider', {
		slidesPerView: 4,
		spaceBetween: 30,
		loop: true,
		direction: "vertical",
		slidesPerView: "auto",
		centeredSlides: true,
		mousewheel: true,
		effect: "coverflow",
		coverflowEffect: {
			rotate: -30,
			stretch: 0,
			depth: 100,
			modifier: 1,
			slideShadows: false,

		},
	});
};

//------------slider project-----------------------
let sliderProject = () => {
	let swiperProject = new Swiper('.project__slider', {
		slidesPerView: 'auto',
		spaceBetween: 30,
		loop: true,
		pagination: {
			el: ".project-pagination",
			type: "fraction",
		},
		navigation: {
			nextEl: '.project-next',
			prevEl: '.project-prev',
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			1201: {
				slidesPerView: 'auto',
			}
		}
	});
};

//------------slider seo example-----------------------
let sliderSeoExample = () => {
	let swiperSeoExample = new Swiper('.seo-example__slider', {
		slidesPerView: 3,
		spaceBetween: 30,
		autoHeight: true,
		loop: true,
		autoplay: {
			delay: 2000,
			disableOnInteraction: false,
		},
		pagination: {
			el: ".seo-example-pagination",
			type: "fraction",
		},
		navigation: {
			nextEl: '.seo-example-next',
			prevEl: '.seo-example-prev',
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
				autoHeight: true,
				autoplay: false,
			},
			1025: {
				slidesPerView: 2,
				// autoHeight: false,
				autoplay: {
					delay: 2000,
					disableOnInteraction: false,
				},
			},
			1401: {
				slidesPerView: 3,
				// autoHeight: false,
				autoplay: {
					delay: 2000,
					disableOnInteraction: false,
				},
			}
		}
	});

	document.querySelectorAll('.show-more__btn').forEach(el => {
		el.addEventListener('click', (e) => {
			setInterval((e) => {
				swiperSeoExample.updateAutoHeight()
			}, 10)
		})
	})
};

window.onload = (e) => {
	sliderAchieve();
	sliderTeam();
	sliderService();
	sliderReview();
	sliderBlog();
	sliderCode();
	sliderAdvantage();
	sliderCareer();
	sliderCert();
	sliderMenu();
	sliderProject();
	sliderSeoExample();

	if (window.innerWidth < 1024) {
		sliderTile();
	}
	if (window.innerWidth < 768) {
		sliderPartners();
	}


	//--------------------------------anchor open----------------------------

	document.querySelectorAll('.header-anchor').forEach(el => {
		let currentHeight = getComputedStyle(el).height.split('').slice(0, -2).join('')
		let itemHeight = el.querySelector('.header-anchor__item').clientHeight + 2
		let currentWidth = el.clientWidth
		let itemWidth = el.querySelector('.header-anchor__item_open').clientWidth + 2

		el.querySelector('.header-anchor__item_open').style.minWidth = itemWidth + "px"

		if (currentHeight > itemHeight) {
			el.style.maxHeight = itemHeight + "px"
		}
		let btnText = el.querySelector('.header-anchor__item_open').innerText
		let btnTextTogle = el.querySelector('.header-anchor__item_open').getAttribute('toggle-text')

		el.querySelector('.header-anchor__item_open').addEventListener('click', (e) => {
			e.target.classList.toggle('header-anchor__item_open-active')
			if (!e.target.closest('.header-anchor__item_open-active')) {
				el.style.maxHeight = itemHeight + "px"
				e.target.innerHTML = btnText
			} else {
				el.style.maxHeight = '500px'
				e.target.innerHTML = btnTextTogle
			}
		})
		let itemNum = 0
		let wrapperWidth = 0
		document.querySelectorAll('.header-anchor__item').forEach((elem, index) => {
			wrapperWidth += elem.clientWidth + 17
			if (wrapperWidth < currentWidth - itemWidth) {
				itemNum = index
			}
		})

		el.querySelectorAll('.header-anchor__item')[itemNum].after(el.querySelector('.header-anchor__item_open'))
	})

	//-------------------------------show-more btn-------------------------------------

	document.querySelectorAll('.show-more__btn').forEach((el, index) => {
		let currentWrapper = document.querySelectorAll('.show-more__body')[index]
		let currentLimmit = window.getComputedStyle(currentWrapper).maxHeight.split('').slice(0, -2).join('')
		if (currentWrapper.clientHeight < +currentLimmit) {
			el.style.display = "none"
		}
		el.addEventListener('click', (e) => {
			e.target.closest('.show-more').classList.toggle('show-more_opened')
			let attrValue = e.target.getAttribute('togle-text')
			let textValue = e.target.innerHTML
			e.target.setAttribute('togle-text', textValue)
			e.target.innerHTML = attrValue
		})
	})
}





document.addEventListener('DOMContentLoaded', function () {

	//------------------------------marquee----------------------

	document.querySelectorAll('.running-text').forEach(el => {
		let marqueeEl = el.querySelector('.running-text__text').innerHTML
		let repeatCount = 5
		if (this.documentElement.querySelector('.not-found')) {
			repeatCount = 16
		}
		for (let i = 0; i < repeatCount; i++) {
			let newEl = document.createElement('div')
			newEl.innerHTML = marqueeEl
			el.querySelector('.running-text__content').append(newEl)
			newEl.classList.add('running-text__text')
		}

		let clone = el.querySelector(".running-text__content").cloneNode(true);
		clone.classList.remove('running-text__content')
		clone.classList.add('running-text__content_clone')
		el.querySelector(".running-text__content").appendChild(clone);
	})


	//------------------------nav open--------------------------------

	document.querySelectorAll('.header__menu-btn').forEach(el => {
		el.addEventListener('click', (e) => {
			document.querySelectorAll('.header__menu-btn').forEach(btn => {
				btn.style.pointerEvents = 'none'
				setTimeout(() => {
					btn.style.pointerEvents = 'all'
				}, 800)
			})


			if (!e.target.closest('.nav-open')) {
				e.target.closest('.header').classList.add('nav-open')
				document.querySelector('.header').style.overflow = 'unset'
				document.body.style.overflow = "hidden"
			} else {
				e.target.closest('.header').classList.remove('nav-open')

				if (document.querySelector('.overflow-unset')) {
					document.querySelector('.overflow-unset').style.overflow = 'hidden'
					setTimeout(() => {
						document.querySelector('.overflow-unset').style.overflow = 'unset'
						document.querySelector('.header').style.overflow = 'hidden'
					}, 800)
				}

				document.body.style.overflow = "auto"
				document.body.style.overflow = "overlay"

				if (document.querySelector('.subnav-open')) {
					document.querySelector('.subnav-open').classList.remove('subnav-open')
				}
			}
		})
	})


	//--------------------------------header submenu counter------------------

	document.querySelectorAll('.nav__item_has-children').forEach(el => {
		el.querySelector('a').innerHTML += `<sup class="nav__item-counter">${el.querySelectorAll('.nav__submenu li').length}</sup>`
	})


	//--------------------------------header submenu open------------------------

	document.querySelectorAll('.nav__item_has-children').forEach(el => {
		el.addEventListener('click', (e) => {
			if (!e.target.closest('.nav__item_active')) {
				e.preventDefault()
				document.querySelectorAll('.nav__item_active').forEach(elem => {
					elem.classList.remove('nav__item_active');
				})
				e.target.closest('.header').classList.add('subnav-open')
				e.target.closest('.nav__item').classList.add('nav__item_active')
			} else {
				if (window.innerWidth > 1024) {
					e.preventDefault()
				}
				e.target.closest('.header').classList.remove('subnav-open')
				e.target.closest('.nav__item').classList.remove('nav__item_active')
			}

			document.querySelector('.header__submenu .header__col-title a').innerHTML = e.target.innerHTML
			document.querySelector('.header__submenu .header__col-title a').setAttribute('href', `${e.target.getAttribute('href')}`)
			document.querySelector('.header__submenu .nav__list').innerHTML = e.target.closest('.nav__item').querySelector('.nav__submenu').innerHTML
		})
	})

	document.addEventListener('click', (e) => {
		if (!e.target.closest('.nav__item')) {
			document.querySelectorAll('.nav__item_active').forEach(elem => {
				elem.classList.remove('nav__item_active');
			})
		}
	})


	//----------------------------faq question tabs---------------------------------------

	if (window.innerWidth > 1440) {
		document.querySelectorAll('.faq__question-item').forEach((el, index) => {
			el.addEventListener('mouseover', (e) => {
				document.querySelectorAll('.faq__answer')[index].classList.add('faq__answer_current')
			})
			el.addEventListener('mouseleave', (e) => {
				if (document.querySelector('.faq__answer_current')) {
					document.querySelector('.faq__answer_current').classList.remove('faq__answer_current')
				}
			})
		})
	}

	//--------------------faq answer height------------------------------------------
	if (window.innerWidth < 1440) {
		document.querySelectorAll('.faq__answer').forEach((elem, index) => {
			let newElem = document.createElement('div')
			newElem.innerHTML = elem.innerHTML
			newElem.classList.add('faq__answer')
			document.querySelectorAll('.faq__question-item')[index].append(newElem)
		})
		document.querySelectorAll('.faq__text .faq__answer').forEach(el => {
			el.remove()
		})
		document.querySelectorAll('.faq__question-item').forEach((el, index) => {
			el.addEventListener('click', (e) => {
				if (!e.target.closest('.faq__question-item_current')) {
					if (document.querySelector('.faq__question-item_current')) {
						document.querySelector('.faq__question-item_current').classList.remove('faq__question-item_current')
					}
					if (document.querySelector('.faq__answer_current')) {
						document.querySelector('.faq__answer_current').classList.remove('faq__answer_current')
					}

					document.querySelectorAll('.faq__question-item').forEach(elem => {
						elem.style.marginBottom = 0
					})

					el.classList.add('faq__question-item_current')
					document.querySelectorAll('.faq__answer')[index].classList.add('faq__answer_current')
					el.style.marginBottom = document.querySelectorAll('.faq__answer')[index].clientHeight + 30 + 'px'
				} else {
					if (document.querySelector('.faq__question-item_current')) {
						document.querySelector('.faq__question-item_current').classList.remove('faq__question-item_current')
					}
					if (document.querySelector('.faq__answer_current')) {
						document.querySelector('.faq__answer_current').classList.remove('faq__answer_current')
						el.style.marginBottom = 0
					}
				}
			})
		})
	}

	//-------------------------team slide turn----------------------------

	document.querySelectorAll('.team__slide').forEach(el => {
		el.addEventListener('click', (e) => {
			if (!e.target.closest('.team__slide_turn')) {
				el.classList.add('team__slide_turn')
			} else {
				el.classList.remove('team__slide_turn')
			}
		})
	})


	//-----------------------review btn replace------------------------------

	if (window.innerWidth < 1200) {
		document.querySelectorAll('.review__btn').forEach((el, index) => {
			let newBtn = el.cloneNode()
			newBtn.innerHTML = el.innerHTML
			el.remove()
			document.querySelectorAll('.review__slide')[index].prepend(newBtn)
		})
	}


	//--------------------------------calculate height for review title-------------------

	if (document.querySelector('.review__title') && window.innerWidth < 1200) {
		let imgHeight = document.querySelector('.review__photo').clientHeight
		let titleHeight = document.querySelector('.review__title').clientHeight

		document.querySelector('.review__title').style.top = `${imgHeight + 32}px`
		document.querySelectorAll('.review__description').forEach(el => {
			el.style.paddingTop = `${titleHeight + 32 + 8}px`
		})
	}


	//-----------------------service btn replace------------------------------

	if (window.innerWidth < 1200) {
		document.querySelectorAll('.service__btn').forEach((el, index) => {
			let newBtn = el.cloneNode()
			newBtn.innerHTML = el.innerHTML
			if (el.closest('.service__slide')) {
				el.closest('.service__slide').append(newBtn)
				el.remove()
			} else {
				el.remove()
				document.querySelector('.service__wrapper').append(newBtn)
			}
		})
	}

	//----------------------quiz service-----------------------------------

	if (document.querySelector('.service-next')) {
		document.querySelector('.service-next').addEventListener('click', (e) => {
			let currentSlide = 0
			for (let i = 0; i < document.querySelectorAll('.service__slide').length; i++) {
				currentSlide++
				if (document.querySelectorAll('.service__slide')[i].closest('.swiper-slide-active')) break
			}

			if (currentSlide == document.querySelectorAll('.service__slide').length - 1) {
				document.querySelector('.service__wrapper').classList.add('service__wrapper_final')
			}
		})
	}


	//---------------------------phone mask---------------------------------------

	document.querySelectorAll('[type="tel"]').forEach(el => {
		let mask = IMask(el, { mask: '+{7}(000)000-00-00' })
	})


	//-----------------------drag and drop upload btn---------------------------------

	document.querySelectorAll('.form__upload-btn').forEach(el => {
		el.addEventListener('dragover', (e) => e.preventDefault())
		el.addEventListener('drop', (e) => {
			e.preventDefault();
			let dataTransfer = new DataTransfer();

			[...e.dataTransfer.items].forEach((item, i) => {
				if (item.kind === 'file') {
					let file = item.getAsFile();
					dataTransfer.items.add(file)
					if (i > 0) {
						el.querySelector('.form__upload-btn-text').innerText = `Загружено ${i + 1} файла(ов)`
					} else {
						el.querySelector('.form__upload-btn-text').innerText = file.name
					}
				}
			});
			el.querySelector('input').files = dataTransfer.files
		})
		el.querySelector('input').addEventListener('change', () => {
			if (el.querySelector('input').files.length > 1) {
				el.querySelector('.form__upload-btn-text').innerText = `Загружено ${el.querySelector('input').files.length} файла(ов)`
			} else {
				el.querySelector('.form__upload-btn-text').innerText = el.querySelector('input').files[0].name
			}
		})
	})


	//--------------------------blog detail menu -----------------------------------------

	if (document.querySelector('.blog-detail__content h2')) {
		document.querySelectorAll('.blog-detail__content h2').forEach(el => {
			document.querySelector('.blog-detail__menu').innerHTML += `<li class="blog-detail__menu-item">${el.innerText}</li>`
		})
		document.querySelector('.blog-detail__menu-item').classList.add('blog-detail__menu-item_active')

		document.querySelectorAll('.blog-detail__menu-item').forEach((el, index) => {
			el.addEventListener('click', (e) => {
				if (!e.target.closest('.blog-detail__menu-item_active')) {
					document.querySelector('.blog-detail__menu-item_active').classList.remove('blog-detail__menu-item_active')
					e.target.classList.add('blog-detail__menu-item_active')

					window.scroll({
						top: document.querySelectorAll('.blog-detail__content h2')[index].offsetTop,
						left: 0,
						behavior: 'smooth'
					});
				}
			})
		})

		document.addEventListener('scroll', (e) => {
			for (let i = 0; i < document.querySelectorAll('.blog-detail__menu-item').length; i++) {
				if (document.querySelectorAll('.blog-detail__content h2')[i].offsetTop < window.scrollY + (window.innerHeight / 2)) {
					document.querySelector('.blog-detail__menu-item_active').classList.remove('blog-detail__menu-item_active')
					document.querySelectorAll('.blog-detail__menu-item')[i].classList.add('blog-detail__menu-item_active')
				}
				document.querySelectorAll('.blog-detail__content h2').offsetTop
			}
		})
	}

	//-------------------------------review menu item change---------------------------------

	document.querySelectorAll('.review-page__menu-item').forEach(el => {
		el.addEventListener('click', (e) => {
			document.querySelector('.review-page__menu-item_active').innerHTML = e.target.closest('.review-page__menu-item').innerHTML
		})
	})

	//---------------------------404 btns replace--------------------------------------

	if (document.querySelector('.not-found__btns') && window.innerWidth < 1300) {
		let newElem = document.createElement('div')
		newElem.innerHTML = document.querySelector('.not-found__btns').innerHTML
		document.querySelector('.not-found__btns').remove()
		newElem.classList.add('not-found__btns')
		document.querySelector('.not-found__wrapper').append(newElem)
	}

	//------------------tab----------------------------

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



	//-----------------------------------accordion------------------------------------------

	function initAcc(elem, option) {
		document.addEventListener('click', function (e) {
			if (!e.target.closest('.a-btn')) {
				if (e.target.closest(`${elem} .active`)) {
					e.target.closest(`${elem} .active`).classList.remove('active')
					console.log(1);
				}
				return;
			}
			else {
				if (!e.target.closest('.a-container').classList.contains('active')) {
					if (option == true) {
						var elementList = e.target.closest(elem).querySelectorAll(' .a-container');
						Array.prototype.forEach.call(elementList, function (e) {
							e.classList.remove('active');
							console.log(2);

						});
					}
					e.target.closest('.a-container').classList.add('active');
				} else {
					e.target.closest('.a-container').classList.remove('active');
					console.log(3);

				}
			}
		});
	}

	if (document.querySelector('.accordion_v1')) {
		initAcc('.accordion_v1', true);
	}
	if (document.querySelector('.accordion_v2')) {
		initAcc('.accordion_v2', true);
	}

	//------------------------anchor-----------------------------------

	document.querySelectorAll('.anchor-container').forEach((el => {
		el.addEventListener('click', (e) => {
			e.preventDefault()
			let currentAnchor = el.querySelector('.anchor').href.split('#').slice(1).join('')
			let blockPosition = document.getElementById(currentAnchor).offsetTop

			window.scroll({
				top: blockPosition,
				left: 0,
				behavior: 'smooth'
			});
		})
	}))


	//-------------------------partners filter-------------------------

	document.querySelectorAll('.filter-btn').forEach(el => {
		el.addEventListener('click', (e) => {
			if (document.querySelector('.filter-btn_active')) {
				document.querySelector('.filter-btn_active').classList.remove('filter-btn_active')
			}
			el.classList.add('filter-btn_active')
		})
	})

	//---------------------------cert round btn replace---------------------

	if (document.querySelector('.cert__round-btn') && window.innerWidth < 1300) {
		let newElem = document.createElement('div')
		newElem.innerHTML = document.querySelector('.cert__round-btn').innerHTML
		document.querySelector('.cert__round-btn').remove()
		newElem.classList.add('cert__round-btn')
		newElem.classList.add('round-btn')
		newElem.classList.add('round-btn_light')
		document.querySelector('.cert__preview').append(newElem)
	}


	//---------------------------------cert------------------------------

	if (document.querySelector('.cert__round-btn')) {
		document.querySelector('.cert__round-btn').addEventListener('click', (e) => {
			document.querySelector('.cert').classList.toggle('cert_active')
		})
	}

	//---------------------------cookie btn----------------------------

	if (document.querySelector('.cookie-caution__btn')) {
		document.querySelector('.cookie-caution__btn').addEventListener('click', (e) => {
			document.querySelector('.cookie-caution').classList.add('cookie-caution_hide')
		})
	}

	//------------------------change main title-----------------------
	if (document.querySelector('.entrance__title-change')) {
		document.querySelector('.entrance__title-change').style.height = document.querySelector('.entrance__title-static').clientHeight + 'px'
	}

	//----------------------------404 paralax-----------------------------

	if (document.querySelector('.not-found') && window.innerWidth > 768) {
		window.addEventListener('mousemove', function (e) {
			let x = e.clientX / window.innerWidth;
			let y = e.clientY / window.innerHeight;
			document.querySelector('.not-found__bg').style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
		});
	}

	//-----------------------------------header__side replace-------------------------

	if (document.querySelector('.header__side') && window.innerWidth < 1024) {
		let newElem = document.createElement('div')
		newElem.innerHTML = document.querySelector('.header__side').innerHTML
		document.querySelector('.header__side').remove()
		newElem.classList.add('header__side')
		document.querySelector('.header__nav-panel').append(newElem)
	}


	//---------------------------------site map accordion active------------------------

	document.querySelectorAll('.site-map__link').forEach((el, index) => {
		el.addEventListener('click', (e) => {
			el.closest('.tab').querySelectorAll('.a-container').forEach(elem => {
				elem.classList.add('active')
			})
		})
	})

	document.querySelectorAll('.accordion_v2 .a-btn').forEach((el, index) => {
		el.addEventListener('click', (e) => {
			e.target.closest('.tab').querySelectorAll('.a-container').forEach(elem => {
				elem.classList.toggle('active')
			})
			e.target.closest('.a-container').classList.toggle('active')
		})
	})


	//--------------------------------quiz appearance-------------------------------------

	document.querySelectorAll('.quiz__btn').forEach(el => {
		el.addEventListener('click', (e) => {
			document.querySelector('.quiz').classList.add('quiz_opened')
		})
	})



	//-----------------------------responsive table---------------------------------
	document.querySelectorAll('.table-responsive').forEach(elem => {
		let numberOfCol = elem.querySelectorAll('.table-responsive__col_header').length
		let numberOfRow = elem.querySelectorAll('.table-responsive__col').length / numberOfCol
		let tableGap = getComputedStyle(elem.querySelector('.table-responsive__body')).gap

		let i = 0
		elem.querySelectorAll('.table-responsive__col').forEach(el => {
			el.style.width = `calc(${100 / numberOfCol}% - ${tableGap})`
			el.style.order = i
			i++
			if (i == numberOfRow) {
				i = 0
			}
		})
	})


	//--------------------------------main page title change-----------------------------

	document.querySelectorAll('.entrance__title-change').forEach(el => {
		let listArr = el.getAttribute('data-list').split(';')
		listArr.push(el.innerText)
		let i = 0
		let erorCharArr = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '/', '~', '№', '?', '<', '>', '{', '}', '[', ']',]

		setInterval(changeWord, 3000)
		changeWord()

		function changeWord() {
			let changeInterval
			setTimeout(() => {
				changeInterval = setInterval(() => {
					let charNum = listArr[i].split('').length
					let erorRes = ''
					for (let j = 0; j < charNum; j++) {
						erorRes += erorCharArr[Math.floor(Math.random() * erorCharArr.length)]
					}
					el.innerHTML = erorRes
				}, 100);
			}, 2500)

			setTimeout(() => {
				clearInterval(changeInterval)
			}, 2950)

			el.innerHTML = listArr[i]
			i++
			if (i == listArr.length) {
				i = 0
			}
		}
	})


});





var myMap;
function init(lng, int, mapId) {
	myMap = new ymaps.Map(mapId, {
		center: [lng, int], // СПб
		zoom: 16
	}, {
		searchControlProvider: 'yandex#search'
	});

	myPlacemark = new ymaps.Placemark([lng, int],
		{ balloonContent: 'НастартВЕБ', },
		{ iconColor: '#000' });

	myMap.geoObjects
		.add(myPlacemark)

	if (window.innerWidth < 1023) {
		myMap.behaviors
			.disable(['drag', 'rightMouseButtonMagnifier']);
		//  - drag - перемещение карты при нажатой левой кнопки мыши;
		//  - magnifier.rightButton - увеличение области, выделенной правой кнопкой мыши.
	}
}


