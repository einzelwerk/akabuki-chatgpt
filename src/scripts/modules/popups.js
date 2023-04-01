import { classNames } from '../utils/classNames';

export function closePopupOnClick() {
  const classOverlay = classNames.popups.overlay.block;
  const classOverlayActive = classNames.popups.overlay.blockActive;
  const classPopup = classNames.popups.popup.block;
  const classPopupActive = classNames.popups.popup.blockActive;

  const overlay = document.querySelector(`.${classOverlay}`);

  overlay.addEventListener('click', (e) => {
    if (overlay !== e.target) return;
    
    overlay.classList.remove(classOverlayActive);
    document.body.style.overflow = null;

    document.querySelectorAll(`.${classPopup}`).forEach((popup) => {
      if (!popup.classList.contains(classPopupActive)) return;

      popup.classList.remove(classPopupActive);
    });
  });
}

function openPopup(popup) {
  const classOverlay = classNames.popups.overlay.block;
  const classOverlayActive = classNames.popups.overlay.blockActive;
  const classPopupActive = classNames.popups.popup.blockActive;

  const overlay = document.querySelector(`.${classOverlay}`);

  overlay.classList.add(classOverlayActive);
  popup.classList.add(classPopupActive);
  document.body.style.overflow = 'hidden';
}

export function initImagePopup() {
  const classZoomPopup = classNames.popups.zoom.block;
  const classZoomImg = classNames.popups.zoom.img;

  const zoomPopup = document.querySelector(`.${classZoomPopup}`);
  const zoomImg = zoomPopup.querySelector(`.${classZoomImg}`);

  document.querySelectorAll(`.${classNames.zoom}`).forEach((zoomBtn) => {
    zoomBtn.addEventListener('click', () => {
      openPopup(zoomPopup);
      zoomImg.src = zoomBtn.querySelector('img').src;
    });
  });
}
