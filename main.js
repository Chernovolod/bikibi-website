$('a[href*="#"]')

    .not('[href="#"]')
    .not('[href="#0"]')
    .click (function(event) {

        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

            if (target.length) {
                event.preventDefault();

                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 800,  function() {

                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        return false;
                    } else {
                        $target.attr('tabindex','-1');
                        $target.focus();
                    };
                });
            }
        }
    });



$(window).scroll(function () {
    parallax();

});

function parallax() {
    var wScroll = $(window).scrollTop();
    $('.first-new-arrivals-container').css('top', 750 - (wScroll * 0.28) + 'px');
    $('.second-new-arrivals-container').css('top', 550 - (wScroll * 0.45) + 'px');
    $('.third-new-arrivals-container').css('top', 800 - (wScroll * 0.30) + 'px');
}


$(window).on('scroll', function () {

    if($(window).scrollTop()) {
        $('nav').addClass('nav-scroll');


    } else {
        $('nav').removeClass('nav-scroll');

    }

});

// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчнию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [53.904015, 27.552404],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 16
    });
    var myPlacemark = new ymaps.Placemark([53.904015, 27.552404], {
        // Хинт показывается при наведении мышкой на иконку метки.
        hintContent: 'Магазин Lux Bikini',
        // Балун откроется при клике по метке.
        balloonContent: 'ТЦ Немига, 3'
    });

// После того как метка была создана, ее
// можно добавить на карту.
    myMap.geoObjects.add(myPlacemark);
}
