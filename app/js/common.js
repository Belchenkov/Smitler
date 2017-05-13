$(function() {

	$("#my-menu").mmenu({
        extensions: [ 'widescreen', 'theme-black', 'effect-menu-slide', 'pagedim-black' ],
        navbar: {
            title: '<img src="img/logo-1.svg" alt="Салон красоты Smitter">'
        },
        offCanvas: {
            position: 'right'
        }
    });

	// menu hamburger
    var api = $('#my-menu').data('mmenu');
    api.bind('opened', function () {
        $('.hamburger').addClass('is-active');
    }).bind('closed', function () {
        $('.hamburger').removeClass('is-active');
    });

    // owl-carousel
    $('.carousel-services').owlCarousel({
        loop: true,
        nav: true,
        smartSpeed: 700,
        navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            800: {
                items: 2
            },
            1100: {
                items: 3
            }
        }
    });
});
