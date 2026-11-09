const Calculator = require("../src/Calculator");

describe("Calculator", () => {
  let calc;

  beforeEach(() => {
    // Arrange
    calc = new Calculator();
  });

  test("should return sum when two numbers given", () => {
    // Act
    const result = calc.add(5, 3);
    // Assert
    expect(result).toBe(8);
  });

  test("should throw error when divided by zero", () => {
    // Act & Assert
    expect(() => calc.divide(10, 0)).toThrow("Cannot divide by zero");
  });
});
