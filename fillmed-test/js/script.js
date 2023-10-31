document.addEventListener('DOMContentLoaded', function () {

	// fancybox defaults
	Fancybox.bind('[data-fancybox]', {
		autoFocus: false,
		// placeFocusBack: false,
		Thumbs: false,
		Toolbar: {
			display: {
				left: [],
				middle: [],
				right: ["close"],
			},
		},
		// dragToClose: false,
	});

	// slider card
	let sliderCard = () => {
		let SwiperCard = new Swiper('.detail-card__slider', {
			slidesPerView: 1,
			spaceBetween: 30,
			loop: true,
			navigation: {
				nextEl: '.detail-card__next',
				prevEl: '.detail-card__prev',
			},

		});
	};
	sliderCard()


	// accordion
	document.querySelectorAll('.accordion').forEach(accordion => {
		let itemArr = accordion.querySelectorAll('.accordion__item')
		itemArr.forEach(item => {

			let btn = item.querySelector('.accordion__btn')
			let body = item.querySelector('.accordion__body')
			if (!item.closest('.accordion__item_open')) {
				body.style.maxHeight = 0
			}
			btn.addEventListener('click', (e) => {

				if (!item.closest('.accordion__item_open')) {
					item.classList.add('accordion__item_open')
					body.style.maxHeight = body.scrollHeight + 'px'
				} else {
					item.classList.remove('accordion__item_open')
					body.style.maxHeight = 0
				}
			})
		})
	})


	// card size
	document.querySelectorAll('.detail-card__size').forEach(wrapper => {
		wrapper.addEventListener('click', (e) => {
			let currentSize = e.target.closest('.size')
			if (currentSize) {
				wrapper.querySelectorAll('.size').forEach(size => {
					size.classList.remove('size_active')
				})
				currentSize.classList.add('size_active')
			}
		})
	})


	// card scroll
	window.addEventListener('touchstart', handleTouchStart, { passive: false });
	window.addEventListener('touchmove', handleTouchMove, { passive: false });

	let hideBody = document.querySelector('.detail-card')

	let yDown = null;
	let xDown = null;
	let scrollState = 'default'

	let descMaxHeight = document.querySelector('.detail-card__desc-container').scrollHeight
	document.querySelector('.detail-card__desc-container').setAttribute('style', '--height:' + descMaxHeight + 'px;')

	function handleTouchStart(e) {
		if (window.pageYOffset == 0) {
			const firstTouch = e.touches[0];
			yDown = firstTouch.clientY;
			xDown = firstTouch.clientX;
		}


		// if (e.target.closest('.detail-card__body')) {
		// } else {
		// 	e.preventDefault();
		// 	e.stopImmediatePropagation();
		// }
	};

	function setState(scrollState) {

		switch (scrollState) {
			case 'default':
				hideBody.setAttribute('data-position', 'default')
				break;
			case 'hide':
				hideBody.setAttribute('data-position', 'hide')
				break;
			case 'show':
				hideBody.setAttribute('data-position', 'show')
				break;
		}
	}

	function handleTouchMove(e) {
		let yMove = e.touches[0].clientY;
		let xMove = e.touches[0].clientX;
		let yDiff = yDown - yMove;
		let xDiff = xDown - xMove;

		if (Math.abs(xDiff) <= Math.abs(yDiff)) {
			if (yDown && xDown) {
				if (yDiff > 0) {
					scrollState = 'default'
					if (hideBody.getAttribute('data-position') == 'default' || hideBody.getAttribute('data-position') == 'show') {
						scrollState = 'show'
					}
				} else {
					scrollState = 'hide'
				}
			} else {
				// if (yDiff < 0 && window.pageYOffset == 0 && hideBody.getAttribute('data-position') == 'show') {
				// 	scrollState = 'default'
				// 	setState(scrollState)
				// }
				return
			}
		}

		setState(scrollState)

		yDown = null;
		xDown = null;
	};



});