const and = require("../").and;

test("One true and test should be true", () => {
  expect(and(true)).toBe(true);
});

test("Two true and tests should be true", () => {
  expect(and(true, true)).toBe(true);
});

test("One true and one false and tests should be false", () => {
  expect(and(true, false)).toBe(false);
});
