// GIVEN a command-line application that accepts user input
// WHEN I am prompted for text
// THEN I can enter up to three characters
// WHEN I am prompted for the text color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square
// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered

const inquirer = require('inquirer');
const Logo = require('./Logo');     //make path right
const generateSVG = require('./svgGenerator');  // need to create this class
const fs = require('fs');

async function main() {
  try {
    // Prompt the user for logo information
    const logoInfo = await Logo.promptUserForInfo();

    // Create a Logo instance
    const logo = new Logo(
      logoInfo.text,
      logoInfo.textColor,
      logoInfo.shape,
      logoInfo.shapeColor
    );

    // Generate SVG from the logo
    const svgString = generateSVG(logo);

    // Write SVG to a file
    fs.writeFileSync('logo.svg', svgString);

    console.log('Logo SVG created successfully.');
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

// Run the main function
main();
