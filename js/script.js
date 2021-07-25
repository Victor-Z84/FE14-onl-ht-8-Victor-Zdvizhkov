$(document).ready(function () {
    $(".header__burger").click(function(event) {
        $(".header__burger, .header__menu").toggleClass("active");
        $("body").toggleClass("lock");
    });

    $(".header__menu").on("click","a", function(event) {
        event.preventDefault();
        var id = $(this).attr("href"),
            top = $(id).offset().top;
        $("body,html").animate({scrollTop: top}, 800);
    })


    $(".clients-slider").slick({
        arrows: true,
        dots: true,
        adaptiveHeight: true,
        speed: 1000,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1500,
        draggable: false,
        swipe: true,
        waitForAnimate: false,
    });
  });