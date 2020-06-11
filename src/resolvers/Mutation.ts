import { IceCream } from "../misc/IceCream";
import { prisma, IceCreamCreateInput, Toppings, IceCreamPromise, AtLeastOne, ID_Input, IceCreamUpdateInput } from '../generated/prisma-client';

export const Mutation = {
    createIceCream(parent, args: IceCreamCreateInput, ctx, info): IceCreamPromise {
        return prisma.createIceCream(args);
    },
    updateIceCream(parent, args: {
        data: IceCreamUpdateInput;
        where: AtLeastOne<{
            id: ID_Input;
        }, {
            id: Pick<{
                id: ID_Input;
            }, "id">;
        }>;
    }, ctx, info): IceCreamPromise {
        return prisma.updateIceCream(args);
    },
    deleteIceCream(parent, args: AtLeastOne<{
        id: ID_Input;
    }, {
        id: Pick<{
            id: ID_Input;
        }, "id">;
    }>, ctx, info): IceCreamPromise {
        // return prisma.project({ id: iceCreamId });
        return prisma.deleteIceCream(args)
    }
}