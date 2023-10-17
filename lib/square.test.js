import Square from './Square.js';

describe('Square', () => {
  it('should render a square SVG string with the specified color', () => {
    const square = new Square();
    square.setColor('green');
    const expectedSVG = `<rect x="100" y="50" width="200" height="100" fill="green" />`;
    expect(square.render()).toEqual(expectedSVG);
  });
});
