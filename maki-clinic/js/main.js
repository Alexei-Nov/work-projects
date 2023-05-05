
$(function() {
  const isMobile = $(window).width() <= 767;
  
  // Кнопка "вверх"
  $('.btn-up').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: 0 }, 500);
    e.preventDefault();
  });

  // Sticky Header
  let lastScrollTop = 0, delta = 5;
  const $headerFixed = isMobile ? $('.header') : $('.header__nav-row')
  $(window).on('scroll', function () {
    let curScrollTop = $(this).scrollTop()
    const isOpened = $('.header .checkbox').is(':checked');

    if(Math.abs(lastScrollTop - curScrollTop) >= delta){
      if (curScrollTop > 15) {
        if (!$headerFixed.hasClass('fixed')) {
          $headerFixed.addClass('fixed');
        } else if (curScrollTop > lastScrollTop){
          if (!isOpened) {
            $headerFixed.slideUp()

          }
        } else if (curScrollTop < lastScrollTop) {
          $headerFixed.slideDown()
        }
      } else {
        $headerFixed.stop(true, true)
        $headerFixed.removeClass('fixed');
        $headerFixed.fadeIn()
      }
     lastScrollTop = curScrollTop;
    }
  });


  // Выпадающие меню шапки
  if (!isMobile) {
    // Desktop
    $('.nav__link ~ .submenu').hide()
    
    // Появление выпадающих меню
    $('.nav__link.complex').each( function() {
      $(this).parent().hover(function() {
        const $submenu = $(this).find('.submenu:first');
        if ($submenu.css('display') === 'none') {
          $submenu.fadeIn(200)
          $(this).find('.nav__link:first').addClass('active')

          // Удержание выпадающих меню Navbar в пределах экрана
          detectInView($submenu)
        }
      }, function() {
        const $submenu = $(this).find('.submenu:first');
        if ($submenu.css('display') !== 'none') {
          $submenu.fadeOut(200)
          $(this).find('.nav__link:first').removeClass('active')
        }
      })
    })
  
    // Включение переноса слов в пунктах меню, если они превышают заданную ширину
    $('.submenu').each( function() {
      if ($(this).width() > 300) {
        console.log($(this));
        $(this).css('white-space', 'normal')
      }
    })


    // Функция удержания выпадающих меню в пределах экрана
    function detectInView($el) {
      const el = $el[0];
      const w = el.clientWidth;
      const offset = $(el).offset().left;
      const fullW = window.outerWidth;
      const isInView = (fullW - (offset + w)) >= 0;
      const isFirstLvl = el.classList.contains('first-lvl')
  
      if (!isInView) {
        el.style.right = isFirstLvl ? '0' : '100%'
        el.style.left = 'auto';
      } else {
        el.style.right = 'auto'
        el.style.left = isFirstLvl ? '0' : '100%'
      }
    }
  } else {
    // Mobile
    $('.nav__link.complex').click(function() {
      const $link = $(this)
      const $submenu = $link.find('~ .submenu'); 
      if ($link.hasClass('active')) {
        $submenu.fadeOut(200, function() {
          $link.removeClass('active')
          $submenu.find('.nav__link.complex').removeClass('active')
          $submenu.find('.submenu').css('display', 'none')
        })
      } else {
        $submenu.fadeIn(200)
        $submenu.css('display', 'flex')
        $link.addClass('active')
      }
    })

    $('.header__bg').on('click', function() {
      $('.nav .burger-checkbox').prop('checked', false)
      $(this).hide()
    })

    $('.nav .burger-checkbox').click(function() {
      if ($(this).is(':checked')) {
        $('.nav__link.active ~ .submenu').hide()
        $('.nav__link.active').removeClass('active')
        $('.header__bg').show()
      } else {
        $('.header__bg').hide()
      }
    })
  }

  // Swiper

  const $swipers = $('.swiper');

  $swipers.each(function() {
    const name = $(this).attr('swiperName');
    let initSlide = isMobile ? 0 : $(this).attr('swiperInitSlide');
    const perView = $(this).attr('swiperPerView') || 1;
    const singleEl = perView === 1;
    const hasNav = $(this).attr('swiperNav');
    const hasPag = $(this).attr('swiperPag');
    const isAuto = $(this).attr('swiperAuto');
    const isLooped = $(this).attr('swiperLoop');

    let breakpoints = {};
    switch(name) {
      case 'numeric-items-swiper':
        if(isMobile) {
          initSwiper($(this))
        }
        break;
      case 'view-other-swiper':
        breakpoints = {
          0: {
            slidesPerView: 2
          },
          480: {
            slidesPerView: 3
          },
          992: {
            slidesPerView: 4
          },
          1200: {
            slidesPerView: perView
          }
        }
        initSwiper($(this))
        break;
      case 'view-other-cosmetics-swiper':
        breakpoints = {
          0: {
            slidesPerView: 1
          },
          480: {
            slidesPerView: 2
          },
          600: {
            slidesPerView: 3
          },
          767: {
            slidesPerView: 2
          },
          992: {
            slidesPerView: perView
          }
        }
        initSwiper($(this))
        break;
      case 'license-swiper':
        breakpoints = {
          0: {
            slidesPerView: 1
          },
          600: {
            slidesPerView: perView
          }
        }
        if ($(window).width() <= 992) {
          initSlide = 0;
        }
        initSwiper($(this))
        break;
      case 'works-swiper':
        breakpoints = {
          0: {
            slidesPerView: 1
          },
          767: {
            slidesPerView: 2
          },
          992: {
            slidesPerView: perView
          },
        };
        initSwiper($(this));
        break;
      case 'testimonials-swiper':
      case 'discounts-swiper':
        breakpoints = {
          0: {
            slidesPerView: 1
          },
          767: {
            slidesPerView: perView
          }
        }
        initSwiper($(this))
        break;
      case 'rct-colored-items-swiper':
        breakpoints = {
          0: {
            slidesPerView: 1
          },
          600: {
            slidesPerView: 2
          },
          992: {
            slidesPerView: perView
          },
        }
        initSwiper($(this));
        break;
      case 'join-us-swiper':
        breakpoints = {
          0: {
            slidesPerView: 1
          },
          600: {
            slidesPerView: 2
          },
          992: {
            slidesPerView: perView
          },
        }
      case 'about-us-swiper':
      default:
        initSwiper($(this));
    }

    function initSwiper($el) {
      const swiper = new Swiper($el[0], {
        initialSlide: initSlide || 0,
        spaceBetween: isMobile? 20 : 40,
        speed: isAuto ? 1000 : 400,
        slidesPerView: perView,
        allowTouchMove: !isAuto,
        centeredSlides: singleEl,
        centeredSlidesBounds: singleEl,
        loop: isAuto ? true : isLooped,
        autoplay: isAuto ? {
          delay: 5000
        } : '',

        navigation: hasNav ? {
          nextEl: $el.find('.swiper__btn-next')[0],
          prevEl: $el.find('.swiper__btn-prev')[0],
          disabledClass: "disabled"
        } : '',

        pagination: hasPag ? {
          el: '.swiper__pagination',
          type: 'progressbar',
        } : '',

        breakpoints: singleEl ? {} : breakpoints,
      })
    }
  })
  

  // Unfold script
  $('.unfold-btn').hide()
  if (isMobile) {
    initUnfolds()
  }
  function initUnfolds() {
    const $unfolds = $('.unfold');
    $unfolds.each(function() {
      const h = $(this).attr('unfold-height')

      if ($(this).height() > h) {
        const $unfoldBlock = $(this);
        const btn = $unfoldBlock.siblings('.unfold-btn')
        const btnInitText = btn.text()
        const btnToggleText = btn.attr('toggle-text')
        console.log(btnInitText);

        $unfoldBlock.addClass('unfold-init')

        $unfoldBlock.css('maxHeight', h + 'px');
        btn.show()

        btn.on('click', function() {
          $unfoldBlock.toggleClass('unfolded').scrollTop(0)

          if (btnToggleText) {
            const btnText = btn.find('span');
            btnText.text(btnText.text() === btnInitText  ? btnToggleText : btnInitText)
          }
        })
      }
    })
  }


  // Fancybox
  Fancybox.bind('.join-us-block__fancybox-gallery .fancybox-gallery__item', {
    groupAll: true
  })
  Fancybox.bind('.license-block__fancybox-gallery .fancybox-gallery__item', {
    groupAll: true
  })

  // Развернуть блоки
  openLists()
  function openLists() {
    $('.open-list-block:not(.tab)').hide();
    if ($(window).width() <= 480) {
      $('.open-list-block.tab').hide();
    }

    $('.open-list-container').each(function() {
      const $container = $(this);
      const $btn = $container.find('.open-list-btn');
      const btnInitText = $btn.children('span').text();
      const btnToggleText = $btn.attr('toggle-text')
      $btn.on('click', function() {
        $container.find('.open-list-block').slideToggle(200);
        $container.toggleClass('opened')

        if (btnToggleText) {
          const curText = $(this).children('span').text()
          $(this).children('span').remove()
          curText === btnToggleText ? $(this).append('<span>' + btnInitText + '</span>') : $(this).append('<span>' +btnToggleText + '</span>')
        }
      })
    })
  }

  // Popups
  $('[open-popup]').each(function() {
    const $trigger = $(this)
    const popupClass = $trigger.attr('open-popup');
    const popup = $('.' + popupClass).first()
    
    $trigger.on('click', function() {
      if (popupClass == 'license-popup') {
        Fancybox.show(
          [
            {
              src: "./img/license/license-1.jpg",
              type: "image",
            },
            
          ],
          {
            dragToClose: false
          }
        );
  
        return false;
      }
      const fancybox = Fancybox.show(
        [
          {
            src: popup[0],
            type: "html"
          }
        ],
        {
          dragToClose: false
        }
      );
    })
  }) 


  // Растяжение картинок по блоку
  setTimeout(stretchImgs, 20)
  $(window).on('resize', stretchImgs);

  function stretchImgs () {
    const $imgs = $('img._center')

    $imgs.each(function() {
      const $imgBlock = $(this).parents('.pic-container')
      const stretchDir = detectStretch($(this), $imgBlock);
      if (stretchDir) {
        $(this).css(stretchDir[0], '100%').css(stretchDir[1], 'auto')
      }
    })


    function detectStretch($img, $block) {
      if ($img.width() < $block.width()) {
        return ['width', 'height'];
      } else if ($img.height() < $block.height()) {
        return ['height','width'];
      } else {
        return false;
      }
    }
  }


  // Tabs script
  $('.tab-content:not(.shown)').hide()
  $('.tab-container').each(function() {
    const $container = $(this)
    const $tabsCont = $container.find('.tabs').first();
    const $tabContents = $container.find('.tab-contents').first()
    const $defaultActiveTab = $tabsCont.find('.tab.active');

    if (!$defaultActiveTab.length) {
      const $firstTab = $tabsCont.find('.tab').first();
      $firstTab.addClass('active')
      const contentCls = $firstTab.attr('tab-val')

      const $defaultShownContent = $tabContents.children('.tab-content.shown');
      if (!$defaultShownContent.length) {
        const $firstContent = $tabContents.children('.tab-content.' + contentCls)
        $firstContent.addClass('shown')

        $firstContent.show()
      }
    }
    
    
    $tabsCont.find('.tab').each(function() {
      const $tab = $(this);
      const tabVal = $tab.attr('tab-val');
      

      $tab.on('click', function() {
        if ($tab.hasClass('active')) {
          return;
        }

        $tabsCont.find('.tab.active').removeClass('active');
        $tab.addClass('active')

        const $openBlock = $tabContents.children(`.tab-content.${tabVal}`)
        const $curBlock = $tabContents.children('.tab-content.shown').length ?  $tabContents.children('.tab-content.shown') : ''

        if ($curBlock.length) {
          $curBlock.removeClass('shown').fadeOut(200, function() {
            $openBlock.fadeIn(200).addClass('shown');
          });
        } else {
          $openBlock.fadeIn(200).addClass('shown');
        }

        setTimeout(stretchImgs, 220)
      })
      
    })
  })

  // Select Tab script
  $('.select-tab-content:not(.shown)').hide()
  $('.select-tab-container').each(function() {
    const $select = $(this).find('.select-tab').first();
    const $contents = $(this).find('.select-tab-contents').first()

    $select.on('change', function() {
      const $openBlock = $contents.children('.' + this.value)
      console.log('.' + this.value);
      const $curBlock = $contents.children('.select-tab-content.shown')

      if ($curBlock.length) {
        $curBlock.removeClass('shown').fadeOut(200, function() {
          $openBlock.addClass('shown').fadeIn(200)
        })
      } else {
        $openBlock.addClass('shown').fadeIn(200)
      }
      
    })
  })

  
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG4kKGZ1bmN0aW9uKCkge1xyXG4gIGNvbnN0IGlzTW9iaWxlID0gJCh3aW5kb3cpLndpZHRoKCkgPD0gNzY3O1xyXG4gIFxyXG4gIC8vINCa0L3QvtC/0LrQsCBcItCy0LLQtdGA0YVcIlxyXG4gICQoJy5idG4tdXAnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgICQoJ2h0bWwsYm9keScpLnN0b3AoKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAwIH0sIDUwMCk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIFN0aWNreSBIZWFkZXJcclxuICBsZXQgbGFzdFNjcm9sbFRvcCA9IDAsIGRlbHRhID0gNTtcclxuICBjb25zdCAkaGVhZGVyRml4ZWQgPSBpc01vYmlsZSA/ICQoJy5oZWFkZXInKSA6ICQoJy5oZWFkZXJfX25hdi1yb3cnKVxyXG4gICQod2luZG93KS5vbignc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IGN1clNjcm9sbFRvcCA9ICQodGhpcykuc2Nyb2xsVG9wKClcclxuICAgIGNvbnN0IGlzT3BlbmVkID0gJCgnLmhlYWRlciAuY2hlY2tib3gnKS5pcygnOmNoZWNrZWQnKTtcclxuXHJcbiAgICBpZihNYXRoLmFicyhsYXN0U2Nyb2xsVG9wIC0gY3VyU2Nyb2xsVG9wKSA+PSBkZWx0YSl7XHJcbiAgICAgIGlmIChjdXJTY3JvbGxUb3AgPiAxNSkge1xyXG4gICAgICAgIGlmICghJGhlYWRlckZpeGVkLmhhc0NsYXNzKCdmaXhlZCcpKSB7XHJcbiAgICAgICAgICAkaGVhZGVyRml4ZWQuYWRkQ2xhc3MoJ2ZpeGVkJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjdXJTY3JvbGxUb3AgPiBsYXN0U2Nyb2xsVG9wKXtcclxuICAgICAgICAgIGlmICghaXNPcGVuZWQpIHtcclxuICAgICAgICAgICAgJGhlYWRlckZpeGVkLnNsaWRlVXAoKVxyXG5cclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGN1clNjcm9sbFRvcCA8IGxhc3RTY3JvbGxUb3ApIHtcclxuICAgICAgICAgICRoZWFkZXJGaXhlZC5zbGlkZURvd24oKVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkaGVhZGVyRml4ZWQuc3RvcCh0cnVlLCB0cnVlKVxyXG4gICAgICAgICRoZWFkZXJGaXhlZC5yZW1vdmVDbGFzcygnZml4ZWQnKTtcclxuICAgICAgICAkaGVhZGVyRml4ZWQuZmFkZUluKClcclxuICAgICAgfVxyXG4gICAgIGxhc3RTY3JvbGxUb3AgPSBjdXJTY3JvbGxUb3A7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG5cclxuICAvLyDQktGL0L/QsNC00LDRjtGJ0LjQtSDQvNC10L3RjiDRiNCw0L/QutC4XHJcbiAgaWYgKCFpc01vYmlsZSkge1xyXG4gICAgLy8gRGVza3RvcFxyXG4gICAgJCgnLm5hdl9fbGluayB+IC5zdWJtZW51JykuaGlkZSgpXHJcbiAgICBcclxuICAgIC8vINCf0L7Rj9Cy0LvQtdC90LjQtSDQstGL0L/QsNC00LDRjtGJ0LjRhSDQvNC10L3RjlxyXG4gICAgJCgnLm5hdl9fbGluay5jb21wbGV4JykuZWFjaCggZnVuY3Rpb24oKSB7XHJcbiAgICAgICQodGhpcykucGFyZW50KCkuaG92ZXIoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc3QgJHN1Ym1lbnUgPSAkKHRoaXMpLmZpbmQoJy5zdWJtZW51OmZpcnN0Jyk7XHJcbiAgICAgICAgaWYgKCRzdWJtZW51LmNzcygnZGlzcGxheScpID09PSAnbm9uZScpIHtcclxuICAgICAgICAgICRzdWJtZW51LmZhZGVJbigyMDApXHJcbiAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5uYXZfX2xpbms6Zmlyc3QnKS5hZGRDbGFzcygnYWN0aXZlJylcclxuXHJcbiAgICAgICAgICAvLyDQo9C00LXRgNC20LDQvdC40LUg0LLRi9C/0LDQtNCw0Y7RidC40YUg0LzQtdC90Y4gTmF2YmFyINCyINC/0YDQtdC00LXQu9Cw0YUg0Y3QutGA0LDQvdCwXHJcbiAgICAgICAgICBkZXRlY3RJblZpZXcoJHN1Ym1lbnUpXHJcbiAgICAgICAgfVxyXG4gICAgICB9LCBmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zdCAkc3VibWVudSA9ICQodGhpcykuZmluZCgnLnN1Ym1lbnU6Zmlyc3QnKTtcclxuICAgICAgICBpZiAoJHN1Ym1lbnUuY3NzKCdkaXNwbGF5JykgIT09ICdub25lJykge1xyXG4gICAgICAgICAgJHN1Ym1lbnUuZmFkZU91dCgyMDApXHJcbiAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5uYXZfX2xpbms6Zmlyc3QnKS5yZW1vdmVDbGFzcygnYWN0aXZlJylcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIFxyXG4gICAgLy8g0JLQutC70Y7Rh9C10L3QuNC1INC/0LXRgNC10L3QvtGB0LAg0YHQu9C+0LIg0LIg0L/Rg9C90LrRgtCw0YUg0LzQtdC90Y4sINC10YHQu9C4INC+0L3QuCDQv9GA0LXQstGL0YjQsNGO0YIg0LfQsNC00LDQvdC90YPRjiDRiNC40YDQuNC90YNcclxuICAgICQoJy5zdWJtZW51JykuZWFjaCggZnVuY3Rpb24oKSB7XHJcbiAgICAgIGlmICgkKHRoaXMpLndpZHRoKCkgPiAzMDApIHtcclxuICAgICAgICBjb25zb2xlLmxvZygkKHRoaXMpKTtcclxuICAgICAgICAkKHRoaXMpLmNzcygnd2hpdGUtc3BhY2UnLCAnbm9ybWFsJylcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcblxyXG4gICAgLy8g0KTRg9C90LrRhtC40Y8g0YPQtNC10YDQttCw0L3QuNGPINCy0YvQv9Cw0LTQsNGO0YnQuNGFINC80LXQvdGOINCyINC/0YDQtdC00LXQu9Cw0YUg0Y3QutGA0LDQvdCwXHJcbiAgICBmdW5jdGlvbiBkZXRlY3RJblZpZXcoJGVsKSB7XHJcbiAgICAgIGNvbnN0IGVsID0gJGVsWzBdO1xyXG4gICAgICBjb25zdCB3ID0gZWwuY2xpZW50V2lkdGg7XHJcbiAgICAgIGNvbnN0IG9mZnNldCA9ICQoZWwpLm9mZnNldCgpLmxlZnQ7XHJcbiAgICAgIGNvbnN0IGZ1bGxXID0gd2luZG93Lm91dGVyV2lkdGg7XHJcbiAgICAgIGNvbnN0IGlzSW5WaWV3ID0gKGZ1bGxXIC0gKG9mZnNldCArIHcpKSA+PSAwO1xyXG4gICAgICBjb25zdCBpc0ZpcnN0THZsID0gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdmaXJzdC1sdmwnKVxyXG4gIFxyXG4gICAgICBpZiAoIWlzSW5WaWV3KSB7XHJcbiAgICAgICAgZWwuc3R5bGUucmlnaHQgPSBpc0ZpcnN0THZsID8gJzAnIDogJzEwMCUnXHJcbiAgICAgICAgZWwuc3R5bGUubGVmdCA9ICdhdXRvJztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBlbC5zdHlsZS5yaWdodCA9ICdhdXRvJ1xyXG4gICAgICAgIGVsLnN0eWxlLmxlZnQgPSBpc0ZpcnN0THZsID8gJzAnIDogJzEwMCUnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgLy8gTW9iaWxlXHJcbiAgICAkKCcubmF2X19saW5rLmNvbXBsZXgnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgY29uc3QgJGxpbmsgPSAkKHRoaXMpXHJcbiAgICAgIGNvbnN0ICRzdWJtZW51ID0gJGxpbmsuZmluZCgnfiAuc3VibWVudScpOyBcclxuICAgICAgaWYgKCRsaW5rLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG4gICAgICAgICRzdWJtZW51LmZhZGVPdXQoMjAwLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICRsaW5rLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxyXG4gICAgICAgICAgJHN1Ym1lbnUuZmluZCgnLm5hdl9fbGluay5jb21wbGV4JykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXHJcbiAgICAgICAgICAkc3VibWVudS5maW5kKCcuc3VibWVudScpLmNzcygnZGlzcGxheScsICdub25lJylcclxuICAgICAgICB9KVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICRzdWJtZW51LmZhZGVJbigyMDApXHJcbiAgICAgICAgJHN1Ym1lbnUuY3NzKCdkaXNwbGF5JywgJ2ZsZXgnKVxyXG4gICAgICAgICRsaW5rLmFkZENsYXNzKCdhY3RpdmUnKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgICQoJy5oZWFkZXJfX2JnJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICQoJy5uYXYgLmJ1cmdlci1jaGVja2JveCcpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSlcclxuICAgICAgJCh0aGlzKS5oaWRlKClcclxuICAgIH0pXHJcblxyXG4gICAgJCgnLm5hdiAuYnVyZ2VyLWNoZWNrYm94JykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgIGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XHJcbiAgICAgICAgJCgnLm5hdl9fbGluay5hY3RpdmUgfiAuc3VibWVudScpLmhpZGUoKVxyXG4gICAgICAgICQoJy5uYXZfX2xpbmsuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXHJcbiAgICAgICAgJCgnLmhlYWRlcl9fYmcnKS5zaG93KClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkKCcuaGVhZGVyX19iZycpLmhpZGUoKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLy8gU3dpcGVyXHJcblxyXG4gIGNvbnN0ICRzd2lwZXJzID0gJCgnLnN3aXBlcicpO1xyXG5cclxuICAkc3dpcGVycy5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc3QgbmFtZSA9ICQodGhpcykuYXR0cignc3dpcGVyTmFtZScpO1xyXG4gICAgbGV0IGluaXRTbGlkZSA9IGlzTW9iaWxlID8gMCA6ICQodGhpcykuYXR0cignc3dpcGVySW5pdFNsaWRlJyk7XHJcbiAgICBjb25zdCBwZXJWaWV3ID0gJCh0aGlzKS5hdHRyKCdzd2lwZXJQZXJWaWV3JykgfHwgMTtcclxuICAgIGNvbnN0IHNpbmdsZUVsID0gcGVyVmlldyA9PT0gMTtcclxuICAgIGNvbnN0IGhhc05hdiA9ICQodGhpcykuYXR0cignc3dpcGVyTmF2Jyk7XHJcbiAgICBjb25zdCBoYXNQYWcgPSAkKHRoaXMpLmF0dHIoJ3N3aXBlclBhZycpO1xyXG4gICAgY29uc3QgaXNBdXRvID0gJCh0aGlzKS5hdHRyKCdzd2lwZXJBdXRvJyk7XHJcbiAgICBjb25zdCBpc0xvb3BlZCA9ICQodGhpcykuYXR0cignc3dpcGVyTG9vcCcpO1xyXG5cclxuICAgIGxldCBicmVha3BvaW50cyA9IHt9O1xyXG4gICAgc3dpdGNoKG5hbWUpIHtcclxuICAgICAgY2FzZSAnbnVtZXJpYy1pdGVtcy1zd2lwZXInOlxyXG4gICAgICAgIGlmKGlzTW9iaWxlKSB7XHJcbiAgICAgICAgICBpbml0U3dpcGVyKCQodGhpcykpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICd2aWV3LW90aGVyLXN3aXBlcic6XHJcbiAgICAgICAgYnJlYWtwb2ludHMgPSB7XHJcbiAgICAgICAgICAwOiB7XHJcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICA0ODA6IHtcclxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogM1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIDk5Mjoge1xyXG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiA0XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgMTIwMDoge1xyXG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiBwZXJWaWV3XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGluaXRTd2lwZXIoJCh0aGlzKSlcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAndmlldy1vdGhlci1jb3NtZXRpY3Mtc3dpcGVyJzpcclxuICAgICAgICBicmVha3BvaW50cyA9IHtcclxuICAgICAgICAgIDA6IHtcclxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIDQ4MDoge1xyXG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgNjAwOiB7XHJcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDNcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICA3Njc6IHtcclxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIDk5Mjoge1xyXG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiBwZXJWaWV3XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGluaXRTd2lwZXIoJCh0aGlzKSlcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnbGljZW5zZS1zd2lwZXInOlxyXG4gICAgICAgIGJyZWFrcG9pbnRzID0ge1xyXG4gICAgICAgICAgMDoge1xyXG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgNjAwOiB7XHJcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IHBlclZpZXdcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpIDw9IDk5Mikge1xyXG4gICAgICAgICAgaW5pdFNsaWRlID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5pdFN3aXBlcigkKHRoaXMpKVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICd3b3Jrcy1zd2lwZXInOlxyXG4gICAgICAgIGJyZWFrcG9pbnRzID0ge1xyXG4gICAgICAgICAgMDoge1xyXG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgNzY3OiB7XHJcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICA5OTI6IHtcclxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogcGVyVmlld1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGluaXRTd2lwZXIoJCh0aGlzKSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3Rlc3RpbW9uaWFscy1zd2lwZXInOlxyXG4gICAgICBjYXNlICdkaXNjb3VudHMtc3dpcGVyJzpcclxuICAgICAgICBicmVha3BvaW50cyA9IHtcclxuICAgICAgICAgIDA6IHtcclxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIDc2Nzoge1xyXG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiBwZXJWaWV3XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGluaXRTd2lwZXIoJCh0aGlzKSlcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAncmN0LWNvbG9yZWQtaXRlbXMtc3dpcGVyJzpcclxuICAgICAgICBicmVha3BvaW50cyA9IHtcclxuICAgICAgICAgIDA6IHtcclxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIDYwMDoge1xyXG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgOTkyOiB7XHJcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IHBlclZpZXdcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGluaXRTd2lwZXIoJCh0aGlzKSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2pvaW4tdXMtc3dpcGVyJzpcclxuICAgICAgICBicmVha3BvaW50cyA9IHtcclxuICAgICAgICAgIDA6IHtcclxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIDYwMDoge1xyXG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgOTkyOiB7XHJcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IHBlclZpZXdcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gICAgICBjYXNlICdhYm91dC11cy1zd2lwZXInOlxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGluaXRTd2lwZXIoJCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdFN3aXBlcigkZWwpIHtcclxuICAgICAgY29uc3Qgc3dpcGVyID0gbmV3IFN3aXBlcigkZWxbMF0sIHtcclxuICAgICAgICBpbml0aWFsU2xpZGU6IGluaXRTbGlkZSB8fCAwLFxyXG4gICAgICAgIHNwYWNlQmV0d2VlbjogaXNNb2JpbGU/IDIwIDogNDAsXHJcbiAgICAgICAgc3BlZWQ6IGlzQXV0byA/IDEwMDAgOiA0MDAsXHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogcGVyVmlldyxcclxuICAgICAgICBhbGxvd1RvdWNoTW92ZTogIWlzQXV0byxcclxuICAgICAgICBjZW50ZXJlZFNsaWRlczogc2luZ2xlRWwsXHJcbiAgICAgICAgY2VudGVyZWRTbGlkZXNCb3VuZHM6IHNpbmdsZUVsLFxyXG4gICAgICAgIGxvb3A6IGlzQXV0byA/IHRydWUgOiBpc0xvb3BlZCxcclxuICAgICAgICBhdXRvcGxheTogaXNBdXRvID8ge1xyXG4gICAgICAgICAgZGVsYXk6IDUwMDBcclxuICAgICAgICB9IDogJycsXHJcblxyXG4gICAgICAgIG5hdmlnYXRpb246IGhhc05hdiA/IHtcclxuICAgICAgICAgIG5leHRFbDogJGVsLmZpbmQoJy5zd2lwZXJfX2J0bi1uZXh0JylbMF0sXHJcbiAgICAgICAgICBwcmV2RWw6ICRlbC5maW5kKCcuc3dpcGVyX19idG4tcHJldicpWzBdLFxyXG4gICAgICAgICAgZGlzYWJsZWRDbGFzczogXCJkaXNhYmxlZFwiXHJcbiAgICAgICAgfSA6ICcnLFxyXG5cclxuICAgICAgICBwYWdpbmF0aW9uOiBoYXNQYWcgPyB7XHJcbiAgICAgICAgICBlbDogJy5zd2lwZXJfX3BhZ2luYXRpb24nLFxyXG4gICAgICAgICAgdHlwZTogJ3Byb2dyZXNzYmFyJyxcclxuICAgICAgICB9IDogJycsXHJcblxyXG4gICAgICAgIGJyZWFrcG9pbnRzOiBzaW5nbGVFbCA/IHt9IDogYnJlYWtwb2ludHMsXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSlcclxuICBcclxuXHJcbiAgLy8gVW5mb2xkIHNjcmlwdFxyXG4gICQoJy51bmZvbGQtYnRuJykuaGlkZSgpXHJcbiAgaWYgKGlzTW9iaWxlKSB7XHJcbiAgICBpbml0VW5mb2xkcygpXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGluaXRVbmZvbGRzKCkge1xyXG4gICAgY29uc3QgJHVuZm9sZHMgPSAkKCcudW5mb2xkJyk7XHJcbiAgICAkdW5mb2xkcy5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICBjb25zdCBoID0gJCh0aGlzKS5hdHRyKCd1bmZvbGQtaGVpZ2h0JylcclxuXHJcbiAgICAgIGlmICgkKHRoaXMpLmhlaWdodCgpID4gaCkge1xyXG4gICAgICAgIGNvbnN0ICR1bmZvbGRCbG9jayA9ICQodGhpcyk7XHJcbiAgICAgICAgY29uc3QgYnRuID0gJHVuZm9sZEJsb2NrLnNpYmxpbmdzKCcudW5mb2xkLWJ0bicpXHJcbiAgICAgICAgY29uc3QgYnRuSW5pdFRleHQgPSBidG4udGV4dCgpXHJcbiAgICAgICAgY29uc3QgYnRuVG9nZ2xlVGV4dCA9IGJ0bi5hdHRyKCd0b2dnbGUtdGV4dCcpXHJcbiAgICAgICAgY29uc29sZS5sb2coYnRuSW5pdFRleHQpO1xyXG5cclxuICAgICAgICAkdW5mb2xkQmxvY2suYWRkQ2xhc3MoJ3VuZm9sZC1pbml0JylcclxuXHJcbiAgICAgICAgJHVuZm9sZEJsb2NrLmNzcygnbWF4SGVpZ2h0JywgaCArICdweCcpO1xyXG4gICAgICAgIGJ0bi5zaG93KClcclxuXHJcbiAgICAgICAgYnRuLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgJHVuZm9sZEJsb2NrLnRvZ2dsZUNsYXNzKCd1bmZvbGRlZCcpLnNjcm9sbFRvcCgwKVxyXG5cclxuICAgICAgICAgIGlmIChidG5Ub2dnbGVUZXh0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ0blRleHQgPSBidG4uZmluZCgnc3BhbicpO1xyXG4gICAgICAgICAgICBidG5UZXh0LnRleHQoYnRuVGV4dC50ZXh0KCkgPT09IGJ0bkluaXRUZXh0ICA/IGJ0blRvZ2dsZVRleHQgOiBidG5Jbml0VGV4dClcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcblxyXG4gIC8vIEZhbmN5Ym94XHJcbiAgRmFuY3lib3guYmluZCgnLmpvaW4tdXMtYmxvY2tfX2ZhbmN5Ym94LWdhbGxlcnkgLmZhbmN5Ym94LWdhbGxlcnlfX2l0ZW0nLCB7XHJcbiAgICBncm91cEFsbDogdHJ1ZVxyXG4gIH0pXHJcbiAgRmFuY3lib3guYmluZCgnLmxpY2Vuc2UtYmxvY2tfX2ZhbmN5Ym94LWdhbGxlcnkgLmZhbmN5Ym94LWdhbGxlcnlfX2l0ZW0nLCB7XHJcbiAgICBncm91cEFsbDogdHJ1ZVxyXG4gIH0pXHJcblxyXG4gIC8vINCg0LDQt9Cy0LXRgNC90YPRgtGMINCx0LvQvtC60LhcclxuICBvcGVuTGlzdHMoKVxyXG4gIGZ1bmN0aW9uIG9wZW5MaXN0cygpIHtcclxuICAgICQoJy5vcGVuLWxpc3QtYmxvY2s6bm90KC50YWIpJykuaGlkZSgpO1xyXG4gICAgaWYgKCQod2luZG93KS53aWR0aCgpIDw9IDQ4MCkge1xyXG4gICAgICAkKCcub3Blbi1saXN0LWJsb2NrLnRhYicpLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAkKCcub3Blbi1saXN0LWNvbnRhaW5lcicpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgIGNvbnN0ICRjb250YWluZXIgPSAkKHRoaXMpO1xyXG4gICAgICBjb25zdCAkYnRuID0gJGNvbnRhaW5lci5maW5kKCcub3Blbi1saXN0LWJ0bicpO1xyXG4gICAgICBjb25zdCBidG5Jbml0VGV4dCA9ICRidG4uY2hpbGRyZW4oJ3NwYW4nKS50ZXh0KCk7XHJcbiAgICAgIGNvbnN0IGJ0blRvZ2dsZVRleHQgPSAkYnRuLmF0dHIoJ3RvZ2dsZS10ZXh0JylcclxuICAgICAgJGJ0bi5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAkY29udGFpbmVyLmZpbmQoJy5vcGVuLWxpc3QtYmxvY2snKS5zbGlkZVRvZ2dsZSgyMDApO1xyXG4gICAgICAgICRjb250YWluZXIudG9nZ2xlQ2xhc3MoJ29wZW5lZCcpXHJcblxyXG4gICAgICAgIGlmIChidG5Ub2dnbGVUZXh0KSB7XHJcbiAgICAgICAgICBjb25zdCBjdXJUZXh0ID0gJCh0aGlzKS5jaGlsZHJlbignc3BhbicpLnRleHQoKVxyXG4gICAgICAgICAgJCh0aGlzKS5jaGlsZHJlbignc3BhbicpLnJlbW92ZSgpXHJcbiAgICAgICAgICBjdXJUZXh0ID09PSBidG5Ub2dnbGVUZXh0ID8gJCh0aGlzKS5hcHBlbmQoJzxzcGFuPicgKyBidG5Jbml0VGV4dCArICc8L3NwYW4+JykgOiAkKHRoaXMpLmFwcGVuZCgnPHNwYW4+JyArYnRuVG9nZ2xlVGV4dCArICc8L3NwYW4+JylcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLy8gUG9wdXBzXHJcbiAgJCgnW29wZW4tcG9wdXBdJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0ICR0cmlnZ2VyID0gJCh0aGlzKVxyXG4gICAgY29uc3QgcG9wdXBDbGFzcyA9ICR0cmlnZ2VyLmF0dHIoJ29wZW4tcG9wdXAnKTtcclxuICAgIGNvbnN0IHBvcHVwID0gJCgnLicgKyBwb3B1cENsYXNzKS5maXJzdCgpXHJcbiAgICBcclxuICAgICR0cmlnZ2VyLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICBpZiAocG9wdXBDbGFzcyA9PSAnbGljZW5zZS1wb3B1cCcpIHtcclxuICAgICAgICBGYW5jeWJveC5zaG93KFxyXG4gICAgICAgICAgW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgc3JjOiBcIi4vaW1nL2xpY2Vuc2UvbGljZW5zZS0xLmpwZ1wiLFxyXG4gICAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2VcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBkcmFnVG9DbG9zZTogZmFsc2VcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gIFxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBmYW5jeWJveCA9IEZhbmN5Ym94LnNob3coXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBzcmM6IHBvcHVwWzBdLFxyXG4gICAgICAgICAgICB0eXBlOiBcImh0bWxcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZHJhZ1RvQ2xvc2U6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfSlcclxuICB9KSBcclxuXHJcblxyXG4gIC8vINCg0LDRgdGC0Y/QttC10L3QuNC1INC60LDRgNGC0LjQvdC+0Log0L/QviDQsdC70L7QutGDXHJcbiAgc2V0VGltZW91dChzdHJldGNoSW1ncywgMjApXHJcbiAgJCh3aW5kb3cpLm9uKCdyZXNpemUnLCBzdHJldGNoSW1ncyk7XHJcblxyXG4gIGZ1bmN0aW9uIHN0cmV0Y2hJbWdzICgpIHtcclxuICAgIGNvbnN0ICRpbWdzID0gJCgnaW1nLl9jZW50ZXInKVxyXG5cclxuICAgICRpbWdzLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgIGNvbnN0ICRpbWdCbG9jayA9ICQodGhpcykucGFyZW50cygnLnBpYy1jb250YWluZXInKVxyXG4gICAgICBjb25zdCBzdHJldGNoRGlyID0gZGV0ZWN0U3RyZXRjaCgkKHRoaXMpLCAkaW1nQmxvY2spO1xyXG4gICAgICBpZiAoc3RyZXRjaERpcikge1xyXG4gICAgICAgICQodGhpcykuY3NzKHN0cmV0Y2hEaXJbMF0sICcxMDAlJykuY3NzKHN0cmV0Y2hEaXJbMV0sICdhdXRvJylcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gZGV0ZWN0U3RyZXRjaCgkaW1nLCAkYmxvY2spIHtcclxuICAgICAgaWYgKCRpbWcud2lkdGgoKSA8ICRibG9jay53aWR0aCgpKSB7XHJcbiAgICAgICAgcmV0dXJuIFsnd2lkdGgnLCAnaGVpZ2h0J107XHJcbiAgICAgIH0gZWxzZSBpZiAoJGltZy5oZWlnaHQoKSA8ICRibG9jay5oZWlnaHQoKSkge1xyXG4gICAgICAgIHJldHVybiBbJ2hlaWdodCcsJ3dpZHRoJ107XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgLy8gVGFicyBzY3JpcHRcclxuICAkKCcudGFiLWNvbnRlbnQ6bm90KC5zaG93biknKS5oaWRlKClcclxuICAkKCcudGFiLWNvbnRhaW5lcicpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zdCAkY29udGFpbmVyID0gJCh0aGlzKVxyXG4gICAgY29uc3QgJHRhYnNDb250ID0gJGNvbnRhaW5lci5maW5kKCcudGFicycpLmZpcnN0KCk7XHJcbiAgICBjb25zdCAkdGFiQ29udGVudHMgPSAkY29udGFpbmVyLmZpbmQoJy50YWItY29udGVudHMnKS5maXJzdCgpXHJcbiAgICBjb25zdCAkZGVmYXVsdEFjdGl2ZVRhYiA9ICR0YWJzQ29udC5maW5kKCcudGFiLmFjdGl2ZScpO1xyXG5cclxuICAgIGlmICghJGRlZmF1bHRBY3RpdmVUYWIubGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0ICRmaXJzdFRhYiA9ICR0YWJzQ29udC5maW5kKCcudGFiJykuZmlyc3QoKTtcclxuICAgICAgJGZpcnN0VGFiLmFkZENsYXNzKCdhY3RpdmUnKVxyXG4gICAgICBjb25zdCBjb250ZW50Q2xzID0gJGZpcnN0VGFiLmF0dHIoJ3RhYi12YWwnKVxyXG5cclxuICAgICAgY29uc3QgJGRlZmF1bHRTaG93bkNvbnRlbnQgPSAkdGFiQ29udGVudHMuY2hpbGRyZW4oJy50YWItY29udGVudC5zaG93bicpO1xyXG4gICAgICBpZiAoISRkZWZhdWx0U2hvd25Db250ZW50Lmxlbmd0aCkge1xyXG4gICAgICAgIGNvbnN0ICRmaXJzdENvbnRlbnQgPSAkdGFiQ29udGVudHMuY2hpbGRyZW4oJy50YWItY29udGVudC4nICsgY29udGVudENscylcclxuICAgICAgICAkZmlyc3RDb250ZW50LmFkZENsYXNzKCdzaG93bicpXHJcblxyXG4gICAgICAgICRmaXJzdENvbnRlbnQuc2hvdygpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICAkdGFic0NvbnQuZmluZCgnLnRhYicpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgIGNvbnN0ICR0YWIgPSAkKHRoaXMpO1xyXG4gICAgICBjb25zdCB0YWJWYWwgPSAkdGFiLmF0dHIoJ3RhYi12YWwnKTtcclxuICAgICAgXHJcblxyXG4gICAgICAkdGFiLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICgkdGFiLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJHRhYnNDb250LmZpbmQoJy50YWIuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICR0YWIuYWRkQ2xhc3MoJ2FjdGl2ZScpXHJcblxyXG4gICAgICAgIGNvbnN0ICRvcGVuQmxvY2sgPSAkdGFiQ29udGVudHMuY2hpbGRyZW4oYC50YWItY29udGVudC4ke3RhYlZhbH1gKVxyXG4gICAgICAgIGNvbnN0ICRjdXJCbG9jayA9ICR0YWJDb250ZW50cy5jaGlsZHJlbignLnRhYi1jb250ZW50LnNob3duJykubGVuZ3RoID8gICR0YWJDb250ZW50cy5jaGlsZHJlbignLnRhYi1jb250ZW50LnNob3duJykgOiAnJ1xyXG5cclxuICAgICAgICBpZiAoJGN1ckJsb2NrLmxlbmd0aCkge1xyXG4gICAgICAgICAgJGN1ckJsb2NrLnJlbW92ZUNsYXNzKCdzaG93bicpLmZhZGVPdXQoMjAwLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJG9wZW5CbG9jay5mYWRlSW4oMjAwKS5hZGRDbGFzcygnc2hvd24nKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAkb3BlbkJsb2NrLmZhZGVJbigyMDApLmFkZENsYXNzKCdzaG93bicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0VGltZW91dChzdHJldGNoSW1ncywgMjIwKVxyXG4gICAgICB9KVxyXG4gICAgICBcclxuICAgIH0pXHJcbiAgfSlcclxuXHJcbiAgLy8gU2VsZWN0IFRhYiBzY3JpcHRcclxuICAkKCcuc2VsZWN0LXRhYi1jb250ZW50Om5vdCguc2hvd24pJykuaGlkZSgpXHJcbiAgJCgnLnNlbGVjdC10YWItY29udGFpbmVyJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0ICRzZWxlY3QgPSAkKHRoaXMpLmZpbmQoJy5zZWxlY3QtdGFiJykuZmlyc3QoKTtcclxuICAgIGNvbnN0ICRjb250ZW50cyA9ICQodGhpcykuZmluZCgnLnNlbGVjdC10YWItY29udGVudHMnKS5maXJzdCgpXHJcblxyXG4gICAgJHNlbGVjdC5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgIGNvbnN0ICRvcGVuQmxvY2sgPSAkY29udGVudHMuY2hpbGRyZW4oJy4nICsgdGhpcy52YWx1ZSlcclxuICAgICAgY29uc29sZS5sb2coJy4nICsgdGhpcy52YWx1ZSk7XHJcbiAgICAgIGNvbnN0ICRjdXJCbG9jayA9ICRjb250ZW50cy5jaGlsZHJlbignLnNlbGVjdC10YWItY29udGVudC5zaG93bicpXHJcblxyXG4gICAgICBpZiAoJGN1ckJsb2NrLmxlbmd0aCkge1xyXG4gICAgICAgICRjdXJCbG9jay5yZW1vdmVDbGFzcygnc2hvd24nKS5mYWRlT3V0KDIwMCwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAkb3BlbkJsb2NrLmFkZENsYXNzKCdzaG93bicpLmZhZGVJbigyMDApXHJcbiAgICAgICAgfSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkb3BlbkJsb2NrLmFkZENsYXNzKCdzaG93bicpLmZhZGVJbigyMDApXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICB9KVxyXG4gIH0pXHJcblxyXG4gIFxyXG59KTtcclxuXHJcbiJdLCJmaWxlIjoibWFpbi5qcyJ9
