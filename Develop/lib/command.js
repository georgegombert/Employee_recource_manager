const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const welcome =
  inquirer
    .prompt([
      {
        type: "list",
        message: "\n\nWelcome to your employee dashboard. \nThe following program will help you keep track of your employee roster and add new employees.\nHit 'Continue' to get started ",
        choices: ["Continue", "Cancel"],
        name: "welcomeChoice"
      }
    ])
    .then(res => {
      console.log(res);
      if (res.welcomeChoice === "Continue") {
        console.log("hit Continue");
        return true;
      } else {
        console.log("Bye Bye");
        return false;
      }
    })
    .catch(err => { throw err });

console.log(`hit welcome ${welcome}`);