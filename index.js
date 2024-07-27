const inquirer = require("inquirer");
const fs = require("fs");
const { generateSVG } = require("./lib/shape.js");

const questions = [
  // Questions for the user to input their desired logo details
  {
    type: "input",
    name: "text",
    message: "Enter up to three characters for the logo:",
    validate: (input) =>
      input.length <= 3 || "Text must be up to three characters.",
  },
  {
    type: "input", // Validate the input text to be a valid string
    name: "textColor",
    message: "Enter a color for the text (keyword or hexadecimal):", //
  },
  {
    type: "list", // Validate the input shape to be one of the available choices
    name: "shape",
    message: "Choose a shape for the logo:",
    choices: ["circle", "triangle", "square"], // Validate the input shape to be one of the available choices
  },
  {
    type: "input",
    name: "shapeColor",
    message: "Enter a color for the shape (keyword or hexadecimal):", // Validate the input color to be a valid keyword or hexadecimal color
  },
];

inquirer.prompt(questions).then((answers) => {
  // Generate the SVG based on the user's input and save it to a file named logo.svg
  const svgContent = generateSVG(answers);
  fs.writeFileSync("logo.svg", svgContent);
  console.log("Generated logo.svg");
});
