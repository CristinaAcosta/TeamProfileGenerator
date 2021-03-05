const inquirer = require('inquirer');
const fs = require('fs');

const managerQuestions = [
{
    message: 'What is their name?',
      name: 'name',
      type: 'input',
},
{
    message: 'What is their employee ID?',
      name: 'id',
      type: 'input',
},
{
    message: 'What is their email?',
      name: 'email',
      type: 'input',
},
{
    message: 'What is their office number?',
      name: 'office',
      type: 'input',
},
]

nq.prompt(quest).then( ans => {
    // Put HTML file 
}