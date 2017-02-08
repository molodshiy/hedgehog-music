/**
 * Created by ivan.datsiv on 2/6/2017.
 */

import "babel-polyfill";
import {Http} from './components/http.js';
import {Band} from './components/band.js';
import {sort} from './components/sort.js';
import {showBandName} from './components/showBandName.js';

let bandsShort = [];

const URLbandsName = 'src/info/bands.json';

/*Load the names bands*/
Http.fetchData(URLbandsName)
    .then(responseData => {

        for (let e of responseData.bands) {
            const band = new Band(e.band_name, e.origin, e.rate);
            bandsShort.push(band);
        }
        showBandName(bandsShort);
    })
    .catch(error => console.log(error));


/*Checking the sort select*/
bandsShort = sort(bandsShort);