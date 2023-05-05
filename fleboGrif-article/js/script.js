document.querySelectorAll('.show-more__btn').forEach(el => {
	el.addEventListener('click', (e) => {
		if (!e.target.closest('.show-more')) {
			if (document.querySelectorAll('.show-more')) {
				for (let j = 0; j < document.querySelectorAll('.show-more').length; j++) {
					document.querySelectorAll('.show-more > .show-more__btn')[j].innerHTML = 'Читать далее'
					document.querySelectorAll('.show-more')[0].classList.remove('show-more')
				}
			}
			e.target.closest('.show-more__wrapper').classList.add('show-more')
			e.target.innerHTML = 'Скрыть'
		} else {
			for (let j = 0; j < document.querySelectorAll('.show-more').length; j++) {
				document.querySelectorAll('.show-more > .show-more__btn')[j].innerHTML = 'Читать далее'
				document.querySelectorAll('.show-more')[0].classList.remove('show-more')
			}
		}
	})
});