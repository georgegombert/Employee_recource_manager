const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


const welcomeScreen = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        message: "\n\nWelcome to your employee dashboard. \nThe following program will help you keep track of your employee roster and add new employees.\nHit 'Continue' to get started ",
        choices: [{name:"Continue", value:true}, {name: "Cancel", value:false}],
        name: "welcomeChoice"
      }
    ])
}

const homeScreen = () =>{
  return inquirer
    .prompt([
      {
        type: "list",
        message: "Add Employee Home. What would you like to do?",
        choices: [{name: "Add Manager", value:"manager"},{name: "Add Engineer", value:"engineer"},{name: "Add Intern", value:"intern"}],
        name:"homeChoice"
      }
    ])
}

const baseEmployee = () =>{
  return inquirer
    .prompt([
    {
      type: "input",
      message: "Enter employee name:",
      name: "name"
    },
    {
      type: "input",
      message: "Enter employee id:",
      name: "id"
    },
    {
      type: "input",
      message: "Enter employee email:",
      name: "email"
    }
  ])
}

const addManager = () =>{
  return inquirer
    .prompt([
      {
        type: "input",
        message: "Enter employee office number:",
        name: "officeNumber"
      }
  ])
}

const addEngineer = () =>{
  return inquirer
    .prompt([
      {
        type: "input",
        message: "Enter employee github username:",
        name: "github"
      }
  ])
}

const addIntern = () =>{
  return inquirer
    .prompt([
      {
        type: "input",
        message: "Current school intern is attending:",
        name: "school"
      }
  ])
}

const returnScreen = () =>{
  return inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do now?",
        choices: [{name: "Add another employee", value: true}, {name: "Quit", value: false}],
        name: "returnChoice"
      }
    ])
}

const employees = [];

async function init(){
  let returnChoice = true;

  const {welcomeChoice} = await welcomeScreen();
  welcomeChoice? returnChoice = true : returnChoice = false;
  while (returnChoice === true){
    welcomeChoice? {homeChoice} = await homeScreen() : console.log("signing off");
    const employee = await baseEmployee();
    switch(homeChoice){
      case "manager":
        employee.officeNumber = (await addManager()).officeNumber;
        const manager = new Manager(employee.name, employee.id, employee.email, employee.officeNumber);
        employees.push(manager);
        break;
      case "engineer":
        employee.github = (await addEngineer()).github;
        const engineer = new Engineer(employee.name, employee.id, employee.email, employee.github);
        employees.push(engineer);
        break;
      case "intern":
        employee.school = (await addIntern()).school;
        const intern = new Intern(employee.name, employee.id, employee.email, employee.school);
        employees.push(intern);
        break;
      default:
        console.log("hit Default");
    }
    console.log(employees);
    returnChoice = (await returnScreen()).returnChoice;
  }
  const index = render(employees);
  fs.writeFile("./index.html",index, () => console.log("file created successfully"));
  // console.log(`hit outside while ${employees}`);
}

init();




// const chad = new Manager("chad", 1, "cdB@bnb.com", 6969);
// const dave = new Manager("dave", 2, "dave@bnb.com", 420);
// const mike = new Engineer("mike", 3, "mike@bnb.com", "georgegombert");
// const tina = new Intern("tina", 4, "tina@bnb.com", "UCLA");

// const employees = [chad, dave, mike, tina];

// const index = render(employees);

// fs.writeFile("./index.html",index, () => console.log("file created successfully"));

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
