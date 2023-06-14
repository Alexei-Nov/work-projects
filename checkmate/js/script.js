document.addEventListener('DOMContentLoaded', function () {
	// mobile menu
	document.querySelectorAll('.header__menu-btn').forEach(btn => {
		btn.addEventListener('click', (e) => {
			document.querySelector('body').classList.toggle('menu-open')
		})
	})

	// slider adv
	let sliderAdv = () => {
		let SwiperAdv = new Swiper('.advantages__slider', {
			slidesPerView: 2,
			spaceBetween: 20,
			loop: true,
			pagination: {
				el: ".advantages__pagination",
				type: 'bullets',
				clickable: true,
			},
			navigation: {
				nextEl: '.advantages__next',
				prevEl: '.advantages__prev',
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				1024: {
					slidesPerView: 2,
				},
			}
		});
	};
	sliderAdv()

	// slider review
	let sliderReview = () => {
		let SwiperReview = new Swiper('.review__slider', {
			slidesPerView: 1,
			spaceBetween: 30,
			loop: true,
			autoHeight: true,
			pagination: {
				el: ".review__pagination",
				type: 'bullets',
				clickable: true,
			},
			navigation: {
				nextEl: '.review__next',
				prevEl: '.review__prev',
			},
		});
	};
	sliderReview()

	// slider cert
	let sliderCert = () => {
		let SwiperCert = new Swiper('.cert__slider', {
			slidesPerView: 2,
			spaceBetween: 20,
			loop: true,
			autoHeight: true,
			navigation: {
				nextEl: '.cert__next',
				prevEl: '.cert__prev',
			},
			pagination: {
				el: ".cert__pagination",
				type: 'bullets',
				clickable: true,
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				1024: {
					slidesPerView: 2,
				},
			}
		});
	};
	sliderCert()

	// slider partners
	let sliderPartners = () => {
		let SwiperPartners = new Swiper('.partners__slider', {
			slidesPerView: 4,
			spaceBetween: 30,
			grid: {
				rows: 3,
			},
			navigation: {
				nextEl: '.partners__next',
				prevEl: '.partners__prev',
			},
			pagination: {
				el: ".partners__pagination",
				type: 'bullets',
				clickable: true,
			},
		});
	};
	sliderPartners()

});


var myMap;
ymaps.ready(init);

function init() {
	myMap = new ymaps.Map('#map', {
		center: ['59.988064', '30.186538'], // СПб
		zoom: 16
	}, {
		searchControlProvider: 'yandex#search'
	});

	myPlacemark = new ymaps.Placemark(['59.988064', '30.186538'],
		{ balloonContent: 'Шах и Мат', },
		{ iconColor: '#a47f65' });

	myMap.geoObjectsa
		.add(myPlacemark)

	if (window.innerWidth < 1023) {
		myMap.behaviors
			.disable(['drag', 'rightMouseButtonMagnifier']);
		//  - drag - перемещение карты при нажатой левой кнопки мыши;
		//  - magnifier.rightButton - увеличение области, выделенной правой кнопкой мыши.
	}
}


