
export function initDetailedProductSwipers() {
  const swipers = document.querySelectorAll('.detailed-product-swiper');
  if (!swipers.length) return;

  swipers.forEach((swiperEl, index) => {
    const btnNextClass = `detailed-swiper-next-${index}`;
    const btnPrevClass = `detailed-swiper-prev-${index}`;
    
    const btnNext = swiperEl.querySelector('.swiper-btn-next');
    const btnPrev = swiperEl.querySelector('.swiper-btn-prev');
    
    if (btnNext) btnNext.classList.add(btnNextClass);
    if (btnPrev) btnPrev.classList.add(btnPrevClass);

    new Swiper(swiperEl, {
      slidesPerView: 1,
      spaceBetween: 0,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      loop: false,
      allowTouchMove: false,
      
      navigation: {
        nextEl: `.${btnPrevClass}`,
        prevEl: `.${btnNextClass}`,
      },
      
      breakpoints: {
        768: {
          allowTouchMove: false,
        }
      },
    });
  });
}