const User = require("../src/User");

describe("User", () => {
  describe("when created with valid data", () => {
    let user;
    beforeEach(() => {
      // Arrange
      user = new User("John", "john@test.com", 25);
    });

    test("should return correct name", () => {
      // Assert
      expect(user.getName()).toBe("John");
    });

    test("should return correct email", () => {
      expect(user.getEmail()).toBe("john@test.com");
    });

    test("should return correct age", () => {
      expect(user.getAge()).toBe(25);
    });
  });

  describe("when created with invalid data", () => {
    test("should throw error when name is empty", () => {
      // Act & Assert
      expect(() => new User("", "a@b.com", 25)).toThrow("Name required");
    });

    test("should throw error when email is invalid", () => {
      expect(() => new User("John", "invalid", 25)).toThrow("Invalid email");
    });

    test("should throw error when age is negative", () => {
      expect(() => new User("John", "a@b.com", -1)).toThrow("Invalid age");
    });
  });
});
