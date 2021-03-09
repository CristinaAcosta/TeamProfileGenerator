const inquirer = require('inquirer');
const fs = require('fs');

const engineerQuestions = [
{
    message: 'What is their name?',
      name: 'name',
      type: 'input',
},
{
    message: 'What is their ID number?',
      name: 'id',
      type: 'input',
},
{
    message: 'What is their email?',
      name: 'email',
      type: 'input',
},
{
    message: 'What is their Github username?',
      name: 'github',
      type: 'input',
},
]

inq.prompt(quest).then( ans => {
    // Put HTML file 
})