import Glide from '@glidejs/glide';
import { classNames } from '../utils/classNames';

import '@glidejs/glide/dist/css/glide.core.min.css'; // eslint-disable-line import/no-unresolved
import '@glidejs/glide/dist/css/glide.theme.min.css'; // eslint-disable-line import/no-unresolved

export function initInnovationSlider() {
  const sliderClass = classNames.slider.innovation;

  return new Glide(`.${sliderClass}`, {
    type: 'slider',
    startAt: 0,
    perView: 1,
    gap: 20,
    animationDuration: 1000,
    bound: true,
    perTouch: 3,
  }).mount();
}
