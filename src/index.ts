import * as path from 'path'
require('dotenv').config({ path: path.resolve("./variables.env") });
import { GraphQLServer } from './misc/GraphQLServer';
GraphQLServer.express.use(async (req, res, next) => {
  // Add Middleware
  next();
});


// TODO: Use express middleware to manage cookies
// TODO: Use express middleware to populate current user

GraphQLServer.start({
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
    // Mutation.createIceCream(undefined, new IceCream("regular cone", 14000, [], ""), undefined, undefined);
    // Mutation.createIceCream(undefined, new IceCream("sandwich", 16000, [], ""), undefined, undefined);
    // Mutation.createIceCream(undefined, new IceCream("ripple", 14500, [], ""), undefined, undefined);
    // Mutation.createIceCream(undefined, new IceCream("triple", 18000, [], ""), undefined, undefined);
    // Mutation.createIceCream(undefined, new IceCream("cake (slice)", 15000, [], ""), undefined, undefined);
    // Mutation.createIceCream(undefined, new IceCream("bucket", 42000, [], ""), undefined, undefined);
    // Mutation.createIceCream(undefined, new IceCream("crunch bar", 17000, [], ""), undefined, undefined);
    // Mutation.createIceCream(undefined, new IceCream("premium cone", 20000, [], ""), undefined, undefined);
    // Mutation.createIceCream(undefined, new IceCream("orange pop", 10000, [], ""), undefined, undefined);
    // Mutation.createIceCream(undefined, new IceCream("soft serve", 12000, [], ""), undefined, undefined);
  })().catch(function (err) {
    console.log(err);
  });
});