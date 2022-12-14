const assert = require("assert");
const thumbWar = require("../thumb-war");
const utils = require("../utils");

function fn(impl = () => {}) {
  const mockFn = (...args) => {
    mockFn.mock.calls.push(args);
    return impl(...args);
  };
  mockFn.mock = { calls: [] };
  mockFn.mockImplementation = (newImpl) => (impl = newImpl);
  return mockFn;
}

function spyOn(obj, prop) {
  const originalValue = obj[prop];
  obj[prop] = fn();
  obj[prop].mockRestore = () => (obj[prop] = originalValue);
}

spyOn(utils, "getWinner");
utils.getWinner.mockImplementation((p1, p2) => p2);

const winner = thumbWar("Rade Mihovilovic", "Aleksandra Janusevska");
assert.strictEqual(winner, "Aleksandra Janusevska");
assert.deepStrictEqual(utils.getWinner.mock.calls, [
  ["Rade Mihovilovic", "Aleksandra Janusevska"],
  ["Rade Mihovilovic", "Aleksandra Janusevska"],
]);

//cleanup
utils.getWinner.mockRestore();
