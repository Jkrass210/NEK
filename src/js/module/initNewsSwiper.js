export const initNewsSwiper = (selector = '.news-swiper', customOptions = {}) => {
  const swiperContainers = document.querySelectorAll(selector);

  if (!swiperContainers.length) return;

  swiperContainers.forEach((container) => {
    const defaultOptions = {
      //slidesPerView: 4,
      spaceBetween: 0,
      loop: false,
      navigation: {
        nextEl: container.querySelector('.news-swiper .swiper-btn-prev'),
        prevEl: container.querySelector('.news-swiper .swiper-btn-next'),
      },
      breakpoints: {
        320: { slidesPerView: 1.2, spaceBetween: 16 },
        551: { slidesPerView: 2, spaceBetween: 0 },
        768: { slidesPerView: 2.9 },
        1100: { slidesPerView: 4 },
      },
    };

    const options = { ...defaultOptions, ...customOptions };
    new Swiper(container, options);
  });
};