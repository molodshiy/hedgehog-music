/**
 * Created by ivan.datsiv on 2/6/2017.
 */

import $ from 'jquery';
import {Http} from './components/http.js';
import {Band} from './components/band.js';
import {sort} from './components/sort.js';

let bands = [];
let bandsShort = [];

const URL = 'src/info/bands.json';
Http.fetchData(URL)
    .then(responseData => {
        bands = responseData.bands;

        for (let e of responseData.bands) {
            const band = new Band(e.band_name, e.origin, e.rate);
            bandsShort.push(band);
        }

        writeBandName();
    })
    .catch(error => console.log(error));


export {bands};

let writeBandName = () => {

    for (let e of bandsShort) {
        let bandName = e.name;
        let $liBandName = $('<li>${bandName}</li>');
        $('.list_bands').append($liBandName);
    }
    bandsShort = sort(bandsShort);
}