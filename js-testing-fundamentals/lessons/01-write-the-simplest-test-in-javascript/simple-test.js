const { sum, subtract } = require("../../math");

let result, expected;

result = sum(5, 2);
expected = 7;
if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}

result = subtract(7, 3);
expected = 4;
if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}
