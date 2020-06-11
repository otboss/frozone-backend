"use strict";
/**
 * Server
 * */
exports.__esModule = true;
require('dotenv').config({ path: '../variables.env' });
var createServer_1 = require("./createServer");
// import { db } from './db';
var server = createServer_1.createServer();
// TODO: Use express middleware to manage cookies
// TODO: Use express middleware to populate current user
server.start({
    "cors": {
        "credentials": true,
        "origin": process.env.FRONTEND_URL
    }
}, function (result) {
    console.log("Server running on http://localhost:" + result.port);
});
