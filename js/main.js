$(document).ready(function () {

    "use strict"; // Start of use strict

    /*=======================================================
			PRELOADER
    ========================================================*/

  

    /*=======================================================
			FIXED NAVBAR
    ========================================================*/

    // $(function () {
    //     $(window).on("scroll", function () {
    //         var scrollTop = $(window).scrollTop();
    //         if (scrollTop > 34) {
    //             $(".navbar").addClass("navbar-light");
    //         } else {
    //             $(".navbar").removeClass("navbar-light");
    //         }
    //     });
    // });

    /*=======================================================
			PAGE SCROLL
    ========================================================*/

    $('body').scrollspy({
        target: '.navbar'
    })

    $(function () {
        $('a.page-scroll').bind('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    });

    /*=======================================================
			OWL TESTIMONIALS
    ========================================================*/

    $("#owl-testimonials").owlCarousel({

        navigation: false, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        transitionStyle: "fadeUp",
        singleItem: true

    });

    /*=======================================================
			VIDEO POP UP
    ========================================================*/

    jQuery(function () {
        jQuery("a.bla-1").YouTubePopUp();
        jQuery("a.bla-2").YouTubePopUp({
            autoplay: 0
        }); // Disable autoplay
    });

    /*=======================================================
			OWL SCREENSHOTS
    ========================================================*/

    $("#owl-screenshots").owlCarousel({

        autoPlay: 3000, //Set AutoPlay to 3 seconds

        items: 8,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3]

    });

    /*=======================================================
			OWL BRANDS
    ========================================================*/

    $("#owl-brands").owlCarousel({

        autoPlay: 3000, //Set AutoPlay to 3 seconds

        items: 3,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3]

    });

    new WOW().init();

});