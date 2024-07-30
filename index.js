// Import necessary modules
const fs = require("fs"); // For file system operations
const inquirer = require("inquirer"); // For command-line prompts
const { Circle, Square, Triangle } = require("./lib/shape.js"); // Import shape classes

// Function to generate SVG content based on user input
const generateSVG = ({ text, textColor, shape, shapeColor }) => {
  // Create the shape element based on the provided shape and color
  const shapeElement = createShape(shape, shapeColor);

  // Return the complete SVG content as a string
  return `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shapeElement}
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
      </svg>
    `;
};

// Function to create shape element based on type and color
const createShape = (shape, color) => {
  switch (shape) {
    case "circle":
      return new Circle(color).render(); // Render a Circle
    case "triangle":
      return new Triangle(color).render(); // Render a Triangle
    case "square":
      return new Square(color).render(); // Render a Square
    default:
      return ""; // Return an empty string for invalid shapes
  }
};

// Use inquirer to prompt the user for input
inquirer
  .prompt([
    {
      type: "input",
      name: "text",
      message: "Enter the text for the logo:", // Prompt for text
    },
    {
      type: "input",
      name: "textColor",
      message: "Enter the color for the text:", // Prompt for text color
    },
    {
      type: "list",
      name: "shape",
      message: "Choose a shape for the logo:", // Prompt to choose a shape
      choices: ["circle", "triangle", "square"], // Shape choices
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Enter the color for the shape:", // Prompt for shape color
    },
  ])
  .then((answers) => {
    // Generate SVG content based on user input
    const svgContent = generateSVG(answers);

    // Write the SVG content to a file in the examples folder
    fs.writeFileSync("./examples/logo.svg", svgContent);
    console.log("Generated logo.svg in the examples folder"); // Confirm generation
  })
  .catch((error) => {
    // Handle errors
    if (error.isTtyError) {
      console.log("Prompt couldn't be rendered in the current environment"); // TTY error
    } else {
      console.log("Something went wrong:", error); // Other errors
    }
  });

// Export the generateSVG function for use in other files
module.exports = { generateSVG };
