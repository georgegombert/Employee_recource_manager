const inquirer = require("inquirer");

const returnScreen = () => {
    return inquirer
        .prompt([
            {
                type: "list",
                message: "What would you like to do now?",
                choices: [{ name: "Add another employee", value: true }, { name: "Quit", value: false }],
                name: "returnChoice"
            }
        ])
}

module.exports = returnScreen;