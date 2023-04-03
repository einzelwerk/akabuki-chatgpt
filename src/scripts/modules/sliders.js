import Swiper, { Autoplay, Navigation, Scrollbar } from 'swiper';
import { classNames } from '../utils/classNames';
import { breakpointsMin } from '../utils/breakpoints';

import 'swiper/css/bundle'; // eslint-disable-line import/no-unresolved

export function initInnovationSlider() {
  const sliderClass = classNames.slider.innovation.slider;
  const sliderPrevClass = classNames.slider.innovation.btnPrev;
  const sliderNextClass = classNames.slider.innovation.btnNext;

  return new Swiper(`.${sliderClass}`, {
    modules: [Navigation],
    navigation: {
      prevEl: `.${sliderPrevClass}`,
      nextEl: `.${sliderNextClass}`,
    },
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 1000,
    keyboard: true,
    rewind: true,
  });
}

export function initPresentationSlider() {
  const sliderClass = classNames.slider.presentation;

  return new Swiper(`.${sliderClass}`, {
    modules: [Autoplay],
    autoplay: {
      delay: 5000,
    },
    slidesPerView: 1.1,
    initialSlide: 1,
    loop: true,
    spaceBetween: 20,
    speed: 1000,
    centeredSlides: true,
    keyboard: true,

    breakpoints: {
      [breakpointsMin.lg]: {
        slidesPerView: 1.5,
      },
      [breakpointsMin.xl]: {
        slidesPerView: 2,
      },
    },
  });
}

export function initResonsSlider() {
  const sliderClass = classNames.slider.resons.slider;
  const sliderPrevClass = classNames.slider.resons.btnPrev;
  const sliderNextClass = classNames.slider.resons.btnNext;
  const sliderScrollbarClass = classNames.slider.resons.scrollbar;
  const sliderScrollbarDragClass = classNames.slider.resons.scrollbarDrag;

  return new Swiper(`.${sliderClass}`, {
    modules: [Navigation, Scrollbar],
    navigation: {
      prevEl: `.${sliderPrevClass}`,
      nextEl: `.${sliderNextClass}`,
    },
    scrollbar: {
      el: `.${sliderScrollbarClass}`,
      dragClass: sliderScrollbarDragClass,
    },
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 1000,
    keyboard: true,
    rewind: true,
    breakpoints: {
      [breakpointsMin.md]: {
        slidesPerView: 2,
      },
    },
  });
}

export function initReviewsSlider() {
  const classSwiper = classNames.slider.testimonials.slider;

  return new Swiper(`.${classSwiper}`, {
    modules: [Navigation],
    navigation: {
      prevEl: `.${classNames.slider.testimonials.btnPrev}`,
      nextEl: `.${classNames.slider.testimonials.btnNext}`,
    },
    slidesPerView: 1,
    spaceBetween: 40,
    speed: 1000,
    rewind: true,
    breakpoints: {
      [breakpointsMin.md]: {
        slidesPerView: 1.072,
      },
      [breakpointsMin.xl]: {
        slidesPerView: 2.11,
      },
    },
  });
}