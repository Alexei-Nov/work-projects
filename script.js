function show_3d(pid, add_compl_id) {
    add_compl_id = add_compl_id || '';
    if (!pid) return;
    $.ajax({
        url: '/assets/snippets/product/product_3d_ajax.php',
        type: 'POST',
        cache: false,
        dataType: 'json',
        data: 'pid=' + pid + '&add_compl_id=' + add_compl_id,
        success: function (res) {
            var title = res['title'];
            var fold = res['fold'];

            // $('#modal_3d .header_modal strong').text(title);
            // $('#modal_3d .price_str').text(res['price_str']);
            // $('#modal_3d .cur_str').html(res['curr']);
            // $("#modal_3d input[name='shk-id']").val(pid);
            // $("#modal_3d input[name='shk-price']").val(res['price']);
            // $("#modal_3d input[name='add_compl_id']").val(add_compl_id);
            // $("#modal_3d input[name='add_compl_price']").val(res['add_compl_price']);
            // $('#modal_3d .complexadd').remove();
            // if (res['pres_id']) {
            //     var pres_str = "<input type='hidden' class='complexadd' name='presentid__"+pid+"__add' value='"+res['pres_id']+"' />";
            //     pres_str += "<input type='hidden' class='complexadd' name='present__"+pid+"__add' value='<u>Подарок</u>:<br/>"+res['pres_name']+"' />";
            //     $('#modal_3d .shk-item form').append(pres_str);
            // }

            var windowHeight = $(window).height();
            var windowWidth = $(window).width();

            var img_w = 1280;
            var img_h = 720;

            var z = img_w / img_h;

            img_h = windowHeight - 150;

            if (img_w > windowWidth - 90) {
                img_w = windowWidth - 90;
                img_w = img_w > 1280 ? 1280 : img_w;
                img_h = img_w / z;
            } else {
                img_w = img_h * z;
                if (img_w > 1280) {
                    img_w = 1280;
                    img_h = img_w / z;
                }
            }

            open_modal('#modal_3d');

            setTimeout(function () {
                $('.spritespin').spritespin({
                    source: SpriteSpin.sourceArray(fold + '/images-{lane}-{frame}.jpg', {
                        lane: [0, 3],
                        frame: [0, 35],
                        digits: 2,
                    }),
                    width: img_w,
                    height: img_h,
                    frames: 36,
                    lanes: 4,
                    sense: 1,
                    senseLane: 2,
                    animate: false,
                    plugins: ['progress', '360', 'drag'],
                });

                // $.magnificPopup.open({
                //     items: {
                //         src: '#modal_3d'
                //     },
                //     type: 'inline',
                //     // fixedContentPos: false,
                //     // fixedBgPos: true,
                //     overflowY: 'auto',
                //
                //     closeBtnInside: true,
                //     preloader: false,
                //
                //     midClick: true,
                //     removalDelay: 300,
                //     mainClass: 'my-mfp-zoom-in',
                //     callbacks: {
                //         open: function() {
                //             $('#modal_3d').height(window.innerHeight);
                //         },
                //         close: function() {
                //             // Will fire when popup is closed
                //         }
                //         // e.t.c.
                //     }
                // });
            }, 100);
        },
        error: function () { },
    });
}