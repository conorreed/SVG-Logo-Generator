const Shape = require('./Shape');

class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="150" r="50" fill="${this.color}" />`;
  }
}

module.exports = Circle;
