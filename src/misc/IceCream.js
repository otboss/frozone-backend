"use strict";
exports.__esModule = true;
exports.IceCream = void 0;
/**
 * Structures ice cream information
 * */
var IceCream = /** @class */ (function () {
    function IceCream(
    /**
     * BASE64 image
     * */
    name, cost, 
    /**
     * An array of ice cream toppings=
     * */
    toppings, image, 
    /**
     * A number from 0 to 5
     * */
    rating, id) {
        if (rating === void 0) { rating = 0; }
        this.name = name;
        this.cost = cost;
        this.toppings = toppings;
        this.image = image;
        this.rating = rating;
        this.id = id;
        this.rating = this.rating % 5;
    }
    return IceCream;
}());
exports.IceCream = IceCream;
