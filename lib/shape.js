const generateSVG = ({ text, textColor, shape, shapeColor }) => {
  const shapeElement = createShape(shape, shapeColor); // Create the shape element based on the provided shape and color
  return `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shapeElement} // Add the shape element to the SVG
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text> // Add the text element to the SVG
      </svg>
    `;
};

const createShape = (shape, color) => {
  switch (
    shape // Create the shape element based on the provided shape and color
  ) {
    case "circle":
      return `<circle cx="150" cy="100" r="80" fill="${color}" />`; // Create a logo and text using a circle
    case "triangle":
      return `<polygon points="150, 18 244, 182 56, 182" fill="${color}" />`;
    case "square":
      return `<rect x="70" y="30" width="160" height="160" fill="${color}" />`;
    default:
      return ""; // Return an empty string for invalid shapes
  }
};

module.exports = { generateSVG }; // Export the generateSVG function for use in other files
