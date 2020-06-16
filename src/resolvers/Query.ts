import { prisma, IceCreamNullablePromise, Prisma } from '../generated/prisma-client';
import { IceCreamCreateInput } from '../generated/prisma-client/index';
import { IceCream } from '../misc/IceCream';



export const Query = {
    async iceCreamById(parent, args, ctx, info) {
        return prisma.iceCream({
            id: args.id
        });
    },

    async iceCreams(parent, args, ctx, info) {
        return prisma.iceCreams();
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