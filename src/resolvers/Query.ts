import { prisma, IceCreamNullablePromise, Prisma } from '../generated/prisma-client';
import { IceCreamCreateInput } from '../generated/prisma-client/index';
import { IceCream } from '../misc/IceCream';


const p = prisma
export const Query = {
    // iceCreamById(root, { iceCreamId }, { prisma }): IceCreamNullablePromise {
    //     return p.iceCream(iceCreamId);
    // }


    async iceCreamById(parent, args, ctx, info) {
        const pris: Prisma = ctx.prisma;
        return pris.iceCream({
            id: args.iceCreamId
        })
        // return pris.createIceCream({
        //     name: "",
        //     cost: 120,
        //     toppings: {
        //         create: []
        //     },
        //     rating: 3,
        //     image: ""
        // })
    },

    async iceCream(parent, args, ctx, info) {
        const pris: Prisma = ctx.prisma;
        return pris.iceCreams();
    }
    // hi(): string {
    //     return "";
    // }
}