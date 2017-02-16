/**
 * Created by Vania on 07.02.2017.
 */

import $ from 'jquery';
import {showBandAlbums} from './showBandAlbums.js';
import {Http} from './http.js';


class Band {

    constructor(name) {
        this._name = name;
        this.band = {};
    }

    showBand() {
        let URLbands = 'src/info/' + this._name.toLowerCase() + '.json';

        Http.fetchData(URLbands)
            .then(responseData => {
                this.band = responseData;
                this.showBandInfo();
                showBandAlbums(this.band);
            })
            .catch(error => console.log(error));
    }

    showBandInfo() {
        let imgBand = "src/img/" + this.band.band_photo;
        let classStarRate = "rate" + this.band.rate;

        $('.js_img_band').attr("src", imgBand);
        $('.js_band_name').html(this.band.band_name);
        $('.js_rate').removeClass().addClass("rate " + classStarRate);
        $('.js_about_band_info').html(this.band.about_band);
        $('.js_members').html(this.band.members.join(", "));
        $('.js_origin').html(this.band.origin);
        $('.js_country').html(this.band.country);
    }
}

export {Band};