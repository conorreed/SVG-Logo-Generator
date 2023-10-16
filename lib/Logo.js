class Logo {
    constructor(text, textColor, shape, shapeColor) {
      if (text.length > 3) {
        throw new Error('Text must be up to 3 characters.');
      }
  
      this.text = text;
      this.textColor = textColor;
      this.shape = shape;
      this.shapeColor = shapeColor;
    }
  }
  
  module.exports = Logo;
  