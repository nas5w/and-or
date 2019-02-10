const or = require("../").or;

test("One true or test should be true", () => {
  expect(or(true)).toBe(true);
});

test("Two true or tests should be true", () => {
  expect(or(true, true)).toBe(true);
});

test("One true and one false or tests should be true", () => {
  expect(or(true, false)).toBe(true);
});

test("All false or tests should be false", () => {
  expect(or(false, false)).toBe(false);
});
