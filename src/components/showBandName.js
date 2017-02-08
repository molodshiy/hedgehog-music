/**
 * Created by Vania on 06.02.2017.
 */

import {showBand, changeClass} from './showBand.js';

export function showBandName(bandsShort) {

    let ul = document.getElementById('bands');

    let activeEl = document.getElementsByClassName('active_band');
    let actText = undefined;

    if (activeEl.length > 0) {
        actText = activeEl.item(0).innerText;
    }
    ul.innerHTML = "";

    for (let e of bandsShort) {

        let name = e.name;
        let li = document.createElement('li');
        li.innerText = name;

        if (actText == name) {
            li.classList.add("active_band");
        }

        li.addEventListener('click', () => {
            showBand(name);
            changeClass(li)
        });

        ul.appendChild(li);
    }
}
