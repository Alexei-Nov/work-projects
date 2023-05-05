document.addEventListener('DOMContentLoaded', function () {

	//------------slider 1-----------------------
	let sliderTeam = () => {
		let Swiperteam = new Swiper('.team__slider-1', {
			slidesPerView: 2,
			spaceBetween: 30,
			observer: true,
			observeParents: true,
			pagination: {
				el: ".team-pagination",
				type: "fraction",
				formatFractionCurrent: function (number) {
					if (number < 10) {
						number = '0' + number;
					}
					return number;
				},
				formatFractionTotal: function (number) {
					if (number < 10) {
						number = '0' + number;
					}
					return number;
				},
			},
			navigation: {
				nextEl: '.slider-1-next',
				prevEl: '.slider-1-prev',
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				570: {
					slidesPerView: 2,
				},
				769: {
					slidesPerView: 4,
				}
			}
		});

	};
	sliderTeam();


	//------------------team tab--------------------------

	for (let i = 0; i < document.querySelectorAll('.tab__title').length; i++) {
		document.querySelectorAll('.tab__title')[i].addEventListener('click', teamTab)
	}

	function teamTab(e) {
		if (document.querySelector('.vacation-none')) return
		if (!e.target.closest('.title-active')) {
			if (document.querySelector('.title-active')) {
				document.querySelector('.title-active').classList.remove('title-active')
			}
			e.target.classList.add('title-active')
			let elNumber = 0
			for (let i = 0; i < document.querySelectorAll('.tab__title').length; i++) {
				if (document.querySelectorAll('.tab__title')[i].closest('.title-active')) elNumber = i - 1
			}
			for (let i = 0; i < document.querySelectorAll('.tab__item').length; i++) {
				if (document.querySelector('.tab-active')) {
					document.querySelector('.tab-active').classList.remove('tab-active')
				}
			}
			if (e.target.closest('.tab__title_all')) {
				for (let i = 0; i < document.querySelectorAll('.tab__item').length; i++) {
					document.querySelectorAll('.tab__item')[i].classList.add('tab-active')
				}
				return
			}
			document.querySelectorAll('.tab__item')[elNumber].classList.add('tab-active')
		}
		// else {
		// 	if (document.querySelector('.title-active')) {
		// 		document.querySelector('.title-active').classList.remove('title-active')
		// 	}
		// 	for (let i = 0; i < document.querySelectorAll('.tab__item').length; i++) {
		// 		if (!document.querySelectorAll('.tab__item')[i].closest('.tab-active')) {
		// 			document.querySelectorAll('.tab__item')[i].classList.add('tab-active')
		// 		}
		// 	}
		// }
	}
});