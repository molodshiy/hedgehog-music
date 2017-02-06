/**
 * Created by Vania on 06.02.2017.
 */
    import {showBand} from './showBand.js';

let showBandName = (bandsShort) => {

    let ul = document.getElementById('bands');
    ul.innerHTML = "";

    for (let e of bandsShort) {
        let li = document.createElement('li');
        li.innerText = e.name;
        li.addEventListener('click', event => {showBand(li)});

        ul.appendChild(li);
    }
}

export {showBandName};