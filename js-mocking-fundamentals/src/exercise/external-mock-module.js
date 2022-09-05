require("../__exercise-mocks__/utils");
const utilsPath = require.resolve("../utils");
const mockUtilsPath = require.resolve("../__exercise-mocks__/utils");
require.cache[utilsPath] = require.cache[mockUtilsPath];

const assert = require("assert");
const thumbWar = require("../thumb-war");
const utils = require("../utils");

const winner = thumbWar("Rade Mihovilovic", "Aleksandra Janusevska");
assert.strictEqual(winner, "Aleksandra Janusevska");
assert.deepStrictEqual(utils.getWinner.mock.calls, [
  ["Rade Mihovilovic", "Aleksandra Janusevska"],
  ["Rade Mihovilovic", "Aleksandra Janusevska"],
]);

//cleanup
delete require.cache[utilsPath];
