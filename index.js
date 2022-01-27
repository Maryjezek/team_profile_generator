const inquirer = require("inquirer");
const generatePage = require("./src/page-template");
const { writeFile, copyFile } = require("./utils/generate-site");

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Enter the team manager's name? (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the manager's name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "empid",
      message: "Provide the manager's employee ID:",
    },
    {
      type: "input",
      name: "email",
      message: "Provide the manager's email address:",
    },
    {
      type: "input",
      name: "about",
      message: "Provide the manager's office number:",
    },
  ]);
};

const promptEmployee = (employeeData) => {
  console.log(`
=================
Add a New employee
=================
`);

  // If there's no 'projects' array property, create one
  if (!employeeData.manager) {
    employeeData.manager = [];
  }
  return inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "Would you like to add the following employee or finish?",
        choices: ["engineer ", "intern ", "finish building my team"],
      }
    ]).then(answer => {
      if(answers.choice == 'engineer') {  
        return inquirer
        .prompt([
        {
        type: "input",
        name: "name",
        message: "Enter the engineer's name? (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "empid",
        message: "Provide the engineer's employee ID:",
      },
      {
        type: "input",
        name: "email",
        message: "Provide the engineer's email address:",
      },

      {
        type: "input",
        name: "github",
        message: "Enter the engineer's GitHub Username (Required)",
        validate: (githubInput) => {
          if (githubInput) {
            return true;
          } else {
            console.log("Please enter your GitHub username!");
            return false;
          }
        },
      },

      {
        type: "confirm",
        name: "confirmAddEmployee",
        message: "Would you like to enter another employee?",
        default: false,
      },
    ])
    .then((projectData) => {
      employeeData.projects.push(projectData);
      if (projectData.confirmAddEmployee) {
        return promptEmployee(employeeData);
      } else {
        return employeeData;
      }
    });

        //MB end

      } else if (answers.choice == 'intern') {
          // todo
          return inquirer
          .prompt([
          {
            type: "input",
            name: "name",
            message: "Enter the intern's name? (Required)",
            validate: (nameInput) => {
              if (nameInput) {
                return true;
              } else {
                console.log("Please enter the name!");
                return false;
              }
            },
          },
          {
            type: "input",
            name: "empid",
            message: "Provide the intern's employee ID:",
          },
          {
            type: "input",
            name: "email",
            message: "Provide the intern's email address:",
          },
    
          {
            type: "input",
            name: "github",
            message: "Enter the intern's school (Required)",
            validate: (githubInput) => {
              if (githubInput) {
                return true;
              } else {
                console.log("Please enter the intern's school!");
                return false;
              }
            },
          }, 
        ])
        .then((projectData) => {
          employeeData.projects.push(projectData);
          if (projectData.confirmAddEmployee) {
            return promptEmployee(employeeData);
          } else {
            return employeeData;
          }
        });

      } else {
        return false;
      }
    });
  }

/*
])
.then((projectData) => {
  employeeData.projects.push(projectData);
  if (projectData.confirmAddProject) {
    return promptEmployee(employeeData);
  } else {
    return employeeData;
  }
});



/*
    ])
    .then((projectData) => {
      employeeData.projects.push(projectData);
      if (projectData.confirmAddProject) {
        return promptEmployee(employeeData);
      } else {
        return employeeData;
      }
    });
};*/

promptUser()
  .then(promptEmployee)
  .then((employeeData) => {
    return generatePage(employeeData);
  })
  .then((pageHTML) => {
    return writeFile(pageHTML);
  })
  .then((writeFileResponse) => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then((copyFileResponse) => {
    console.log(copyFileResponse);
  })
  .catch((err) => {
    console.log(err);
  });
