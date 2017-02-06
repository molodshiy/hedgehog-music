/**
 * Created by Vania on 07.02.2017.
 */

import $ from 'jquery';
import {showBandAlbums} from './showBandAlbums.js';
import {bands} from './../index.js';

let showBand = (that) => {

    let bandId = -1;
    let $currentElementBand = $(that);

    $currentElementBand.addClass("active_band")
        .siblings().removeClass("active_band");

    let $currentElementBandName = $currentElementBand.text();

    bands.forEach(function (s) {
        if (s.band_name === $currentElementBandName) {
            bandId = s.id;
            var imgBand = "src/img/" + s.band_photo;
            var classStarRate = "rate" + s.rate;
            $('.img_band').attr("src", imgBand);
            $('.band_name').html(s.band_name);
            $('.rate').removeClass().addClass("rate " + classStarRate);
            $('.about_band_info').html(s.about_band);
            $('.members').html(s.members.join(", "));
            $('.origin').html(s.origin);
            $('.country').html(s.country);
        }
    });

    showBandAlbums(bandId);
}

export {showBand};