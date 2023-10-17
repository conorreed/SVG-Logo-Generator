import Circle from './Circle.js';
import Square from './Square.js';
import Triangle from './Triangle.js';

export const generate = (logo) => {
  let svgString = "";

 
 


  // Choose the shape and generate SVG accordingly
  if (logo.shape === "Circle") {
    const shape = new Circle();
    shape.setColor(logo.shapeColor);

    svgString = `
    <svg 
      version="1.1" 
      baseProfile="full"
      width="300" 
      height="200"
      xmlns="http://www.w3.org/2000/svg" >
      ${shape.render()}
      <text x="150" y="100" text-anchor="middle" alignment-baseline="middle" fill="${logo.textColor}">${logo.text}</text>
    </svg>`;
  } else if (logo.shape === "Triangle") {

    const shape = new Triangle();
    shape.setColor(logo.shapeColor);
    svgString = `
    <svg 
      version="1.1" 
      baseProfile="full"
      width="300" 
      height="200"
      xmlns="http://www.w3.org/2000/svg" >
      ${shape.render()}
      <text x="150" y="125" text-anchor="middle" alignment-baseline="middle" fill="${logo.textColor}">${logo.text}</text>
    </svg>`;
  } else if (logo.shape === "Square") {
    const shape = new Square();
    shape.setColor(logo.shapeColor);

    svgString = `
    <svg 
      version="1.1" 
      baseProfile="full"
      width="300" 
      height="200"
      xmlns="http://www.w3.org/2000/svg" >
      ${shape.render()}
      <text x="200" y="125" text-anchor="middle" alignment-baseline="middle" fill="${logo.textColor}">${logo.text}</text>
    </svg>`;
  }

  return svgString;
};
