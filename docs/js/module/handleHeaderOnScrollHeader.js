
export function handleHeaderOnScrollHeader() {
  const headerContainer = document.querySelector('.header__container');
  if (!headerContainer) return;

  let lastScrollTop = 0;

  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop && currentScroll > 10) {
      headerContainer.classList.add('null');
    } else if (currentScroll === 0) {
      headerContainer.classList.remove('null');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });
}
