document.addEventListener('DOMContentLoaded', function () {

	//------------doctor slider-----------------------

	let sliderDoc = () => {
		let SwiperDoc = new Swiper('.doctor__slider ', {
			slidesPerView: 2,
			spaceBetween: 30,
			loop: true,
			observeSlideChildren: true,
			pagination: {
				el: ".doctor-pagination",
				type: "bullets",
				clickable: true,
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				571: {
					slidesPerView: 'auto',
					centeredSlides: true,
				},
				1201: {
					slidesPerView: 2,
					centeredSlides: false,
				}
			}
		});
	};
	sliderDoc();

	//------------doctor subslider-----------------------

	let subSliderDoc = () => {
		let SwiperSubDoc = new Swiper('.doctor__cert', {
			slidesPerView: 4,
			spaceBetween: 12,
			nested: true,
			observeParents: true,
		});
	};

	subSliderDoc();

	//------------smile slider----------------------------

	let sliderSmile = () => {
		let SwiperSmile = new Swiper('.smile__slider ', {
			slidesPerView: 3,
			spaceBetween: 30,
			autoHeight: true,
			pagination: {
				el: ".smile-pagination",
				type: "bullets",
				clickable: true,
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
					allowTouchMove: true,
				},
				870: {
					slidesPerView: 2,
					allowTouchMove: true,
				},
				1401: {
					slidesPerView: 3,
					allowTouchMove: false,
				}
			}
		});
	};
	sliderSmile();

	//------------cost slider----------------------------

	let sliderCost = () => {
		let SwiperCost = new Swiper('.cost__slider ', {
			slidesPerView: 3,
			spaceBetween: 30,
			pagination: {
				el: ".cost-pagination",
				type: "bullets",
				clickable: true,
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
					allowTouchMove: true,
				},
				870: {
					slidesPerView: 2,
					allowTouchMove: true,
				},
				1401: {
					slidesPerView: 3,
					allowTouchMove: false,
				}
			}
		});
	};
	sliderCost()

	//------------Construction slider----------------------------

	let sliderConstruction = () => {
		let SwiperConstruction = new Swiper('.construction__slider ', {
			slidesPerView: 1,
			spaceBetween: 30,
			loop: true,
			autoHeight: true,
			pagination: {
				el: ".construction-pagination",
				type: "bullets",
				clickable: true,
			},
		});
	};
	sliderConstruction();

	//------------result slider----------------------------

	let sliderResult = () => {
		let SwiperResult = new Swiper('.result__slider ', {
			slidesPerView: 3,
			spaceBetween: 30,
			loop: true,
			pagination: {
				el: ".result-pagination",
				type: "bullets",
				clickable: true,
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				870: {
					slidesPerView: 2,
				},
				1401: {
					slidesPerView: 3,
				}
			}
		});
	};
	sliderResult();

	//------------portal slider----------------------------

	let sliderPortal = () => {
		let SwiperPortal = new Swiper('.portal__slider ', {
			slidesPerView: 'auto',
			spaceBetween: 30,
			loop: true,
			centeredSlides: true,
			pagination: {
				el: ".portal-pagination",
				type: "bullets",
				clickable: true,
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				571: {
					slidesPerView: 'auto',
				}
			}
		});
	};
	sliderPortal();

	//--------------accordion------------------

	function initAcc(elem, option) {
		document.addEventListener('click', function (e) {
			if (!e.target.matches(elem + ' .a-btn')) {
				if (elem == '.accordion.v1') return
				if (document.querySelector(`${elem} > .active`)) {
					document.querySelector(`${elem} > .active`).classList.remove('active')
				}
				return;
			}
			else {
				if (!e.target.parentElement.classList.contains('active')) {
					if (option == true) {
						var elementList = document.querySelectorAll(elem + ' .a-container');
						Array.prototype.forEach.call(elementList, function (e) {
							e.classList.remove('active');
						});
					}
					e.target.parentElement.classList.add('active');
				} else {
					e.target.parentElement.classList.remove('active');
				}
			}
		});
	}

	initAcc('.accordion.v1', true);
	initAcc('.accordion.v2', true);

	//---------------phone mask---------------------

	if (document.querySelectorAll('.phone-mask')) {
		for (let i = 0; i < document.querySelectorAll('.phone-mask').length; i++) {
			eval(`let phoneMask${i} = IMask(document.querySelectorAll('.phone-mask')[${i}], { mask: '+{7}(000)000-00-00' }); `)
		}
	}

	//----------------------nav--------------------------


	if (window.innerWidth < 1000) {
		document.querySelector('.nav__menu-btn').addEventListener('click', navMenu)
		for (let i = 0; i < document.querySelectorAll('.nav__list_wrapper > li').length; i++) {
			document.querySelectorAll('.nav__list_wrapper > li')[i].addEventListener('click', navMenu)
		}
	}


	function navMenu(e) {
		if (!e.target.closest('.nav-opened')) {
			document.querySelector('.header').classList.add('nav-opened')
			document.body.style.overflow = 'hidden'
		} else {
			document.querySelector('.header').classList.remove('nav-opened')
			document.body.style.overflow = 'auto'

		}
	}
	//---------------show-more-------------------------------

	document.querySelector('.show-more__btn').addEventListener('click', showMore)

	function showMore(e) {
		if (!e.target.closest('.show-more')) {
			e.target.parentElement.classList.add('show-more')
		} else {
			e.target.parentElement.classList.remove('show-more')
		}
	}

	//-------------------anchor----------------------------------

	document.querySelectorAll('.anchor').forEach((el => {
		el.addEventListener('click', (e) => {
			e.preventDefault()
			let currentAnchor = e.target.href.split('#').slice(1).join('')
			let blockPosition = document.getElementById(currentAnchor).offsetTop
			console.log(currentAnchor);
			window.scroll({
				top: blockPosition,
				left: 0,
				behavior: 'smooth'
			});
		})
	}))

});


var myMap;
ymaps.ready(init);

function init() {
	myMap = new ymaps.Map('map', {
		center: [55.76, 37.64], // Москва
		zoom: 13
	}, {
		searchControlProvider: 'yandex#search'
	});

	myPlacemark = new ymaps.Placemark([55.770102, 37.664554],
		{ balloonContent: 'Доктор Смайл' },
		{ iconLayout: 'default#image', });

	myPlacemark2 = new ymaps.Placemark([55.742093, 37.632134],
		{ balloonContent: 'Доктор Смайл' },
		{ iconLayout: 'default#image', });

	myMap.geoObjects
		.add(myPlacemark)
		.add(myPlacemark2);

	if (window.innerWidth < 1023) {
		myMap.behaviors
			.disable(['drag', 'rightMouseButtonMagnifier']);
		//  - drag - перемещение карты при нажатой левой кнопки мыши;
		//  - magnifier.rightButton - увеличение области, выделенной правой кнопкой мыши.
	}
}

$(document).ready(function () {

	$("#free_consult").submit(function (e) {
		e.preventDefault();
		var name = $('#free_consult input[name="name"]').val();
		var phone = $('#free_consult input[name="phone"]').val();

		if (name && phone) {
			console.log('trig');
			$.ajax({
				type: "POST",
				url: "send.php",
				data: $('#free_consult').serialize(),
				success: function (data) {
					$('#free_consult').trigger('reset');
					$('#free_consult .error').text('');
					$.fancybox.close();
					$.fancybox.open({
						src: '#popup-success'
					});
					// $('#free_consult').css('display', 'none');
					// $('#success').css('display', 'block');
				}
			});
		} else {
			$('#free_consult .error').text('Пожалуйста заполните все поля!');
		}
	});

	$("#callback").submit(function (e) {
		console.log('trig');

		e.preventDefault();
		var name = $('#callback input[name="name"]').val();
		var phone = $('#callback input[name="phone"]').val();

		if (name && phone) {
			$.ajax({
				type: "POST",
				url: "send.php",
				data: $('#callback').serialize(),
				success: function (data) {
					$('#callback').trigger('reset');
					// $('#callback').css('display', 'none');
					// $('#success').css('display', 'block');
					$('#callback .error').text('');
					$.fancybox.close();
					$.fancybox.open({
						src: '#popup-success'
					});
				}
			});
		} else {
			$('#callback .error').text('Пожалуйста заполните все поля!');
		}
	});

	$("#ask").submit(function (e) {

		e.preventDefault();
		var name = $('#ask input[name="name"]').val();
		var phone = $('#ask input[name="phone"]').val();
		var question = $('#free_consult input[name="question"]').val();
		if (name && phone && question) {
			$.ajax({
				type: "POST",
				url: "send.php",
				data: $('#ask').serialize(),
				success: function (data) {
					$('#ask').trigger('reset');
					$('#ask .error').text('');
					$.fancybox.close();
					$.fancybox.open({
						src: '#popup-success'
					});
					// $('#ask').css('display', 'none');
					// $('#popup-success').css('display', 'block');
				}
			});
		} else {
			$('#ask .error').text('Пожалуйста заполните все поля!');
		}
	});
	$(".inline_form").submit(function (e) {
		e.preventDefault();
		var phone = $(this).find('input[name="phone"]').val();

		console.log(phone);
		if (phone) {
			$.ajax({
				type: "POST",
				url: "send.php",
				data: $(this).serialize(),
				success: function (data) {
					$('.error').text('');
					$('.inline_form').trigger('reset');
					$.fancybox.open({
						src: '#popup-success'
					});
				}
			});
		} else {
			$('.inline_form .error').text('Пожалуйста заполните все поля!');
		}
	});
});