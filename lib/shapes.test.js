// Import the Shape class
import { Shape } from './Shape';

// Test suite for the Shape class
describe('Shape', () => {
  // Test the constructor
  describe('constructor', () => {
    it('should initialize color to black', () => {
      const shape = new Shape();
      expect(shape.color).toBe('black');
    });
  });

  // Test the setColor method
  describe('setColor', () => {
    it('should set the color', () => {
      const shape = new Shape();
      shape.setColor('red');
      expect(shape.color).toBe('red');
    });
  });
});
