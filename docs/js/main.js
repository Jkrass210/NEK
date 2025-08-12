import { initDropdowns } from './module/initDropdowns.js';
import { initSwitcherMobile } from './module/initSwitcherMobile.js';
import { initBurgerMenu } from './module/initBurgerMenu.js';
import { initNewsSwiper } from './module/initNewsSwiper.js';
import { handleHeaderOnScrollHeader } from './module/handleHeaderOnScrollHeader.js';
import { counterAnim } from './module/counterAnim.js';
import { testWebP } from './module/testWebP.js';
import { initAboutSwiper } from './module/initAboutSwiper.js';
import { initMobileLinkRelocator } from './module/initMobileLinkRelocator.js';
import { initPartnersSwipers } from './module/initPartnersSwipers.js';
import { validateForm1 } from './module/validateForm1.js';
import { initGuideSwiper } from './module/initGuideSwiper.js';
import { initDetailedNewsSliders } from './module/initDetailedNewsSliders.js';
import { initDetailedProductSwipers } from './module/initDetailedProductSwipers.js';

testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
    console.log("выполнился webp")
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});

if (document.querySelectorAll('.drop-down-1').length) {
  initDropdowns('.drop-down-1');
}

if (document.querySelectorAll('.switcher').length) {
  initSwitcherMobile()
}

if (document.querySelector('#burger')) {
  initBurgerMenu('burger')
}

if (document.querySelectorAll('.news-swiper').length) {
  initNewsSwiper()
}

if (document.querySelector('.header__container')) {
  handleHeaderOnScrollHeader()
}

if (document.querySelectorAll('.counter').length) {
  counterAnim()
}

if (document.querySelector('.about-swiper') && window.innerWidth >= 550) {
  initAboutSwiper();
} else {
  const bottomElement = document.querySelector('.box-about .bottom');
  if (bottomElement) {
    bottomElement.remove();
  }
}

if (document.querySelector('.box-about__mobil-wrapper-link')) {
  initMobileLinkRelocator({
    sourceContainerClass: 'box-about__line-top',
    linkClass: 'box-about__link-all',
    mobileWrapperClass: 'box-about__mobil-wrapper-link',
    breakpoint: 550
  });
}

if (document.querySelectorAll('.partners-swiper').length) {
  initPartnersSwipers()
}

if (document.querySelectorAll('.form-1').length) {
  validateForm1()
}

if (document.querySelector('.guide-swiper')) {
  if (document.readyState === 'complete') {
    initGuideSwiper();
  } else {
    window.addEventListener('load', initGuideSwiper);
  }

  // Также можно вызвать при изменении размера окна с debounce
  var resizeTimeout;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function () {
      initGuideSwiper();
    }, 100);
  });
}

if (document.querySelectorAll('.box-news-detailed__swiper').length) {
  initDetailedNewsSliders()
}

if (document.querySelectorAll('.detailed-product-swiper').length) {
  initDetailedProductSwipers();
}
