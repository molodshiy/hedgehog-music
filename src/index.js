/**
 * Created by ivan.datsiv on 2/6/2017.
 */

import "babel-polyfill";
import {Http} from './components/http.js';
import {BandShort} from './components/bandShort.js';
import {BandsNames} from './components/BandsNames.js';

let bandsShort = [];
let listId = 'bands';

const URLbandsName = 'src/info/bands.json';

/*Load the names bands*/
Http.fetchData(URLbandsName)
    .then(responseData => {

        for (let e of responseData.bands) {
            const band = new BandShort(e.band_name, e.origin, e.rate);
            bandsShort.push(band);
        }

        let listName = new BandsNames(listId, bandsShort);
        listName.showBandName();
        listName.sort();

    })
    .catch(error => console.log(error));