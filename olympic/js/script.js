document.addEventListener('DOMContentLoaded', function () {

	let sliderMain = () => {
		let SwiperMain = new Swiper('.home-block__slider', {
			slidesPerView: 1,
			spaceBetween: 0,
			loop: true,
			allowTouchMove: false,
			autoplay: {
				delay: 2000,
				disableOnInteraction: false,
			},
			navigation: {
				nextEl: '.home-block__next',
				prevEl: '.home-block__prev',
			},
		});
	};

	// slider init 
	sliderMain()


	// remove autofocus in popup
	Fancybox.bind('[data-fancybox]', {
		autoFocus: false,
	});


	//phone mask
	document.querySelectorAll('[type="tel"]').forEach(el => {
		let mask = IMask(el, { mask: '+{7}(000)000-00-00' })
	})


	// menu btn
	document.querySelectorAll('.header__menu-btn').forEach(el => {
		el.addEventListener('click', (e) => {
			el.closest('body').classList.toggle('header-open')
			document.addEventListener('click', menuListener)
		})
		function menuListener(e) {
			if (!e.target.closest('.header__nav-panel') && !e.target.closest('.header__menu-btn')) {
				el.closest('body').classList.toggle('header-open')
				document.removeEventListener('click', menuListener)
			}
		}
	})


	// menu dropdown
	document.querySelectorAll('.nav__item_has-children').forEach(el => {
		el.addEventListener('click', (e) => {
			if (!el.closest('.nav__item_open')) {
				e.preventDefault()
				document.querySelectorAll('.nav__item_open').forEach(elem => {
					elem.classList.remove('.nav__item_open')
					elem.querySelector('.nav__submenu').style.height = 0;
				})
				el.classList.add('nav__item_open')
				el.querySelector('.nav__submenu').style.height = el.querySelector('.nav__submenu').scrollHeight + 'px';
				document.addEventListener('click', dropdownBtnListener)
			}
		})
		function dropdownBtnListener(e) {
			if (!e.target.closest('.nav__item_has-children')) {
				el.classList.toggle('nav__item_open')
				el.querySelector('.nav__submenu').style.height = 0;
				document.removeEventListener('click', dropdownBtnListener)
			}
		}
	})


});