import { prisma, IceCreamNullablePromise, Prisma } from '../generated/prisma-client';
import { IceCreamCreateInput } from '../generated/prisma-client/index';
import { IceCream } from '../misc/IceCream';


const p = prisma
export const Query = {
    async iceCreamById(parent, args, ctx, info) {
        const pris: Prisma = ctx.prisma;
        return pris.iceCream({
            id: args.iceCreamId
        })
    },

    async iceCreams(parent, args, ctx, info) {
        const pris: Prisma = ctx.prisma;
        return pris.iceCreams();
    },

    async toppings(parent, args, ctx, info) {
        return prisma.toppingses();
    },

    async users(parent, args, ctx, info) {
        return prisma.users();
    },

    async cartItems(parent, args, ctx, info) {
        return prisma.cartItems();
    }
}