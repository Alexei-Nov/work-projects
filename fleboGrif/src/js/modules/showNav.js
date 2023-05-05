$('.nav__btn').on('click', function () {
  $('.nav').slideToggle({
    start: function () {
      $(this).css({
        display: 'flex',
      });
    },
  });
  $(this).toggleClass('--active');
  $('.header__overlay').slideToggle();
});

$('.header__overlay').on('click', function () {
  $(this).slideUp();
  $('.nav').slideUp();
  $('.nav__btn').removeClass('--active');
});

$(window).on('resize load', () => {
  if ($(window).width() < 992) {
    $('.nav').find('.has-children').children('a').replaceWith('<span>Для врачей</span>');
  }

  if ($(window).width() < 576) {
    $('.nav')
      .find('li.has-children')
      .on('click', function () {
        $(this).toggleClass('--active');
        $(this)
          .find('ul')
          .slideToggle({
            start: function () {
              $(this).css({
                display: 'flex',
              });
            },
          });
      });
  }
});
