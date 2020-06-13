import { prisma } from '../generated/prisma-client';
import { Topping } from "../misc/Topping";

export const Mutation = {
    async createIceCream(parent, args, ctx, info): Promise<any> {
        const toppings: Array<Topping> = [];
        for (var topping in args.toppings) {
            toppings.push(new Topping(args.toppings[topping]));
        }
        return prisma.createIceCream({
            name: args.name.toLowerCase(),
            cost: args.cost,
            toppings: {
                create: toppings
            },
            rating: args.rating,
            image: args.image,
        });
    },

    async deleteIceCream(parent, args, ctx, info) {
        return prisma.deleteIceCream({
            id: args.id
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
    },

    async deleteCartItem(parent, args, ctx, info) {
        return prisma.deleteCartItem({
            id: args.id
        });
    },

    async createTopping(parent, args, ctx, info) {
        return prisma.createToppings({
            name: args.name.toLowerCase(),
        })
    },


}