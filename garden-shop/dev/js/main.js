document.addEventListener('DOMContentLoaded', function () {

	//---------------------------phone mask---------------------------------------

	document.querySelectorAll('[type="tel"]').forEach(el => {
		let mask = IMask(el, { mask: '+{7}(000)000-00-00' })
	})

})