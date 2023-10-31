document.addEventListener('DOMContentLoaded', function () {

	// slider gallery
	let sliderGallery = () => {
		let SwiperGallery = new Swiper('.gallery__slider', {
			slidesPerView: 1,
			spaceBetween: 20,
			loop: true,
			autoplay: {
				delay: 2000,
				disableOnInteraction: false,
			},
			speed: 800,

			breakpoints: {
				0: {
					spaceBetween: 10,
				},
				1201: {
					spaceBetween: 20,
				},
			}
		});
	};
	sliderGallery()


	// fancybox defaults
	Fancybox.bind('[data-fancybox]', {
		autoFocus: false,
	});


	// phone mask
	document.querySelectorAll('[type="tel"]').forEach(el => {
		let mask = IMask(el, { mask: '+{7}(000)000-00-00' })
	})


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



});


// map
function initMap(coords, id) {
	let myMap = new ymaps.Map(id, {
		center: coords,
		zoom: 12,
		controls: ['zoomControl']
	}, {
		searchControlProvider: 'yandex#search'
	});

	myPlacemark = new ymaps.Placemark(coords,
		{ balloonContent: 'SPB SAD', },
		{ iconColor: '#332D29' });

	myMap.geoObjects.add(myPlacemark)

	if (window.innerWidth < 1023) {
		myMap.behaviors.disable(['drag', 'rightMouseButtonMagnifier']);
		//  - drag - перемещение карты при нажатой левой кнопки мыши;
		//  - magnifier.rightButton - увеличение области, выделенной правой кнопкой мыши.
	}
}

window.onload = () => {
	ymaps.ready(() => {
		initMap([59.940082, 30.312814], 'map')
	})
}