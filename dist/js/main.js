//Slick slider

$(document).ready(function () {
    $('.team__slider').slick({
        dots: true,
        arrows: false,
        infinite: false,
        speed: 300,
        mobileFirst: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
            breakpoint: 1439,
            settings: "unslick"
            },
            {
            breakpoint: 767,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
                }
            }
        ]
    });
});

$(function() {
    $(".video").click(function () {
    var theModal = $(this).data("target"),
    videoSRC = $(this).attr("data-video"),
    videoSRCauto = videoSRC;
    $(theModal + ' iframe').attr('src', videoSRCauto);
    $(theModal + ' button.close').click(function () {
        $(theModal + ' iframe').attr('src', '');
    });
    });
});

$('#videoModal').on('hidden.bs.modal', function (e) {
    $('#videoModal').find('iframe').attr('src', '');
});