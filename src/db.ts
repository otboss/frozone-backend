/**
 * This file connects to the remote prisma and enables
 * querying
 * */

import { Prisma } from 'prisma-binding';

class PrismaParam {
    constructor(
        public typeDefs: string,
        public endpoint: string,
        public secret: string,
        public debug: boolean = true
    ) { }
}

export const db: Prisma = new Prisma(
    new PrismaParam(
        "./generated/prisma.graphql",
        process.env.PRISMA_ENDPOINT,
        process.env.PRISMA_ENDPOINT,
        false
    )
);