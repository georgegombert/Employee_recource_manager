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

async function init(){
  const {welcomeChoice} = await welcomeScreen();
  welcomeChoice? {homeChoice} = await homeScreen() : console.log("signing off");
  switch(homeChoice){
    case "manager":
      console.log("manager");
      break;
    case "engineer":
      console.log("engineer");
      break;
    case "intern":
      console.log("intern");
      break;
    default:
      console.log("hit Default");
  }
}

init();


// if(welcomeChoice){
//   homeScreen();
// } else{
//   console.log("signing off")
// }
// console.log(`hit welcome ${welcomeChoice}`);