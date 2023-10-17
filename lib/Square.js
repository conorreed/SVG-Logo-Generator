import Shape from './Shape.js';

export default class Square extends Shape {
  render() {
    return `<rect x="100" y="50" width="200" height="200" fill="${this.color}" />`;
  }
}

  // <rect x="100" y="50" width="200" height="100" fill="${logo.shapeColor}" />