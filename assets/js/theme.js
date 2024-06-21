/**
 * @license MIT
 * @author skies-codes <akashdebnathwd@gmail.com>
 * @copyright skies-codes 2024
 */

'use strict';

const $HTML = document.documentElement; /** NodeElement */
const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const theme = sessionStorage.getItem('theme');

if (theme) {
    $HTML.dataset.theme = theme;
} else {
    $HTML.dataset.theme = isDark ? 'dark' : 'light';
}

let isPressed = false;

const changeTheme = function () {
    isPressed = isPressed ? false : true;
    this.setAttribute('aria-pressed', isPressed);
    $HTML.setAttribute(
        'data-theme',
        $HTML.dataset.theme === 'light' ? 'dark' : 'light'
    );
    sessionStorage.setItem('theme', $HTML.dataset.theme);
};

window.addEventListener('load', function () {
    const $themeBtn = document.querySelector('[data-theme-btn]');

    $themeBtn.addEventListener('click', changeTheme);
});
