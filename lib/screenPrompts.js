const inquirer = require("inquirer");

const welcomeScreen = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        message: "\n\nWelcome to your employee dashboard. \nThe following program will help you keep track of your employee roster and add new employees.\nHit 'Continue' to get started ",
        choices: [{ name: "Continue", value: true }, { name: "Cancel", value: false }],
        name: "welcomeChoice"
      }
    ])
}

const homeScreen = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        message: "Add Employee Home. What would you like to do?",
        choices: [{ name: "Add Manager", value: "manager" }, { name: "Add Engineer", value: "engineer" }, { name: "Add Intern", value: "intern" }],
        name: "homeChoice"
      }
    ])
}

module.exports = {
  welcome: welcomeScreen, 
  home: homeScreen
};