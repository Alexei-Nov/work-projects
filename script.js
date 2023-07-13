function initCanvas(src) {
    setCanvas(src);
    $('.con-button').click(function () {
        if ($(this).next().is(':visible')) {
            $(".con-button-list").hide();
        } else {
            $(".con-button-list").hide();
            $(this).next().show();
        }
    });
    $(document).click(function (event) {
        if (!$(event.target).closest(".con-button-list, .con-button").length) {
            $(".con-button-list").hide();
        }
    });
    window.canvas = new fabric.Canvas('con', {
        backgroundColor: '#fff',
    });
    $('.con-button-list li').click(function () {
        $('.con-button-list').hide();
    });
    $('#con-slider li').click(function () {
        var src = $('img', this).attr('src');
        setCanvas(src);
    });
    $('.con-add-image-face li').click(function () {
        var src = $('img', this).attr('src');
        addImage({
            src: src,
            size: 200,
            top: 85,
            left: false,
            rotating: false,
        });
    });
    $('.con-add-image-epit li').click(function () {
        var src = $('img', this).attr('src');
        addImage({
            src: src,
            size: 200,
            top: 605,
            left: false,
            rotating: false,
        });
    });
    $('.con-add-image-flower li').click(function () {
        var src = $('img', this).attr('src');
        addImage({
            src: src,
            size: 100,
            top: 490,
            left: false,
            rotating: false,
        });
    });
    $('.con-add-image-corner li').click(function () {
        var src = $('img', this).attr('src');
        addImage({
            src: src,
            size: 80,
            top: 20,
            left: 50,
            rotating: false,
        });
    });
    $('.con-add-image-candle li').click(function () {
        var src = $('img', this).attr('src');
        addImage({
            src: src,
            size: 100,
            top: 490,
            left: false,
            rotating: false,
        });
    });
    $('.con-add-image-vignettes li').click(function () {
        var src = $('img', this).attr('src');
        addImage({
            src: src,
            size: 100,
            top: 20,
            left: 50,
            rotating: true,
        });
    });
    $('.con-add-text-lastname li').click(function () {
        var font = $('img', this).attr('data-font');
        addText({
            text: 'Фамилия',
            font: font,
            size: 34,
            top: 320,
            left: false,
            rotating: false,
        });
    });
    $('.con-add-text-firstname li').click(function () {
        var font = $('img', this).attr('data-font');
        addText({
            text: 'Имя',
            font: font,
            size: 34,
            top: 360,
            left: false,
            rotating: false,
        });
    });
    $('.con-add-text-patronymic li').click(function () {
        var font = $('img', this).attr('data-font');
        addText({
            text: 'Отчество',
            font: font,
            size: 34,
            top: 400,
            left: false,
            rotating: false,
        });
    });
    $('.con-add-text-date li').click(function () {
        var font = $('img', this).attr('data-font');
        addText({
            text: '01.01.0001 - 01.01.0001',
            font: font,
            size: 25,
            top: 440,
            left: false,
            rotating: false,
        });
    });
    $(document).click(function (event) {
        if (!$(event.target).closest(".canvas-container").length) {
            if (canvas.getActiveGroup() || canvas.getActiveObject()) {
                canvas.deactivateAll();
                canvas.renderAll();
                $(".con-delete-btn").remove();
            }
        }
    });
    function setCanvas(src) {
        fabric.Image.fromURL(src, function (oImg) {
            var n_width, n_height, coef;
            var width = oImg.width;
            var height = oImg.height;
            if (width > height) {
                coef = width / height;
                n_height = 470 / coef;
                n_width = 470;
            } else {
                coef = height / width;
                n_height = 750;
                n_width = 750 / coef;
            }
            oImg.set({
                width: n_width,
                height: n_height
            });
            canvas.setWidth(n_width);
            canvas.setHeight(n_height);
            canvas.setBackgroundImage(oImg);
            canvas.renderAll();
        });
    }
    function addImage(obj) {
        fabric.Image.fromURL(obj.src, function (oImg) {
            var n_width, n_height, coef;
            var width = oImg.width;
            var height = oImg.height;
            if (width > height) {
                coef = width / height;
                n_height = obj.size / coef;
                n_width = obj.size;
            } else {
                coef = height / width;
                n_height = obj.size;
                n_width = obj.size / coef;
            }
            var srcArr = obj.src.split('/');
            var key = srcArr[srcArr.length - 1];
            if (centered()) {
                obj.top = false;
                obj.left = false;
            }
            oImg.set({
                key: key,
                top: obj.top || (canvas.height / 2) - (n_height / 2),
                left: obj.left || (canvas.width / 2) - (n_width / 2),
                width: n_width,
                height: n_height,
                borderColor: '#fff',
                cornerColor: '#fff',
                rotatingPointOffset: 20,
                cornersize: 14,
                rotating: obj.rotating,
                transparentCorners: false,
            });
            oImg.setControlsVisibility({
                mt: false,
                mb: false,
                ml: false,
                mr: false,
                bl: false,
                br: true,
                tl: false,
                tr: false,
                mtr: obj.rotating,
            });
            canvas.add(oImg);
            setTimeout(function () {
                canvas.setActiveObject(canvas.item(canvas._objects.length - 1));
            }, 10);
        });
    }
    function addText(obj) {
        var customText = new fabric.IText(obj.text, {
            key: obj.font,
            fill: '#fff',
            fontSize: obj.size,
            textAlign: 'center',
            editable: true,
            fontFamily: obj.font,
            borderColor: '#fff',
            cornerColor: '#fff',
            cursorColor: '#fff',
            editingBorderColor: '#fff',
            rotatingPointOffset: 20,
            cornersize: 14,
            transparentCorners: false,
        });
        if (centered()) {
            obj.top = false;
            obj.left = false;
        }
        customText.set({
            top: obj.top || (canvas.height / 2) - (customText.height / 2),
            left: obj.left || (canvas.width / 2) - (customText.width / 2),
        });
        customText.setControlsVisibility({
            mt: false,
            mb: false,
            ml: false,
            mr: false,
            bl: false,
            br: true,
            tl: false,
            tr: false,
            mtr: obj.rotating,
        });
        canvas.add(customText);
        setTimeout(function () {
            canvas.setActiveObject(canvas.item(canvas._objects.length - 1));
        }, 10);
    }
    canvas.on('object:selected', function (o) {
        var activeObj = o.target;
        if (activeObj.get('type') == 'group') {
            activeObj.set({
                borderColor: '#fff',
                cornerColor: '#fff',
                rotatingPointOffset: 20,
                cornersize: 14,
                transparentCorners: false,
            });
            activeObj.setControlsVisibility({
                mt: false,
                mb: false,
                ml: false,
                mr: false,
                bl: false,
                br: true,
                tl: false,
                tr: false,
                mtr: false,
            });
        }
    });
    $('#con-clear').click(function () {
        for (var i = canvas._objects.length - 1; i >= 0; i--) {
            canvas.remove(canvas.item(i));
        }
        canvas.renderAll();
        remove_delete_btn();
    });
    canvas.on('object:selected', add_delete_btn);
    canvas.on('object:modified', add_delete_btn);
    function add_delete_btn(e) {
        $(".con-delete-btn").remove();
        var btnLeft = e.target.oCoords.tr.x;
        var btnTop = e.target.oCoords.tr.y;
        var angle = e.target.getAngle();
        var delete_btn = '<div class="con-delete-btn" title="Delete" style="\
top:' + btnTop + 'px;\
left:' + btnLeft + 'px;\
-moz-transform: rotate(' + angle + 'deg);\
-ms-transform: rotate(' + angle + 'deg);\
-webkit-transform: rotate(' + angle + 'deg);\
-o-transform: rotate(' + angle + 'deg);\
transform: rotate(' + angle + 'deg);\
" title="Удалить объект">&times;</div>';
        $(".canvas-container").append(delete_btn);
    }
    canvas.on('mouse:down', function (e) {
        if (!canvas.getActiveObject()) {
            remove_delete_btn();
        }
    });
    canvas.on('object:moving', remove_delete_btn);
    canvas.on('object:rotating', remove_delete_btn);
    canvas.on('object:scaling', remove_delete_btn);
    function remove_delete_btn() {
        $(".con-delete-btn").remove();
    }
    $(document).on('click', ".con-delete-btn", function () {
        if (canvas.getActiveObject()) {
            canvas.remove(canvas.getActiveObject());
        }
        if (canvas.getActiveGroup()) {
            var group = canvas.getActiveGroup();
            canvas.deactivateAll();
            for (var i = group._objects.length - 1; i >= 0; i--) {
                canvas.remove(group.item(i));
            }
            canvas.remove(group);
        }
        canvas.renderAll();
        $(".con-delete-btn").remove();
    });
    $('#con-save-to-png').click(function () {
        var button = $(this);
        var buttonText = $(this).text();
        button.text('Сохраняем...');
        saveCanvas(function (obj) {
            var link = document.createElement("a");
            link.download = obj.name;
            link.href = obj.src;
            link.click();
            button.text(buttonText);
        });
    });
    $('#con-print-png').click(function () {
        var button = $(this);
        var buttonText = $(this).text();
        button.text('Сохраняем...');
        saveCanvas(function (obj) {
            var link = document.createElement("a");
            link.target = '_blank';
            link.href = obj.print;
            link.click();
            button.text(buttonText);
        });
    });
    $('#con-send-to-email').click(function () {
        var button = $(this);
        var buttonText = $(this).text();
        button.text('Сохраняем...');
        saveCanvas(function (obj) {
            $('#popup-send-model input[name="id"]').val(obj.id);
            button.text(buttonText);
        });
    });
    function saveCanvas(callback) {
        var imgData = canvas.toDataURL({
            format: 'png'
        });
        var backImg = canvas.backgroundImage._originalElement.src;
        var srcArr = backImg.split('/');
        var key = srcArr[srcArr.length - 1];
        var elems = [key];
        for (var i = canvas._objects.length - 1; i >= 0; i--) {
            elems.push(canvas.item(i).key);
        }
        $.post('/wp-admin/admin-ajax.php', {
            action: 'save_constructor',
            b64img: imgData,
            elems: elems,
        }, function (response) {
            if (response.error) {
                alert(response.text);
            } else {
                callback(response);
            }
        });
    }
    function centered() {
        var backImg = canvas.backgroundImage._originalElement.src;
        var srcArr = backImg.split('/');
        var key = srcArr[srcArr.length - 1];
        var centered = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 42];
        for (var i = 0; i < centered.length; i++) {
            if (key.substring(2, 4) == centered[i]) {
                return true;
            }
        }
        return false;
    }
}
; if ($('#con').length) {
    var src = $('#con').attr('src');
    initCanvas(src);
}