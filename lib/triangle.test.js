import Triangle from './Triangle';

describe('Triangle', () => {
  it('should render a triangle SVG string with the specified color', () => {
    const triangle = new Triangle();
    triangle.setColor('blue');
    const expectedSVG = `<polygon points="150,18 244,182 56,182" fill="blue" />`;
    expect(triangle.render()).toEqual(expectedSVG);
  });
});
