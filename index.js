// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown.js')


const licenses = ['MIT', 'Apache', 'GPL', 'None']
const questions = [{
    type: 'input',
    message: 'What is the name of your project?',
    name: 'title'
},
{
    type: 'input',
    message: 'Type a short description about your project:',
    name: 'description'
},
{
    type: 'input',
    message: 'Does your project require installation instructions?',
    name: 'installation'
},
{
    type: 'input',
    message: 'How do you use your project?',
    name: 'usage'
},
{
    type: 'list',
    message: 'Which license did you use?',
    name: 'license',
    choices: licenses
},
{
    type: 'input',
    message: 'How would someone test this project',
    name: 'test',
},
{
    type: 'input',
    message: 'Was there anyone (people, third-party assets, tutorials) else who worked on this project with you?',
    name: 'credits'
},
{
    type: 'input',
    message: 'Enter your Github username. (Required)',
    name: 'username',
    validate: username => {
        if (username) {
            return true;
        } else {
            console.log('Enter your github username!');
            return false;
        }
    }
},
{
    type: 'input',
    message: 'Enter your email address. (Required)',
    name: 'email',
    validate: email => {
        if (email) {
            return true;
        } else {
            console.log('Enter your email address!');
            return false;
        }
    }
},]



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(data)
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log(
            'Success'
        ))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        writeToFile('README.md', generateMarkdown(userInput))
    })
}

// Function call to initialize app
init();
