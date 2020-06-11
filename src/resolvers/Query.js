"use strict";
exports.__esModule = true;
exports.Query = void 0;
var prisma_client_1 = require("../generated/prisma-client");
var p = prisma_client_1.prisma;
exports.Query = {
    iceCreamById: function (root, _a, _b) {
        var iceCreamId = _a.iceCreamId;
        var prisma = _b.prisma;
        return p.iceCream(iceCreamId);
    }
};
