/******/


$(document).ready(function() {
  if(document.querySelector('.implant__reviews-slider')) {
    new Swiper('.implant__reviews-slider', {
      loop: false,
      initialSlide: 0,
      grabCursor: true,
      watchOverflow: false,
      slidesPerView: 'auto',
      spaceBetween: 30,
      navigation: {
        nextEl: '.implant__reviews-btn-next',
        prevEl: '.implant__reviews-btn-prev',
      },
      pagination: {
        el: '.implant__reviews-pagination',
        type: 'fraction',
      },
      scrollbar: {
        el: ".implant__reviews-scrollbar",
      },
    });
  }
  if(document.querySelector('.implant__reviews-dsc-scroll')) {
    new Swiper('.implant__reviews-dsc-scroll', {
      loop: false,
      direction: 'vertical',
      initialSlide: 0,
      grabCursor: true,
      watchOverflow: false,
      // mousewheelControl: true,
      mousewheel: {
        releaseOnEdges: true,
      },
      slidesPerView: 'auto',
      spaceBetween: 30,
      scrollbar: {
        el: ".implant__reviews-dsc-scrollbar",
      },
    });
  }
});
(() => { // webpackBootstrap
  /******/
  "use strict";
  var __webpack_exports__ = {};

  ; // CONCATENATED MODULE: ./src/js/files/functions.js
  // Добавление loaded для HTML после полной загрузки страницы
  function addLoadedClass() {
    window.addEventListener("load", function () {
      setTimeout(function () {
        document.documentElement.classList.add('loaded');
      }, 0);
    });
  }
  // Вспомогательные модули блокировки прокрутки и скочка ====================================================================================================================================================================================================================================================================================
  let bodyLockStatus = true;
  let bodyLockToggle = (delay = 500) => {
    if (document.documentElement.classList.contains('lock')) {
      bodyUnlock(delay);
    } else {
      bodyLock(delay);
    }
  }
  let bodyUnlock = (delay = 500) => {
    let body = document.querySelector("body");
    if (bodyLockStatus) {
      let lock_padding = document.querySelectorAll("[data-lp]");
      setTimeout(() => {
        for (let index = 0; index < lock_padding.length; index++) {
          const el = lock_padding[index];
          el.style.paddingRight = '0px';
        }
        body.style.paddingRight = '0px';
        document.documentElement.classList.remove("lock");
      }, delay);
      bodyLockStatus = false;
      setTimeout(function () {
        bodyLockStatus = true;
      }, delay);
    }
  }
  let bodyLock = (delay = 500) => {
    let body = document.querySelector("body");
    if (bodyLockStatus) {
      let lock_padding = document.querySelectorAll("[data-lp]");
      for (let index = 0; index < lock_padding.length; index++) {
        const el = lock_padding[index];
        el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
      }
      body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
      document.documentElement.classList.add("lock");

      bodyLockStatus = false;
      setTimeout(function () {
        bodyLockStatus = true;
      }, delay);
    }
  }

  // Модуь работы с меню (бургер) =======================================================================================================================================================================================================================
  function menuInit() {
    let menuButtonMobile = document.querySelector(".menu-button-mobile");
    document.addEventListener('click', (e) => {
      let target = e.target;
      if (target.closest(".icon-menu")) {
        if (bodyLockStatus) {
          bodyLockToggle();
          document.documentElement.classList.toggle("menu-open");

        }

        if (target.closest('.menu-button-mobile')) {
          bodyUnlock();
          menuClose();
          menuButtonMobile.classList.remove('menu-button-mobile-active');
        }
      } else if (!target.closest(".menu__body") && !target.closest(".sidebar")) {
        bodyUnlock();
        menuClose();
      }
    });
  }

  function menuOpen() {
    bodyLock();
    document.documentElement.classList.add("menu-open");
  }

  function menuClose() {

    bodyUnlock();
    document.documentElement.classList.remove("menu-open");

    if (document.querySelector('.sidebar-phone')) {
      let sidebarPhoneBlock = document.querySelector(".sidebar-phone-block");

      sidebarPhoneBlock.classList.remove('sidebar-phone-block-active');
    }
  }

  // //плавный scroll
  // let functions_scroll = new SmoothScroll('a[href*="#"]', {
  //   speed: 600
  // });

  //fancybox-удаление дубликатов
  $.fancybox.defaults.backFocus = false;
  $().fancybox({
    selector: '.doctor__slider .swiper-slide:not(.swiper-slide-duplicate)',
    backFocus: false,
    buttons: [
      "thumbs",
      "close"
    ],
  });
  $().fancybox({
    selector: '.gallery__slider .swiper-slide:not(.swiper-slide-duplicate)',
    backFocus: false,
    buttons: [
      "thumbs",
      "close"
    ],
  });
  $(document).on('click', '.swiper-slide-duplicate', function (e) {
    var $slides = $(this)
      .parent()
      .children('.swiper-slide:not(.swiper-slide-duplicate)');

    $slides
      .eq(($(this).attr("data-swiper-slide-index") || 0) % $slides.length)
      .trigger("click.fb-start", {
        $trigger: $(this)
      });

    return false;
  });

  //ui-select
  $(".form-wrapper-item select").selectmenu({width : $(this).width()});

  //Открытие модального окна
  $('.singup').click(function (event) {
    event.preventDefault();
    var $this = $(this),
        data = $this.data();
    $.fancybox.open({
      src: '/include/callback-doctor-popup.php',
      type: 'ajax',
      touch: false,
      ajax: {
        settings: {
          data: data,
        }
      },
      afterLoad: function( instance, current ) {
        $(".form-wrapper-item select").selectmenu({width : $(this).width()});
        modules_inputmask();
      }
    });
  });

  //Открытие модального окна
  $('.button-registration').click(function (event) {
    event.preventDefault();
    $.fancybox.open({
      src: '/include/register-popup.php',
      type: 'ajax',
      touch: false,
    });
  });


  //Инициализация wow анимации
  new WOW().init();

  ; // CONCATENATED MODULE: ./src/js/modules/sliders.js
  // Добавление классов слайдерам
  // swiper главному блоку, swiper-wrapper оболочке, swiper-slide для слайдов
  function bildSliders() {
    //BildSlider
    let sliders = document.querySelectorAll('[class*="__swiper"]:not(.swiper-wrapper)');
    if (sliders) {
      sliders.forEach(slider => {
        slider.parentElement.classList.add('swiper');
        slider.classList.add('swiper-wrapper');
        for (const slide of slider.children) {
          slide.classList.add('swiper-slide');
        }
      });
    }
  }
  // Инициализация слайдеров
  function initSliders() {
    // Добавление классов слайдера
    bildSliders();
    // Перечень слайдеров
    if (document.querySelector('.doctor__slider')) {
      new Swiper('.doctor__slider', {
        observer: true,
        observeParents: true,
        watchOverflow: true,
        speed: 800,
        pagination: {
          el: ".swiper-pagination-doctor",
          type: "fraction",
        },
        scrollbar: {
          el: ".swiper-scrollbar-doctor",
          hide: true,
        },
        navigation: {
          nextEl: '.swiper-button-next-doctor',
          prevEl: '.swiper-button-prev-doctor',
        },
        breakpoints: {
          320: {
            slidesPerView: 'auto',
            slidesPerGroup: 1,
            spaceBetween: 0,
            loop: true,
            grid: {
              rows: 1,
              fill: 'row',
            },
          },
          478.98: {
            slidesPerView: 'auto',
            slidesPerGroup: 1,
            spaceBetween: 0,
            centeredSlides: false,
            grid: {
              rows: 1,
              fill: 'row',
            },
          },
          992: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 30,
            loop: false,
            grid: {
              rows: 3,
              fill: 'row',
            },
          },

        },
        on: {
          init: function (slide) {
            slideViewPerCol(slide);
          },
          slideChange: function (slide) {
            slideViewPerCol(slide);
          }
        }
      });

      function slideViewPerCol(slide) {
        var startSlide = slide.snapIndex * ((slide.params.slidesPerView * slide.params.grid.rows) - 6);
        var endSlide = startSlide + (slide.params.slidesPerView * slide.params.grid.rows) - 1;
        $.each(slide.slides, function (index, el) {
          if (index >= startSlide && index <= endSlide) $(el).addClass('doctor__slide-visible');
          else $(el).removeClass('doctor__slide-visible');
        });
      }
    }
    if (document.querySelector('.gallery__slider')) {
      new Swiper('.gallery__slider', {
        slidesPerView: 'auto',
        observer: true,
        observeParents: true,
        watchOverflow: true,
        speed: 800,
        loop: true,
      });
    }
    if (document.querySelector('.certificate__slider')) {
      new Swiper('.certificate__slider', {
        slidesPerView: 'auto',
        observer: true,
        observeParents: true,
        watchOverflow: true,
        spaceBetween: 30,
        speed: 800,
        pagination: {
          el: ".swiper-pagination-certificate",
          type: "fraction",
        },
        scrollbar: {
          el: ".swiper-scrollbar-certificate",
          hide: true,
        },
        navigation: {
          nextEl: '.swiper-button-next-certificate',
          prevEl: '.swiper-button-prev-certificate',
        },
      });
    }
    if (document.querySelector('.type__slider')) {
      new Swiper('.type__slider', {
        slidesPerView: 5,
        observer: true,
        observeParents: true,
        watchOverflow: true,
        spaceBetween: 20,
        speed: 800,
        pagination: {
          el: ".swiper-pagination-type",
          type: "fraction",
        },
        scrollbar: {
          el: ".swiper-scrollbar-type",
          hide: true,
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            autoHeight: true,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
          1520: {
            slidesPerView: 5,
          },
        }
      });
    }
    if (document.querySelector('.friends__slider')) {
      new Swiper('.friends__slider', {
        slidesPerView: 'auto',
        observer: true,
        observeParents: true,
        watchOverflow: true,
        speed: 800,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination-friends",
          type: "fraction",
        },
        scrollbar: {
          el: ".swiper-scrollbar-friends",
          hide: true,
        },
        navigation: {
          nextEl: '.swiper-button-next-friends',
          prevEl: '.swiper-button-prev-friends',
        },
        breakpoints: {
          320: {
            spaceBetween: 15,
          },
          768: {
            spaceBetween: 30,
          },
        }
      });
    }
    if (document.querySelector('.private-office-article__slider')) {
      new Swiper('.private-office-article__slider', {
        observer: true,
        observeParents: true,
        watchOverflow: true,
        speed: 800,
        slidesPerView: 1,
        loop: false,
        grid: {
          rows: 4,
          fill: 'column',
        },
        pagination: {
          el: ".swiper-pagination-private-office-article",
          type: "fraction",
        },
        scrollbar: {
          el: ".swiper-scrollbar-private-office-article",
          hide: true,
        },
        navigation: {
          nextEl: '.swiper-button-next-private-office-article',
          prevEl: '.swiper-button-prev-private-office-article',
        },
        breakpoints: {
          320: {
            spaceBetween: 20,
          },
          768: {
            spaceBetween: 35,

          },
        }
      });
    }
    if (document.querySelector('.history__slider')) {
      new Swiper('.history__slider', {
        observer: true,
        observeParents: true,
        watchOverflow: true,
        speed: 800,
        slidesPerView: 1,
        loop: false,
        spaceBetween: 10,
        grid: {
          rows: 4,
          fill: 'column',
        },
        pagination: {
          el: ".swiper-pagination-history",
          type: "fraction",
        },
        scrollbar: {
          el: ".swiper-scrollbar-history",
          hide: true,
        },
        navigation: {
          nextEl: '.swiper-button-next-history',
          prevEl: '.swiper-button-prev-history',
        },
        breakpoints: {
          320: {
            spaceBetween: 15,

          },
        }
      });
    }
    if (document.querySelector('.info__slider')) {
      new Swiper('.info__slider', {
        observer: true,
        observeParents: true,
        watchOverflow: true,
        speed: 800,
        slidesPerView: 1,
        loop: false,
        spaceBetween: 10,
        grid: {
          rows: 6,
          fill: 'column',
        },
        pagination: {
          el: ".swiper-pagination-info",
          type: "fraction",
        },
        scrollbar: {
          el: ".swiper-scrollbar-info",
          hide: true,
        },
        navigation: {
          nextEl: '.swiper-button-next-info',
          prevEl: '.swiper-button-prev-info',
        },
      });
    }
  }
  window.addEventListener("load", function (e) {
    // Запуск инициализации слайдеров
    initSliders();
  });; // CONCATENATED MODULE: ./src/js/modules/dynamic_adapt.js
  // Dynamic Adapt v.1
  // HTML data-da="where(uniq class name),when(breakpoint),position(digi)"
  // e.x. data-da=".item,992,2"



  function DynamicAdapt(type) {
    this.type = type;
  }
  DynamicAdapt.prototype.init = function () {
    const _this = this;
    // массив объектов
    this.оbjects = [];
    this.daClassname = "_dynamic_adapt_";
    // массив DOM-элементов
    this.nodes = document.querySelectorAll("[data-da]");
    // наполнение оbjects объктами
    for (let i = 0; i < this.nodes.length; i++) {
      const node = this.nodes[i];
      const data = node.dataset.da.trim();
      const dataArray = data.split(",");
      const оbject = {};
      оbject.element = node;
      оbject.parent = node.parentNode;
      оbject.destination = document.querySelector(dataArray[0].trim());
      оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
      оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
      оbject.index = this.indexInParent(оbject.parent, оbject.element);
      this.оbjects.push(оbject);
    }
    this.arraySort(this.оbjects);
    // массив уникальных медиа-запросов
    this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
      return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
    }, this);
    this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
      return Array.prototype.indexOf.call(self, item) === index;
    });
    // навешивание слушателя на медиа-запрос
    // и вызов обработчика при первом запуске
    for (let i = 0; i < this.mediaQueries.length; i++) {
      const media = this.mediaQueries[i];
      const mediaSplit = String.prototype.split.call(media, ',');
      const matchMedia = window.matchMedia(mediaSplit[0]);
      const mediaBreakpoint = mediaSplit[1];
      // массив объектов с подходящим брейкпоинтом
      const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {
        return item.breakpoint === mediaBreakpoint;
      });
      matchMedia.addListener(function () {
        _this.mediaHandler(matchMedia, оbjectsFilter);
      });
      this.mediaHandler(matchMedia, оbjectsFilter);
    }
  };
  DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
    if (matchMedia.matches) {
      for (let i = 0; i < оbjects.length; i++) {
        const оbject = оbjects[i];
        оbject.index = this.indexInParent(оbject.parent, оbject.element);
        this.moveTo(оbject.place, оbject.element, оbject.destination);
      }
    } else {
      //for (let i = 0; i < оbjects.length; i++) {
      for (let i = оbjects.length - 1; i >= 0; i--) {
        const оbject = оbjects[i];
        if (оbject.element.classList.contains(this.daClassname)) {
          this.moveBack(оbject.parent, оbject.element, оbject.index);
        }
      }
    }
  };
  // Функция перемещения
  DynamicAdapt.prototype.moveTo = function (place, element, destination) {
    element.classList.add(this.daClassname);
    if (place === 'last' || place >= destination.children.length) {
      destination.insertAdjacentElement('beforeend', element);
      return;
    }
    if (place === 'first') {
      destination.insertAdjacentElement('afterbegin', element);
      return;
    }
    destination.children[place].insertAdjacentElement('beforebegin', element);
  }
  // Функция возврата
  DynamicAdapt.prototype.moveBack = function (parent, element, index) {
    element.classList.remove(this.daClassname);
    if (parent.children[index] !== undefined) {
      parent.children[index].insertAdjacentElement('beforebegin', element);
    } else {
      parent.insertAdjacentElement('beforeend', element);
    }
  }
  // Функция получения индекса внутри родителя
  DynamicAdapt.prototype.indexInParent = function (parent, element) {
    const array = Array.prototype.slice.call(parent.children);
    return Array.prototype.indexOf.call(array, element);
  };
  // Функция сортировки массива по breakpoint и place 
  // по возрастанию для this.type = min
  // по убыванию для this.type = max
  DynamicAdapt.prototype.arraySort = function (arr) {
    if (this.type === "min") {
      Array.prototype.sort.call(arr, function (a, b) {
        if (a.breakpoint === b.breakpoint) {
          if (a.place === b.place) {
            return 0;
          }

          if (a.place === "first" || b.place === "last") {
            return -1;
          }

          if (a.place === "last" || b.place === "first") {
            return 1;
          }

          return a.place - b.place;
        }

        return a.breakpoint - b.breakpoint;
      });
    } else {
      Array.prototype.sort.call(arr, function (a, b) {
        if (a.breakpoint === b.breakpoint) {
          if (a.place === b.place) {
            return 0;
          }

          if (a.place === "first" || b.place === "last") {
            return 1;
          }

          if (a.place === "last" || b.place === "first") {
            return -1;
          }

          return b.place - a.place;
        }

        return b.breakpoint - a.breakpoint;
      });
      return;
    }
  };
  const da = new DynamicAdapt("max");
  da.init();; // CONCATENATED MODULE: ./src/js/modules/readmore.js
  const readmore = () => {
    const show = document.querySelectorAll('.show'),
      readMore = document.querySelectorAll('.read-more');
    var customHeight=400;
    show.forEach((elem) => {
      var currentHeight=(elem.dataset.startheight ? elem.dataset.startheight : customHeight);
      if (elem.offsetHeight > currentHeight) {
        elem.style.height=currentHeight+"px";
        readMore.forEach((item) => {
          if (elem.parentNode === item.parentNode) {
            item.classList.add('read-more-active')
            elem.classList.add('show-active')
          }
          item.addEventListener('click', () => {
            show.forEach((elem) => {
              if (elem.parentNode === item.parentNode) {
                elem.style.height="auto";
                item.classList.remove('read-more-active')
                elem.classList.remove('show-active')
              }
            })
          })
        })
      }
    });
  }
  /* harmony default export */
  const modules_readmore = (readmore);; // CONCATENATED MODULE: ./src/js/modules/inputmask.js
  //маска для ввода телефона
  const inputmask = () => {
    $(".phone-mask").mask("+7 (999) 999-99-99");
    $("input[type=tel]").mask("+7 (999) 999-99-99");
    let regexp = new RegExp('(7|8)\\s[\(][0-9]{3}[\)]\\s[0-9]{3}[\-][0-9]{2}[\-][0-9]{2}');
    $('body').on('keyup', 'input[ data-mask="phone" ]', function () {
      if ($(this).val() != 0 & regexp.test($(this).val()) == true) {
        $(this).parents('form').find('input[type="submit"], button[type="submit"]').attr('disabled', false);
      } else {
        $(this).parents('form').find('input[type="submit"], button[type="submit"]').attr('disabled', true);
      }
    });

    $.fn.setCursorPosition = function (pos) {
      if ($(this).get(0).setSelectionRange) {
        $(this).get(0).setSelectionRange(pos, pos);
      } else if ($(this).get(0).createTextRange) {
        var range = $(this).get(0).createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
      }
    };
    $('input[type=tel]').click(function () {
      $(this).setCursorPosition(4); // set position number
    });
  };
  /* harmony default export */
  const modules_inputmask = (inputmask);; // CONCATENATED MODULE: ./src/js/modules/scrollHeader.js
  const scrollHeader = () => {
    let lastScroll = 100,
      defaultOffset = 100;
    const header = document.querySelector('.header'),
      commentEnter = document.querySelector('.comment-enter'),
      width = window.innerWidth,
      scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
    window.addEventListener('scroll', () => {
      if (scrollPosition() < lastScroll) {
        header.classList.add('header-active');
        header.classList.remove('header-active2');
        if (document.querySelector('.comment-enter')) {
          if (width < 992) {
            commentEnter.classList.add('comment-enter-active');
          }
        }
      } else if (scrollPosition() > lastScroll && scrollPosition() > defaultOffset) {
        header.classList.add('header-active2');
        if (document.querySelector('.comment-enter')) {
          if (width < 992) {
            commentEnter.classList.add('comment-enter-active');
          }
        }
      }
      if (scrollPosition() <= defaultOffset) {
        header.classList.remove('header-active');
        if (document.querySelector('.comment-enter')) {
          if (width < 992) {
            commentEnter.classList.remove('comment-enter-active');
          }
        }
      }
      lastScroll = scrollPosition();
    });

  };
  window.addEventListener("resize", scrollHeader);
  /* harmony default export */
  const modules_scrollHeader = (scrollHeader);; // CONCATENATED MODULE: ./src/js/modules/map.js
  // const map = () => {
  //   if (document.getElementById('map')) {
  //     let map_container = document.getElementById('map');
  //     let options_map = {
  //       once: true, //запуск один раз, и удаление наблюдателя сразу
  //       passive: true,
  //       capture: true
  //     };
  //     map_container.addEventListener('click', start_lazy_map, options_map);
  //     map_container.addEventListener('mouseover', start_lazy_map, options_map);
  //     map_container.addEventListener('touchstart', start_lazy_map, options_map);
  //     map_container.addEventListener('touchmove', start_lazy_map, options_map);

  //     let map_loaded = false;

  //     function start_lazy_map() {
  //       if (!map_loaded) {
  //         let map_block = document.getElementById('ymap_lazy');
  //         map_loaded = true;
  //         map_block.setAttribute('src', map_block.getAttribute('data-src'));
  //         map_block.removeAttribute('data_src');
  //         console.log('YMAP LOADED');
  //       }
  //     }
  //   }
  // };
  /* harmony default export */
  // const modules_map = (map);; // CONCATENATED MODULE: ./src/js/files/script.js
  //Цена
  const price = () => {
    const priceItemHeader = document.querySelectorAll(".price-item-header");

    priceItemHeader.forEach((elem) => {
      elem.addEventListener('click', function () {
        let priceItemHeaderActive = document.querySelectorAll(".price-item-header-active"),
          priceItemBodyActive = document.querySelectorAll(".price-item-body-active");

        let parentElem = this.parentNode;

        let priceItemHeader = parentElem.querySelector('.price-item-header');
        let priceItemBody = parentElem.querySelector('.price-item-body');

        if (priceItemHeader.classList.contains("price-item-header-active")) {
          priceItemHeader.classList.remove('price-item-header-active');
        } else {
          priceItemHeader.classList.add('price-item-header-active');
        }

        if (priceItemBody.classList.contains("price-item-body-active")) {
          priceItemBody.classList.remove('price-item-body-active');

        } else {
          priceItemBody.classList.toggle('price-item-body-active');

          // priceItemBodyActive.forEach((e) => {
          //     e.classList.remove('price-item-body-active');
          // })
          // priceItemHeaderActive.forEach((e) => {
          //     e.classList.remove('price-item-header-active');
          // })
        }
      })
    })
  };
  price();
  //open first element
  if(document.querySelector(".price-item-header")!==null)
    document.querySelector(".price-item-header").click();

  const personaData = () => {
    const personalDataTitle = document.querySelector(".personal-data__title"),
      personalDataWrapper = document.querySelector(".personal-data-wrapper");

    if (document.querySelector('.personal-data')) {
      personalDataTitle.addEventListener('click', () => {
        personalDataTitle.classList.toggle('personal-data__title-active');
        personalDataWrapper.classList.toggle('personal-data-wrapper-active');
      })
    }
  };
  personaData();


  //Цена
  const sidebar = () => {
    const sidebarChange = document.querySelectorAll(".sidebar-change-header");

    sidebarChange.forEach((elem) => {
      elem.addEventListener('click', function () {
        let sidebarChangeActive = document.querySelectorAll(".sidebar-change-header-active"),
          sidebarChangeBodyActive = document.querySelectorAll(".sidebar-change-body-active");

        let parentElem = this.parentNode;

        let sidebarChange = parentElem.querySelector('.sidebar-change-header');
        let sidebarChangeBody = parentElem.querySelector('.sidebar-change-body');

        if (sidebarChange.classList.contains("sidebar-change-header-active")) {
          sidebarChange.classList.remove('sidebar-change-header-active');
        } else {
          sidebarChange.classList.add('sidebar-change-header-active');
        }

        if (sidebarChangeBody.classList.contains("sidebar-change-body-active")) {
          sidebarChangeBody.classList.remove('sidebar-change-body-active');

        } else {
          sidebarChangeBody.classList.toggle('sidebar-change-body-active');

          sidebarChangeBodyActive.forEach((e) => {
            e.classList.remove('sidebar-change-body-active');
          })
          sidebarChangeActive.forEach((e) => {
            e.classList.remove('sidebar-change-header-active');
          })
        }
      })
    })
  };
  sidebar();

  //Фильтр в блоге
  const blog = () => {
    const blogFilterFeader = document.querySelectorAll(".blog-filter-header");

    blogFilterFeader.forEach((elem) => {
      elem.addEventListener('click', function () {
        let blogFilterHeaderActive = document.querySelectorAll(".blog-filter-header-active"),
          blogFilterBodyActive = document.querySelectorAll(".blog-filter-body-active");

        let parentElem = this.parentNode;

        let sidebarChange = parentElem.querySelector('.blog-filter-header');
        let blogFilterBody = parentElem.querySelector('.blog-filter-body');

        if (sidebarChange.classList.contains("blog-filter-header-active")) {
          sidebarChange.classList.remove('blog-filter-header-active');
        } else {
          sidebarChange.classList.add('blog-filter-header-active');
        }

        if (blogFilterBody.classList.contains("blog-filter-body-active")) {
          blogFilterBody.classList.remove('blog-filter-body-active');

        } else {
          blogFilterBody.classList.toggle('blog-filter-body-active');

          blogFilterBodyActive.forEach((e) => {
            e.classList.remove('blog-filter-body-active');
          })
          blogFilterHeaderActive.forEach((e) => {
            e.classList.remove('blog-filter-header-active');
          })
        }
      })
    })
  };
  blog();


  // Полле для ввода комментария
  const textareaHeight = document.getElementById('text-comment'),
    commentEnterBtn = document.querySelector('.comment-enter__btn');

  //увеличиваем высоту textarea и делаем проверку на пустой инпут для отображения кнопки
  if (document.querySelector('#text-comment')) {
    textareaHeight.addEventListener("input", function () {

      let textInput = this.value.trim().length === 0;

      if (textInput === true) {
        commentEnterBtn.classList.remove('comment-enter__btn_active');
      } else {
        commentEnterBtn.classList.add('comment-enter__btn_active');
      }
      textareaHeight.style.height = 0;
      textareaHeight.style.height = textareaHeight.scrollHeight + "px";
    })
  }


  const scrollMessage = () => {
    let lastScroll = 100;
    const commentEnter = document.querySelector('.comment-enter'),
      scrollPosition2 = () => window.scrollY + 1 >= document.documentElement.scrollHeight - document.documentElement.clientHeight;

    if (document.querySelector('.comment-enter')) {
      window.addEventListener('scroll', () => {
        if (scrollPosition2() < lastScroll) {
          commentEnter.classList.remove('comment-enter-active');
        } else if (scrollPosition2() > lastScroll) {
          commentEnter.classList.add('comment-enter-active');
        }

        lastScroll = scrollPosition2();
      });
    }
  };
  window.addEventListener("resize", scrollMessage);
  scrollMessage();


  //Фильтр в форуме
  const forum = () => {
    const forumHeader = document.querySelectorAll(".forum-header");

    forumHeader.forEach((elem) => {
      elem.addEventListener('click', function () {
        let forumHeaderActive = document.querySelectorAll(".forum-header-active"),
          forumBodyActive = document.querySelectorAll(".forum-body-active");

        let parentElem = this.parentNode;

        let forumHeader = parentElem.querySelector('.forum-header');
        let forumBody = parentElem.querySelector('.forum-body');

        if (forumHeader.classList.contains("forum-header-active")) {
          forumHeader.classList.remove('forum-header-active');
        } else {
          forumHeader.classList.add('forum-header-active');
        }

        if (forumBody.classList.contains("forum-body-active")) {
          forumBody.classList.remove('forum-body-active');

        } else {
          forumBody.classList.toggle('forum-body-active');

          forumBodyActive.forEach((e) => {
            e.classList.remove('forum-body-active');
          })
          forumHeaderActive.forEach((e) => {
            e.classList.remove('forum-header-active');
          })
        }
      })
    })
  };
  forum();

  // Основные модули ========================================================================================================================================================================================================================================================


  /* Модуль для работы с меню (Бургер) */
  menuInit();
  /* Добавление loaded для HTML после полной загрузки страницы */
  addLoadedClass();
  // Модуль работы с слайдером  (swiper) ====================================================================================================================================================================================================================================================================================
  // JS mask
  modules_inputmask();
  // JS скролл меню
  modules_scrollHeader();
  // JS читать далее
  modules_readmore();
  // JS карта
  // modules_map();

  /******/
})();