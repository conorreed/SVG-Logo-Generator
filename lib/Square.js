const Shape = require('./Shape');

class Square extends Shape {
  render() {
    return `<rect x="100" y="100" width="100" height="100" fill="${this.color}" />`;
  }
}

module.exports = Square;
