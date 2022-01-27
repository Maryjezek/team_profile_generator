const inquirer = require("inquirer");
const generatePage = require("./src/page-template");
const { writeFile, copyFile } = require("./utils/generate-site");

const validateEmail = (email) => {
  //if() add validation here, mus thave @
  return true;
};

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "manager_name",
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
      name: "manager_empid",
      message: "Provide the manager's employee ID:",
    },
    {
      type: "input",
      name: "manager_email",
      message: "Provide the manager's email address:",
      validate: validateEmail,
    },
    {
      type: "input",
      name: "manager_office",
      message: "Provide the manager's office number:",
    },
  ]);
};

const promptEmployee = (employeeData) => {
  if (typeof employeeData.employees == "undefined") {
    employeeData.employees = [];
  }

  console.log(`
=================
Add a New employee
=================
`);
  return inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "Would you like to add the following employee or finish?",
        choices: ["engineer", "intern", "finish building my team"],
      },
    ])
    .then((answer) => {
      console.log(answer, answer.choice);
      if (answer.choice == "engineer") {
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
          .then((engineerData) => {
            employeeData.employees.push(engineerData);
            if (engineerData.confirmAddEmployee) {
              return promptEmployee(employeeData);
            } else {
              return employeeData;
            }
          });

        //MB end
      } else if (answer.choice == "intern") {
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
          .then((internData) => {
            employeeData.employees.push(internData);
            if (internData.confirmAddEmployee) {
              return promptEmployee(employeeData);
            } else {
              return employeeData;
            }
          });
      } else {
        return employeeData;
      }
    });
};

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
    console.log(employeeData);
    return "";
    //return generatePage(employeeData);
  })
  // .then((pageHTML) => {
  //   return writeFile(pageHTML);
  // })
  // .then((writeFileResponse) => {
  //   console.log(writeFileResponse);
  //   return copyFile();
  // })
  // .then((copyFileResponse) => {
  //   console.log(copyFileResponse);
  // })
  .catch((err) => {
    console.log(err);
  });
