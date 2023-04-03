import { classNames } from '../utils/classNames';

export function activateNavLink() {
  const classNavLink = classNames.nav.link;
  const classActiveNavLink = classNames.nav.activeLink;
  const navLinks = document.querySelectorAll(`.${classNavLink}`);

  function handleClick(e) {
    const currentActive = document.querySelector(`.${classActiveNavLink}`);
    if (currentActive) {
      currentActive.classList.remove(classActiveNavLink);
    }

    e.currentTarget.classList.add(classActiveNavLink);
  }

  navLinks.forEach((link) => {
    link.addEventListener('click', handleClick);
  });

  navLinks[0].click();
}
