/**
 * Created by Vania on 06.02.2017.
 */

let compareName = (a, b) => {
    return a.name.localeCompare(b.name);
}

let compareOrigin = (a, b) => {
    return a.origin - b.origin;
}

let compareRate = (a, b) => {
    return b.rate - a.rate;
}

export {compareName, compareOrigin, compareRate};