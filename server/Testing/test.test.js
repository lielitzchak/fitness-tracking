const func = require("./theTesting.test");
const training= require("../Routes/Training-route.js");
it("should return the correct value", () => {
  expect(func.stam(1, 2)).toBe(3);
  done();
});

it("should return the wrong value", () => {
  expect(func.stam(1, 2)).not.toBe(4);
});

test('get all object', () => {
  expect(training.get()).not.toBe(null);
  done();
});
