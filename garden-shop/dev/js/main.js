document.addEventListener('DOMContentLoaded', function () {

	// phone mask
	document.querySelectorAll('[type="tel"]').forEach(el => {
		let mask = IMask(el, { mask: '+{7}(000)000-00-00' })
	})

	// sticky header
	document.addEventListener('scroll', (e) => {
		if (window.pageYOffset > 60) {
			document.querySelector('.header').classList.add('header_stick')
		} else {
			document.querySelector('.header').classList.remove('header_stick')
		}
	})

})