document.addEventListener('DOMContentLoaded', function () {
	//----------faq replace----------------------------

	if (document.querySelector('.faq') && window.innerWidth < 1250) {
		let newEl
		let collection = document.querySelectorAll('.faq__replace')
		for (let i = 0; i < collection.length; i++) {
			newEl = document.createElement('div')
			newEl.innerHTML = collection[i].innerHTML;
			collection[i].remove()
			newEl.classList.add('faq__replace')
			document.querySelectorAll('.a-btn')[i].after(newEl)
		}
	}

	//-------------accordion-----------------------------------

	function initAcc(elem, option) {
		document.addEventListener('click', function (e) {
			if (!e.target.matches(elem + ' .a-btn')) return;
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
	if (window.innerWidth < 1250) {
		initAcc('.accordion.v1', true);
		initAcc('.accordion.v2', false);
	}


	//--------faq  slider----------------------------------

	let sliderFaq = () => {
		let SwiperFaq = new Swiper('.faq__slider ', {
			slidesPerView: 1,
			spaceBetween: 30,
			autoHeight: true,
			// observer: true,
			// observeSlideChildren: true,
			navigation: {
				nextEl: '.faq-button-next',
				prevEl: '.faq-button-prev',
			},
			pagination: {
				el: ".faq-pagination",
				type: "fraction",
			},
			scrollbar: {
				el: '.faq-scrollbar',
				draggable: true,
			},
		});

		document.addEventListener('click', SwiperFaqUp)
		function SwiperFaqUp() {
			SwiperFaq.updateAutoHeight()
		}

	};
	sliderFaq();
});
