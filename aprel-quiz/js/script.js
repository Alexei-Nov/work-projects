document.addEventListener('DOMContentLoaded', function () {

	let sliderQuiz = () => {
		let swiperQuiz = new Swiper('.quiz__slider ', {
			slidesPerView: 1,
			spaceBetween: 30,
			allowTouchMove: false,
			observer: true,
			observeParents: true,
			navigation: {
				nextEl: '.quiz-next',
				prevEl: '.quiz-prev',
			},
			scrollbar: {
				el: ".quiz-scrollbar",
			},
			pagination: {
				el: ".quiz-pagination",
				type: "fraction",
			},
		});
	};
	sliderQuiz();


	//---------------quiz stages------------------------------
	if (document.querySelector('.quiz-btn')) {
		document.querySelectorAll('.quiz-btn').forEach(el => {
			el.addEventListener('click', (e) => {
				if (e.target.closest('.quiz-btn')) {
					document.querySelector('.quiz__item-active ~ .quiz__item').classList.add('quiz__item-active')
					document.querySelector('.quiz__item-active').classList.remove('quiz__item-active')
				}
			})
		})
	}

	document.addEventListener('click', quizNextStage)
	document.querySelectorAll('input').forEach(el => {
		el.addEventListener('keyup', quizNextStage)
	})

	let slides = document.querySelectorAll('.quiz__slide')

	function quizNextStage() {

		let currentSlideNum
		slides.forEach((slide, index) => slide.closest('.swiper-slide-active') ? currentSlideNum = index : {});

		let inputOnCurrentSlide = slides[currentSlideNum].querySelectorAll('input')
		let inputValues = []
		for (let i = 0; i < inputOnCurrentSlide.length; i++) {
			if (inputOnCurrentSlide[i].type == 'text') {
				inputValues[i] = !!inputOnCurrentSlide[i].value
			}
			else if (inputOnCurrentSlide[i].type == 'radio' || inputOnCurrentSlide[i].type == 'checkbox') {
				inputValues[i] = inputOnCurrentSlide[i].checked
			}
			if (inputValues[i] == true) {
				document.querySelector('.quiz-next').classList.remove('quiz-next-disabled')
				if (currentSlideNum == document.querySelectorAll('.quiz__slide').length - 1 &&
					!document.querySelector('.quiz-next-disabled')) {
					document.querySelector('.quiz-next').classList.add('quiz-btn')

					document.querySelector('.quiz-next').addEventListener('click', (e) => {
						if (e.target.closest('.quiz-btn')) {
							document.querySelector('.quiz__item-active ~ .quiz__item').classList.add('quiz__item-active')
							document.querySelector('.quiz__item-active').classList.remove('quiz__item-active')
						}
					})
				}
				return
			}
			else if (inputValues[i] !== true) {
				console.log(2);
				document.querySelector('.quiz-next').classList.add('quiz-next-disabled')
				if (document.querySelector('.quiz-next').closest('.quiz-btn')) {
					document.querySelector('.quiz-next').classList.remove('quiz-btn')
				}
			}
		}
	}

	document.querySelector('.quiz__final-btn').addEventListener('click', () => {
		let quizState = []

		slides.forEach((slide, index) => {
			let inputValues = []
			let inputText = []
			let inputArr = slide.querySelectorAll('input')

			for (let i = 0; i < inputArr.length; i++) {
				if (inputArr[i].type == 'text') {
					inputValues[i] = !!inputArr[i].value
					inputText[i] = inputArr[i].value
				}
				else if (inputArr[i].type == 'radio') {
					inputValues[i] = inputArr[i].checked
					inputText[i] = slide.querySelectorAll('label> .btn-white')[i].innerHTML
				}
				else if (inputArr[i].type == 'checkbox') {
					inputValues[i] = inputArr[i].checked
					inputText[i] = slide.querySelectorAll('label> .btn-white')[i].innerHTML
				}
				if (inputValues[i] == true) {
					quizState.push(`<br>${slide.querySelector('.quiz__title').innerHTML}: ${inputText[i]}`)
				}
			}
		});

		document.querySelector('.state-input').value = quizState
		console.log(document.querySelector('.state-input').value);
	})



	//----------------------phone-mask---------------------------------
	if (document.querySelectorAll('.phone-mask')) {
		for (let i = 0; i < document.querySelectorAll('.phone-mask').length; i++) {
			eval(`let phoneMask${i} = IMask(document.querySelectorAll('.phone-mask')[${i}], { mask: '+{7}(000)000-00-00' }); `)
		}
	}

});