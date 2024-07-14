const generateSVG = ({ text, textColor, shape, shapeColor }) => {
  const shapeElement = createShape(shape, shapeColor);
  return `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shapeElement}
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
      </svg>
    `;
};

const createShape = (shape, color) => {
  switch (shape) {
    case "circle":
      return `<circle cx="150" cy="100" r="80" fill="${color}" />`;
    case "triangle":
      return `<polygon points="150, 18 244, 182 56, 182" fill="${color}" />`;
    case "square":
      return `<rect x="70" y="30" width="160" height="160" fill="${color}" />`;
    default:
      return "";
  }
};

module.exports = { generateSVG };
