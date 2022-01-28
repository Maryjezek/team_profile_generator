
// create the team member sections
const generateTeam = (employeeData) => {
  return employeeData.map((employee) => {
    var role = employee.getRole();
    //console.log(role);
    if (role == "Manager") {
      //console.log("Manager role was chosen");
      return `<div class="card">
      <h1>${role}</h1>
      <p>Name: ${employee.getName()}</p>
      <p>ID: ${employee.getId()}</p>
      <p>Office Number: ${employee.getOfficeNumber()}</p>
           <p><button>Email: ${employee.getEmail()}</button></p>
    </div>`;
    } else if (role == "Engineer") {
      //console.log("Engineer role was chosen");

      return `<div class="card">
      <h1>${role}</h1>
      <p>Name: ${employee.getName()}</p>
      <p>ID: ${employee.getId()}</p>
      <a href="https://github.com/${employee.getGithub()}">Go to ${employee.getGithub()}'s Github <i class="fa fa-github"></i></a>
      <p><button>Email: ${employee.getEmail()}</button></p>
    </div>`;
    }

    //add the else if if Intern here
  });
};

// export function to generate entire page
module.exports = function (templateData) {
  //console.log(templateData)

  return `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My Team</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="style.css">
  </head>
  
  <body>
  
      ${generateTeam(templateData)}
  
  </body>
  </html>
  `;
};
