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
}