document.addEventListener('DOMContentLoaded', function () {
	// ------------------------ menu --------------------------------

	let button = document.querySelector(".burger");
	let body = document.querySelector("body");


	button.addEventListener('click', (e) => {
		document.getElementById("myDropdown").classList.toggle("active");
		button.classList.toggle("active");
		body.classList.toggle("lock");
	});

	window.addEventListener('click', (event) => {
		if (!event.target.closest('.burger') && !event.target.closest('.menu')) {
			var dropdowns = document.getElementsByClassName("menu");
			var i;
			for (i = 0; i < dropdowns.length; i++) {
				var openDropdown = dropdowns[i];
				if (openDropdown.classList.contains('active')) {
					openDropdown.classList.remove('active');
					button.classList.remove("active");
					body.classList.remove("lock");
				}
			}
		}
	});

	if (window.innerWidth < 1400) {
		if (document.querySelector('.menu-sub')) {
			document.querySelectorAll('.menu-sub').forEach(el => {
				el.addEventListener('click', (e) => {
					if (!e.target.closest('.multilevel-menu_open')) {
						e.preventDefault()
						document.querySelectorAll('.menu-sub').forEach(elem => {
							elem.classList.remove('multilevel-menu_open')
						})
						e.target.closest('.menu-sub').classList.add('multilevel-menu_open')
					} else {
						e.target.closest('.menu-sub').classList.remove('multilevel-menu_open')
					}
				})
			})
		}
	}

	// ------------------------ menu scroll hidden--------------------------------

	let header = document.querySelector('.header');
	let prevScrollpos = 0;

	window.addEventListener('scroll', (e) => {
		let currentScrollPos = window.scrollY;

		if (currentScrollPos > header.clientHeight) {
			if (prevScrollpos > currentScrollPos) {
				header.classList.remove('header_hidden');
			} else {
				header.classList.add('header_hidden');
			}
			prevScrollpos = currentScrollPos;
		}
	})

	// --------------------------- counter textarea -----------------------------

	if (document.querySelector('.textarea__item')) {
		const txtItems = document.querySelectorAll('.textarea');

		for (let index = 0; index < txtItems.length; index++) {
			const txtItem = txtItems[index];
			const txtCounter = txtItem.querySelector('.textarea__counter');
			const txt = txtItem.querySelector('.textarea__item');
			const txtItemLimit = txt.getAttribute('maxlength');

			txtCounter.innerHTML = `0/${txtItemLimit}`;
			txt.addEventListener('keyup', txtSetCounter);
			txt.addEventListener('keydown', function (event) {
				if (event.repeat) txtSetCounter();
			});

			function txtSetCounter() {
				const txtCounterResult = txtItemLimit - txt.value.length;
				let ascendingScore = txtItemLimit - txtCounterResult;

				txtCounter.innerHTML = ascendingScore + '/' + txtItemLimit;
			}
		}
	}

	// --------------------------- imask -----------------------------

	if (document.querySelector('.phone-mask')) {
		document.querySelectorAll('.phone-mask').forEach((e) => {
			const phoneMask = IMask(e, { mask: '{8}(000)000-00-00' })
		});
	}

	// --------------------------- input file ----------------------------- 

	if (document.querySelector('.form__input_attach')) {
		document.querySelectorAll('.form__input_attach').forEach(element => {
			element.addEventListener('change', (e) => {
				const input = element.querySelector('input');
				const span = element.querySelector('span');
				const spanAttr = span.getAttribute('data-attach-text');
				const spanText = span.innerHTML;

				if (input.files[0] != undefined) {
					if (span.innerHTML == 'Прикрепить файл') {
						span.setAttribute('data-attach-text', spanText);
						span.innerHTML = spanAttr;
					}
				} else {
					if (span.innerHTML !== 'Прикрепить файл') {
						span.setAttribute('data-attach-text', spanText);
						span.innerHTML = spanAttr;
					}
				}
			});
		});
	}

	//-------------------- accordion -----------------------------

	if (document.querySelectorAll('.accordion')) {
		let accordionItems = document.querySelectorAll('.accordion');
		let accordionClass = '.accordion';
		let accordionTitle = '.accordion__title';
		let accordionBlock = '.accordion__block';

		accordionItems.forEach(el => {
			el.addEventListener('click', (e) => {
				let target = e.target;

				if (target.closest(accordionTitle)) {
					if (!target.closest('.active')) {
						let accordionTextHeight = target.closest(accordionClass).querySelector(accordionBlock).scrollHeight;

						accordionItems.forEach(elem => {
							elem.classList.remove('active')
							elem.querySelector(accordionBlock).style.height = '0px';
						})
						target.closest(accordionClass).classList.add('active')
						target.closest(accordionClass).querySelector(accordionBlock).style.height = accordionTextHeight + 'px';
					} else {
						target.closest(accordionClass).classList.remove('active')
						target.closest(accordionClass).querySelector(accordionBlock).style.height = '0px';
					}
				}
			});
		});
	}

	//------------------- map achievements -----------------------------

	if (document.querySelector('.achievements__map')) {
		let map = document.querySelector('.achievements__map svg');
		let span = document.querySelector('.achievements__map span')

		map.addEventListener('mouseover', (e) => {
			if (e.target.getAttribute('data-city')) {
				let targetAttr = e.target.getAttribute('data-city');
				if (span.innerHTML != targetAttr) {
					span.innerHTML = targetAttr;
				}
			}
		});
	}

	//------------------- cover video -----------------------------

	if (document.querySelector('.reviews__preview')) {
		document.querySelectorAll('.reviews__video').forEach(element => {
			if (element.querySelector('iframe').getAttribute('src') != '') {
				element.addEventListener('click', (e) => {
					element.classList.add('show');
				});
			}
		});
	}

	//------------------- btn scroll -----------------------------

	if (document.querySelector('.banner__btn')) {
		document.querySelector('.banner__btn').addEventListener('click', (e) => {
			let btn = document.querySelector('.banner__btn');
			const btnParent = btn.parentElement.closest('.banner');
			const bannerHeight = btnParent.offsetHeight;
			const topOffset = document.querySelector('.header').offsetHeight;
			let offsetPosition;

			if (window.innerWidth > 992) {
				offsetPosition = bannerHeight - window.scrollY;
			} else {
				offsetPosition = bannerHeight + topOffset - window.scrollY;
			}

			window.scrollBy({
				top: offsetPosition,
				behavior: 'smooth'
			});
		})
	}

	//-------------------- setting fancybox -----------------------------

	Fancybox.bind('[data-fancybox]', {
		hideScrollbar: false,
	});

	//-------------------- transition modal -----------------------------

	if (document.querySelector('.btn-transition')) {
		let btn = document.querySelector('.btn-transition');

		btn.addEventListener('click', (e) => {
			Fancybox.close();
		})
	}

	// --------------------------- counter time -----------------------------

	let timeItems = document.querySelectorAll('.promotion__time');
	let interval = null;

	if (timeItems.length > 0) {
		function counterСall() {
			for (let index = 0; index < timeItems.length; index++) {

				const timeElement = timeItems[index].querySelector('span');
				let time = timeElement.getAttribute('data-time');
				let separationTime = time.split('.');
				let formattingTime = [separationTime[2], separationTime[1], separationTime[0]].join('.');
				let declinationDate, conclusionDays, conclusionTime;

				dateCounter(formattingTime);

				function dateCounter(setDate) {
					let dateFrom = new Date();
					let dateTo = new Date(setDate);
					let dateSeconds = dateTo.getTime() / 1000 - dateFrom.getTime() / 1000;

					interval = setInterval(() => {
						dateSeconds -= 1;
						if (dateSeconds <= 0 || time == '') {
							clearInterval(interval);
							timeElement.innerHTML = 'Акция закончилась';
						} else {
							let conclusion = formatDate(dateSeconds);
							let days = conclusion.days,
								hours = conclusion.hours,
								minutes = conclusion.minutes,
								seconds = conclusion.seconds;

							declinationDate =
								(days == 1) ? 'день' :
									(1 < days && days <= 3) ? 'дня' : 'дней';
							conclusionDays = `${days}` + " " + `${declinationDate}` + " ";
							conclusionTime = `${hours}` + ":" + `${minutes}` + ":" + `${seconds}`;

							if (days > 0) {
								timeElement.innerHTML = conclusionDays + conclusionTime;
							} else {
								timeElement.innerHTML = conclusionTime;
							}
						}
					}, 1000)
				}

				function formatDate(seconds) {
					let days = Math.round(Math.floor(seconds / 86400)),
						hours = Math.round(Math.floor(seconds / 216000)),
						minutes = Math.round(Math.floor(seconds / 60) % 60);

					seconds = Math.round(seconds % 60);

					return {
						'days': days,
						'hours': addZero(hours),
						'minutes': addZero(minutes),
						'seconds': addZero(seconds),
					};
				}
			}
		}
		counterСall();
	}

	//-------------------- copying counter time -----------------------------

	if (document.querySelector('.promotion__btn')) {
		document.querySelectorAll('.promotion__btn').forEach(element => {
			element.addEventListener('click', (e) => {
				let InitialTime = e.target.parentElement.previousElementSibling.querySelector('span');
				let modalTime = document.querySelector('.modal-promotion .promotion__time span');
				let attr = 'data-time';

				if (modalTime.getAttribute(attr) != InitialTime.getAttribute(attr)) {
					modalTime.setAttribute(attr, InitialTime.getAttribute(attr));
					if (interval !== null) {
						clearInterval(interval);
					}
					counterСall();
				}
			})
		});
	}

	//-------------------- slider banner -----------------------------

	const bannerSlider = new Swiper('.banner__slider', {
		slidesPerView: 1,
		grabCursor: true,
		pagination: {
			el: '.swiper-pagination',
			type: 'fraction',
			formatFractionCurrent: addZero,
			formatFractionTotal: addZero,
			renderFraction: function (currentClass, totalClass) {
				if (document.querySelectorAll('.banner__slide').length > 1) {
					return '<span class="' + currentClass + '"></span>' +
						` <span class="delimiter"></span> ` +
						'<span class="' + totalClass + '"></span>';
				}
			}
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	})

	function addZero(num) {
		return (num > 9) ? num : '0' + num;
	}

	//-------------------- slider certificates -----------------------------

	const certificatesSlider = new Swiper('.certificates__slider', {
		slidesPerView: 3,
		spaceBetween: 30,
		grabCursor: true,
		effect: 'coverflow',
		coverflowEffect: {
			rotate: 0,
			slideShadows: false,
			depth: 150,
		},
		scrollbar: {
			el: '.swiper-scrollbar',
			draggable: true,
		},
		breakpoints: {
			320: {
				slidesPerView: 1.6,
				spaceBetween: 20,
			},
			480: {
				slidesPerView: 2,
				spaceBetween: 32,
			},
			640: {
				slidesPerView: 3,
				spaceBetween: 30,
			}
		},
	})

	//-------------------- slider products -----------------------------

	const productsSlider = new Swiper('.products__slider', {
		slidesPerView: 3,
		spaceBetween: 30,
		grabCursor: true,
		scrollbar: {
			el: '.swiper-scrollbar',
			draggable: true,
		},
		mousewheel: {
			invert: true,
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 15,
			},
			500: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			900: {
				slidesPerView: 2.9,
				spaceBetween: 29,
			}
		},
	})

	//-------------------- slider reviews -----------------------------

	const reviewsSlider = new Swiper('.reviews__slider', {
		slidesPerView: 2,
		spaceBetween: 10,
		grabCursor: true,
		scrollbar: {
			el: '.swiper-scrollbar',
			draggable: true,
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 15,
			},
			600: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
			900: {
				spaceBetween: 60,
			},
			1200: {
				spaceBetween: 134,
			}
		},
	})

	//-------------------- sliders partners -----------------------------

	const partnersSlider = new Swiper(".partners__slider1", {
		loop: true,
		spaceBetween: 16,
		speed: 1200,
		slidesPerView: 3.6,
		centeredSlides: true,
		breakpoints: {
			320: {
				slidesPerView: 1.6,
				spaceBetween: 6,
			},
			600: {
				slidesPerView: 2.6,
				spaceBetween: 8,
			},
			900: {
				slidesPerView: 3.6,
				spaceBetween: 16,
			},
		},
	});
	const partnersSlider2 = new Swiper(".partners__slider2", {
		loop: true,
		spaceBetween: 16,
		speed: 1200,
		slidesPerView: 3.6,
		nested: true,
		breakpoints: {
			320: {
				slidesPerView: 1.6,
				spaceBetween: 6,
			},
			600: {
				slidesPerView: 2.6,
				spaceBetween: 8,
			},
			900: {
				slidesPerView: 3.6,
				spaceBetween: 16,
			},
		},
	});
	partnersSlider.controller.control = partnersSlider2;
	partnersSlider2.controller.control = partnersSlider;

	//------------------- map -----------------------------

	ymaps.ready(function () {
		var myMap = new ymaps.Map('map', {
			center: [59.844728, 30.280079],
			zoom: 16,
			controls: []
		}, {
			searchControlProvider: 'yandex#search'
		}),

			myPlacemark = new ymaps.Placemark([59.844728, 30.280079], {}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/icons/balloon.png',
				iconImageSize: [30, 42],
				iconImageOffset: [-12, -32]
			});

		myMap.geoObjects
			.add(myPlacemark);
	});

	if (document.getElementById('mapContact')) {
		ymaps.ready(function () {
			var myMap = new ymaps.Map('mapContact', {
				center: [59.844728, 30.280079],
				zoom: 16,
				controls: []
			}, {
				searchControlProvider: 'yandex#search'
			}),

				myPlacemark = new ymaps.Placemark([59.844728, 30.280079], {}, {
					iconLayout: 'default#image',
					iconImageHref: 'img/icons/balloon.png',
					iconImageSize: [30, 42],
					iconImageOffset: [-12, -32]
				});

			myMap.geoObjects
				.add(myPlacemark);
		});
	}
})