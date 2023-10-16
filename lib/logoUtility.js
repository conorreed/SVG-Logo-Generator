const inquirer = require('inquirer');
const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

function validateColor(color) {
  // Validation function for color input
  if (/^(red|green|blue|yellow|purple|orange)$/i.test(color) || hexColorRegex.test(color)) {
    return true;
  }
  return 'Please enter a valid color keyword or a hexadecimal color value (e.g., #FF5733).';
}

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

async function promptUserForLogoInfo() {
  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['Triangle', 'Circle', 'Square'],
    },
    {
      type: 'input',
      name: 'color',
      message: 'Enter a color:',
      validate: validateColor,
    },
    {
      type: 'input',
      name: 'text',
      message: 'Enter text for the logo:',
    },
  ]);

  console.log('User Input:', answers);
}

module.exports = { promptUserForLogoInfo, validateColor };
