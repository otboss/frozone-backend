"use strict";
exports.__esModule = true;
exports.Mutation = void 0;
var prisma_client_1 = require("../generated/prisma-client");
exports.Mutation = {
    createIceCream: function (parent, args, ctx, info) {
        return prisma_client_1.prisma.createIceCream(args);
    },
    updateIceCream: function (parent, args, ctx, info) {
        return prisma_client_1.prisma.updateIceCream(args);
    },
    deleteIceCream: function (parent, args, ctx, info) {
        // return prisma.project({ id: iceCreamId });
        return prisma_client_1.prisma.deleteIceCream(args);
    }
};
