ymaps.ready(initMap([60.084437, 30.390545]));
function initMap(coords = [], id = 'map') {
    if (document.querySelector(`#${id}`)) {
        let myMap = new ymaps.Map(id, {
            center: coords,
            zoom: 18,
            controls: ['zoomControl']
        }, {
            searchControlProvider: 'yandex#search'
        });

        myPlacemark = new ymaps.Placemark(coords,
            { balloonContent: 'ГарденШоп', },
            { iconColor: '#c9283b' });
        myMap.geoObjects
            .add(myPlacemark)

        if (window.innerWidth < 1023) {
            myMap.behaviors
                .disable(['drag', 'rightMouseButtonMagnifier']);
            //  - drag - перемещение карты при нажатой левой кнопки мыши;
            //  - magnifier.rightButton - увеличение области, выделенной правой кнопкой мыши.
        }
    }
}
