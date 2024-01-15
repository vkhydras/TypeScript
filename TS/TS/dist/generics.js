"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
// identityThree("Ff")
function identityFour(val) {
    return val;
}
// identityFour<Bootle>()
function getSearchProducts(products) {
    //db operations
    const myIndex = 3;
    return products[myIndex];
}
const getMoreSearchProducts = (products) => {
    //db oper
    const myIndex = 4;
    return products[myIndex];
};
function Func(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
class Sellable {
    constructor() {
        this.cart = [];
    }
    addTocART(product) {
        this.cart.push(product);
    }
}
