import { updateHeaderOnScroll } from './vendor/headerBehavior';
import { toggleMenu } from './modules/menu';
import { initInnovationSlider } from './modules/sliders';

import 'normalize.css';

updateHeaderOnScroll(); // Header
toggleMenu(); // Menu

// Sliders
initInnovationSlider();
