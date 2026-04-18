export function initResponsiveContent(options) {
  const {
    mobileContainerSelector = '.content__line-top-mobile',
    desktopContainerSelector = '.content__line-top',
    breakpoint = 1000,
    resizeThrottleTime = 100
  } = options || {};

  // Проверяем существование контейнеров
  const mobileContainer = document.querySelector(mobileContainerSelector);
  const desktopContainer = document.querySelector(desktopContainerSelector);

  if (!mobileContainer || !desktopContainer) return;

  // Сохраняем оригинальный контент для восстановления
  const originalContent = {
    mobile: mobileContainer.innerHTML,
    desktop: desktopContainer.innerHTML
  };

  // Флаг для отслеживания текущего состояния
  let isMobileMode = false;
  let resizeTimeout;

  // Функция проверки и перемещения контента
  const checkViewport = () => {
    const shouldBeMobile = window.innerWidth <= breakpoint;

    // Если состояние не изменилось - ничего не делаем
    if (shouldBeMobile === isMobileMode) return;

    isMobileMode = shouldBeMobile;

    if (isMobileMode) {
      // Перемещаем контент в мобильный контейнер
      mobileContainer.innerHTML = desktopContainer.innerHTML;
      desktopContainer.innerHTML = '';
    } else {
      // Возвращаем контент в десктопный контейнер
      desktopContainer.innerHTML = mobileContainer.innerHTML;
      mobileContainer.innerHTML = '';
    }
  };

  // Функция с троттлингом для ресайза
  const handleResize = () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(checkViewport, resizeThrottleTime);
  };

  // Инициализация
  const init = () => {
    // Восстанавливаем оригинальный контент
    mobileContainer.innerHTML = originalContent.mobile;
    desktopContainer.innerHTML = originalContent.desktop;

    // Проверяем текущее состояние
    checkViewport();

    // Навешиваем обработчики
    window.addEventListener('resize', handleResize);
  };

  // Очистка
  const destroy = () => {
    window.removeEventListener('resize', handleResize);
    clearTimeout(resizeTimeout);
    
    // Восстанавливаем оригинальный контент
    mobileContainer.innerHTML = originalContent.mobile;
    desktopContainer.innerHTML = originalContent.desktop;
  };

  // Запускаем инициализацию
  init();

  // Возвращаем методы для управления
  return {
    update: checkViewport,
    destroy
  };
}