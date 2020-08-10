$(document).ready(function () {
    $('.news__slider').slick({
        dots: true,
        slidesToShow: 3,
        loop: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                }
            }
        ]
    });
    $('.header__slider').slick({
        dots: true,
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        loop: true
    });
});

