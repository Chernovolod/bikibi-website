$('a[href*="#"]')

    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {

        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

            if (target.length) {
                event.preventDefault();

                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1200, function() {

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