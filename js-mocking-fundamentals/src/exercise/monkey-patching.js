const assert = require("assert");
const thumbWar = require("../thumb-war");
const utils = require("../utils");

const originalGetWinner = utils.getWinner;
utils.getWinner = (p1, p2) => p2;

const winner = thumbWar("Rade Mihovilovic", "Aleksandra Janusevska");
assert.strictEqual(winner, "Aleksandra Janusevska");

//cleanup
utils.getWinner = originalGetWinner;
