import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { classNames } from '../utils/classNames';

export function initParallaxEffect() {
  gsap.registerPlugin(ScrollTrigger);

  const parallaxItemsCol = [
    {
      className: classNames.parallax[0],
      duration: 0.7,
      toggleActions: 'top 90%',
    },
    {
      className: classNames.parallax[1],
      duration: 1,
      toggleActions: 'top 90%',
    },
    {
      className: classNames.parallax[2],
      duration: 0.5,
      toggleActions: 'top center',
    },
    {
      className: classNames.parallax[3],
      duration: 0.8,
      toggleActions: 'top 90%',
    },
    {
      className: classNames.parallax[4],
      duration: 0.6,
      toggleActions: 'top 90%',
    },
  ];

  parallaxItemsCol.forEach(({ className, toggleActions }) => {
    gsap.to(`.${className}`, {
      scrollTrigger: {
        trigger: `.${className}`,
        start: toggleActions,
        toggleActions: 'restart pause reverse pause',
        scrub: true,
      },
      y: -120,
      duration: 0.5,
    });
  });
}
