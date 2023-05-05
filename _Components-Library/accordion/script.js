function initAcc(elem, option) {
	document.addEventListener('click', function (e) {
		if (!e.target.closest('.a-btn')) {
			if (document.querySelector(`${elem} > .a-container_open`) && option == true) {
				document.querySelector(`${elem} > .a-container_open .a-panel`).style.height = 0
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
						e.querySelector('.a-panel').style.height = 0
					});
				}
				e.target.closest('.a-container').classList.add('a-container_open');
				e.target.closest('.a-container').querySelector('.a-panel').style.height = e.target.closest('.a-container').querySelector('.a-panel').scrollHeight + 'px'
			} else {
				e.target.closest('.a-container').classList.remove('a-container_open');
				e.target.closest('.a-container').querySelector('.a-panel').style.height = 0
			}
		}
	});
}

initAcc('.accordion_v1', true);
initAcc('.accordion_v2', false);
