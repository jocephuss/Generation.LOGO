const { Circle, Square, Triangle } = require("./shape.js");

test("Circle renders correctly", () => {
  // Test Circle class implementation here
  const circle = new Circle("red");
  expect(circle.render()).toBe(
    '<circle cx="150" cy="100" r="80" fill="red" />'
  );
});

test("Square renders correctly", () => {
  // Test Square class implementation here
  const square = new Square("blue");
  expect(square.render()).toBe(
    '<rect x="70" y="30" width="160" height="160" fill="blue" />'
  );
});

test("Triangle renders correctly", () => {
  // Test Triangle class implementation here
  const triangle = new Triangle("green");
  expect(triangle.render()).toBe(
    '<polygon points="150, 18 244, 182 56, 182" fill="green" />'
  );
});
