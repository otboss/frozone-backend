import { IceCream } from "../misc/IceCream";
import { prisma, IceCreamCreateInput, Toppings, IceCreamPromise, AtLeastOne, ID_Input, IceCreamUpdateInput, ToppingsCreateManyInput } from '../generated/prisma-client';
import { Topping } from "../misc/Topping";

export const Mutation = {
    // createIceCream(parent, args: IceCreamCreateInput, ctx, info): IceCreamPromise {
    //     return prisma.createIceCream(args);
    // },
    // updateIceCream(parent, args: {
    //     data: IceCreamUpdateInput;
    //     where: AtLeastOne<{
    //         id: ID_Input;
    //     }, {
    //         id: Pick<{
    //             id: ID_Input;
    //         }, "id">;
    //     }>;
    // }, ctx, info): IceCreamPromise {
    //     return prisma.updateIceCream(args);
    // },
    // deleteIceCream(parent, args: AtLeastOne<{
    //     id: ID_Input;
    // }, {
    //     id: Pick<{
    //         id: ID_Input;
    //     }, "id">;
    // }>, ctx, info): IceCreamPromise {
    //     // return prisma.project({ id: iceCreamId });
    //     return prisma.deleteIceCream(args)
    // }
    async createIceCream(
        parent, args, ctx, info
    ): Promise<any> {
        const toppings: Array<Topping> = [];
        for (var topping in args.toppings) {
            toppings.push(new Topping(args.toppings[topping]));
        }
        return prisma.createIceCream({
            name: args.name,
            cost: args.cost,
            toppings: {
                create: toppings
            },
            rating: args.rating,
            image: args.image,
        });
    },

    async createUser(parent, args, ctx, info) {
        return prisma.createUser({
            email: args.email,
            password: args.password,
        })
    },

    async createCartItem(parent, args, ctx, info) {
        return prisma.createCartItem({
            userId: args.userId,
            iceCreamId: args.iceCreamId,
        })
    }
}