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
        slidesPerView: 2,
        spaceBetween: 30,
        grid: {
          rows: 2,
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
              rows: 2,
            },
          },
          576: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
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
}
