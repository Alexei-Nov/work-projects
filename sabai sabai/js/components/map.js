var myMap;
ymaps.ready(init);

function init() {
    myMap = new ymaps.Map('map', {
        center: [60.017584, 30.291],
        zoom: 17
    }, {
        searchControlProvider: 'yandex#search'
    });

    myPlacemark = new ymaps.Placemark([60.017584, 30.294425], { 
		iconLayout: 'islands#redIcon', 
		iconCaption: 'Sabai Sabai',
	});

    myMap.geoObjects
        .add(myPlacemark);

    if (window.innerWidth < 1023) {
        myMap.behaviors
            .disable(['drag', 'rightMouseButtonMagnifier']);
        //  - drag - перемещение карты при нажатой левой кнопки мыши;
        //  - magnifier.rightButton - увеличение области, выделенной правой кнопкой мыши.
		  myMap.setCenter([60.017584, 30.294425], 16);
    }
}