// check and define $ as jQuery
if (typeof jQuery != "undefined") jQuery(function ($) {

    jQuery(document).ready(function ($) {
        $("input[name=your-phone]").mask("+7 (999) 999-99-99");
        $("#phone-menu").mmenu({
            "slidingSubmenus": false,
            "extensions": [
                "pagedim-black",
                "theme-dark"
            ]
        });
    });


    $(document).ajaxComplete(function () {
        $('.wpcf7-response-output').append('<span class="response-close"><i class="fa fa-times" aria-hidden="true"></i></span>');
    });

    $('.acceptance-btn').change(function () {
        if ($(this).prop("checked")) {
            $(this).closest('.accept-confidential').addClass('check');
        } else {
            $(this).closest('.accept-confidential').removeClass('check');
        }
    });

    $('div[data-toggle="modal"]').on('click', function (e) {
        $("#myModal input[name='info-text']").val($(this).data("info"));
    });

    $('.supercarousel-slack').slickLightbox({
        itemSelector: 'a.superlight',
        prevArrow: '<div class="slick-prev slick-arrow"></div>',
        nextArrow: '<div class="slick-next slick-arrow"></div>'
    });

    $('.reestrdoc').slickLightbox({
        itemSelector: 'a.btn',
        prevArrow: '<div class="slick-prev slick-arrow"></div>',
        nextArrow: '<div class="slick-next slick-arrow"></div>'
    });


    $('.slack-video').on('click', function (e) {
        e.preventDefault();
        var link = $(this).data('video');
        $('#videoModal .modal-body').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/' + link + '?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>')
        $('#videoModal').modal('show');
    });

    $("#videoModal").on("hidden.bs.modal", function () {
        $('#videoModal .modal-body').html('');
    });


    $(window).scroll(function () {
        if ($('body').width() > 768) {
            if ($(this).scrollTop() > 140) {
                $('#main-menu').addClass('fixed');
            }
            else if ($(this).scrollTop() < 140) {
                $('#main-menu').removeClass('fixed');
            }
        }
    });


    $(document).ready(function () {
        $('body').append('<a href="#" id="go-top" title="Вверх"></a>');
    });

    $(function () {
        $.fn.scrollToTop = function () {
            $(this).hide().removeAttr("href");
            if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
            var scrollDiv = $(this);
            $(window).scroll(function () {
                if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
                else $(scrollDiv).fadeIn("slow")
            });
            $(this).click(function () {
                $("html, body").animate({ scrollTop: 0 }, "slow")
            })
        }
    });

    $(function () {
        $("#go-top").scrollToTop();


        setTimeout(function () {
            var curr_t = $("#cur_page").val();
            var curr_url = $("#cur_page_url").val();

            $("[name='curr_url']").val(curr_url);
            $("[name='curr_t']").val(curr_t);

            $('.wpcf7-response-output').on("click", function () {
                $('.wpcf7-response-output').hide("slow");
            });
        }, 800);

    });


    //Set 2 global variables
    var scrollTopPosition = 0;
    var lastKnownScrollTopPosition = 0;


    //when the document loads
    $(document).ready(function () {
        var valHeaderInit = $('.top-header').height()

        //There is some css below that applies here
        $('body').addClass('platform-ios');

        //As you scroll, record the scrolltop position in global variable
        $(window).scroll(function () {
            scrollTopPosition = $(window).scrollTop();
        });


        $('.modal').on('show.bs.modal', function () {
            $('#main-menu.fixed').addClass('dn');
            $('body').css('top', (scrollTopPosition * -1));
            lastKnownScrollTopPosition = scrollTopPosition;
        });
        $('.modal').on('hidden.bs.modal', function () {
            $('#main-menu').removeClass('dn');
            $(document).scrollTop(lastKnownScrollTopPosition);
        });


        $('.supercarousel-slack, .reestrdoc').on('show.slickLightbox', function () {
            $('#main-menu.fixed').addClass('dn');
            $('body').addClass('modal-open');
            $('body').css('top', (scrollTopPosition * -1));
            lastKnownScrollTopPosition = scrollTopPosition;
        });

        $('.supercarousel-slack, .reestrdoc').on('hide.slickLightbox', function () {
            $('#main-menu').removeClass('dn');
            $('body').removeClass('modal-open');
            $(document).scrollTop(lastKnownScrollTopPosition);
        });


        $('.supercarousel-slack, .reestrdoc').on('shown.slickLightbox', function () {
            var posTop = $(".slick-current .slick-lightbox-slick-item-inner").offset().top;
            var posLeft = $(".slick-current .slick-lightbox-slick-item-inner").offset().left;

            var posWidth = $('.slick-current .slick-lightbox-slick-item-inner').width();
            var posHeight = $('.slick-current .slick-lightbox-slick-item-inner').height();

            var leftpos = posLeft + posWidth;
            var toppos = posTop - 50;

            $('.slick-lightbox-close').css('right', posLeft);
            $('.slick-lightbox-close').css('top', toppos);
        });
        if ($(window).width() < 770) {
            $(document).on('click', '.slick-next, .slick-prev', function () {
                setTimeout(function () {
                    var posTop = $(".slick-current .slick-lightbox-slick-item-inner").offset().top;
                    var posLeft = $(".slick-current .slick-lightbox-slick-item-inner").offset().left;

                    var posWidth = $('.slick-current .slick-lightbox-slick-item-inner').width();
                    var posHeight = $('.slick-current .slick-lightbox-slick-item-inner').height();

                    var leftpos = posLeft + posWidth;
                    var toppos = posTop - 50;

                    $('.slick-lightbox-close').css('right', posLeft);
                    $('.slick-lightbox-close').css('top', toppos);
                }, 500);
            });
        }

    });

    $(document).ready(function () {
        $(".acceptance input[type=checkbox]").trigger("click");
    });

});