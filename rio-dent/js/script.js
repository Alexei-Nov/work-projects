document.addEventListener('DOMContentLoaded', function () {

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

	if (window.innerWidth < 769) {
		initAcc('.accordion_v1', true);
	}

	const accordion = () => {
		const characteristicsListElem = document.querySelector('.accordion__list');
		const characteristicsItemElems = document.querySelectorAll('.accordion__item');

		characteristicsItemElems.forEach(elem => {
			if (elem.children[1].classList.contains('active')) {
				elem.children[1].style.height = `${elem.children[1].scrollHeight}px`;
			}
		})

		const open = (button, dropDown) => {
			closeAllDrops();
			dropDown.style.height = `${dropDown.scrollHeight}px`;
			button.classList.add('active');
			dropDown.classList.add('active');
		};

		const close = (button, dropDown) => {
			button.classList.remove('active');
			dropDown.classList.remove('active');
			dropDown.style.height = '';
		};

		const closeAllDrops = (button, dropDown) => {
			characteristicsItemElems.forEach((elem) => {
				if (elem.children[0] !== button && elem.children[1] !== dropDown) {
					close(elem.children[0], elem.children[1]);
				}
			})
		};

		characteristicsListElem.addEventListener('click', (event) => {
			const target = event.target;
			if (target.classList.contains('accordion__title')) {
				const parent = target.closest('.accordion__item');
				const description = parent.querySelector('.accordion__description');
				description.classList.contains('active') ?
					close(target, description) :
					open(target, description);
			}
		});

		//Р·Р°РєСЂС‹РІР°РµС‚ Р°РєРєРѕСЂРґРµРѕРЅ РµСЃР»Рё РєР»РёРєРЅСѓР» РјРёРјРѕ РЅРµРіРѕ
		document.body.addEventListener('click', (event) => {
			const target = event.target;
			if (!target.closest('.accordion__list')) {
				closeAllDrops();
			}
		})
	};

	accordion();



	//--------review  slider-------------
	let sliderReview = () => {
		let SwiperMain = new Swiper('.review__slider ', {
			slidesPerView: 2,
			spaceBetween: 60,
			navigation: {
				nextEl: '.review-button-next',
				prevEl: '.review-button-prev',
			},
			pagination: {
				el: ".review__pagination",
				type: "bullets",
				clickable: true,
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				1200: {
					slidesPerView: 2,
				}
			}
		});
	};

	sliderReview();

	//--------stage  slider-------------
	let sliderStage = () => {
		let SwiperStage = new Swiper('.stage__slider ', {
			slidesPerView: 1,
			spaceBetween: 150,
			autoHeight: true,

			pagination: {
				el: ".stage__pagination",
				type: "bullets",
				clickable: true,
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				1200: {
					slidesPerView: 2,
				}
			}
		});
		document.addEventListener('click', () => {
			SwiperStage.updateAutoHeight()
		})

	};


	if (window.innerWidth < 992) {
		sliderStage();
	}


	//----------------read-more btn---------------------

	if (document.querySelectorAll('.read-more__btn')) {
		for (let i = 0; i < document.querySelectorAll('.read-more__btn').length; i++) {
			document.querySelectorAll('.read-more__btn')[i].addEventListener('click', (e) => {
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
		}
		let currentBtn
		for (let i = 0; i < document.querySelectorAll('.read-more__btn').length; i++) {
			currentBtn = document.querySelectorAll('.read-more__text')[i]
			currentBtnWidth = getComputedStyle(currentBtn).height.split('').slice(0, -2).join('')
			console.log(currentBtnWidth);
			if (currentBtnWidth < 384) {
				currentBtn.parentElement.querySelector('.read-more__btn').style.display = 'none'
			}
		}
	}

});