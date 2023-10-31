document.addEventListener('DOMContentLoaded', function () {

	// accordion
	document.querySelectorAll('.accordion').forEach(accordion => {
		let itemArr = accordion.querySelectorAll('.accordion__item')
		itemArr.forEach(item => {
			let btn = item.querySelector('.accordion__btn')
			let body = item.querySelector('.accordion__body')
			if (!item.closest('.accordion__item_open')) {
				body.style.maxHeight = 0
			}
			item.addEventListener('click', (e) => {
				if (!e.target.closest('.accordion__body')) {
					if (!item.closest('.accordion__item_open')) {
						item.classList.add('accordion__item_open')
						body.style.maxHeight = body.scrollHeight + 'px'
					} else {
						item.classList.remove('accordion__item_open')
						body.style.maxHeight = 0
					}
				}
			})
		})
	})


	// fancybox defaults
	// Fancybox.bind('[data-fancybox]', {
	// 	autoFocus: false,
	// 	dragToClose: false,
	// });
});