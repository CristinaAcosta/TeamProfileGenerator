const inquirer = require('inquirer');
const fs = require('fs');
const manager = require ('./Manager')

class Team {
    constructor() {
        this.members = []
        inquirer.prompt(managerQuestions)
        .then ((data) => {
            const manager = new manager(data.name, data.id, data.email, data.office);
            this.members.push(managers)
            this.more(data.add)
        });
    }
}

printStats() {
    console.log(`manager: ${this.members}`);
}

  
