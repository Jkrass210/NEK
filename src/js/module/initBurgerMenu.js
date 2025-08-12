/*export function initBurgerMenu(targetId) {
  // Проверяем наличие необходимых элементов
  const burgerBtn = document.getElementById(targetId);
  const menuBlock = document.querySelector(`[for-open="${targetId}"]`);

  if (!burgerBtn || !menuBlock) {
    console.warn(`нет: ${targetId}`);
    return;
  }

  // Состояние меню
  let isMenuOpen = false;

  // Функция открытия/закрытия меню
  const toggleMenu = (state) => {
    isMenuOpen = state !== undefined ? state : !isMenuOpen;
    
    burgerBtn.classList.toggle('active', isMenuOpen);
    menuBlock.classList.toggle('active', isMenuOpen);
    
    // Блокируем/разблокируем скролл body
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    
    // Добавляем/удаляем обработчик Esc
    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscKey);
    } else {
      document.removeEventListener('keydown', handleEscKey);
    }
  };

  // Обработчик клика по бургеру
  const handleBurgerClick = (e) => {
    e.stopPropagation();
    toggleMenu();
  };

  // Обработчик клика вне меню
  const handleOutsideClick = (e) => {
    if (isMenuOpen && 
        !menuBlock.contains(e.target) && 
        !burgerBtn.contains(e.target)) {
      toggleMenu(false);
    }
  };

  // Обработчик клика по ссылкам в меню
  const handleMenuLinkClick = () => {
    toggleMenu(false);
  };

  // Обработчик клавиши Esc
  const handleEscKey = (e) => {
    if (e.key === 'Escape') {
      toggleMenu(false);
    }
  };

  // Инициализация
  const init = () => {
    // Добавляем обработчики
    burgerBtn.addEventListener('click', handleBurgerClick);
    document.addEventListener('click', handleOutsideClick);
    
    // Добавляем обработчики для всех ссылок в меню
    const menuLinks = menuBlock.querySelectorAll('a');
    menuLinks.forEach(link => {
      link.addEventListener('click', handleMenuLinkClick);
    });
  };

  // Очистка
  const destroy = () => {
    burgerBtn.removeEventListener('click', handleBurgerClick);
    document.removeEventListener('click', handleOutsideClick);
    document.removeEventListener('keydown', handleEscKey);
    
    const menuLinks = menuBlock.querySelectorAll('a');
    menuLinks.forEach(link => {
      link.removeEventListener('click', handleMenuLinkClick);
    });
    
    // Сбрасываем состояние
    toggleMenu(false);
  };

  init();

  // Возвращаем методы для управления
  return {
    toggleMenu,
    destroy
  };
}*/


export function initBurgerMenu(targetId) {
  // Проверяем наличие необходимых элементов
  const burgerBtn = document.getElementById(targetId);
  const menuBlock = document.querySelector(`[for-open="${targetId}"]`);

  if (!burgerBtn || !menuBlock) {
    console.warn(`нет: ${targetId}`);
    return;
  }

  // Состояние меню
  let isMenuOpen = false;

  // Функция открытия/закрытия меню
  const toggleMenu = (state) => {
    isMenuOpen = state !== undefined ? state : !isMenuOpen;
    
    burgerBtn.classList.toggle('active', isMenuOpen);
    menuBlock.classList.toggle('active', isMenuOpen);
    
    // Блокируем/разблокируем скролл body
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    
    // Добавляем/удаляем обработчик Esc
    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscKey);
    } else {
      document.removeEventListener('keydown', handleEscKey);
      // Новое условие: закрываем активные dropdown при закрытии меню
      const activeDropdowns = menuBlock.querySelectorAll('.drop-down-1__btn.active');
      activeDropdowns.forEach(dropdown => {
        dropdown.classList.remove('active');
      });
    }
  };

  // Остальные функции остаются без изменений
  const handleBurgerClick = (e) => {
    e.stopPropagation();
    toggleMenu();
  };

  const handleOutsideClick = (e) => {
    if (isMenuOpen && 
        !menuBlock.contains(e.target) && 
        !burgerBtn.contains(e.target)) {
      toggleMenu(false);
    }
  };

  const handleMenuLinkClick = () => {
    toggleMenu(false);
  };

  const handleEscKey = (e) => {
    if (e.key === 'Escape') {
      toggleMenu(false);
    }
  };

  const init = () => {
    burgerBtn.addEventListener('click', handleBurgerClick);
    document.addEventListener('click', handleOutsideClick);
    
    const menuLinks = menuBlock.querySelectorAll('a');
    menuLinks.forEach(link => {
      link.addEventListener('click', handleMenuLinkClick);
    });
  };

  const destroy = () => {
    burgerBtn.removeEventListener('click', handleBurgerClick);
    document.removeEventListener('click', handleOutsideClick);
    document.removeEventListener('keydown', handleEscKey);
    
    const menuLinks = menuBlock.querySelectorAll('a');
    menuLinks.forEach(link => {
      link.removeEventListener('click', handleMenuLinkClick);
    });
    
    // Сбрасываем состояние
    toggleMenu(false);
  };

  init();

  return {
    toggleMenu,
    destroy
  };
}