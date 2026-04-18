export const initResponsiveSwiper = ({
  containerClass = 'open-jop-about-swiper',
  breakpoint = 1100
} = {}) => {
  // Проверяем, что Swiper подключен
  if (typeof Swiper === 'undefined') {
    console.error('Swiper не загрузился!');
    return;
  }

  // Изолируем область видимости
  (() => {
    // Хранилище для экземпляров Swiper
    const swiperInstances = new WeakMap();
    
    // Функция инициализации/уничтожения Swiper
    const handleSwiper = (container) => {
      const shouldInit = window.innerWidth <= breakpoint;
      const hasInstance = swiperInstances.has(container);
      
      if (shouldInit && !hasInstance) {
        const swiper = new Swiper(container, {
          slidesPerView: 1.1,
          spaceBetween: 12,
          breakpoints: {
            550: {
              slidesPerView: 2,
              spaceBetween: 12
            },
            750: {
              slidesPerView: 3,
              spaceBetween: 20
            }
          }
        });
        swiperInstances.set(container, swiper);
      } else if (!shouldInit && hasInstance) {
        swiperInstances.get(container).destroy();
        swiperInstances.delete(container);
      }
    };

    // Функция для обработки всех контейнеров на странице
    const processAllContainers = () => {
      document.querySelectorAll(`.${containerClass}`).forEach(container => {
        handleSwiper(container);
      });
    };

    // Инициализация при загрузке
    document.addEventListener('DOMContentLoaded', processAllContainers);
    
    // Обработка ресайза с debounce для оптимизации
    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(processAllContainers, 100);
    });
  })();
};