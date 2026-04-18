// tabs-info.js
export function initTabsInfo(options) {
  const {
    parentSelector = '.content__box-info',
    btnSelector = '.box-detailed-product__btn',
    contentSelector = '.content__info-point',
    activeClass = 'active',
    scrollBehavior = 'smooth',
    scrollOffset = 0.3 // 30% от высоты окна
  } = options || {};

  const parents = document.querySelectorAll(parentSelector);
  
  if (!parents.length) return;

  parents.forEach(parent => {
    const btns = parent.querySelectorAll(btnSelector);
    const contents = parent.querySelectorAll(contentSelector);

    if (btns.length !== contents.length) {
      console.warn('Количество кнопок и контент-блоков не совпадает', parent);
      return;
    }

    // Инициализация - активируем первый элемент, если нет активных
    const hasActive = Array.from(btns).some(btn => btn.classList.contains(activeClass));
    if (!hasActive) {
      btns[0].classList.add(activeClass);
      contents[0].classList.add(activeClass);
    }

    // Функция для скролла с отступом
    const scrollToWithOffset = (element) => {
      const elementRect = element.getBoundingClientRect();
      const absoluteElementTop = elementRect.top + window.pageYOffset;
      const offset = window.innerHeight * scrollOffset;
      window.scrollTo({
        top: absoluteElementTop - offset,
        behavior: scrollBehavior
      });
    };

    // Обработчики кликов на кнопки
    btns.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        if (btn.classList.contains(activeClass)) return;

        btns.forEach(b => b.classList.remove(activeClass));
        contents.forEach(c => c.classList.remove(activeClass));

        btn.classList.add(activeClass);
        contents[index].classList.add(activeClass);

        // Плавный скролл с отступом
        scrollToWithOffset(contents[index]);
      });
    });
  });
}