const inquirer = require("inquirer");
const fs = require("fs");
const { generateSVG } = require("./lib/shape.js");

const questions = [
  {
    type: "input",
    name: "text",
    message: "Enter up to three characters for the logo:",
    validate: (input) =>
      input.length <= 3 || "Text must be up to three characters.",
  },
  {
    type: "input",
    name: "textColor",
    message: "Enter a color for the text (keyword or hexadecimal):",
  },
  {
    type: "list",
    name: "shape",
    message: "Choose a shape for the logo:",
    choices: ["circle", "triangle", "square"],
  },
  {
    type: "input",
    name: "shapeColor",
    message: "Enter a color for the shape (keyword or hexadecimal):",
  },
];

inquirer.prompt(questions).then((answers) => {
  const svgContent = generateSVG(answers);
  fs.writeFileSync("logo.svg", svgContent);
  console.log("Generated logo.svg");
});
