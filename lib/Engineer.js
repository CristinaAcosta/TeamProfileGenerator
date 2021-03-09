const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github =github;

  }
  getRole() {
    return "Engineer";
  }
  getGithub() {
    return this.github;
  }
}

module.exports = Engineer;

// const inquirer = require('inquirer');
// const fs = require('fs');
// const Team = require('./Team')

// const managerQuestions = [
// {
//     message: 'What is their name?',
//       name: 'name',
//       type: 'input',
// },
// {
//     message: 'What is their employee ID?',
//       name: 'id',
//       type: 'input',
// },
// {
//     message: 'What is their email?',
//       name: 'email',
//       type: 'input',
// },
// {
//     message: 'What is their GitHub username?',
//       name: 'GitHub',
//       type: 'input',
// },
// ]
