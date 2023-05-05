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
  $('.select__current-value').on('click', function () {
    $(this).parents('.select').toggleClass('--active');
    $(this)
      .parents('.select')
      .find('.select__list')
      .slideToggle({
        start: function () {
          $(this).css({
            display: 'flex',
          });
        },
      });
  });

  // выбираем option
  $('.select__list>li').on('click', function () {
    let form = $(this).parents('.select').find('form');
    let setThisValue = $(this).attr('data-value');

    $(form).find(`option[value="${setThisValue}"]`).attr('selected', true);
    // $(form).find('input[type="submit"]').click();
  });
});
