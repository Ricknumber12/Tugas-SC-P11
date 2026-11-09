const ShoppingCart = require("../src/ShoppingCart");

describe("ShoppingCart", () => {
  test("should calculate total price with tax correctly", () => {
    // Arrange
    const cart = new ShoppingCart();
    cart.addItem({ name: "Book", price: 100000 });
    cart.addItem({ name: "Pen", price: 20000 });

    // Act
    const total = cart.calculateTotalWithTax(0.11);

    // Assert
    expect(total).toBe(133200);
  });

  test("should throw error when adding invalid item", () => {
    const cart = new ShoppingCart();
    expect(() => cart.addItem(null)).toThrow("Invalid item");
  });
});
