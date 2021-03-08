const inquirer = require('inquirer');
const fs = require('fs');
const manager = require ('./Manager');
const Engineer = require ('./Engineer');
const Intern = require('./Intern');

class Team {
    constructor() {
        this.members = []
        inquirer.prompt(managerQuestions)
        .then ((data) => {
            const manager = new Manager(data.name, data.id, data.email, data.office);
            this.members.push(managers);
            this.more(data.add);
        });
    }

printStats() {
    console.log(`manager:${this.members}`);

}


add(role) {
    if (role == "engineer") {
        inquirer.prompt(engineerQuestions)
        .then ((data) => {
            const engineer = new Engineer(data.name, data.id, data.email, data.GitHub);
            this.members.push(engineer);
            this.more(data.add);
    });
        else if(role == "intern") {
            inquirer.prompt(internQuestions)
            .then ((data) => {
                const intern = new Intern(data.name, data.id, data.email, data.GitHub);
                this.members.push(intern);
                this.more(data.add);
        });
        }
