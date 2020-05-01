// const Manager = require("./lib/Manager");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

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
        choices: [{name: "Add another employee", value: "addAnother"}, {name: "Quit", value: "quit"}],
        name: "returnChoice"
      }
    ])
}


async function init(){
  const {welcomeChoice} = await welcomeScreen();
  welcomeChoice? {homeChoice} = await homeScreen() : console.log("signing off");
  
  const employee = await baseEmployee();
  switch(homeChoice){
    case "manager":
      employee.officeNumber = (await addManager()).officeNumber;
      break;
    case "engineer":
      employee.github = (await addEngineer()).github;
      break;
    case "intern":
      employee.school = (await addIntern()).school;
      break;
    default:
      console.log("hit Default");
  }
  console.log(`Congatulations! ${employee.name} has been added you your roster`);
  const {returnChoice} = await returnScreen();
}

init();


// if(welcomeChoice){
//   homeScreen();
// } else{
//   console.log("signing off")
// }
// console.log(`hit welcome ${welcomeChoice}`);