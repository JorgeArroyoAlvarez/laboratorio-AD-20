const calculator = require("./calculator");

test("adds 1 + 2 to equal 3", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("adds -4 + 8 to equal 4", () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test("subtract 5 - 4 to equal 1", () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test("subtract -5 - -10 to equal 5", () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

test("divide 15 / 5 to equal 3", () => {
  expect(calculator.divide(15,5 )).toBe(3);
});

test("divide 100 / 10 to equal 3", () => {
  expect(calculator.divide(100, 10)).toBe(10);
});

test("divide by 0 should throw an error ",() => {
  expect(() => calculator.divide(10,0)).toThrow("Cannot divide by zero");
  
})

test("multiply 5 * 5 to equal 25", () => {
  expect(calculator.multiply(5, 5)).toBe(25);
});

test("multiply 20 * 15 to equal 3", () => {
  expect(calculator.multiply(20, 15)).toBe(300);
});
