document.addEventListener('DOMContentLoaded', function () {

	function initAcc(elem, option) {
		document.addEventListener('click', function (e) {
			if (!e.target.closest('.a-btn')) {
				if (document.querySelector(`${elem} > .active`)) {
					document.querySelector(`${elem} > .active`).classList.remove('active')
				}
				return;
			}
			else {
				if (!e.target.closest('.a-container').classList.contains('active')) {
					if (option == true) {
						var elementList = document.querySelectorAll(elem + ' .a-container');
						Array.prototype.forEach.call(elementList, function (e) {
							e.classList.remove('active');
						});
					}
					e.target.closest('.a-container').classList.add('active');
				} else {
					e.target.closest('.a-container').classList.remove('active');
				}
			}
		});
	}

	initAcc('.accordion_v1', true);


	//---------phone mask-----------

	if (document.querySelectorAll('.phone-mask')) {
		for (let i = 0; i < document.querySelectorAll('.phone-mask').length; i++) {
			eval(`let phoneMask${i} = IMask(document.querySelectorAll('.phone-mask')[${i}], { mask: '+{7}(000)000-00-00' }); `)
		}
	}

	//----------------partner-----------------

	if (document.querySelectorAll('.partner__btn') && window.innerWidth < 1024) {
		let btnCount = `${document.querySelectorAll('.partner__btn').length}`
		for (let i = 0; i < btnCount; i++) {
			let newBtn = document.querySelectorAll('.partner__btn')[0].cloneNode(true)
			document.querySelectorAll('.partner__btn')[2 * i - i].remove()
			document.querySelectorAll('.partner__text')[i].after(newBtn)
		}
	}

});



var myMap;
ymaps.ready(init);

function init() {
	myMap = new ymaps.Map('map', {
		center: [59.790676, 29.927690],
		zoom: 15
	}, {
		searchControlProvider: 'yandex#search'
	});

	myPlacemark = new ymaps.Placemark([59.790676, 29.927690],
		{ balloonContent: 'Моторный участок №1' },
		{ iconLayout: 'default#image', });


	myMap.geoObjects
		.add(myPlacemark)

	if (window.innerWidth < 1023) {
		myMap.behaviors
			.disable(['drag', 'rightMouseButtonMagnifier']);
		//  - drag - перемещение карты при нажатой левой кнопки мыши;
		//  - magnifier.rightButton - увеличение области, выделенной правой кнопкой мыши.
	}
}

