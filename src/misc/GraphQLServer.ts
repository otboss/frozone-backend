import * as graphqlServer from 'graphql-yoga';
import { Mutation } from '../resolvers/Mutation';
import { Query } from '../resolvers/Query';
import { prisma } from '../generated/prisma-client';

export const GraphQLServer: graphqlServer.GraphQLServer = new graphqlServer.GraphQLServer({
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