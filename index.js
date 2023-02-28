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

// array of questions for user inquirer prompt function
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
        message: 'Please provide a short description of your project!.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation code for your project!',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide command line instructions to run your application!',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select a License for this project?',
        choices: ['MIT', 'Apache', 'GPL', 'Mozilla', 'None'],
    },
    {
        type: 'input',
        name: 'username', 
        message: 'What is your GitHub username?',
    },
    {
        type: 'input', 
        name: 'email', 
        message: 'What is your email address?',
    },

]);

// function to write README file to repo.
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
        // console.log if successful
        console.log('Your README.md file has successfully been written!');
    });
};

// function to initialize program.
function init() {
    // Prompts user to enter details for project using questions.
    questions()
    // Then generates input and uses writeToFile fuction to write the README.md file.
    .then((input) => {
    writeToFile('README.md', generateMarkdown(input));
    // writeToFile('testerREADME.md', generateMarkdown(input));
});
};

// function call to initialize program
init();

