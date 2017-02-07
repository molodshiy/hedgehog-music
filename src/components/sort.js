/**
 * Created by ivan.datsiv on 2/6/2017.
 */

import $ from 'jquery';
import {bands} from './../index.js';
import {showBandName} from './showBandName.js';
import {compareName, compareOrigin, compareRate} from './compareMethods.js';
import {player} from './player.js';


let sort = (bands) => {
    let bandsShort = bands;
    $("select")
        .change(function () {
            let sortValue = "";

            $("select option:selected").each(function () {
                sortValue += $(this).text() + "";
            });

            switch (sortValue) {
                case 'Name':
                    bandsShort.sort(compareName);
                    break;
                case 'Year':
                    bandsShort.sort(compareOrigin);
                    break;
                case 'Rate':
                    bandsShort.sort(compareRate);
                    break;
            }
            showBandName(bandsShort);
        })
        .trigger("change");
    return bandsShort;
};

export {sort};