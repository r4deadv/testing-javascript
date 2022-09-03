const { sumAsync, subtractAsync } = require("../../math");

test("sumAsync adds numbers asynchronously", async () => {
  const result = await sumAsync(5, 2);
  const expected = 7;
  expect(result).toBe(expected);
});

test("subtractAsync subtracts numbers asynchronously", async () => {
  const result = await subtractAsync(7, 3);
  const expected = 4;
  expect(result).toBe(expected);
});
