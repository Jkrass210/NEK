
export function initDetailedNewsSliders() {
  const sliders = document.querySelectorAll('.box-news-detailed__swiper');

  if (!sliders.length || typeof Swiper === 'undefined') return;

  sliders.forEach((sliderEl) => {
    const btnNext = sliderEl.querySelector('.swiper-btn-next');
    const btnPrev = sliderEl.querySelector('.swiper-btn-prev');

    new Swiper(sliderEl, {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: false,
      navigation: {
        nextEl: btnPrev,
        prevEl: btnNext,
      },
    });
  });
}