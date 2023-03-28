import { classNames } from '../utils/classNames';

export function toggleMenu() {
  const classMenu = classNames.burgerMenu.menu;
  const classMenuActive = classNames.burgerMenu.menuActive;
  const classOpenBtn = classNames.burgerMenu.open;
  const classCloseBtn = classNames.burgerMenu.close;

  const menu = document.querySelector(`.${classMenu}`);
  const openBtn = document.querySelector(`.${classOpenBtn}`);
  const closeBtn = menu.querySelector(`.${classCloseBtn}`);

  openBtn.addEventListener('click', () => {
    document.body.style.overflow = 'hidden';
    menu.classList.add(classMenuActive);
  });

  closeBtn.addEventListener('click', () => {
    document.body.style.overflow = 'auto';
    menu.classList.remove(classMenuActive);
  });
}