$(document).ready(function () {

	//--------------------------quiz--------------------------

	document.querySelectorAll('.quiz__answer').forEach(el => {
		el.querySelector('input').value = el.querySelector('.quiz__checkbox-label').innerText
	})

	let quizNumberActive = document.querySelector('.quiz__progress-cuurent')
	let quizNumberTotal = document.querySelector('.quiz__progress-total')
	let quizNumActive = 1
	let quizNumTotal = document.querySelectorAll('.quiz__list-item').length

	quizNumberActive.innerHTML = quizNumActive
	quizNumberTotal.innerHTML = quizNumTotal

	function lineWidth() {
		document.querySelector('.quiz__progress-line').style.width = `${(100 / quizNumTotal) * quizNumActive}%`
		quizNumberActive.innerHTML = quizNumActive
	}
	lineWidth()

	document.querySelector('.quiz__next-btn').addEventListener('click', nextAnswer)
	function nextAnswer(e) {
		if (document.querySelector('.last').closest('.active')) {
			document.querySelector('.quiz__form').style.display = 'none'
			document.querySelector('.quiz__final').style.display = 'flex'
			return
		}
		for (let i = 0; i < document.querySelectorAll('.quiz__list-item').length; i++) {
			if (document.querySelectorAll('.quiz__list-item')[i].closest('.active')) {
				document.querySelector('.active').classList.remove('active')
				document.querySelectorAll('.quiz__list-item')[i + 1].classList.add('active')
				break
			}
		}
		quizNumActive++
		lineWidth()

		if (quizNumActive == quizNumTotal) {
			document.querySelector('.quiz__next-btn').innerHTML = 'Завершить квиз'
		}
	}
	document.querySelectorAll('.quiz__list-item')[quizNumTotal - 1].classList.add('last')


	//------------------------------------anchor-----------------------------

	document.querySelectorAll('.anchor').forEach((el => {
		el.addEventListener('click', (e) => {
			e.preventDefault()
			let currentAnchor = el.href.split('#').slice(1).join('')
			let blockPosition = document.getElementById(currentAnchor).offsetTop
			window.scroll({
				top: blockPosition,
				left: 0,
				behavior: 'smooth'
			});
		})
	}))


	//-------------------------------------phone mask----------------------------

	if (document.querySelector('.phone-mask')) {
		document.querySelectorAll('.phone-mask').forEach(el => {
			let mask = IMask(el, { mask: '+{7}(000)000-00-00' })
		})
	}

	//--------------------------------------forms--------------------------------

	// $('form').submit(function () {
	//     var form = this;
	//     if (this.form && !this.form.value) { this.form.focus(); return false; }

	//     var submit_text = $(form).find('button[type="submit"]').text();
	//     $(form).find('button[type="submit"] span').text('Отправка...').attr('disabled', 'disabled');

	//     $.ajax({
	//         'type': 'POST',
	//         'url': ($(this).attr('action') || 'send.php'),
	//         'data': $(this).serialize(),
	//         'success': function (z) {
	//             if (z == '1') {
	//                 ym(90055227, 'reachGoal', 'SEND');
	//                 $('input[type="text"], input[type="tel"]').val('');
	//                 $.fancybox.open({ 'src': '#thanks', 'type': 'inline' });
	//             } else { alert(z); }
	//         },
	//         'error': function () { alert('Network Error'); },
	//         'complete': function () { $(form).find('button[type="submit"]').text(submit_text).removeAttr('disabled'); },
	//     });

	//     return false;
	// });
});