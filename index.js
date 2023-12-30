const inquirer = require("inquirer");
const fs = require("fs");
const { generateSVG } = require
const { generateShape } = require 

inquirer
  .prompt([
    {
      type: "input",
      message: "What are the three letter you want to use on the logo?",
    },
    {
      type: "input",
      message:
        "What color text do you want for your logo? A hexadecimal number or keyword is acceptable.",
      name: "logoColor",
    },
    {
      type: "list",
      message: "What is the shape you want to use for your logo?",
      name: "shape",
      choices: ["Triangle", "Circle", "Square"],
    },
    {
      type: "input",
      message:
        "What color do you want your shape to be? A hexadecimal number or keyword is acceptable.",
      name: "shapeColor",
    },
  ])
  
