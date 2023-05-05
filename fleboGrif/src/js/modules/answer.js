$('.answers__item').on('click', function () {
  $('.answers__item').not($(this)).removeClass('--active');
  if ($(this).hasClass('--active')) {
    $(this).removeClass('--active');
  } else {
    $(this).addClass('--active');
  }
});
