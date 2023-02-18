// fs for writing to the file system
const fs = require("fs");

// path provides utilities for working with file and directory paths.
const path = require('path');

// inquirer for collecting user inputs
const inquirer = require("inquirer");

// Gets generateMarkdown function from js module.
const generateMarkdown = require("./utils/generateMarkdown");

// Added by node?
const { default: InputPrompt } = require("inquirer/lib/prompts/input");

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
        message: 'Select a License for this project!',
        name: 'license',
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

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
        // console.log if successful
        console.log('Your README.md file has successfully been written!');
    });
};



// function to initialize program
function init() {
    // Prompts user to enter details for project.
    questions()
    .then((input) => {
    // Then generates input and uses writeToFile fuction to write the README.md file.
    writeToFile('TESTREADME.md', generateMarkdown(input));
});
};

// function call to initialize program
init();
