import { Shape } from './Shape';

describe('Shape', () => {
  describe('constructor', () => {
    it('should initialize color to black', () => {
      const shape = new Shape();
      expect(shape.color).toBe('black');
    });
  });

  describe('setColor', () => {
    it('should set the color', () => {
      const shape = new Shape();
      shape.setColor('red');
      expect(shape.color).toBe('red');
    });
  });
});
