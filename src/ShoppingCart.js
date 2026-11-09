class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    if (!item || typeof item.price !== "number") {
      throw new Error("Invalid item");
    }
    this.items.push(item);
  }

  calculateTotalWithTax(taxRate) {
    const subtotal = this.items.reduce((sum, item) => sum + item.price, 0);
    return subtotal + subtotal * taxRate;
  }
}

module.exports = ShoppingCart;
