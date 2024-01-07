const { Square, Triangle, Circle } = require("./shapes.js");

function shapeGroup(response) {
  if (response.shape === "Square") {
    let userShape = new Square(
      response.shapeColor,
      response.logoText,
      response.logoColor,
      response.textColor
    );
    return userShape.render();
  }

  if (response.shape === "Triangle") {
    let userShape = new Triangle(
      response.shapeColor,
      response.logoText,
      response.logoColor,
      response.textColor
    );
    return userShape.render();
  }
  if (response.shape === "Circle") {
    let userShape = new Circle(
      response.shapeColor,
      response.logoText,
      response.logoColor,
      response.textColor
    );
    return userShape.render();
  }
}

module.exports = shapeGroup;
