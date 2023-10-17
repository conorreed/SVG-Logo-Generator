const Shape = require('./Shape');
const Triangle = require('./Triangle').default;
const Circle = require('./Circle').default;
const Square = require('./Square').default;

test('Triangle render()', () => {
  const triangle = new Triangle();
  triangle.setColor('blue');
  expect(triangle.render()).toEqual('<polygon points="150,18 244,182 56,182" fill="blue" />');
});

test('Circle render()', () => {
  const circle = new Circle();
  circle.setColor('green');
  expect(circle.render()).toEqual('<circle cx="150" cy="150" r="50" fill="green" />');
});

test('Square render()', () => {
  const square = new Square();
  square.setColor('red');
  expect(square.render()).toEqual('<rect x="100" y="100" width="100" height="100" fill="red" />');
});
