const inquirer = require('inquirer');
const fs = require('fs');

const internQuestions = [
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
    message: 'What is their school?',
      name: 'school',
      type: 'input',
},
]

nq.prompt(quest).then( ans => {
    // Put HTML file 
}