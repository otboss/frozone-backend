import * as path from 'path'
require('dotenv').config({ path: path.resolve("./variables.env") });
import { createServer } from './createServer';

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
    // Initialize Database
    (async function () {
        // Topping.getToppings().forEach(function (topping: string) {
        //     Mutation.createTopping(undefined, new Topping(topping), undefined, undefined)
        // });
        // Mutation.createIceCream(undefined, new IceCream("regular cone", 140, [], ""), undefined, undefined);
        // Mutation.createIceCream(undefined, new IceCream("sandwich", 160, [], ""), undefined, undefined);
        // Mutation.createIceCream(undefined, new IceCream("ripple", 145, [], ""), undefined, undefined);
        // Mutation.createIceCream(undefined, new IceCream("triple", 180, [], ""), undefined, undefined);
        // Mutation.createIceCream(undefined, new IceCream("cake (slice)", 150, [], ""), undefined, undefined);
        // Mutation.createIceCream(undefined, new IceCream("bucket", 420, [], ""), undefined, undefined);
        // Mutation.createIceCream(undefined, new IceCream("crunch bar", 170, [], ""), undefined, undefined);
        // Mutation.createIceCream(undefined, new IceCream("premium cone", 200, [], ""), undefined, undefined);
        // Mutation.createIceCream(undefined, new IceCream("orange pop", 100, [], ""), undefined, undefined);
        // Mutation.createIceCream(undefined, new IceCream("soft serve", 120, [], ""), undefined, undefined);
    })().catch(function (err) {
        console.log(err);
    });
});