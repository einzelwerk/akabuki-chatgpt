import 'smoothscroll-for-websites';
import HandyCollapse from 'handy-collapse';
import { updateHeaderOnScroll } from './vendor/headerBehavior';
import { Select } from './vendor/select/Select';
import { toggleMenu } from './modules/menu';
import { initInnovationSlider, initPresentationSlider, initResonsSlider, initReviewsSlider } from './modules/sliders';
import { closePopupOnClick, initImagePopup } from './modules/popups';
import { initTabs } from './modules/tabs';
import { toggleFixedOnScroll } from './modules/scrollToggle';
import { initParallaxEffect } from './modules/gsap';
import { activateNavLink } from './modules/navigation';

import 'normalize.css';

updateHeaderOnScroll(); // Header
toggleMenu(); // Menu

// Navigation
activateNavLink();

// Select
new Select('.select'); // eslint-disable-line

// Accordion
new HandyCollapse(); // eslint-disable-line

// Sliders
initInnovationSlider();
initPresentationSlider();
initResonsSlider();
initReviewsSlider();

// Modal Image
closePopupOnClick();
initImagePopup();

// Tabs
initTabs();

// Scroll Toggle
toggleFixedOnScroll();

// Parallax Effect
initParallaxEffect();