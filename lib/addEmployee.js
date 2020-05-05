const inquirer = require("inquirer");

const baseEmployee = () => {
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

const addManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "Enter employee office number:",
        name: "officeNumber"
      }
    ])
}

const addEngineer = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "Enter employee github username:",
        name: "github"
      }
    ])
}

const addIntern = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "Current school intern is attending:",
        name: "school"
      }
    ])
}

module.exports = {
  baseEmployee: baseEmployee,
  addManager: addManager,
  addEngineer: addEngineer,
  addIntern: addIntern
};