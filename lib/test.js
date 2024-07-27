const { generateSVG } = require("./shapes");

test("generates correct SVG", () => {
  // Test the generateSVG function with sample inputs
  const answers = {
    text: "SVG",
    textColor: "white",
    shape: "circle",
    shapeColor: "green",
  };
  const svg = generateSVG(answers); // Get the generated SVG
  expect(svg).toContain('<circle cx="150" cy="100" r="80" fill="green" />');
  expect(svg).toContain(
    '<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>'
  );
});
