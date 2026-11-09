class User {
  constructor(name, email, age) {
    if (!name) throw new Error("Name required");
    if (email === "invalid") throw new Error("Invalid email");
    if (age < 0) throw new Error("Invalid age");

    this.name = name;
    this.email = email;
    this.age = age;
  }

  getName() {
    return this.name;
  }
  getEmail() {
    return this.email;
  }
  getAge() {
    return this.age;
  }
}

module.exports = User;
