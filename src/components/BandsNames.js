/**
 * Created by Vania on 06.02.2017.
 */

import {Band} from './Band.js';
import {compareName, compareOrigin, compareRate} from './compareMethods.js';

class BandsNames {

    constructor(listId, bandsShort) {
        this._listId = listId;
        this._bandsShort = bandsShort;
        this.actName = null;
    }

    showBandName() {
        this.actName = this.findActiveBandName();
        let list = this.findList();

        for (let e of this._bandsShort) {

            let name = e.name;
            let li = document.createElement('li');
            li.innerText = name;

            if (this.actName == name) {
                li.classList.add("active_band");
            }

            li.addEventListener('click', () => {
                let band = new Band(name);
                /*Add to localStorage*/
                this.changeActiveClass(li);
                band.showBand();
            });

            list.appendChild(li);
        }
    }

    findActiveBandName() {
        let selector = `#${this._listId} .active_band`;

        this.activeEl = document.querySelector(selector);

        if (this.activeEl != null) {
            return this.activeEl.innerText;
        }
        return undefined;
    }


    findList() {
        let list = document.getElementById(this._listId);
        list.innerHTML = "";
        return list;
    }


    sort() {
        let select = document.getElementById("select");
        select.addEventListener('change', () => sortItem());

        let sortItem = () => {

            let sortValue = select.options[select.selectedIndex].value;

            switch (sortValue) {
                case 'name':
                    this._bandsShort.sort(compareName);
                    break;
                case 'year':
                    this._bandsShort.sort(compareOrigin);
                    break;
                case 'rate':
                    this._bandsShort.sort(compareRate);
                    break;
            }
            this.showBandName();
        }
    }

    changeActiveClass(li) {
        let list = document.getElementById(this._listId).children;

        for(let e of list){
            e.classList.remove("active_band");

            if(e == li){
                e.classList.add("active_band");
            }
        }
    }
}

export {BandsNames};
