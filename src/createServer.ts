import { GraphQLServer } from 'graphql-yoga';
import { Mutation } from './resolvers/Mutation';
import { Query } from './resolvers/Query';
import { prisma } from './generated/prisma-client';

// Create the GraphQL Yoga Server

export const createServer = function () {
    return new GraphQLServer({
        "typeDefs": "./src/schema.graphql",
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
