import { classNames } from '../utils/classNames';

export function initTabs() {
  const classBtn = classNames.tabs.visuals.btn;
  const classBtnActive = classNames.tabs.visuals.btnActive;
  const classBtnMobile = classNames.tabs.visuals.btnMobile;
  const classTab = classNames.tabs.visuals.tab;
  const classTabActive = classNames.tabs.visuals.tabActive;

  function tabHandler(e) {
    document.querySelectorAll(`.${classBtnActive}`).forEach((oldBtn) => {
      oldBtn.classList.remove(classBtnActive);
    });
    document.querySelectorAll(`.${classTabActive}`).forEach((oldTab) => {
      oldTab.classList.remove(classTabActive);
    });

    const currentTabIdx = e.currentTarget.dataset.tab;
    const currentBtn = document.querySelector(`.${classBtn}[data-tab="${currentTabIdx}"]`);
    const currentTab = document.querySelector(`.${classTab}[data-tab="${currentTabIdx}"]`);

    currentBtn.classList.add(classBtnActive);
    currentTab.classList.add(classTabActive);
  }

  document.querySelectorAll(`.${classBtnMobile}`).forEach((btnMobile) => {
    btnMobile.addEventListener('click', tabHandler);
  });
  document.querySelectorAll(`.${classBtn}`).forEach((btn, idx) => {
    btn.addEventListener('click', tabHandler);
    
    if (idx === 0) {
      btn.click();
    }
  });
}
