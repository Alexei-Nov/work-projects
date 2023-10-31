document.addEventListener('DOMContentLoaded', function () {

	// slider plan
	let sliderPlan = () => {
		let SwiperPlan = new Swiper('.plan__slider', {
			slidesPerView: 'auto',
			spaceBetween: 20,
			loop: true,

			navigation: {
				nextEl: '.plan__next',
				prevEl: '.plan__prev',
			},
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
	sliderPlan()


	// header color change
	document.addEventListener('scroll', (e) => {
		if (window.pageYOffset > window.innerHeight) {
			document.querySelector('.header').classList.add('header_fixed')
		} else {
			document.querySelector('.header').classList.remove('header_fixed')
		}
	})


	// hover nav item
	let navArr = document.querySelectorAll('.nav__item')
	navArr.forEach(item => {
		item.addEventListener('mouseover', (e) => {
			navArr.forEach(elem => {
				elem.classList.toggle('nav__item_hide')
			})
			item.classList.remove('nav__item_hide')
		})
		item.addEventListener('mouseout', (e) => {
			navArr.forEach(elem => {
				elem.classList.toggle('nav__item_hide')
			})
			item.classList.remove('nav__item_hide')
		})
	})


	// menu btn
	document.querySelectorAll('.header__menu-btn').forEach(btn => {
		btn.addEventListener('click', (e) => {
			document.querySelector('body').classList.toggle('header-open')
		})
	})
	document.querySelectorAll('.header__menu-close').forEach(btn => {
		btn.addEventListener('click', (e) => {
			document.querySelector('body').classList.remove('header-open')
		})
	})
	document.querySelectorAll('.header a').forEach(btn => {
		btn.addEventListener('click', (e) => {
			document.querySelector('body').classList.remove('header-open')
		})
	})


	// fancybox defaults
	Fancybox.bind('[data-fancybox]', {
		autoFocus: false,
		// dragToClose: false,
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
			let blockPosition = document.getElementById(currentAnchor).offsetTop - 130

			window.scroll({
				top: blockPosition,
				left: 0,
				behavior: 'smooth'
			});
		})
	}))


	// srcoll up btn
	document.querySelectorAll('.scroll-up-btn').forEach((btn => {
		btn.addEventListener('click', (e) => {
			window.scroll({
				top: 0,
				left: 0,
				behavior: 'smooth'
			});
		})
	}))


	// request
	const requestURL = "send.php"

	function request(method, url, body = null) {
		const headers = {
			'Content-Type': 'application/json'
		}
		const params = {
			method: method,
			body: JSON.stringify(body),
			headers: headers
		}
		method == 'GET' ? delete params.body : ''// GET method cannot have body

		return fetch(url, params)
			.then(response => {
				if (response.ok) {
					return response
				}
				return response.json().then(error => {
					const er = new Error('Ошибка')
					er.data = error
					throw er
				})
			})
	}


	// send form
	document.querySelectorAll('form').forEach(form => {
		let nameInput = form.querySelector('input[name="name"]')
		let phoneInput = form.querySelector('input[name="phone"]')

		let popup = document.querySelector('.popup')

		form.addEventListener('submit', (e) => {
			let body = {
				name: nameInput.value,
				phone: phoneInput.value,
			}
			e.preventDefault()
			request('POST', requestURL, body)
				.then(data => {
					const fancybox = new Fancybox([
						{
							src: popup,
							type: "html",
						},
					]);
					nameInput.value = null
					phoneInput.value = null
				})
				.catch(err => console.log(err))

		})
	})



});


// map
function initMap(coords, id) {
	let myMap = new ymaps.Map(id, {
		center: coords,
		zoom: 15,
		controls: ['zoomControl']
	}, {
		searchControlProvider: 'yandex#search'
	});

	myPlacemark = new ymaps.Placemark(coords,
		{ balloonContent: 'All Habtoor', },
		{ iconColor: '#DBA693' });

	myMap.geoObjects.add(myPlacemark)

	if (window.innerWidth < 1023) {
		myMap.behaviors.disable(['drag', 'rightMouseButtonMagnifier']);
		//  - drag - перемещение карты при нажатой левой кнопки мыши;
		//  - magnifier.rightButton - увеличение области, выделенной правой кнопкой мыши.
	}
}

window.onload = () => {
	ymaps.ready(() => {
		initMap([25.182669, 55.252884], 'map')
	})
}
