The application must have these classes: Employee, Manager, Engineer, and Intern. The tests for these classes (in the _tests_ directory) must all pass.

The first class is an Employee parent class with the following properties and methods:

name

id

email

getName()

getId()

getEmail()

getRole() // Returns 'Employee'

The other three classes will extend Employee.

In addition to Employee's properties and methods, Manager will also have:

officeNumber

getRole() // Overridden to return 'Manager'

In addition to Employee's properties and methods, Engineer will also have:

github // GitHub username

getGithub()

getRole() // Overridden to return 'Engineer'

In addition to Employee's properties and methods, Intern will also have:

school

getSchool()

getRole() // Overridden to return 'Intern'

Finally, although it’s not a requirement, you should consider adding validation to ensure that user input provided is in the proper expected format.

Grading Requirements
This Challenge is graded based on the following criteria:

Deliverables: 15%
A sample HTML file generated using the application must be submitted.

Your GitHub repository containing your application code.

Walkthrough Video: 32%
A walkthrough video that demonstrates the functionality of the Team Profile Generator and passing tests must be submitted, and a link to the video should be included in your README file.

The walkthrough video must show all four tests passing from the command line.

The walkthrough video must demonstrate how a user would invoke the application from the command line.

The walkthrough video must demonstrate how a user would enter responses to all of the prompts in the application.

The walkthrough video must demonstrate a generated HTML file that matches the user input.

Technical Acceptance Criteria: 40%
Satisfies all of the preceding acceptance criteria plus the following:

Uses the Inquirer package (Links to an external site.).

Uses the Jest package (Links to an external site.) for a suite of unit tests.

The application must have these classes: Employee, Manager, Engineer, and Intern.

Repository Quality: 13%
Repository has a unique name.

Repository follows best practices for file structure and naming conventions.

Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

Repository contains multiple descriptive commit messages.

Repository contains a high-quality README with description and a link to a walkthrough video.

How to Submit the Challenge
You are required to submit the following for review:

A walkthrough video demonstrating the functionality of the application and passing tests.

A sample HTML file generated using your application.

The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

NOTE