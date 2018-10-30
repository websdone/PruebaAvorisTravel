global.jQuery = require('jquery');
// importando Slick carousel para el slider
import 'slick-carousel';

jQuery('.slick-slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: true
});

jQuery('.slick-ofertas').slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: false,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
