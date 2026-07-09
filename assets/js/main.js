import { initMenu } from './modules/menu.js';
import { initMockup } from './modules/mockup.js';
import { initFaq } from './modules/faq.js';
import { initReveal } from './modules/reveal.js';
import { initStats } from './modules/stats.js';
import { initForm } from './modules/form.js';
import { initMarquee } from './modules/marquee.js';

// Inicialização Centralizada após o carregamento da DOM
document.addEventListener('DOMContentLoaded', () => {
    initMenu();
    initMockup();
    initFaq();
    initReveal();
    initStats();
    initForm();
    initMarquee();
});