/**
 * @license MIT
 * @author is-akash <akashdebnathwd@gmail.com>
 * @copyright is-akash 2024
 */

"use strict";

/**
 *
 * @param {*} number Number
 */

export const numberToKilo = function (number) {
    const numStr = String(number);

    if (numStr.length <= 3) {
        return numStr;
    } else if (numStr.length >= 4 && numStr.length <= 5) {
        return `${numStr.slice(0, -3)}.${numStr.slice(-3, -2)}k`;
    } else if (numStr.length === 6) {
        return `${numStr.slice(0, -3)}k`;
    } else {
        return `${numStr.slice(0, -6)}M`;
    }
};
