import { IceCream } from "./IceCream";

export abstract class Query {
    public static getIceCreams(): Array<IceCream> {
        return [];
    }
}