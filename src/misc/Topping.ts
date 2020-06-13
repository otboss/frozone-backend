export enum Toppings {
    "Raisins",
    "Caramel",
    "Marshmallow",
    "Nuts",
    "Chocolate_Syrup",
    "Strawberry_Syrup",
}

export class Topping {
    constructor(
        public name: string,
        public id?: string,
    ) { }
    public static getToppings(): Array<string> {
        return Object.keys(Toppings).filter(function (key) {
            return isNaN(parseInt(key))
        });
    }
}