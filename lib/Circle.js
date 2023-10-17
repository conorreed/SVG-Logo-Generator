import Shape from './Shape.js';

export default class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="50" fill="${this.color}" />`;
  }
}
 // <circle cx="150" cy="100" r="50" fill="${logo.shapeColor}" />