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
				body.style.maxHeight = item.scrollHeight + 'px'
			} else {
				item.classList.remove('accordion__item_open')
				body.style.maxHeight = 0
			}
		})
	})
})


// old ver

function initAcc(elem, option) {
	document.addEventListener('click', function (e) {
		if (!e.target.closest('.a-btn')) {
			if (document.querySelector(`${elem} > .a-container_open`) && option == true) {
				document.querySelector(`${elem} > .a-container_open .a-panel`).style.maxHeight = 0
				document.querySelector(`${elem} > .a-container_open`).classList.remove('a-container_open')
			}
			return;
		}
		else if (e.target.closest(`${elem}`)) {
			if (!e.target.closest('.a-container').classList.contains('a-container_open')) {
				e.preventDefault()
				if (option == true) {
					var elementList = document.querySelectorAll(elem + ' .a-container');
					Array.prototype.forEach.call(elementList, function (e) {
						e.classList.remove('a-container_open');
						e.querySelector('.a-panel').style.maxHeight = 0
					});
				}
				e.target.closest('.a-container').classList.add('a-container_open');
				e.target.closest('.a-container').querySelector('.a-panel').style.maxHeight = e.target.closest('.a-container').querySelector('.a-panel').scrollHeight + 'px'
			} else {
				e.target.closest('.a-container').classList.remove('a-container_open');
				e.target.closest('.a-container').querySelector('.a-panel').style.maxHeight = 0
			}
		}
	});
}

initAcc('.accordion_v1', true);
initAcc('.accordion_v2', false);
