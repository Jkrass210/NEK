
export function initSwitcherMobile(options = {}) {
  const config = {
    switcherClass: 'switcher',
    desktopContainerClass: 'header__right',
    mobileContainerClass: 'header__mobail-box',
    breakpoint: 1000,
    ...options
  };

  const {
    switcherClass,
    desktopContainerClass,
    mobileContainerClass,
    breakpoint
  } = config;

  let switchers = document.querySelectorAll(`.${switcherClass}`);
  const desktopContainers = document.querySelectorAll(`.${desktopContainerClass}`);
  const mobileContainers = document.querySelectorAll(`.${mobileContainerClass}`);

  if (!switchers.length || !desktopContainers.length || !mobileContainers.length) return;

  const isMobileView = () => window.innerWidth <= breakpoint;

  const moveSwitcher = () => {
    const mobileView = isMobileView();

    switchers.forEach((switcher, index) => {
      const desktopContainer = desktopContainers[index] || desktopContainers[0];
      const mobileContainer = mobileContainers[index] || mobileContainers[0];

      if (!desktopContainer || !mobileContainer) return;

      const currentParent = switcher.parentElement;

      if (mobileView && currentParent !== mobileContainer) {
        mobileContainer.prepend(switcher);
      } 
      else if (!mobileView && currentParent !== desktopContainer) {
        desktopContainer.insertBefore(switcher, desktopContainer.firstChild);
      }
    });
  };

  const handleResize = () => {
    moveSwitcher();
  };

  const init = () => {
    moveSwitcher();
    window.addEventListener('resize', handleResize);
  };

  const destroy = () => {
    window.removeEventListener('resize', handleResize);
    switchers.forEach((switcher, index) => {
      const desktopContainer = desktopContainers[index] || desktopContainers[0];
      if (desktopContainer && !desktopContainer.contains(switcher)) {
        desktopContainer.insertBefore(switcher, desktopContainer.firstChild);
      }
    });
  };

  init();

  const updateElements = () => {
    switchers = document.querySelectorAll(`.${switcherClass}`);
    moveSwitcher();
  };

  return {
    destroy,
    updateElements
  };
}