document.addEventListener('DOMContentLoaded', function () {
	//--------quiz  slider----------------------------------

	let sliderQuiz = () => {
		let SwiperQuiz = new Swiper('.quiz-stage__slider ', {
			slidesPerView: 1,
			spaceBetween: 30,
			// autoHeight: true,
			observer: true,
			observeSlideChildren: true,
			navigation: {
				nextEl: '.quiz-stage-btn-next',
				prevEl: '.quiz-stage-btn-prev',
			},
			pagination: {
				el: ".quiz-stage-pagination",
				type: "fraction",
			},
			scrollbar: {
				el: '.quiz-stage-scrollbar',
				draggable: true,
			},
		});
	};

	let sliderQuizAuto = () => {
		let SwiperQuiz = new Swiper('.quiz-stage__slider ', {
			slidesPerView: 1,
			spaceBetween: 30,
			autoHeight: true,
			observer: true,
			observeSlideChildren: true,
			navigation: {
				nextEl: '.quiz-stage-btn-next',
				prevEl: '.quiz-stage-btn-prev',
			},
			pagination: {
				el: ".quiz-stage-pagination",
				type: "fraction",
			},
			scrollbar: {
				el: '.quiz-stage-scrollbar',
				draggable: true,
			},
		});
	};

	window.innerWidth > 768 ? sliderQuiz() : sliderQuizAuto()


	//------------phone mask--------------------------------
	if (document.querySelectorAll('.phone-mask')) {
		for (let i = 0; i < document.querySelectorAll('.phone-mask').length; i++) {
			eval(`let phoneMask${i} = IMask(document.querySelectorAll('.phone-mask')[${i}], { mask: '+{7}(000)000-00-00' }); `)
		}
	}

	//----------------read-more---------------------------

	if (document.querySelector('.read-more__btn')) {
		document.querySelector('.read-more__btn').addEventListener('click', readMore)
	}

	function readMore(e) {
		if (!e.target.closest('.read-more')) {
			e.target.parentElement.classList.add('read-more')
			e.target.innerHTML = 'Скрыть'

		} else {
			e.target.parentElement.classList.remove('read-more')
			e.target.innerHTML = 'Читать далее'
		}
	}
});
