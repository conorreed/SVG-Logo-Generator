class SvgGenerator {
    static generate(logo) {
      let svgString = '';
  
      // Choose the shape and generate SVG accordingly
      if (logo.shape === 'circle') {
        svgString = `<svg width="300" height="200"><circle cx="150" cy="100" r="50" fill="${logo.shapeColor}" /><text x="150" y="100" text-anchor="middle" alignment-baseline="middle" fill="${logo.textColor}">${logo.text}</text></svg>`;
      } else if (logo.shape === 'triangle') {
        svgString = `<svg width="300" height="200"><polygon points="150,50 250,150 50,150" fill="${logo.shapeColor}" /><text x="150" y="125" text-anchor="middle" alignment-baseline="middle" fill="${logo.textColor}">${logo.text}</text></svg>`;
      } else if (logo.shape === 'square') {
        svgString = `<svg width="300" height="200"><rect x="100" y="50" width="200" height="100" fill="${logo.shapeColor}" /><text x="200" y="125" text-anchor="middle" alignment-baseline="middle" fill="${logo.textColor}">${logo.text}</text></svg>`;
      }
  
      return svgString;
    }
  }
  
  module.exports = SvgGenerator;
  