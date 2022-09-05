function fn(impl = () => {}) {
  const mockFn = (...args) => {
    mockFn.mock.calls.push(args);
    return impl(...args);
  };
  mockFn.mock = { calls: [] };
  return mockFn;
}

const utilsPath = require.resolve("../utils");
require.cache[utilsPath] = {
  id: utilsPath,
  filename: utilsPath,
  loaded: true,
  exports: {
    getWinner: fn((p1, p2) => p2),
  },
};

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
