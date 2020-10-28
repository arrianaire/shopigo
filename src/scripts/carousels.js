import Swiper from 'swiper';

const headerSlider = new Swiper('.header-slider', {
    direction: 'horizontal',
    slidesPerView: 1,
    noSwiping: false,
    autoplay: {
        delay: 3000
    },
});

const promoSlider = new Swiper('.promo-slider', {
    direction: 'horizontal',
    slidesPerView: 1,
    noSwiping: false,
    autoplay: {
        delay: 3000
    },
});