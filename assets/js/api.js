/**
 * @license MIT
 * @author skies-codes <akashdebnathwd@gmail.com>
 * @copyright skies-codes 2024
 */

"use strict";

/**
 *
 * @param {*} url API URL [required]
 * @param {*} successCallback Success callback [required]
 * @param {*} errorCallback Error callback [optional]
 */

export async function fetchData(url, successCallback, errorCallback) {
    const response = await fetch(url);

    if (response.ok) {
        const data = await response.json();
        successCallback(data);
    } else {
        const error = await response.json();
        errorCallback && errorCallback(error);
    }
}
