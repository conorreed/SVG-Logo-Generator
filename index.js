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

import { promptUserForLogoInfo, validateColor } from './lib/logoUtility.js';
import Logo from './lib/Logo.js';
import { generate } from './lib/svgGenerator.js'; // Corrected path
import { writeFileSync } from 'fs';

async function main() {
  try {
    // Prompt the user for logo information
    const logo = await promptUserForLogoInfo();

    // Generate SVG from the logo
    const svgString = generate(logo);

    // Write SVG to a file
    writeFileSync('./examples/logo.svg', svgString);

    console.log('Logo SVG created successfully.');
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

// Run the main function
main();
