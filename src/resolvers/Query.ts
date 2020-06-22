import { prisma, IceCreamNullablePromise, Prisma } from '../generated/prisma-client';
import { IceCreamCreateInput } from '../generated/prisma-client/index';
import { IceCream } from '../misc/IceCream';



export const Query = {
    async iceCreamById(parent, args, ctx, info) {
        return await prisma.iceCream(args);
    },

    async iceCreams(parent, args, ctx, info) {
        return await prisma.iceCreams(args);
    },

    async toppings(parent, args, ctx, info) {
        return await prisma.toppingses(args);
    },

    async users(parent, args, ctx, info) {
        return await prisma.users(args);
    },

    async cartItems(parent, args, ctx, info) {
        return await prisma.cartItems(args);
    },

    async iceCreamConnection(parent, args, ctx, info) {
        const aggregate = await prisma.iceCreamsConnection(args).aggregate();
        const pageInfo = await prisma.iceCreamsConnection().pageInfo();
        const edges = await prisma.iceCreamsConnection().edges();
        return { aggregate, pageInfo, edges };
    }
}