$(function() {
    /**
     * Слайдер услуг в шапке на главной
     */

    $('.headerServicesSlider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        prevArrow: `
            <button type="button" class="slick-prev">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.6665 9.99996C16.6665 9.53972 16.2934 9.16663 15.8332 9.16663H4.1665C3.70627 9.16663 3.33317 9.53972 3.33317 9.99996C3.33317 10.4602 3.70627 10.8333 4.1665 10.8333H15.8332C16.2934 10.8333 16.6665 10.4602 16.6665 9.99996Z" fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5894 3.57745C10.264 3.25201 9.73634 3.25201 9.41091 3.57745L3.57757 9.41079C3.25214 9.73622 3.25214 10.2639 3.57757 10.5893L9.41091 16.4226C9.73634 16.7481 10.264 16.7481 10.5894 16.4226C10.9149 16.0972 10.9149 15.5696 10.5894 15.2441L5.34534 10L10.5894 4.75596C10.9149 4.43053 10.9149 3.90289 10.5894 3.57745Z" fill="white"/>
                </svg>            
            </button>
        `,
        nextArrow: `
            <button type="button" class="slick-next">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.33301 9.99996C3.33301 9.53972 3.7061 9.16663 4.16634 9.16663H15.833C16.2932 9.16663 16.6663 9.53972 16.6663 9.99996C16.6663 10.4602 16.2932 10.8333 15.833 10.8333H4.16634C3.7061 10.8333 3.33301 10.4602 3.33301 9.99996Z" fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.41107 3.57745C9.73651 3.25201 10.2641 3.25201 10.5896 3.57745L16.4229 9.41079C16.7484 9.73622 16.7484 10.2639 16.4229 10.5893L10.5896 16.4226C10.2641 16.7481 9.73651 16.7481 9.41107 16.4226C9.08563 16.0972 9.08563 15.5696 9.41107 15.2441L14.6551 10L9.41107 4.75596C9.08563 4.43053 9.08563 3.90289 9.41107 3.57745Z" fill="white"/>
                </svg>
            </button>
        `,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                }
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                }
            },
        ],
    });

    /**
     * Слайдер преимуществ
     */

    $('.advantagesSlider').slick({
        vertical: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow: 3,
                    vertical: true,
                    adaptiveHeight: false
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    vertical: false,
                    centerMode: false,
                    adaptiveHeight: true
                }
            },
        ],
    });

    /**
     * Слайдер этапов работ
     */

    $('.workStepsSlider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: `
            <button type="button" class="slick-prev">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.6665 9.99996C16.6665 9.53972 16.2934 9.16663 15.8332 9.16663H4.1665C3.70627 9.16663 3.33317 9.53972 3.33317 9.99996C3.33317 10.4602 3.70627 10.8333 4.1665 10.8333H15.8332C16.2934 10.8333 16.6665 10.4602 16.6665 9.99996Z" fill="currentColor"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5894 3.57745C10.264 3.25201 9.73634 3.25201 9.41091 3.57745L3.57757 9.41079C3.25214 9.73622 3.25214 10.2639 3.57757 10.5893L9.41091 16.4226C9.73634 16.7481 10.264 16.7481 10.5894 16.4226C10.9149 16.0972 10.9149 15.5696 10.5894 15.2441L5.34534 10L10.5894 4.75596C10.9149 4.43053 10.9149 3.90289 10.5894 3.57745Z" fill="currentColor"/>
                </svg>            
            </button>
        `,
        nextArrow: `
            <button type="button" class="slick-next">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.33301 9.99996C3.33301 9.53972 3.7061 9.16663 4.16634 9.16663H15.833C16.2932 9.16663 16.6663 9.53972 16.6663 9.99996C16.6663 10.4602 16.2932 10.8333 15.833 10.8333H4.16634C3.7061 10.8333 3.33301 10.4602 3.33301 9.99996Z" fill="currentColor"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.41107 3.57745C9.73651 3.25201 10.2641 3.25201 10.5896 3.57745L16.4229 9.41079C16.7484 9.73622 16.7484 10.2639 16.4229 10.5893L10.5896 16.4226C10.2641 16.7481 9.73651 16.7481 9.41107 16.4226C9.08563 16.0972 9.08563 15.5696 9.41107 15.2441L14.6551 10L9.41107 4.75596C9.08563 4.43053 9.08563 3.90289 9.41107 3.57745Z" fill="currentColor"/>
                </svg>
            </button>
        `,
        responsive: [
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow: 2,
                    dots: false,
                    arrows: true,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    arrows: false,
                }
            },
        ],
    })

    $('.workStepsSliderSm').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: `
            <button type="button" class="slick-prev">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.6665 9.99996C16.6665 9.53972 16.2934 9.16663 15.8332 9.16663H4.1665C3.70627 9.16663 3.33317 9.53972 3.33317 9.99996C3.33317 10.4602 3.70627 10.8333 4.1665 10.8333H15.8332C16.2934 10.8333 16.6665 10.4602 16.6665 9.99996Z" fill="currentColor"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5894 3.57745C10.264 3.25201 9.73634 3.25201 9.41091 3.57745L3.57757 9.41079C3.25214 9.73622 3.25214 10.2639 3.57757 10.5893L9.41091 16.4226C9.73634 16.7481 10.264 16.7481 10.5894 16.4226C10.9149 16.0972 10.9149 15.5696 10.5894 15.2441L5.34534 10L10.5894 4.75596C10.9149 4.43053 10.9149 3.90289 10.5894 3.57745Z" fill="currentColor"/>
                </svg>            
            </button>
        `,
        nextArrow: `
            <button type="button" class="slick-next">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.33301 9.99996C3.33301 9.53972 3.7061 9.16663 4.16634 9.16663H15.833C16.2932 9.16663 16.6663 9.53972 16.6663 9.99996C16.6663 10.4602 16.2932 10.8333 15.833 10.8333H4.16634C3.7061 10.8333 3.33301 10.4602 3.33301 9.99996Z" fill="currentColor"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.41107 3.57745C9.73651 3.25201 10.2641 3.25201 10.5896 3.57745L16.4229 9.41079C16.7484 9.73622 16.7484 10.2639 16.4229 10.5893L10.5896 16.4226C10.2641 16.7481 9.73651 16.7481 9.41107 16.4226C9.08563 16.0972 9.08563 15.5696 9.41107 15.2441L14.6551 10L9.41107 4.75596C9.08563 4.43053 9.08563 3.90289 9.41107 3.57745Z" fill="currentColor"/>
                </svg>
            </button>
        `,
        responsive: [
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow: 4,
                    dots: false,
                    arrows: true,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    arrows: false,
                }
            },
        ],
    })

    /**
     * Слайдер выполненных проектов
     */

    $('.prList').slick({
        rows: 2,
        slidesPerRow: 3,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: `
            <button type="button" class="slick-prev">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.6665 9.99996C16.6665 9.53972 16.2934 9.16663 15.8332 9.16663H4.1665C3.70627 9.16663 3.33317 9.53972 3.33317 9.99996C3.33317 10.4602 3.70627 10.8333 4.1665 10.8333H15.8332C16.2934 10.8333 16.6665 10.4602 16.6665 9.99996Z" fill="currentColor"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5894 3.57745C10.264 3.25201 9.73634 3.25201 9.41091 3.57745L3.57757 9.41079C3.25214 9.73622 3.25214 10.2639 3.57757 10.5893L9.41091 16.4226C9.73634 16.7481 10.264 16.7481 10.5894 16.4226C10.9149 16.0972 10.9149 15.5696 10.5894 15.2441L5.34534 10L10.5894 4.75596C10.9149 4.43053 10.9149 3.90289 10.5894 3.57745Z" fill="currentColor"/>
                </svg>            
            </button>
        `,
        nextArrow: `
            <button type="button" class="slick-next">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.33301 9.99996C3.33301 9.53972 3.7061 9.16663 4.16634 9.16663H15.833C16.2932 9.16663 16.6663 9.53972 16.6663 9.99996C16.6663 10.4602 16.2932 10.8333 15.833 10.8333H4.16634C3.7061 10.8333 3.33301 10.4602 3.33301 9.99996Z" fill="currentColor"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.41107 3.57745C9.73651 3.25201 10.2641 3.25201 10.5896 3.57745L16.4229 9.41079C16.7484 9.73622 16.7484 10.2639 16.4229 10.5893L10.5896 16.4226C10.2641 16.7481 9.73651 16.7481 9.41107 16.4226C9.08563 16.0972 9.08563 15.5696 9.41107 15.2441L14.6551 10L9.41107 4.75596C9.08563 4.43053 9.08563 3.90289 9.41107 3.57745Z" fill="currentColor"/>
                </svg>
            </button>
        `,
        responsive: [
            {
                breakpoint: 1080,
                settings: {
                    rows: 2,
                    slidesPerRow: 3,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: true,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    rows: 1,
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                }
            },
        ],
    });

    $('.prListLg').slick({
        rows: 2,
        slidesPerRow: 4,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: `
            <button type="button" class="slick-prev">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.6665 9.99996C16.6665 9.53972 16.2934 9.16663 15.8332 9.16663H4.1665C3.70627 9.16663 3.33317 9.53972 3.33317 9.99996C3.33317 10.4602 3.70627 10.8333 4.1665 10.8333H15.8332C16.2934 10.8333 16.6665 10.4602 16.6665 9.99996Z" fill="currentColor"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5894 3.57745C10.264 3.25201 9.73634 3.25201 9.41091 3.57745L3.57757 9.41079C3.25214 9.73622 3.25214 10.2639 3.57757 10.5893L9.41091 16.4226C9.73634 16.7481 10.264 16.7481 10.5894 16.4226C10.9149 16.0972 10.9149 15.5696 10.5894 15.2441L5.34534 10L10.5894 4.75596C10.9149 4.43053 10.9149 3.90289 10.5894 3.57745Z" fill="currentColor"/>
                </svg>            
            </button>
        `,
        nextArrow: `
            <button type="button" class="slick-next">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.33301 9.99996C3.33301 9.53972 3.7061 9.16663 4.16634 9.16663H15.833C16.2932 9.16663 16.6663 9.53972 16.6663 9.99996C16.6663 10.4602 16.2932 10.8333 15.833 10.8333H4.16634C3.7061 10.8333 3.33301 10.4602 3.33301 9.99996Z" fill="currentColor"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.41107 3.57745C9.73651 3.25201 10.2641 3.25201 10.5896 3.57745L16.4229 9.41079C16.7484 9.73622 16.7484 10.2639 16.4229 10.5893L10.5896 16.4226C10.2641 16.7481 9.73651 16.7481 9.41107 16.4226C9.08563 16.0972 9.08563 15.5696 9.41107 15.2441L14.6551 10L9.41107 4.75596C9.08563 4.43053 9.08563 3.90289 9.41107 3.57745Z" fill="currentColor"/>
                </svg>
            </button>
        `,
        responsive: [
            {
                breakpoint: 1080,
                settings: {
                    rows: 2,
                    slidesPerRow: 3,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: true,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    rows: 1,
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                }
            },
        ],
    });

    $('.typeSlider').slick({
        slidesToShow: 2,
        prevArrow: `
            <button type="button" class="slick-prev">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.6665 9.99996C16.6665 9.53972 16.2934 9.16663 15.8332 9.16663H4.1665C3.70627 9.16663 3.33317 9.53972 3.33317 9.99996C3.33317 10.4602 3.70627 10.8333 4.1665 10.8333H15.8332C16.2934 10.8333 16.6665 10.4602 16.6665 9.99996Z" fill="currentColor"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5894 3.57745C10.264 3.25201 9.73634 3.25201 9.41091 3.57745L3.57757 9.41079C3.25214 9.73622 3.25214 10.2639 3.57757 10.5893L9.41091 16.4226C9.73634 16.7481 10.264 16.7481 10.5894 16.4226C10.9149 16.0972 10.9149 15.5696 10.5894 15.2441L5.34534 10L10.5894 4.75596C10.9149 4.43053 10.9149 3.90289 10.5894 3.57745Z" fill="currentColor"/>
                </svg>            
            </button>
        `,
        nextArrow: `
            <button type="button" class="slick-next">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.33301 9.99996C3.33301 9.53972 3.7061 9.16663 4.16634 9.16663H15.833C16.2932 9.16663 16.6663 9.53972 16.6663 9.99996C16.6663 10.4602 16.2932 10.8333 15.833 10.8333H4.16634C3.7061 10.8333 3.33301 10.4602 3.33301 9.99996Z" fill="currentColor"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.41107 3.57745C9.73651 3.25201 10.2641 3.25201 10.5896 3.57745L16.4229 9.41079C16.7484 9.73622 16.7484 10.2639 16.4229 10.5893L10.5896 16.4226C10.2641 16.7481 9.73651 16.7481 9.41107 16.4226C9.08563 16.0972 9.08563 15.5696 9.41107 15.2441L14.6551 10L9.41107 4.75596C9.08563 4.43053 9.08563 3.90289 9.41107 3.57745Z" fill="currentColor"/>
                </svg>
            </button>
        `,
        responsive: [
            {
                breakpoint: 1080,
                settings: {
                    rows: 2,
                    slidesPerRow: 3,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: true,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    rows: 1,
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                }
            },
        ],
    })

    /**
     * Галерея выполненных проектов
     */

    $("[data-toggle-tab]").click(function(event) {
        event.preventDefault(false);

        let thisName = $(this).data('toggle-tab'),
            currentIndex = $('[data-toggle-tab]').index(this);

        $(`[data-tab='${thisName}']`)
            .hide()
            .eq(currentIndex)
            .show();

        // Reinit slick slider in current tab

        $('[data-slick-reinit]').slick('refresh');

        return false;
    })

    $('.prSelector a').click(function() {
        $('.prSelector a').removeClass('thisActive');
        $(this).addClass('thisActive');
    })

    // Показ/скрытие блока

    $.each($("[data-expand]"), (i, e) => {
        if($(e).data('expand-text').length !== 0) {
            let expandText = $(e).data('expand-text');
            $(e).text(expandText);
        }

        $(e).on('click', function(event) {
            event.preventDefault(false);

            let target = $(e).data('expand'),
                aClass = $(e).data('expand-class');

            if(!$(e).hasClass('thisCollapsed')) {
                if($(e).data('collapse-text').length !== 0) {
                    let collapseText = $(e).data('collapse-text');
                    $(e).addClass('thisCollapsed')
                        .text(collapseText)
                }

                $(target).addClass(aClass);
            } else {
                if($(e).data('expand-text').length !== 0) {
                    let expandText = $(e).data('expand-text');
                    $(e).removeClass('thisCollapsed')
                        .text(expandText);

                    $(target).removeClass(aClass);
                }
            }

            return false;
        })
    })

    $('.toggleMenu').click(function() {
        $('body, html').toggleClass('menuToggled');
        $('.mainNav').toggleClass('thisActive');
        $('body, html').animate({'scrollTop': 0}, 100);
        
        return false;
    })

    // Fancybox
    Fancybox.bind("[data-fancybox]");

    $('[data-send-preview]').on('click', function() {
        let currentSettings = $(this).data('send-preview');
        let currentButton = $(this);

        if(currentSettings.loadClass && currentSettings.loadText) {
            currentButton
                .addClass(currentSettings.loadClass)
                .text(currentSettings.loadText)
        }

        if(currentSettings.sentClass && currentSettings.sentText) {
            setTimeout(function() {
                currentButton
                    .removeClass(currentSettings.loadClass);

                currentButton
                    .addClass(currentSettings.sentClass)
                    .text(currentSettings.sentText)
            }, 2000)
        }
        
        return false;
    })
})

function initLabels() {
    $.each($('.mainInput'), (i, e) => {
        let inputLabel = $(e).parent().find('.inputLabel');

        if(inputLabel.length !== 0) {
            $(inputLabel).on('click', function() {
                $(e).focus();
            })

            if($(e).val().length !== 0) {
                $(inputLabel).addClass('thisActive');
            }

            $(e).on("focus", function() {
                $(inputLabel).addClass('thisActive');
            })

            // ТЕСТ
            // Убрать на проде
            $(e).on("change keyup", function() {
                if($(this).val().length !== 0) {
                    $(e).parent().removeClass('thisError');
                } else {
                    $(e).parent().addClass('thisError');
                }
            })

            $(e).on("blur", function() {
                if($(this).val().length === 0) {
                    $(inputLabel).removeClass('thisActive');
                }
            })
        }
    })
}

initLabels();

/**
 * Скрипт инициализации карты
 */

function initMap(target, coords, placemark) {
    if($(`#${target}`).length !== 0) {
        ymaps.ready(init);
        function init() {
            var mainMap = new ymaps.Map(target, {
                center: coords,
                zoom: 17,
                controls: ['routeButtonControl', 'zoomControl']
            });

            var mainObj = new ymaps.Placemark(coords, {}, {
                iconLayout: 'default#image',
                iconImageHref: './img/placemark.svg',
                iconImageSize: [34, 42],
                iconImageOffset: [-17, -42],
            });
        
            mainMap.geoObjects.add(mainObj);
        }
    }
}


// Меню
let menuInitialized = false;

// Инициализация проверки 
// размеров экрана
menuWindowCheck();
$(window).on('resize', function() {
    menuWindowCheck();
})

// Проверка размеров экрана и
// Инициализация скрипта меню
function menuWindowCheck() {
    if($(window).width() <= 768) {
        if(menuInitialized === false) {
            initMenu();
        }
        menuInitialized = true;
    } else {
        if(menuInitialized === true) {
            destroyMenu();
        }
        menuInitialized = false;
    }
}

// Меню для мобильных устройств
// Анимации, логика работы
function initMenu() {
    console.log('menu initialized');

    $.each($('li.hasSubMenu'), (i, e) => {
        let element = $(e);
        let submenu = $(element.find('.subMenuHolder'));
        let menuHeight = submenu.find('.subMenu').outerHeight(true);
        
        // По умолчанию - закрыто

        submenu.css({
            'height': 0,
            'overflow': 'hidden'
        });

        element.on('click', function(event) {
            event.preventDefault(false);

            let subMenuTarget = $(this).find('.subMenuHolder');

            if(!element.hasClass('thisActive')) {
                element.addClass('thisActive');

                subMenuTarget.animate({
                    'height': `${menuHeight}px`
                }, 100);

                let subItems = subMenuTarget.find('li');
                setTimeout(function() {
                    $.each(subItems, (i, e) => {
                        setTimeout(() => {
                            $(e).addClass('thisAnimated');
                        }, i*20)
                    })
                }, 100)
            } else {
                element.removeClass('thisActive');

                subMenuTarget.animate({
                    'height': `0px`
                }, 100, () => {
                    subMenuTarget.find('li').removeClass('thisAnimated')
                });
            }

            return false;
        });
    })
}

// Сброс меню для 
// больших экранов
function destroyMenu() {
    $.each($('li.hasSubMenu'), (i, e) => {
        let element = $(e);
        let submenu = $(element.find('.subMenuHolder'));
        let menuHeight = submenu.find('.subMenu').outerHeight(true);

        submenu.css({
            'height': 'auto',
            'overflow': 'visible'
        });

        $('.subMenu .thisAnimated').removeClass('thisAnimated');
        $('.hasSubMenu').removeClass('thisActive');
    });
}

// Поп-апы

let activeModal = "modal--thisActive";

$('[data-modal]').click(function() {
    let target = $(this).data('modal');
    $(target).addClass(activeModal);
    return false;
})

$('[data-modal-close]').click(function() {
    $('[data-modal-holder]').removeClass(activeModal);
    return false;
})

// Дропдауны

$(document.body).on('click', '.infoDropdown .iddTitle', function() {
    let slideTarget = $(this).parent().find('.iddContent');
    
    if($(this).parent().hasClass('thisActive')) {
        $(slideTarget).slideUp(200);
        $(this).parent().removeClass('thisActive');
    } else {
        $(slideTarget).slideDown(200);
        $(this).parent().addClass('thisActive');
    }
})

// Разделение элементов на колонки
// Элемент с атрибутом data-cols должен иметь 
// атрибуты data-row-class и data-col-class

$.each($('[data-cols]'), (index, element) => {
    let cols = $(element).data('cols'),
        rowClass = $(element).data('row-class'),
        colClass = $(element).data('col-class'),
        childCount = $(element).children().length;

    let newRow = $('<div>').addClass(rowClass);

    for(let i = 0; i < cols; i++) {
        let newCol = $('<div>');
    
        newCol.addClass(colClass);
        newRow.append(newCol);
    }
    
    let rowCols = newRow.children();
    let currentIndex = 0;

    for(let i = 0; i < childCount; i++) {
        console.log($(element).children()[i]);
        $(rowCols[currentIndex]).append($(element).children()[i].cloneNode(true));

        currentIndex++;

        if(currentIndex == cols) {
            currentIndex = 0;
        }
    }

    $(element).html(newRow);
});

// Анимация кнопок слайдеров

function updateDots(target) {
    $.each($(target).find('.slick-dots li'), (i, e) => {
        let dotWidth = $(e).outerWidth(true);

        // 1. Установка класса .dot__not-active по умолчанию для всех
        $(e).addClass('dot__not-active');

        if($(e).hasClass('slick-active')) {
            let curIndex = $(e).index(),
                btnCount = $(target).find('.slick-dots li').length;

            // 2. Удаление всех доп. классов со всех кнопок
            $(target).find('.slick-dots li').removeClass([
                'dot__prev', 
                'dot__prev-2x', 
                'dot__next', 
                'dot__next-2x'
            ]);
            
            // 3. Удаление класса .dot__not-active для текущей кнопки
            $(e).removeClass('dot__not-active');
            
            // 4. Установка класса .dot__prev для предыдущей и .dot__prev-2x для предыдущей дважды
            $(target).find('.slick-dots li').eq(curIndex - 1).addClass('dot__prev');
            $(target).find('.slick-dots li').eq(curIndex - 2).addClass('dot__prev-2x');
            
            // 5. Установка класса .dot__prev для следующей и .dot__prev-2x для следующей дважды
            $(target).find('.slick-dots li').eq(curIndex + 1).addClass('dot__next');
            $(target).find('.slick-dots li').eq(curIndex + 2).addClass('dot__next-2x');

            // 6. Смещение кнопок, если index >= 2 или index <= btnCount - 3
            if(curIndex >= 2 && curIndex <= btnCount - 3) {
                for(i = 0; i <= curIndex; i++) {
                    $(target).find('.slick-dots li').css({
                        'left': `-${dotWidth * (curIndex - 2)}px`
                    })
                }
            } else if(curIndex <= 2) {
                $(target).find('.slick-dots li').css({
                    'left': `0px`
                })
            } else if(curIndex >= btnCount - 3) {
                $(target).find('.slick-dots li').css({
                    'left': `-${dotWidth * ((btnCount - 2) - 3)}px`
                })
            }
        }
    })
}

setTimeout(function() {
    $.each($('.slick-slider'), (i, e) => {
        updateDots(e);
        $(e).on('swipe', (event, slick) => {
            updateDots(e);
        })

        $(e).find('.slick-dots li').on('click', function() {
            updateDots(e);
        })
    })
}, 100);

// Показ/скрытие текста

$(function() {
    $.each($('[data-cut]'), (i, e) => {
        let lineHeight = $(e).css('line-height'),
            fontSize   = $(e).css('font-size') ?? $(document.body).css('font-size');

        fontSize = parseFloat(fontSize.replace(/\D/g,''));
        lineHeight = parseFloat(lineHeight.replace(/\D/g, ''));

        let linesCount = $(e).data('cut');

        let maxHeight = $(e).outerHeight(true),
            minHeight = lineHeight 
            ? lineHeight * linesCount 
            : (fontSize * 1.5) * linesCount;
            
        // Сокращение текста до необходимого кол-ва строк
        $(e).css({
            height: `${minHeight}px`,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            'line-clamp': '5',
            display: '-webkit-box',
            '-webkit-box-orient': 'vertical'
        });

        if($(e).height() <= maxHeight) {
            // Создание кнопки
            let buttonClass = $(e).data('button-class') ?? 'button-show__more',
                hideText    = $(e).data('hide-text') ?? 'Скрыть',
                showText    = $(e).data('show-text') ?? 'Читать далее';

            let newButton = $('<a>');

            newButton = newButton.addClass(buttonClass).text(showText);

            $(e).after(newButton);

            newButton.on('click', function() {
                let activeClass = 'button-show__active';
                if($(this).hasClass(activeClass)) {
                    $(this).removeClass(activeClass).text(showText);
                    $(e).animate({
                        height: `${minHeight}`,
                    }, 300);
                    $(e).css({
                        display: '-webkit-box',
                    })
                } else {
                    $(this).addClass(activeClass).text(hideText);
                    $(e).animate({
                        height: `${maxHeight}`,
                    }, 300)
                    $(e).css({
                        display: 'block',
                        'line-clamp': '0',
                    })
                }
            })
        }
    })
})