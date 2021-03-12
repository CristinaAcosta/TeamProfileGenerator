const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");
const Intern = require("../lib/Intern");
const Engineer = require("../lib/Engineer");


const createTeam = team => {
  // html within backticks for manager card creation 
const generateManager = manager => {
    return `
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${manager.getName()}</h5>
    <p class="card-text">${manager.getRole()}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${manager.getId()}</li>
    <li class="list-group-item"> Email: <a href="mailto:${manager.getEmail()}>${manager.getEmail()}<a></li>
    <li class="list-group-item">Office Number: ${manager.officeNumber()}</li>
  </ul>
</div>
</div>
    
    `;
};


const generateIntern = intern => {
    return `
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${intern.getName()}</h5>
    <p class="card-text">${intern.getRole()}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${intern.getId()}</li>
    <li class="list-group-item"> Email: <a href="mailto:${intern.getEmail()}>${intern.getEmail()}<a></li>
    <li class="list-group-item">School: ${intern.school()}</li>
  </ul>
</div>
</div>
    
    
`;

};


// create engineer 
const generareEngineer = engineer => {
    return `
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${engineer.getName()}</h5>
    <p class="card-text">${engineer.getRole()}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${engineer.getId()}</li>
    <li class="list-group-item"> Email: <a href="mailto:${engineer.getEmail()}>${engineer.getEmail()}<a></li>
    <li class="list-group-item">Github: <a href="www.github.com/${engineer.github()}>${engineer.github()}<a></li>
  </ul>
</div>
</div>
    
    
    `;

};

}



module.exports = team => {
    return `
    
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Team Profile Generator</title>

</head>

<body>
    <div class="jumbotron jumbotron-fluid">
  <div class="container fluid">
    <h1 class="display-4">My Team!</h1>
  </div>
</div>

<div>
${createTeam(team)}
</div>


</body>

</html>
    
    `;
};