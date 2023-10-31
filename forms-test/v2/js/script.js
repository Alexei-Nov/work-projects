document.addEventListener('DOMContentLoaded', function () {

	// input
	function inputValueChecker(wrapper) {
		let input = wrapper.querySelector('.input__field')
		let counter = wrapper.querySelector('.input__count')
		let maxLength = input.getAttribute('maxlength')

		if (maxLength) {
			counter.innerHTML = maxLength - input.value.length
		}
		if (input.value) {
			wrapper.classList.add('input_active')
			wrapper.classList.remove('input_error')
		} else {
			wrapper.classList.remove('input_active')
		}
	}

	document.querySelectorAll('.input').forEach(wrapper => {
		let input = wrapper.querySelector('.input__field')
		let resetBtn = wrapper.querySelector('.input__reset')

		inputValueChecker(wrapper)


		input.addEventListener('input', (e) => {
			inputValueChecker(wrapper)
		})

		if (resetBtn) {
			resetBtn.addEventListener('click', (e) => {
				input.value = ''
				inputValueChecker(wrapper)
				if (wrapper.closest('.input_with-autocomplete')) {
					autocompleteQuery(wrapper)
				}
			})
		}
	})

	document.addEventListener('click', (e) => {
		if (e.target.closest('.input__wrapper')) {
			document.querySelectorAll('.input_focus').forEach(item => {
				item.classList.remove('input_focus')
			})
			e.target.closest('.input').classList.add('input_focus')
			e.target.closest('.input').querySelector('input').focus()
		} else {
			document.querySelectorAll('.input_focus').forEach(item => {
				item.classList.remove('input_focus')
			})
		}
	})


	// calendar
	let date = new Date
	let currentDate = date.toISOString().split('T')[0]
	const calendar = new VanillaCalendar('.vanilla-calendar', {
		settings: {
			lang: 'ru',
		},
		date: {
			min: currentDate,
		},
		actions: {
			clickDay(event, dates) {
				event.target.closest('.input').querySelector('.input__field').setAttribute('type', 'date')
				event.target.closest('.input').querySelector('.input__field').value = dates
				inputValueChecker(event.target.closest('.input'))
			},
		},
	});
	calendar.init();

	document.querySelectorAll('.input_with-calendar .input__wrapper').forEach(wrapper => {
		let input = wrapper.querySelector('.input__field')

		document.addEventListener('click', (e) => {
			if (!e.target.closest('.input__calendar')
				&& !e.target.closest('.vanilla-calendar-header')
				&& !e.target.closest('.vanilla-calendar-months')
				&& !e.target.closest('.vanilla-calendar-years')) {
				if (e.target.closest('.input_with-calendar') && e.target.closest('.input__calender-icon') && !e.target.closest('.input_calendar-open')) {
					wrapper.classList.add('input_calendar-open')
					wrapper.closest('.input').classList.remove('input_open')
				} else {
					wrapper.classList.remove('input_calendar-open')
				}
			}
		})

		document.addEventListener('click', (e) => {
			if (!e.target.closest('.input__calendar') && e.target.closest('.input_with-calendar .input__wrapper')) {
				if (!e.target.closest('.input__calender-icon') && !e.target.closest('.input__caret') && !e.target.closest('.input__select-list')) {
					wrapper.closest('.input').classList.add('input_open')
				} else if (e.target.closest('.input__caret')) {
					wrapper.closest('.input').classList.toggle('input_open')
				} else {
					wrapper.closest('.input').classList.remove('input_open')
					if (e.target.closest('.input__select-list')) {
						input.setAttribute('type', 'text')
						input.value = e.target.closest('.input__select-item').querySelector('.input__select-text').innerHTML
						inputValueChecker(wrapper)
					}
				}
			}
		})

	})


	// form
	document.querySelectorAll('form').forEach(form => {
		let submitBtn = form.querySelector('input[type="submit"]')
		let resetBtn = form.querySelector('.form__reset')
		let popup = document.querySelector('#popup')

		submitBtn.addEventListener('click', (e) => {
			e.preventDefault()
			form.querySelectorAll('input[required]').forEach(elem => {
				if (!elem.value) {
					elem.closest('.input').classList.add('input_error')
				}
			})
			if (!document.querySelector('.input_error')) {
				const fancybox = new Fancybox([
					{
						src: popup,
						type: "html",
					},
				]);
				resetForm()
			}
		})

		resetBtn.addEventListener('click', resetForm)

		function resetForm() {
			form.querySelectorAll('.input__field').forEach(input => {
				input.value = null
				inputValueChecker(input.closest('.input'))
			})
			form.querySelectorAll('.input_select .input__field').forEach((input, index) => {
				input.value = defaultStateOfSelects[index].text
				input.closest('.input').querySelector('.input__icon').innerHTML = defaultStateOfSelects[index].icon
			})
		}
	})


	// select 
	let defaultStateOfSelects = []

	document.addEventListener('click', (e) => {
		if (!e.target.closest('.input_select .input__wrapper') && !e.target.closest('.input_with-calendar .input__wrapper')) {
			document.querySelectorAll('.input_open').forEach(item => {
				item.classList.remove('input_open')
			})
		}
	})

	document.querySelectorAll('.input_select').forEach((body, index) => {
		let input = body.querySelector('.input__field')
		let icon = body.querySelector('.input__icon')
		let itemArr = body.querySelectorAll('.input__select-item')
		let wrapper = body.querySelector('.input__wrapper')
		let list = body.querySelector('.input__select-list')

		defaultStateOfSelects.push(
			{
				icon: icon.innerHTML,
				text: input.value
			}
		)

		let selectList = []

		itemArr.forEach(item => {
			selectList.push({
				icon: item.querySelector('.input__select-icon').innerHTML,
				text: item.querySelector('.input__select-text').innerHTML
			})
		})

		wrapper.addEventListener('click', (e) => {
			document.querySelectorAll('.input_open').forEach(item => {
				if (item != body) {
					item.classList.remove('input_open')
				}
			})
			if (e.target.closest('.input__caret')) {
				body.classList.toggle('input_open')
				list.innerHTML = ''
				selectList.forEach(item => {
					list.innerHTML += `<div class="input__select-item"><div class="input__select-icon">${item.icon}</div><div class="input__select-text">${item.text}</div></div>`
				})
			} else if (e.target.closest('.input__select-item')) {
				input.value = e.target.closest('.input__select-item').querySelector('.input__select-text').innerHTML
				icon.innerHTML = e.target.closest('.input__select-item').querySelector('.input__select-icon').innerHTML
				body.classList.remove('input_open')
				inputValueChecker(body)
			}

		})

		input.addEventListener('input', (e) => {
			let currentText = input.value.toLowerCase()
			list.innerHTML = ''
			selectList.forEach(item => {
				if (item.text.toLowerCase().substr(0, input.value.length) == currentText) {
					list.innerHTML += `<div class="input__select-item"><div class="input__select-icon">${item.icon}</div><div class="input__select-text">${item.text}</div></div>`
				}
			})

			if (list.querySelector('.input__select-item')) {
				body.classList.add('input_open')
			} else {
				body.classList.remove('input_open')
			}

			focusItem = -1
			inputValueChecker(body)
		})

		let focusItem = -1
		input.addEventListener('keydown', (e) => {
			if (e.keyCode == 40) {
				e.preventDefault()
				if (focusItem < body.querySelectorAll('.input__select-item').length - 1) {
					focusItem++
					updateFocusItem()
				}
			} else if (e.keyCode == 38) {
				e.preventDefault()
				if (focusItem > 0) {
					focusItem--
					updateFocusItem()
				}
			} else if (e.keyCode == 13) {
				e.preventDefault()
				if (focusItem > -1) {
					body.querySelector('.input__select-item_focus').click()

				}
			}
		})

		input.addEventListener('change', (e) => {
			resetInputValue()
		})

		function resetInputValue() {
			if (!input.value) {
				icon.innerHTML = defaultStateOfSelects[index].icon
				input.value = defaultStateOfSelects[index].text
			}
		}

		function updateFocusItem() {
			body.querySelectorAll('.input__select-item_focus').forEach(item => {
				item.classList.remove('input__select-item_focus')
			})
			body.querySelectorAll('.input__select-item')[focusItem].classList.add('input__select-item_focus')
		}
	})


	// input with autocomplete
	document.querySelectorAll('.input_with-autocomplete').forEach(body => {
		let input = body.querySelector('.input__field')
		let list = body.querySelector('.input__autocomplete-list')

		input.addEventListener('input', (e) => {
			autocompleteQuery(body)
			focusItem = -1
		})

		list.addEventListener('click', (e) => {
			if (e.target.closest('.input__autocomplete-item')) {
				input.value = e.target.closest('.input__autocomplete-item').innerHTML
				list.classList.add('input__autocomplete-list_hide')
			}
		})


		let focusItem = -1
		input.addEventListener('keydown', (e) => {
			if (e.keyCode == 40) {
				e.preventDefault()
				if (focusItem < body.querySelectorAll('.input__autocomplete-item').length - 1) {
					focusItem++
					updateFocusItem()
				}
			} else if (e.keyCode == 38) {
				e.preventDefault()
				if (focusItem > 0) {
					focusItem--
					updateFocusItem()
				}
			} else if (e.keyCode == 13) {
				e.preventDefault()
				if (focusItem > -1) {
					body.querySelector('.input__autocomplete-item_focus').click()

				}
			}
		})

		function updateFocusItem() {
			body.querySelectorAll('.input__autocomplete-item_focus').forEach(item => {
				item.classList.remove('input__autocomplete-item_focus')
			})
			body.querySelectorAll('.input__autocomplete-item')[focusItem].classList.add('input__autocomplete-item_focus')
		}
	})

	function autocompleteQuery(body) {
		let url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/fio";
		let token = "231f4463dc701ba45a1dc3e6eebd4eca71143f92";

		let input = body.querySelector('.input__field')
		let list = body.querySelector('.input__autocomplete-list')

		let query = input.value;
		let options = {
			method: "POST",
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json",
				"Authorization": "Token " + token
			},
			body: JSON.stringify({
				query: query,
				count: 4
			})
		}

		fetch(url, options)
			.then(response => {
				if (response.ok) {
					return response.json()
				}
				return response.json().then(error => {
					const er = new Error('Ошибка')
					er.data = error
					throw er
				})
			})
			.then(result => {
				list.innerHTML = ''
				result.suggestions.forEach(elem => {
					list.innerHTML += `<div class="input__autocomplete-item">${elem.value}</div>`
				})
				if (result.suggestions.length == 0) {
					list.classList.add('input__autocomplete-list_hide')
				} else {
					list.classList.remove('input__autocomplete-list_hide')
				}
			})
			.catch(error => console.log(error));
	}

});