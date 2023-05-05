var myMap;
ymaps.ready(init);

function init() {
    myMap = new ymaps.Map('map', {
        center: [59.880523, 30.257],
        zoom: 17
    }, {
        searchControlProvider: 'yandex#search'
    });

    myPlacemark = new ymaps.Placemark([59.880523, 30.260415], { 
		iconLayout: 'islands#redIcon', 
        iconCaption: 'НПО Техобеспечение',
	}, {
		preset: 'islands#redIcon'
    });

    myMap.geoObjects
        .add(myPlacemark);

    if (window.innerWidth < 1023) {
        myMap.behaviors
            .disable(['drag', 'rightMouseButtonMagnifier']);
        //  - drag - перемещение карты при нажатой левой кнопки мыши;
        //  - magnifier.rightButton - увеличение области, выделенной правой кнопкой мыши.
    }
    if (window.innerWidth < 768) {
        myMap.setCenter([59.880523, 30.260415], 16);
    }
}