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
