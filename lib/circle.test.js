import Circle from './Circle.js';

describe('Circle', () => {
  it('should render a circle SVG string with the specified color', () => {
    const circle = new Circle();
    circle.setColor('blue');
    const expectedSVG = `<circle cx="150" cy="100" r="50" fill="blue" />`;
    expect(circle.render()).toEqual(expectedSVG);
  });
});
