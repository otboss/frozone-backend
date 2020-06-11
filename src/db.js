"use strict";
/**
 * This file connects to the remote prisma and enables
 * querying
 * */
exports.__esModule = true;
exports.db = void 0;
var prisma_binding_1 = require("prisma-binding");
var PrismaParam = /** @class */ (function () {
    function PrismaParam(typeDefs, endpoint, secret, debug) {
        if (debug === void 0) { debug = true; }
        this.typeDefs = typeDefs;
        this.endpoint = endpoint;
        this.secret = secret;
        this.debug = debug;
    }
    return PrismaParam;
}());
exports.db = new prisma_binding_1.Prisma(new PrismaParam("./generated/prisma.graphql", process.env.PRISMA_ENDPOINT, process.env.PRISMA_ENDPOINT, false));
