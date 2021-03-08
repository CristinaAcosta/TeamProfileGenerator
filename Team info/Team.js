const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require ('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');


// Prompts the user for Team Mangers Name 
class Team {
    constructor() {
        this.members = []
        inquirer.prompt(managerQuestions)
        .then ((data) => {
            const Manager = new manager(data.name, data.id, data.email, data.office);
            this.members.push(Managers);
        });
    }

printStats() {
    console.log(`manager:${this.members}`);

}

// Select intern or engineer then add their info 
add(role) {
    if (role == "engineer") {
        inquirer.prompt(engineerQuestions)
        .then ((data) => {
            const engineer = new Engineer(data.name, data.id, data.email, data.GitHub);
            this.members.push(engineer);
            return;
           
    });
 } else if (role == "intern") {
            inquirer.prompt(internQuestions)
            .then ((data) => {
                const intern = new Intern(data.name, data.id, data.email, data.GitHub);
                this.members.push(intern); 
                return;
        });
    }
}

