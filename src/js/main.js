//Slick slider

$(document).ready(function () {
    $('.team__slider').slick({
        arrows: false,
        dots: true,
		infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2
    });
});

$(".js-modal-btn").modalVideo();