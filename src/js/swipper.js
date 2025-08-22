import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

document.addEventListener('DOMContentLoaded', () => {
  const reviewsOneEl = document.querySelector('.game-swiper-one');
  const reviewsTwoEl = document.querySelector('.game-swiper-two');

  const baseConfig = {
    modules: [Autoplay],
    loop: true,
    spaceBetween: 20,
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 3 },
      1200: { slidesPerView: 4 },
    },
  };

  if (reviewsOneEl) {
    new Swiper(reviewsOneEl, {
      ...baseConfig,
      speed: 6000,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
    });
  }

  if (reviewsTwoEl) {
    new Swiper(reviewsTwoEl, {
      ...baseConfig,
      speed: 7000,
      autoplay: {
        delay: 1,
        disableOnInteraction: false,
        reverseDirection: true,
      },
    });
  }
});