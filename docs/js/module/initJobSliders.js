export function initJobSliders() {
  if (typeof Swiper === 'undefined') {
    console.warn('Swiper не загружен');
    return;
  }

  // Находим все контейнеры слайдеров на странице
  const sliderContainers = document.querySelectorAll('.box-open-jop__swiper');

  if (!sliderContainers.length) return;

  sliderContainers.forEach(container => {
    // Для каждого контейнера создаем свой экземпляр Swiper
    const swiperEl = container.querySelector('.open-jop-swiper');
    const prevBtn = container.querySelector('.swiper-btn-prev');
    const nextBtn = container.querySelector('.swiper-btn-next');

    // Если нет необходимых элементов - пропускаем
    if (!swiperEl || !prevBtn || !nextBtn) return;

    // Проверяем, не был ли уже инициализирован этот слайдер
    if (swiperEl.swiper) {
      swiperEl.swiper.destroy();
    }

    new Swiper(swiperEl, {
      // Конфигурация Swiper
      slidesPerView: 1,
      spaceBetween: 0,
      loop: false,
      observer: true,
      observeParents: true,
      observeSlideChildren: true,
      
      // Навигация
      navigation: {
        prevEl: nextBtn,
        nextEl: prevBtn,
      },
    });
  });
}

//window.initJobSliders = initJobSliders;