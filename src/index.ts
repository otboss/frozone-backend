/**
 * Server
 * */
import * as path from 'path'
require('dotenv').config({ path: path.resolve("./variables.env") });
import { createServer } from './createServer';
// import { db } from './db';


const server = createServer();

// TODO: Use express middleware to manage cookies
// TODO: Use express middleware to populate current user

server.start({
    "cors": {
        "credentials": true,
        "origin": process.env.FRONTEND_URL
    }
}, function (result) {
    console.log(`Server running on http://localhost:${result.port}`);
});