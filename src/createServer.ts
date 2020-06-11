import { GraphQLServer } from 'graphql-yoga';
// import { Query } from './misc/Query';
// import { Mutations } from './misc/Mutations';
import { db } from './db';
import { Mutation } from './resolvers/Mutation';
import { Query } from './resolvers/Query';
import { prisma } from './generated/prisma-client';

// Create the GraphQL Yoga Server

export const createServer = function () {
    return new GraphQLServer({
        "typeDefs": "./schema.graphql",
        "resolvers": {
            "Mutation": Mutation,
            "Query": Query,
        },
        "resolverValidationOptions": {
            "requireResolversForResolveType": false
        },
        "context": {
            prisma
        },
    })
}
