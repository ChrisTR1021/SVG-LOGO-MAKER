const inquirer = require('inquirer');
const fs = require('fs');
const fileDestination = ('');

function promptUser(){
    inquirer.prompt([
        {
            type: 'input',
            message: 'What are the three letter you want to use on the logo?',
            validate: (answer) => {
                if (answer.length > 3) {
                    return console.log("\n Text has to contain three characters or less! Please reenter characters");
                }
                return true;
        }
},
{
    type: 'input',
    message: 'What color text do you want for your logo? A hexadecimal number or keyword is acceptable.',
    name: 'logoColor',
},
{
    type: 'list',
    message: 'What is the shape you want to use for your logo?',
    name: 'shape',
    choices: ['Triangle', 'Circle', 'Square'],
},
{
    type: 'input',
    message: 'What color do you want your shape to be? A hexadecimal number or keyword is acceptable.',
    name: 'shapeColor',
},
])
.then((response) => {
console.log(response.logoText, response.logoColor, response.shape, response.shapeColor);
});
}

promptUser();