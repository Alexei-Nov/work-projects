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
			breakpoints: {
				0: {
					spaceBetween: 10,
					grid: {
						rows: 2,
					},
				},
				768: {
					spaceBetween: 30,
					grid: {
						rows: 3,
					},
				},
			}
		});
	};
	sliderPartners()

	// slider video
	let sliderVideo = () => {
		let SwiperVideo = new Swiper('.video__slider_active', {
			slidesPerView: 2,
			spaceBetween: 30,
			loop: true,
			navigation: {
				nextEl: '.video__next',
				prevEl: '.video__prev',
			},
			pagination: {
				el: ".video__pagination",
				type: 'bullets',
				clickable: true,
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 2,
				},
			}
		});
	};
	sliderVideo()

	// slider gallery
	let sliderGallery = () => {
		let SwiperGallery = new Swiper('.gallery__slider', {
			slidesPerView: 3,
			spaceBetween: 30,
			loop: true,
			navigation: {
				nextEl: '.gallery__next',
				prevEl: '.gallery__prev',
			},
			pagination: {
				el: ".gallery__pagination",
				type: 'bullets',
				clickable: true,
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 2,
				},
				1024: {
					slidesPerView: 3,
				},
			}
		});
	};
	sliderGallery()

	// anchor
	document.querySelectorAll('.anchor').forEach((el => {
		el.addEventListener('click', (e) => {
			e.preventDefault()
			let currentAnchor = e.target.href.split('#').slice(1).join('')
			let blockPosition = document.getElementById(currentAnchor).offsetTop

			window.scroll({
				top: blockPosition,
				left: 0,
				behavior: 'smooth'
			});
		})
	}))

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


