const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const returnScreen = require("./lib/returnScreen");
const screenPrompts = require("./lib/screenPrompts");
const addEmployee = require("./lib/addEmployee");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// const welcomeScreen = () => {
//   return inquirer
//     .prompt([
//       {
//         type: "list",
//         message: "\n\nWelcome to your employee dashboard. \nThe following program will help you keep track of your employee roster and add new employees.\nHit 'Continue' to get started ",
//         choices: [{name:"Continue", value:true}, {name: "Cancel", value:false}],
//         name: "welcomeChoice"
//       }
//     ])
// }

// const homeScreen = () =>{
//   return inquirer
//     .prompt([
//       {
//         type: "list",
//         message: "Add Employee Home. What would you like to do?",
//         choices: [{name: "Add Manager", value:"manager"},{name: "Add Engineer", value:"engineer"},{name: "Add Intern", value:"intern"}],
//         name:"homeChoice"
//       }
//     ])
// }

// const baseEmployee = () =>{
//   return inquirer
//     .prompt([
//     {
//       type: "input",
//       message: "Enter employee name:",
//       name: "name"
//     },
//     {
//       type: "input",
//       message: "Enter employee id:",
//       name: "id"
//     },
//     {
//       type: "input",
//       message: "Enter employee email:",
//       name: "email"
//     }
//   ])
// }

// const addManager = () =>{
//   return inquirer
//     .prompt([
//       {
//         type: "input",
//         message: "Enter employee office number:",
//         name: "officeNumber"
//       }
//   ])
// }

// const addEngineer = () =>{
//   return inquirer
//     .prompt([
//       {
//         type: "input",
//         message: "Enter employee github username:",
//         name: "github"
//       }
//   ])
// }

// const addIntern = () =>{
//   return inquirer
//     .prompt([
//       {
//         type: "input",
//         message: "Current school intern is attending:",
//         name: "school"
//       }
//   ])
// }

const employees = [];

async function init(){
  let returnChoice = true;

  const {welcomeChoice} = await screenPrompts.welcome();
  welcomeChoice? returnChoice = true : returnChoice = false;
  while (returnChoice === true){
    welcomeChoice? {homeChoice} = await screenPrompts.home() : console.log("signing off");
    const employee = await addEmployee.baseEmployee();
    switch(homeChoice){
      case "manager":
        employee.officeNumber = (await addEmployee.addManager()).officeNumber;
        const manager = new Manager(employee.name, employee.id, employee.email, employee.officeNumber);
        employees.push(manager);
        break;
      case "engineer":
        employee.github = (await addEmployee.addEngineer()).github;
        const engineer = new Engineer(employee.name, employee.id, employee.email, employee.github);
        employees.push(engineer);
        break;
      case "intern":
        employee.school = (await addEmployee.addIntern()).school;
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
  fs.writeFile("./outputs/index.html",index, () => console.log("file created successfully"));
  // console.log(`hit outside while ${employees}`);
}

init();
