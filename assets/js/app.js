/**
 * @license MIT
 * @author skies-codes <akashdebnathwd@gmail.com>
 * @copyright skies-codes 2024
 */

'use strict';

/**
 *
 * Variables starting with $ sign are all NodeElement (DOM Element).
 *
 */

/**
 *  Add eventlistener on multiple elements
 * @param {NodeList} $elements NodeList
 * @param {String} eventType String
 * @param {Function} callback Function
 */

const addEventOnElements = function ($elements, eventType, callback) {
    for (const $item of $elements) {
        $item.addEventListener(eventType, callback);
    }
};

/**
 *
 * Header scroll state
 *
 */

const $header = document.querySelector('[data-header]');

window.addEventListener('scroll', function () {
    $header.classList[this.window.scrollY > 50 ? 'add' : 'remove']('active');
});

/**
 *
 * Search toggle
 *
 */

const $searchToggler = document.querySelector('[data-search-toggler]');
const $searchField = document.querySelector('[data-search-field]');
let isExpanded = false;

$searchToggler.addEventListener('click', function () {
    $header.classList.toggle('search-active');
    isExpanded = isExpanded ? false : true;
    this.setAttribute('aria-expanded', isExpanded);
    $searchField.focus();
});
