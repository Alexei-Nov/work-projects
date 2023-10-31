$(document).ready(function () {
  function animtaionSicle() {
    $('.showcase__sicle-first img').css('transform', 'rotateX(180deg)')
  }

  function animtaionSicleRevers() {
    $('.showcase__sicle-first img').css('transform', 'rotateX(0)')
  }

  $('.header__start-menu').click(function () {
    $('.menu__inner-first').show()
    $('.menu__inner-second').hide()
    $('.header').toggleClass('active')
    $('.menu').toggleClass('active')
    $('body').removeClass('active-ground')
    $('body').toggleClass('active')
    animtaionSicle()
    if ($('body').hasClass('active')) {
      $('.header').addClass('active')
      if ($('.menu').hasClass('active')) {
        return false
      } else {
        $('.menu').toggleClass('active')
      }
    } else {
      $('.menu').removeClass('active')
      $('.header').removeClass('active')
    }
  })

  $('.header__start-catalog').click(function () {
    $('.menu__inner-first').hide()
    $('.menu__inner-second').show()
    $('body').removeClass('active')
    $('body').toggleClass('active-ground')
    $('.header').toggleClass('active')
    if ($('body').hasClass('active-ground')) {
      $('.header').addClass('active')
      if ($('.menu').hasClass('active')) {
        return false
      } else {
        $('.menu').toggleClass('active')
      }
    } else {
      $('.header').removeClass('active')
      $('.menu').removeClass('active')
    }
  })

  $('.header__search-icon').click(function () {
    $(this).parent().addClass('active')
  })

  $(document).on('click', function (e) {
    if (!$(e.target).closest('.header__search-icon, .header__search').length) {
      $('.header__search').removeClass('active')
    }
    e.stopPropagation()
  })

  $(document).on('click', function (e) {
    if (!$(e.target).closest('.header__start-menu, .menu, .header__start-catalog').length) {
      $('.header').removeClass('active')
      $('.menu').removeClass('active')
      $('body').removeClass('active')
      animtaionSicleRevers()
      $('body').removeClass('active-ground')
    }
    e.stopPropagation()
  })

  $('.menu__strong').click(function () {
    $('.header').removeClass('active')
    $('.menu').removeClass('active')
    $('body').removeClass('active')
    $('.menu__inner-second').fadeOut(200)
    setTimeout(() => {
      $('.menu__inner-first').fadeIn(200)
    }, 200)
  })

  $('.menu__catalog').click(function () {
    $('.menu__inner-first').fadeOut(200)
    setTimeout(() => {
      $('.menu__inner-second').fadeIn(200)
    }, 200)
  })

  $('.menu__back').click(function () {
    $('.menu__inner-second').fadeOut(200)
    setTimeout(() => {
      $('.menu__inner-first').fadeIn(200)
    }, 200)
  })

  $('.showcase__slider').slick({
    slidesToShow: 1,
    centerMode: true,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          speed: 500,
          fade: true,
          cssEase: 'linear',
          autoplay: true,
          autoplaySpeed: 3000,
          pauseOnFocus: false,
          pauseOnHover: false,
        },
      },
    ],
  })

  $('[data-tabs-type]').on('click', function () {
    if (!$(this).hasClass('active')) {
      var index2 = $(this).index()
      $(this).addClass('active').siblings().removeClass('active')
      $('[data-tabs-typecontent]').hide().eq(index2).fadeIn()
    }
    return false
  })

  var oldScrollY = 0
  var div = document.querySelector('.header')

  window.addEventListener('scroll', function () {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop
    var dY = scrolled - oldScrollY

    if (dY < 0) {
      div.classList.add('fixed')
    } else {
      div.classList.remove('fixed')
    }

    oldScrollY = scrolled
  })

  $(window).scroll(function () {
    var sc = $(window).scrollTop()
    if (sc > 150) {
      $('.header').addClass('dop')
    } else {
      $('.header').removeClass('dop')
    }
  })

  $('.menu__inner-second, .menu__catalog-drop').on('mouseleave', function () {
    $('.menu__catalog-drop').removeClass('active')
    $('.menu__catalog-drop').css('visibility', 'hidden')
    $('.menu__catalog-drop').css('transition', '500ms')
    $('body').removeClass('submenu')
    setTimeout(() => {
      $('.menu__catalog-drop').hide()
    }, 250)
  })

  $('.menu__catalog-list > li').on('mouseover', function () {
    let visibleBlock = $('.menu__catalog-drop:visible').length
    let dropMenu = $(this).find('ul').length
    console.log(dropMenu)
    if (dropMenu == 0) {
      $('body').removeClass('submenu')
      $('.menu__catalog-drop.active').css('transition', '500ms')
      $('.menu__catalog-drop').removeClass('active')
      setTimeout(() => {
        $('.menu__catalog-drop').css('visibility', 'hidden')
        $('.menu__catalog-drop').hide()
      }, 300)
      return false
    } else if (visibleBlock == 1) {
      $('.menu__catalog-drop').removeClass('active')
      $('body').addClass('submenu')
      $('.menu__catalog-drop').hide()
      $(this).find('ul').show()
      $(this).find('ul').css('visibility', 'visible')
      $(this).find('ul').addClass('active')
      $('.menu__catalog-drop').css('transition', '0ms')
    } else if (visibleBlock >= 1 || visibleBlock == 0) {
      $('.menu__catalog-drop').removeClass('active')
      $('body').addClass('submenu')
      $('.menu__catalog-drop').hide()
      $(this).find('ul').show()
      $(this).find('ul').css('visibility', 'visible')
      $(this).find('ul').addClass('active')
      setTimeout(() => {
        $('.menu__catalog-drop').css('transition', '0ms')
      }, 500)
    }
  })

  let mainImage = $('.advantages__image img')
  let mainImageAtr = mainImage.attr('src')
  console.log(mainImageAtr)

  $('.advantages__block').hover(function () {
    let img = $(this).attr('data-image')
    $('.advantages__image').fadeOut(200)
    setTimeout(() => {
      mainImage.attr('src', img)
      $('.advantages__image').fadeIn(200)
    }, 210)
  })

  $('.advantages__block').on('mouseleave', function () {
    $('.advantages__image').fadeOut(200)
    setTimeout(() => {
      mainImage.attr('src', mainImageAtr)
      $('.advantages__image').fadeIn(200)
    }, 210)
  })

  var init = false
  var swiper
  function swiperCard() {
    if (window.innerWidth <= 1241) {
      if (!init) {
        init = true
        swiper = new Swiper('.popular__swiper', {
          pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          slidesPerView: 1,
          spaceBetween: 20,
          breakpoints: {
            // when window width is >= 320px
            767: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
          },
        })
      }
    } else if (init) {
      swiper.destroy()
      init = false
    }
  }
  swiperCard()
  window.addEventListener('resize', swiperCard)

  swiperCatalog = new Swiper('.catalog__swiper', {
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      767: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1500: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  })
})
