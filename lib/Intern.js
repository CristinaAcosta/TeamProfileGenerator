const Intern = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school; 
  }
  getRole() {
    return "Intern";
  }
  getSchool() {
    return this.school;
 }
}

module.exports = Intern;


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
