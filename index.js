const fs = require("fs");
const inquirer = require("inquirer");
const shapeGroup = 
const fileName = 


//questions that will prompted
const questions = [
    {
        type: 'input',
        message: 'What three letters would you like to use for your logo?'
        name: 'logoText',
        validate: (answer) => {
            if (answer.length > 3) {
                return console.log("\n Text must be three characters or less, must resubmit");
            }
            return true;
        }
    },
    {
        type: 'list',
        message: 'what shape would you like to use for your logo?'
        name: 'shape',
        choices: ['Square', 'Triangle', 'Circle'],
    },
    {
        type: 'input',
        message: 'what color text would you like for your logo?'
        name: 'logoColor',
    },
    {
        type: 'input',
        message: 'what color would you like the shape to be?'
        name: 'shapeColor',
    },
];
// creates svg and writes it to file
function logoCreation(response) {
    const svg = shapeGroup(response);
    fs.writeFile(fileName, svg, () => console.log("Generated logo.svg"));
}
// function to initialize app
function init() {
    userPrompt()
    .then((response) => {
        logoCreation(response);
    })
    .catch((err) => {
        console.log(err);
    });
}
init();


function userPrompt() {
    return inquirer.prompt(questions);
}