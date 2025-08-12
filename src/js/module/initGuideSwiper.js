export function initGuideSwiper() {
  var guideSwiper = null;

  function breakpointChecker() {
    var breakpoint = window.matchMedia('(max-width: 890px)');

    // Если медиа-запрос совпадает и слайдер еще не инициализирован
    if (breakpoint.matches) {
      if (!guideSwiper) {
        guideSwiper = new Swiper('.guide-swiper', {
          slidesPerView: 1.1,
          spaceBetween: 12,
          freeMode: true,
          watchOverflow: true,
          grabCursor: true,
          breakpoints: {
            550: { slidesPerView: 2},
            780: { slidesPerView: 2.5},
          },
        });
      }
    }
    // Если медиа-запрос не совпадает и слайдер инициализирован
    else if (guideSwiper) {
      guideSwiper.destroy(true, true);
      guideSwiper = null;
    }
  }

  // Слушаем изменения медиа-запроса (для старых браузеров)
  if (window.matchMedia) {
    var breakpoint = window.matchMedia('(max-width: 890px)');
    // Современные браузеры
    if (breakpoint.addEventListener) {
      breakpoint.addEventListener('change', breakpointChecker);
    }
    // Старые браузеры
    else if (breakpoint.addListener) {
      breakpoint.addListener(breakpointChecker);
    }
  }

  // Вызываем при загрузке
  breakpointChecker();
}
