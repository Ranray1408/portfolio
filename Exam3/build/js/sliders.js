$(document).ready(function () {
    $('.recent-works__slider').slick({
        slidesToShow: 1,
        dots: true,
        swipe: true,
        loop: true,
    });
    $('.our-team__slider').slick({
        slidesToShow: 3,
        responsive:[
            {
                breakpoint : 1200,
                    settings: {
                        slidesToShow: 2
                }
            },
            {
                breakpoint : 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

});