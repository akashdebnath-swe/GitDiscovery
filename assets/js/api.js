/**
 * @license MIT
 * @author is-akash <akashdebnathwd@gmail.com>
 * @copyright is-akash 2024
 */

"use strict";

// import config from "../../config.js";

let credentials;
// if (config) {
//     const clientId = config.clientId;
//     const clientSecret = config.clientSecret;
//     credentials = btoa(`${clientId}:${clientSecret}`);
// }

/**
 *
 * @param {*} url API URL [required]
 * @param {*} successCallback Success callback [required]
 * @param {*} errorCallback Error callback [optional]
 */

export async function fetchData(url, successCallback, errorCallback) {
    let response;
    if (credentials) {
        response = await fetch(url, {
            method: "GET",
            headers: {
                Authorization: `Basic ${credentials}`,
            },
        });
    } else {
        response = await fetch(url);
    }
    if (response.ok) {
        const data = await response.json();
        successCallback(data);
    } else {
        const error = await response.json();
        console.log(error);
        errorCallback && errorCallback(error);
    }
}
