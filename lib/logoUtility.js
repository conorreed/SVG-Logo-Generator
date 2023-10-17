import inquirer from "inquirer";

import {Logo } from "./Logo.js";
const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

export const validateColor = (color) => {
  // Validation function for color input
  if (
    /^(red|green|blue|yellow|purple|orange)$/i.test(color) ||
    hexColorRegex.test(color)
  ) {
    return true;
  }
  return "Please enter a valid color keyword or a hexadecimal color value (e.g., #FF5733).";
};

class LogoConstructor {
  constructor(shape, color, text) {
    this.shape = shape;
    this.color = color;
    this.text = text;
    // Additional properties and initialization as needed
  }

  // Add any methods specific to logo construction

  generateLogo() {
    // Logic to generate the logo based on shape, color, text, etc.
    return `Logo generated with shape: ${this.shape}, color: ${this.color}, text: ${this.text}`;
  }
}

export const promptUserForLogoInfo = async () => {
  /* export const async function promptUserForLogoInfo() { */
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "text",
      message: "Enter text for the logo (up to 3 characters):",
      validate: (input) => input.length <= 3,
    },
    {
      type: "input",
      name: "textColor",
      message: "Enter text color (keyword or hexadecimal value):",
      validate: validateColor,
    },
    {
      type: "list",
      name: "shape",
      message: "Choose a shape:",
      choices: ["Triangle", "Circle", "Square"],
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Enter shape color (keyword or hexadecimal value):",
      validate: validateColor,
    },
  ]);

  console.log("User Input:", answers);

  // Now, you can create a Logo object using these inputs
  const logo = new Logo(
    answers.text,
    answers.textColor,
    answers.shape,
    answers.shapeColor
  );
  return logo;
};

//export default { promptUserForLogoInfo, validateColor };
