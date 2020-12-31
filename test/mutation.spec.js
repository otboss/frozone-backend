const assert = require("assert");
const fetch = require('node-fetch');
const path = require('path');
const { IceCream } = require("../src/misc/IceCream");
require('dotenv').config({ path: path.resolve("./variables.env") });

const port = parseInt(process.env.PORT);
let iceCream = new IceCream("Raspberry Lime", 134, []);

describe("Mutations Test", () => {

  xit("Should create ice cream", async () => {
    const response = await fetch(`http://localhost:${port}`, {
      "method": "POST",
      "body": `
      { "query": "mutation { createIceCream(id: "${JSON.stringify(iceCream)}") { name, id } }" }
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

});