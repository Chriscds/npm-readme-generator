const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
            
const questions = () =>
    inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a short description of your project.',
    },
    {
        type: 'list',
        message: 'Select a Licence for this project!',
        name: 'licence',
        choices: ['MIT', 'Apache', 'GPL', 'Microsoft', 'None'],
    },
    {
        type: 'input',
        name: 'username', // GitHub user name - to be added to Questions section include link
        message: 'What is your GitHub username?',
    },
    {
        type: 'input', // Email address - to be added to Questions section 
        name: 'email', // with instructions how to reach them with additional questions.
        message: 'What is your email address?',
    },

]);

questions()
then(() => console.log(questions));

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
