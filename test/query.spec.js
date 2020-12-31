const assert = require("assert");
const fetch = require('node-fetch');
const path = require('path');
const { IceCream } = require("../src/misc/IceCream");
require('dotenv').config({ path: path.resolve("./variables.env") });

const port = parseInt(process.env.PORT);
let iceCream = new IceCream();

describe("Queries Test", () => {

  it("Should get all ice creams", async () => {
    const response = await fetch(`http://localhost:${port}`, {
      "method": "POST",
      "body": `
      { "query": "{ iceCreams { name, id } }" }
      `,
      "headers": { 'Content-Type': 'application/json' },
    });
    const responseJSON = await response.json();
    assert.strictEqual(typeof (responseJSON.data.iceCreams), "object")
    responseJSON.data.iceCreams.length >= 0;
    if (responseJSON.data.iceCreams.length > 0) {
      assert.strictEqual(typeof (responseJSON.data.iceCreams[0].name), "string");
      iceCream = responseJSON.data.iceCreams[0];
    }
  }).timeout(5000);


  xit("Should get ice cream by id", async () => {
    const response = await fetch(`http://localhost:${port}`, {
      "method": "POST",
      "body": {
        "query": '{ iceCreamById(id: "ckbi5ftrm5a7009757bl1gcqq") { name } }'
      },
      "headers": { 'Content-Type': 'application/json' },
    });
    const responseJSON = await response.json();
    assert.strictEqual(typeof (responseJSON.data.iceCreams), "object")
    responseJSON.data.iceCreams.length >= 0;
    if (responseJSON.data.iceCreams.length > 0) {
      assert.strictEqual(typeof (responseJSON.data.iceCreams[0].name), "string");
      iceCream = responseJSON.data.iceCreams[0];
    }
  }).timeout(5000);

  it("Should get all ice cream toppings", async () => {
    const response = await fetch(`http://localhost:${port}`, {
      "method": "POST",
      "body": `
      { "query": "{ toppings { name } }" }
      `,
      "headers": { 'Content-Type': 'application/json' },
    });
    const responseJSON = await response.json();
    assert.strictEqual(typeof (responseJSON.data.toppings), "object")
    responseJSON.data.toppings.length >= 0;
    if (responseJSON.data.toppings.length > 0) {
      assert.strictEqual(typeof (responseJSON.data.toppings[0].name), "string");
    }
  }).timeout(5000);

  it("Should get all users", async () => {
    const response = await fetch(`http://localhost:${port}`, {
      "method": "POST",
      "body": `{ "query": "{ users { email } }" }`,
      "headers": { 'Content-Type': 'application/json' },
    });
    const responseJSON = await response.json();
    assert.strictEqual(typeof (responseJSON.data.users), "object")
    responseJSON.data.users.length >= 0;
    if (responseJSON.data.users.length > 0) {
      assert.strictEqual(typeof (responseJSON.data.users[0].name), "string");
    }
  }).timeout(5000);

  it("Should get cart items", async () => {
    const response = await fetch(`http://localhost:${port}`, {
      "method": "POST",
      "body": `{ "query": "{ cartItems { userId } }" }`,
      "headers": { 'Content-Type': 'application/json' },
    });
    const responseJSON = await response.json();
    assert.strictEqual(typeof (responseJSON.data.cartItems), "object")
    responseJSON.data.cartItems.length >= 0;
    if (responseJSON.data.cartItems.length > 0) {
      assert.strictEqual(typeof (responseJSON.data.users[0].name), "string");
    }
  }).timeout(5000);

});