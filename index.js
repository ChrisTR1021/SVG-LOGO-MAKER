const inquirer = require('inquirer');
const fs = require('fs');
const fileDestination = ('');

function promptUser(){
    inquirer.prompt([
        {
            type: 'input',
            message: 'What are the three letter you want to use on the logo?',
            
        }
}