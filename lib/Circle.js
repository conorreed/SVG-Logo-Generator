import Shape from './Shape';

class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="150" r="50" fill="${this.color}" />`;
  }
}

export default Circle;
