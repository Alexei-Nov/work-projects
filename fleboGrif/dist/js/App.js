// modules 
$(document).ready(function () {
	initSliders();
});

function initSliders() {
	// set classes to all sliders
	if ($('.swiper-wrapper').length) {
		$('.swiper-wrapper').each((i, el) => {
			let slider = $(el).parents()[0];
			$(slider).addClass('slider');
			$(el)
				.children()
				.each((i2, el2) => {
					$(el2).addClass('swiper-slide');
				});
		});
	}

	// sliders
	if ($('.clinics__list').children().length) {
		if ($(window).width() < 992) {
			new Swiper('.clinics__list', {
				loop: false,
				slidesPerView: 1,
				spaceBetween: 30,
				grid: {
					rows: 1,
				},
				pagination: {
					type: 'custom',
					el: '.clinics__list-pagination',
					renderCustom: function (swiper, current, total) {
						return `<span><span class="current">${current}</span>/<span class="total">${total}</span> </span>`;
					},
				},
				scrollbar: {
					el: '.clinics__list-scrollbar',
					draggable: true,
				},
				breakpoints: {
					0: {
						slidesPerView: 1,
						grid: {
							rows: 1,
						},
					},
					576: {
						slidesPerView: 1,
						grid: {
							rows: 2,
						},
					},
					768: {
						slidesPerView: 1,
						grid: {
							rows: 2,
						},
					},
				},
			});
		} else {
			$('.clinics__list-scrollbar, .clinics__list-pagination').remove();
		}
	}


	new Swiper('.articles__list', {
		slidesPerView: 3,
		spaceBetween: 40,
		pagination: {
			type: 'custom',
			el: '.articles__list-pagination',
			renderCustom: function (swiper, current, total) {
				return `<span><span class="current">${current}</span>/<span class="total">${total}</span> </span>`;
			},
		},
		scrollbar: {
			el: '.articles__list-scrollbar',
			draggable: true,
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 3,
			},
		},
	});



	new Swiper('.masterclass__list', {
		slidesPerView: 2,
		grid: {
			rows: 2,
		},
		scrollbar: {
			el: '.masterclass__list-scrollbar',
		},
		pagination: {
			type: 'custom',
			el: '.masterclass__list-pagination',
			renderCustom: function (swiper, current, total) {
				return `<span><span class="current">${current}</span>/<span class="total">${total}</span> </span>`;
			},
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
				grid: {
					rows: 2,
				},
				scrollbar: {
					el: '.masterclass__list-scrollbar',
				},
				navigation: false,
			},
			920: {
				slidesPerView: 2,
				grid: {
					rows: 2,
				},
				scrollbar: false,
				pagination: false,
				navigation: {
					nextEl: '.masterclass__list-button-next',
					prevEl: '.masterclass__list-button-prev',
				},
			}
		},
	});


	if ($('.variants__list').children().length) {
		if ($(window).width() < 992) {
			new Swiper('.variants__list', {
				slidesPerView: 2,
				spaceBetween: 30,
				pagination: {
					type: 'custom',
					el: '.variants__list-pagination',
					renderCustom: function (swiper, current, total) {
						return `<span><span class="current">${current}</span>/<span class="total">${total}</span> </span>`;
					},
				},
				scrollbar: {
					el: '.variants__list-scrollbar',
					draggable: true,
				},
				breakpoints: {
					0: {
						slidesPerView: 1,
					},
					768: {
						slidesPerView: 2,
					},
				},
			});
		} else {
			$('.variants__list-scrollbar, .variants__list-pagination').remove();
		}
	}



	new Swiper('.dev-advantage__list', {
		slidesPerView: 2,
		spaceBetween: 30,
		pagination: {
			type: 'custom',
			el: '.dev-advantage__list-pagination',
			renderCustom: function (swiper, current, total) {
				return `<span><span class="current">${current}</span>/<span class="total">${total}</span> </span>`;
			},
		},
		scrollbar: {
			el: '.dev-advantage__list-scrollbar',
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
		},
	});






	new Swiper('.answers__list', {
		slidesPerView: 2,
		spaceBetween: 30,
		grid: {
			rows: 3,
		},

		scrollbar: {
			el: '.answers__list-scrollbar',
			draggable: true,
		},
		navigation: {
			nextEl: '.masterclass__list-button-next',
			prevEl: '.masterclass__list-button-prev',
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
				grid: {
					rows: 3,
				},
				pagination: {
					type: 'custom',
					el: '.answers-pagination',
					renderCustom: function (swiper, current, total) {
						return `<span><span class="current">${current}</span>/<span class="total">${total}</span> </span>`;
					},
				},
				scrollbar: {
					el: '.answers-scrollbar',
				},
			},
			768: {
				slidesPerView: 2,
				grid: {
					rows: 3,
				},
				scrollbar: false,
			},
		},
	});


}
;
$(document).ready(function () {
	// создаём под все селекты на странице новые
	if ($('.select').length) {
		$('.select').each((i, el) => {
			let form = $(el).find('.select__form');
			form.hide();

			let viewForm = $('<div class="select__view"></div>');
			let viewCurrentValue = $('<div class="select__current-value">Выбрать город</div>');
			let viewList = $('<ul class="select__list"></ul>');

			$(el)
				.find('option')
				.each((i, el) => {
					let viewListItem = $(`<li data-value=${$(el).attr('value')}>${$(el).text()}</li>`);
					$(viewList).append(viewListItem);
				});

			$(viewForm).append([viewCurrentValue, viewList]);
			$(el).append(viewForm);
		});
	}
	// открываем при клике
	// $('.select__current-value').on('click', function () {
	// 	$(this).parents('.select').toggleClass('--active');
	// 	$(this)
	// 		.parents('.select')
	// 		.find('.select__list')
	// 		.slideToggle({
	// 			start: function () {
	// 				$(this).css({
	// 					display: 'flex',
	// 				});
	// 			},
	// 		});
	// });

	// выбираем option
	// $('.select__list>li').on('click', function () {
	// 	let form = $(this).parents('.select').find('form');
	// 	let setThisValue = $(this).attr('data-value');

	// 	$(form).find(`option[value="${setThisValue}"]`).attr('selected', true);
	// 	// $(form).find('input[type="submit"]').click();
	// });
});
; // универсал
// $('.answers__item').on('click', function () {
// 	$('.answers__item').not($(this)).removeClass('--active');
// 	if ($(this).hasClass('--active')) {
// 		$(this).removeClass('--active');
// 	} else {
// 		$(this).addClass('--active');
// 	}
// });
;
// $('.nav__btn').on('click', function () {
// 	$('.nav').slideToggle({
// 		start: function () {
// 			$(this).css({
// 				display: 'flex',
// 			});
// 		},
// 	});
// 	$(this).toggleClass('--active');
// 	$('.header__overlay').slideToggle();
// });

// $('.header__overlay').on('click', function () {
// 	$(this).slideUp();
// 	$('.nav').slideUp();
// 	$('.nav__btn').removeClass('--active');
// });

// $(window).on('resize load', () => {
// 	if ($(window).width() < 992) {
// 		$('.nav').find('.has-children').children('a').replaceWith('<span>Для врачей</span>');
// 	}

// 	if ($(window).width() < 576) {
// 		$('.nav')
// 			.find('li.has-children')
// 			.on('click', function () {
// 				$(this).toggleClass('--active');
// 				$(this)
// 					.find('ul')
// 					.slideToggle({
// 						start: function () {
// 							$(this).css({
// 								display: 'flex',
// 							});
// 						},
// 					});
// 			});
// 	}
// });

if ($('.hidden-mobile').length) {
	if ($(window).width() < 576) {
		$('.hidden-mobile').each((i, el) => {
			if ($(el)[0].scrollHeight > $(el)[0].clientHeight) {
				let btn =
					'<div class="hidden-mobile-btn"><span class="show">Читать далее</span> <span class="hide">Скрыть</span> </div>';
				$($(el).parents()[0]).find(el).after(btn);
				$($(el).parents()[0])
					.find('.hidden-mobile-btn')
					.on('click', function () {
						$(this).toggleClass('--active');
						$($(this).parents()[0]).toggleClass('hidden-mobile-show');
					});
			}
		});
	}
}
; // кнопка на мобилках - 'читать далее ▼', универсал