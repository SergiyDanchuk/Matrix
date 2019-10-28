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

    const btn = document.getElementById("menu-toggle");
    const lines = btn.querySelectorAll(".line");
    const cls = { open: "open", close: "close" };
    let btnClass = cls.open;

    btn.addEventListener("click", () => {
        if (btn.classList.contains(cls.open)) {
            btn.classList.remove(btnClass);
            btnClass = cls.close;
        } else if (btn.classList.contains(cls.close)) {
            btn.classList.remove(btnClass);
            btnClass = cls.open;
        }

        void btn.offsetWidth;
        btn.classList.add(btnClass);
    });

    $('.btn-toggle').on('click', function () {
        $('.header__menu>nav').slideToggle();
    });

    var mixer = mixitup('.works__inner-box');
});