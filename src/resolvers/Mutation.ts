import { prisma } from '../generated/prisma-client';
import { Topping } from "../misc/Topping";

export const Mutation = {
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