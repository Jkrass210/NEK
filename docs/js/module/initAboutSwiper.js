export const initAboutSwiper = () => {
  document.addEventListener('DOMContentLoaded', function () {
    // Сначала инициализируем слайдер превью
    const aboutSwiperBottom = new Swiper('.about-swiper-bottom', {
      loop: false,
      spaceBetween: 12,
      slidesPerView: 4,
      watchSlidesProgress: true,
      breakpoints: {
        1000: { slidesPerView: 6 },
        1100: { slidesPerView: 4 },
      },
    });

    // Затем основной слайдер, который использует превью
    const aboutSwiperTop = new Swiper('.about-swiper-top', {
      loop: false,
      slidesPerView: 1,
      spaceBetween: 12,
      navigation: {
        nextEl: '.about-swiper .swiper-btn-prev',
        prevEl: '.about-swiper .swiper-btn-next',
      },
      thumbs: {
        swiper: aboutSwiperBottom
      }
    });
  });
}  