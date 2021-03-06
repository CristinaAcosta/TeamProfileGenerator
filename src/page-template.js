const generateTeamCards = []
const Employee = getElementByClass('Employee');
const Manager = getElementByClass('Manager');
const Engineer = getElementByClass('Engineer');
const Intern = getElementByClass('Intern');

function generateHTML() {

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
    `
}

function generateManager(manager) {

    for( var i = 0; i<manager.length; i++){

   
    return `
    
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h2>${manager[i].name}</h2>
      <h4>${manager[i].title}</h4>
      <p>Employee ID: ${manager[i].id}</p>
      <p>Email:  <a href="mailto: ${manager[i].email}">${manager[i].email}</a></p>
      <p>Office Number: ${manager[i].office} </p>
    </div>
</div>
`
}

}

function generateEngineer(engineer) {

    for( var i = 0; i<engineer.length; i++){

   
    return `
    
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h2>${engineer[i].name}</h2>
      <h4>${engineer[i].title}</h4>
      <p>Employee ID: ${engineer[i].id}</p>
      <p>Email: <a href="mailto: ${engineer[i].email}">${engineer[i].email}</a></p>
      <p>Github: ${engineer[i].github} </p>
    </div>
</div>
`
}

}

function generateIntern(intern) {

    for( var i = 0; i<intern.length; i++){

   
    return `
    
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h2>${intern[i].name}</h2>
      <h4>${intern[i].title}</h4>
      <p>Employee ID: ${intern[i].id}</p>
      <p>Email:  <a href="mailto: ${intern[i].email}">${intern[i].email}</a></p>
      <p>Office Number: ${intern[i].school} </p>
    </div>
</div>
`
}

}