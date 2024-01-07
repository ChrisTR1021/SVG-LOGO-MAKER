const { Square, Triangle, Circle } = require("./shapes.js");

function setShape(response) {
    if (response.shape === "Square") {
        let userShape = new Square( response.shapeColor, response.text, response.textColor)
        return userShape.render();
      }

      if (response.shape === "Triangle") {
        let userShape = new Triangle(response.shapeColor, response.text,  response.textColor)
        return userShape.render();
      }
      if (response.shape === "Circle") {
        let userShape = new Circle(response.shapeColor, response.text, response.textColor)
        return userShape.render();
      }
}