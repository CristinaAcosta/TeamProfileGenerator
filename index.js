const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateTeam = require('./src/team');
const writeFile = require('./src/team');



let manager = [];
let engineer = [];
let intern = [];
let teamArray = [manager, engineer, intern];

Prompt()

function Prompt(){
    return inquirer 
    .prompt([

        {

        type: 'list',
        name: 'title',
        message: 'What is your job title?',
        choices: ['Team manager', 'Engineer', 'Intern'],

        },

        {

            type: 'input',
            name: 'name',
            message: 'What is your name?',


        },

        {

            type: 'input',
            name: 'id',
            message: 'What is your employee ID?',


        },

        {

            type: 'input',
            name: 'email',
            message: 'What is your email address?',


        },

    ])
    .then(({title, name, id, email}) => {

        if (title === 'Team manager') {
    
            return inquirer
            .prompt ([
            {
    
                type: 'input',
                name: 'office',
                message: 'What is your office number?',
    
            },
        
            {
                type: 'confirm',
                name: 'newEntry',
                message: 'Want to add a new employee?',
                default: false,
    
            },
    
        ])
        .then(({office, newEntry}) => {
            manager.push(new Manager(name, id, email, office))
            if(newEntry){
                return Prompt();
            }
        }
        )
}

    else if(title === 'Engineer') {

        return inquirer
        .prompt ([

            {
                type: 'input',
                name: 'github',
                message: 'What is your GitHub username?'


            },

            {
                type: 'confirm',
                name: 'newEntry',
                message: 'Would you like to add another employee?',
                default: false,
    
            },
        ])

        .then(({github, newEntry}) => {
            engineer.push(new Engineer(name, id, email, github))
            if(newEntry){
                return Prompt();
            }
        }
        )
    }

    else if (title === 'Intern') {

        return inquirer

        .prompt ([
            {
                type: 'input',
                name: 'school',
                message: 'What is the name of your school?',
            },

            {
                type: 'confirm',
                name: 'newEntry',
                message: 'Would you like to add another employee?',
                default: false,
    
            },
        ])

        .then(({school, newEntry}) => {
            intern.push(new Intern(name, id, email, school))
            if(newEntry){
                return Prompt();
            }
        }
        )
    }
    })
}


Prompt()
.then(teamData => {
    return generateTeam(teamArray)

})

.then(indexHTML =>{
    return writeFile(indexHTML)

})