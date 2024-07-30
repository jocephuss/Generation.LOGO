// Define the Shape class
class Shape {
  constructor(color) {
    this.color = color; // Set the color property
  }

  render() {
    throw new Error("Render method must be implemented in child classes"); // Throw an error if not implemented
  }
}

// Define the Circle class that extends Shape
class Circle extends Shape {
  constructor(color) {
    super(color); // Call the parent class constructor
  }

  render() {
    // Return SVG string for a circle
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
}

// Define the Square class that extends Shape
class Square extends Shape {
  constructor(color) {
    super(color); // Call the parent class constructor
  }

  render() {
    // Return SVG string for a square
    return `<rect x="70" y="30" width="160" height="160" fill="${this.color}" />`;
  }
}

// Define the Triangle class that extends Shape
class Triangle extends Shape {
  constructor(color) {
    super(color); // Call the parent class constructor
  }

  render() {
    // Return SVG string for a triangle
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}

// Export the Shape, Circle, Square, and Triangle classes
module.exports = { Shape, Circle, Square, Triangle };
