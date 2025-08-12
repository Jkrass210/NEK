

export function initPartnersSwipers() {
  const swiperEls = document.querySelectorAll('.partners-swiper');
  if (!swiperEls.length) return;

  const swipers = [];

  swiperEls.forEach((swiperEl) => {
    

    const swiper = new Swiper(swiperEl, {
      slidesPerView: 'auto',
      spaceBetween: 20,
      loop: false,
      navigation: {
        nextEl: swiperEl.querySelector('.partners-swiper .swiper-btn-prev'),
        prevEl: swiperEl.querySelector('.partners-swiper .swiper-btn-next'),
      },
      breakpoints: {
        768: { spaceBetween: 32 },
        1000: { spaceBetween: 44 },
      },
    });

    swipers.push(swiper);
  });

  return swipers;
}
