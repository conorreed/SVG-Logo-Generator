export const generate = (logo) => {
  let svgString = "";

  // Choose the shape and generate SVG accordingly
  if (logo.shape === "Circle") {
    svgString = `
    <svg 
      version="1.1" 
      baseProfile="full"
      width="300" 
      height="200"
      xmlns="http://www.w3.org/2000/svg" >
      <circle cx="150" cy="100" r="50" fill="${logo.shapeColor}" />
      <text x="150" y="100" text-anchor="middle" alignment-baseline="middle" fill="${logo.textColor}">${logo.text}</text>
    </svg>`;
  } else if (logo.shape === "Triangle") {
    svgString = `
    <svg 
      version="1.1" 
      baseProfile="full"
      width="300" 
      height="200"
      xmlns="http://www.w3.org/2000/svg" >
      <polygon points="150,50 250,150 50,150" fill="${logo.shapeColor}" />
      <text x="150" y="125" text-anchor="middle" alignment-baseline="middle" fill="${logo.textColor}">${logo.text}</text>
    </svg>`;
  } else if (logo.shape === "Square") {
    svgString = `
    <svg 
      version="1.1" 
      baseProfile="full"
      width="300" 
      height="200"
      xmlns="http://www.w3.org/2000/svg" >
      <rect x="100" y="50" width="200" height="100" fill="${logo.shapeColor}" />
      <text x="200" y="125" text-anchor="middle" alignment-baseline="middle" fill="${logo.textColor}">${logo.text}</text>
    </svg>`;
  }

  return svgString;
};
