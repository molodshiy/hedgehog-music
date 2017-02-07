/**
 * Created by ivan.datsiv on 2/6/2017.
 */

import {Http} from './components/http.js';
import {Band} from './components/band.js';
import {sort} from './components/sort.js';
import {showBandName} from './components/showBandName.js';

let bands = [];
let bandsShort = [];

const URL = 'src/info/bands.json';
Http.fetchData(URL)
    .then(responseData => {
        bands = responseData.bands;

        for (let e of bands) {
            const band = new Band(e.band_name, e.origin, e.rate);
            bandsShort.push(band);
        }
        bandsShort = sort(bandsShort);
    })
    .catch(error => console.log(error));

export {bands};