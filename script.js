document.getElementById('hamburger').addEventListener('click', function () {
    document.getElementById('navMenu').classList.toggle('active');
});

ymaps.ready(start);

function start() {
    var myLat = 54.889785;
    var myLng = 38.088927;
    var myMap = new ymaps.Map('map', {
        center: [myLat, myLng],
        zoom: 17
    }, {
        searchControlProvider: 'yandex#search'
    });
    var myPlacemark = new ymaps.Placemark([myLat, myLng], {
        balloonContent: '<strong>Структурное подразделение"Металлург" МБУ РМ "МЦ"</strong>'
    }, {
        preset: 'islands#redIcon'
    });
    myMap.geoObjects.add(myPlacemark);
}