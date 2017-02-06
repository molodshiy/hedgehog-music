/**
 * Created by ivan.datsiv on 2/6/2017.
 */

class Band {
    constructor(name, origin, rate) {
        this._name = name;
        this._origin = origin;
        this._rate = rate;
    }

    get name () {
        return this._name;
    }

    get origin () {
        return this._origin;
    }

    get rate () {
        return this._rate;
    }
}

export {Band};