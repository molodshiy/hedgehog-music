/**
 * Created by Vania on 07.02.2017.
 */

import $ from 'jquery';
import {showBandAlbums} from './showBandAlbums.js';
import {Http} from './http.js';

let band = {};

function changeClass(el) {
    let $currentElementBand = $(el);

    $currentElementBand.addClass("active_band")
        .siblings().removeClass("active_band");
}

function showBandInfo() {

    let imgBand = "src/img/" + band.band_photo;
    let classStarRate = "rate" + band.rate;

    $('.img_band').attr("src", imgBand);
    $('.band_name').html(band.band_name);
    $('.rate').removeClass().addClass("rate " + classStarRate);
    $('.about_band_info').html(band.about_band);
    $('.members').html(band.members.join(", "));
    $('.origin').html(band.origin);
    $('.country').html(band.country);
}

function showBand(name) {

    let URLbands = 'src/info/' + name.toLowerCase() + '.json';

    Http.fetchData(URLbands)
        .then(responseData => {
            band = responseData;
            showBandInfo();
            showBandAlbums();
        })
        .catch(error => console.log(error));
}
export {showBand, changeClass, band};