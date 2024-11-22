document.addEventListener('DOMContentLoaded', function () {

	// popup
	document.querySelectorAll('.popup').forEach(popup => {
		navigator.languages.forEach(el => {
			if (
				el == 'tg' ||
				el == 'tg_TJ' ||
				el == 'tg-TJ'
			) {
				// window.location.replace("/tj/")
				alert('tg')
			} else if (
				el == 'uz' ||
				el == 'uz_Arab' ||
				el == 'uz_Arab_AF' ||
				el == 'uz_Cyrl' ||
				el == 'uz_Cyrl_UZ' ||
				el == 'uz_Latn' ||
				el == 'uz_Latn_UZ' ||
				el == 'uz-Arab' ||
				el == 'uz-Arab-AF' ||
				el == 'uz-Cyrl' ||
				el == 'uz-Cyrl-UZ' ||
				el == 'uz-Latn' ||
				el == 'uz-Latn-UZ'
			) {
				// window.location.replace("/uz/")
				alert('uz')
			} else if (
				el == 'ky' ||
				el == 'ky_KG' ||
				el == 'ky-KG'
			) {
				// window.location.replace("/kg/")
				alert('ky')
			}
		})

		popup.classList.add('popup_show')

		alert(navigator.languages);

		popup.querySelectorAll('.popup__input').forEach(wrapper => {
			let input = wrapper.querySelector('.popup__input-field')

			if (input.checked) {
				wrapper.classList.add('popup__input_selected')
			}

			input.addEventListener('change', (e) => {
				popup.querySelectorAll('.popup__input_selected').forEach(item => {
					item.classList.remove('popup__input_selected')
				})
				if (e.target.checked) {
					wrapper.classList.add('popup__input_selected')
				}
			})
		})

		let form = popup.querySelector('.popup__form')
		form.addEventListener('submit', (e) => {
			e.preventDefault()

			popup.classList.remove('popup_show')
		})
	})

});