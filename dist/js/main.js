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


    function validateForms(form) {
        $(form).validate({
            rules:{
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                },
                text: {
                    required: true,
                    minlength: 10
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Ведите минимум {0} символа!")
                },
                phone: "Пожалуйста, введите свой номер телефона",
                email: {
                    required: "Пожалуйста, введите свою почту",
                    email: "Адрес должен быть в формате example@domain.com"
                },
                text: {
                    required: "Пожалуйста, введите свое сообщение",
                    minlength: jQuery.validator.format("Ведите минимум {0} символов!")
                }
            }
        });
    }


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
});