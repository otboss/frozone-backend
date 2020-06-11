import { prisma, IceCreamNullablePromise } from '../generated/prisma-client';

const p = prisma
export const Query = {
    iceCreamById(root, { iceCreamId }, { prisma }): IceCreamNullablePromise {
        return p.iceCream(iceCreamId);
    }
}