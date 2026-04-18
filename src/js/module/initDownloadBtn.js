export function initDownloadBtn(options) {
  const {
    parentSelector = '.btn-download',
    btnSelector = '.btn-download__btn',
    modalSelector = '.btn-download__popup-modal',
    closeBtnSelector = '.close',
    windowSelector = '.popup-modal__window',
    activeClass = 'active'
  } = options || {};

  const parents = document.querySelectorAll(parentSelector);
  
  if (!parents.length) return;

  parents.forEach(parent => {
    const btn = parent.querySelector(btnSelector);
    const modal = parent.querySelector(modalSelector);
    const closeBtn = modal.querySelector(closeBtnSelector);
    const modalWindow = modal.querySelector(windowSelector);

    if (!btn || !modal) return;

    // Обработчик клика по кнопке
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleModal(btn, modal);
    });

    // Обработчик клика по кнопке закрытия
    if (closeBtn) {
      closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        closeModal(btn, modal);
      });
    }

    // Обработчик клика вне модального окна
    modal.addEventListener('click', (e) => {
      if (!modalWindow.contains(e.target)) {
        closeModal(btn, modal);
      }
    });
  });

  // Обработчик нажатия ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      parents.forEach(parent => {
        const btn = parent.querySelector(btnSelector);
        const modal = parent.querySelector(modalSelector);
        if (btn.classList.contains(activeClass)) {
          closeModal(btn, modal);
        }
      });
    }
  });

  function toggleModal(btn, modal) {
    if (btn.classList.contains(activeClass)) {
      closeModal(btn, modal);
    } else {
      openModal(btn, modal);
    }
  }

  function openModal(btn, modal) {
    btn.classList.add(activeClass);
    modal.classList.add(activeClass);
    //document.body.style.overflow = 'hidden';
  }

  function closeModal(btn, modal) {
    btn.classList.remove(activeClass);
    modal.classList.remove(activeClass);
    //document.body.style.overflow = '';
  }
}