$(function () {

    $('.header__slider').slick({
        dots: true,
        arrows: false,
        speed: 1000
    });

    $('a[href^="#"]').click(function () {
        var el = $(this).attr('href');
        $('body').animate({
            scrollTop: $(el).offset().top
        }, 2000);
        return false;
    });


    var mixer = mixitup('.works__inner-box');
});