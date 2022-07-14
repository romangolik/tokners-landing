import './styles.scss';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    once: true
});

const SIDEBAR = document.getElementById('sidebar');
const BURGER_BUTTONS = document.querySelectorAll('.burger');

BURGER_BUTTONS.forEach(burger => {
    burger.addEventListener('click', () => {
        if (!burger.classList.contains('header__burger_active')) {
            SIDEBAR.classList.add('sidebar_show');
            BURGER_BUTTONS.forEach(item => item.classList.add('header__burger_active'));

            const overlay = document.createElement('div');
            overlay.classList.add('overlay');
            document.querySelector('.header').appendChild(overlay);

            overlay.addEventListener('click', () => {
                BURGER_BUTTONS.forEach(item => item.classList.remove('header__burger_active'));
                SIDEBAR.classList.remove('sidebar_show');
                overlay.remove();
            });
        } else {
            document.querySelector('.overlay').dispatchEvent(new Event('click'));
        }
    })
});

window.addEventListener('resize', () => {
    const overlay = document.querySelector('.overlay');
    if (window.innerWidth >= 1023 && overlay) {
        overlay.dispatchEvent(new Event('click'));
    }
});
