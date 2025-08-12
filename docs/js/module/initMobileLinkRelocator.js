export function initMobileLinkRelocator(options) {
  const {
    sourceContainerClass,
    linkClass,
    mobileWrapperClass,
    breakpoint = 550
  } = options;

  const sourceContainer = document.querySelector(`.${sourceContainerClass}`);
  const link = document.querySelector(`.${linkClass}`);
  const mobileWrapper = document.querySelector(`.${mobileWrapperClass}`);

  if (!sourceContainer || !link || !mobileWrapper) {
    console.warn('MobileLinkRelocator: Не найдены необходимые элементы');
    return;
  }

  const checkAndMoveLink = () => {
    const shouldMove = window.innerWidth <= breakpoint;
    const currentParent = link.parentElement;

    if (shouldMove && currentParent !== mobileWrapper) {
      mobileWrapper.appendChild(link);
    } else if (!shouldMove && currentParent !== sourceContainer) {
      sourceContainer.appendChild(link);
    }
  };

  checkAndMoveLink();

  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(checkAndMoveLink, 100);
  });

  return checkAndMoveLink;
}