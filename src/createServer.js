"use strict";
exports.__esModule = true;
exports.createServer = void 0;
var graphql_yoga_1 = require("graphql-yoga");
var Mutation_1 = require("./resolvers/Mutation");
var Query_1 = require("./resolvers/Query");
var prisma_client_1 = require("./generated/prisma-client");
// Create the GraphQL Yoga Server
exports.createServer = function () {
    return new graphql_yoga_1.GraphQLServer({
        "typeDefs": "./schema.graphql",
        "resolvers": {
            "Mutation": Mutation_1.Mutation,
            "Query": Query_1.Query
        },
        "resolverValidationOptions": {
            "requireResolversForResolveType": false
        },
        "context": {
            prisma: prisma_client_1.prisma
        }
    });
};
