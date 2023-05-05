document.addEventListener('DOMContentLoaded', function () {
	$('body').on('click', '.close', function () {
		var i = $(this).data('i');
		$('.black' + i + ',.mod' + i).remove();
	});

	$('body').on('click', '.no', function () {
		var modal = $(this).closest('.modbox');
		var i = modal.data('i');
		$('.black' + i + ',.mod' + i).remove();
	});

	$('body').on('click', '.dialog', function () {
		var i = $('.black').length + 1;
		var black = $('<div>');
		black.addClass('black').addClass('black' + i).css({ 'z-index': (i + 100) });

		var mod = $('<div>');
		mod.addClass('mod').addClass('mod' + i).css({ 'z-index': (i + 101) }).attr('data-i', i);

		var modbox = $('<div>');
		modbox.addClass('modbox').addClass('modbox' + i).attr('data-i', i);

		var close = $('<div>');
		close.addClass('close').attr('data-i', i);

		mod.append(close);
		mod.append(modbox);
		$('body').append(black);
		$('body').append(mod);

		modbox.html('<img src=\"/images/loading.gif\" alt=\"\" />');
		close.hide();
		win_auto(i);

		var fn = $(this).attr('data-fn');
		var t = $(this).attr('data-t');
		var p = $(this).attr('data-p');

		$.ajax({
			url: '/ajax.php',
			type: 'POST',
			data: {
				'dialogLoad': '1'
				, 'fn': fn
				, 't': t
				, 'p': p
			},
			success: function (ht) {
				modbox.html(ht);
				close.show();
				win_auto(i);
				$('input.phone').mask('+7 (999) 999-99-99');
			}
		});

		return false;
	});

	// function win_auto(i) {
	// 	var mod = $('.mod' + i);
	// 	var modbox = $('.modbox' + i);

	// 	if ($('.modal_block2', modbox).length) {
	// 		var mb = $('.modal_block2', modbox);
	// 		var mt = $('.modal_title', modbox);
	// 		var h = parseFloat(mt.height()) + parseFloat(mt.css('margin-bottom')) + 50 + parseFloat(modbox.css('padding-bottom')) + parseFloat(modbox.css('padding-top'));
	// 		mb.css({ 'height': 'calc(100vh - ' + h + 'px)' });
	// 	}

	// 	var h = mod.height();

	// 	if (h > ($(window).height() - 50)) {
	// 		var w = mod.width();
	// 		var w1 = w / 2 - w;
	// 		mod.css({ 'margin-left': w1 });
	// 		var w2 = w + 25;

	// 		var h1 = $(window).height() - 50;
	// 		mod.css({ 'height': h1 + 'px', 'margin-top': '25px', 'top': '0px' });
	// 		modbox.css({ 'height': h1 + 'px', 'overflow-y': 'scroll' });
	// 	}
	// 	else {
	// 		mod.css({ 'height': 'auto', 'top': '50%' });
	// 		modbox.css({ 'height': 'auto', 'overflow-y': 'inherit' });

	// 		var w = mod.width();
	// 		var w1 = w / 2 - w;
	// 		mod.css({ 'margin-left': w1 });
	// 		var h = mod.height();
	// 		var h1 = h / 2 - h;
	// 		mod.css({ 'margin-top': h1 });
	// 	}
	// }

	// $(window).resize(function () {
	// 	if ($('.modbox').length) {
	// 		$('.modbox').each(function () {
	// 			var i = $(this).data('i');
	// 			win_auto(i);
	// 		});
	// 	}
	// });

	$('body').on('click', '.speaker_more', function () {
		$('.speaker_none').removeClass('none');
		$(this).addClass('none');
	});

	$('input.phone').mask('+7 (999) 999-99-99');

	$('body').on('click', '.checkbox', function () {
		$(this).toggleClass('set');
		$(this).removeClass('err');
	});

	// jQuery('a[href^="#"]').click(function () {
	// 	var href = jQuery(this).attr('href');
	// 	if (jQuery(href).length > 0) {
	// 		var destination = jQuery(href).offset().top;

	// 		var t = 0;
	// 		if ($(window).width() < 980) t = 50;

	// 		if (jQuery.browser.safari) {
	// 			jQuery('body').animate({ scrollTop: destination - t }, 1100);
	// 		} else {
	// 			jQuery('html').animate({ scrollTop: destination - t }, 1100);
	// 		}
	// 	}
	// });

	$('body').on('focus', 'input,textarea', function () {
		$(this).removeClass('err');
	});

	$('body').on('submit', '#form1', function () {
		var forma = $(this);
		var check = jQuery('.checkbox', this);

		check.removeClass('err');

		if (!check.hasClass('set')) check.addClass('err');
		else {
			var i = $('.black').length + 1;
			var black = $('<div>');
			black.addClass('black').addClass('black' + i).css({ 'z-index': (i + 100) });

			var mod = $('<div>');
			mod.addClass('mod').addClass('mod' + i).css({ 'z-index': (i + 101) }).attr('data-i', i);

			var modbox = $('<div>');
			modbox.addClass('modbox').addClass('modbox' + i).attr('data-i', i);

			var close = $('<div>');
			close.addClass('close').attr('data-i', i);

			mod.append(close);
			mod.append(modbox);
			$('body').append(black);
			$('body').append(mod);

			forma.ajaxSubmit({
				url: '/send.php',
				type: 'POST',
				success: function (html) {

					modbox.html(html);
					win_auto(i);

					window.setTimeout(function () {
						close.click();
					}, 3000);

					$('input', forma).val('');
					check.removeClass('set');
				}
			});
		}

		return false;
	});

	$('body').on('click', '.tab', function () {
		var i = $(this).attr('data-i');
		$('.tab').removeClass('set');
		$(this).addClass('set');
		$('.tab_block').addClass('none');
		$('.tab_block' + i).removeClass('none');
	});

	$('body').on('change', 'select', function () {
		var i = $(this).val();
		if (i == 0) $(this).addClass('set');
		else $(this).removeClass('set');
	});

	$('body').on('submit', '#form2', function () {
		var forma = $(this);
		var check = jQuery('.checkbox', this);

		check.removeClass('err');

		if (!check.hasClass('set')) check.addClass('err');
		else {
			var i = $('.black').length + 1;
			var black = $('<div>');
			black.addClass('black').addClass('black' + i).css({ 'z-index': (i + 100) });

			var mod = $('<div>');
			mod.addClass('mod').addClass('mod' + i).css({ 'z-index': (i + 101) }).attr('data-i', i);

			var modbox = $('<div>');
			modbox.addClass('modbox').addClass('modbox' + i).attr('data-i', i);

			var close = $('<div>');
			close.addClass('close').attr('data-i', i);

			mod.append(close);
			mod.append(modbox);
			$('body').append(black);
			$('body').append(mod);

			forma.ajaxSubmit({
				url: '/send.php',
				type: 'POST',
				success: function (html) {

					modbox.html(html);
					win_auto(i);

					window.setTimeout(function () {
						close.click();
					}, 3000);

					$('input', forma).val('');
					$('select', forma).val('').change();

					check.removeClass('set');
				}
			});
		}

		return false;
	});

	$('body').on('click', '.menu_btn', function () {
		$('.nav-panel').addClass('active');
	});

	$('body').on('click', '.menu_close, .nav-panel a', function () {
		$('.nav-panel').removeClass('active');
	});


	//--------------header colorize----------------------

	document.addEventListener('scroll', (e) => {
		if (window.pageYOffset > 50) {
			document.querySelector('.header').classList.add('set')
		} else {
			document.querySelector('.header').classList.remove('set')
		}
	})


	//---------------smooth scroll---------------------------------


	let currentAttribute
	let blockPosition

	document.querySelectorAll('.anchor').forEach((el => {
		el.addEventListener('click', (e) => {
			e.preventDefault()
			currentAttribute = el.getAttribute('data-link')
			blockPosition = document.getElementById(currentAttribute).offsetTop - 120

			window.scroll({
				top: blockPosition,
				left: 0,
				behavior: 'smooth'
			});
		})
	}))

	//--------------speaker show more-------------------------

	document.querySelector('.speaker-list__btn ').addEventListener('click', (e) => {
		if (!e.target.closest('.show-more')) {
			e.target.classList.add('show-more')
			e.target.innerHTML = 'Скрыть'
			document.querySelector('.speaker-list__wrapper').classList.add('show-more')
		} else {
			e.target.classList.remove('show-more')
			e.target.innerHTML = 'Показать еще'
			document.querySelector('.speaker-list__wrapper').classList.remove('show-more')
		}
	})

});

var map;


function initialize() {
	var latlng = new google.maps.LatLng(59.956828, 30.341713);
	var mapOptions = {
		zoom: 17,
		center: latlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		scrollwheel: false,
		disableDefaultUI: true,
		zoomControl: true
	}
	var map = new google.maps.Map(document.getElementById('maps'), mapOptions);
	map.setCenter(latlng);
	var marker = new google.maps.Marker({
		map: map,
		position: latlng,
		icon: '/images/marker.svg',
	});
}


$(document).ready(function () {
	initialize();
	// $(window).scroll();
});
