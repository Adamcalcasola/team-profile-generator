const inquirer = require('inquirer');

class Employee {
    constructor(name = '', id = '', email = '') {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "Enter employee name.",
            },
            {
                type: 'input',
                name: 'id',
                message: "Enter employee's ID number.",

            },
            {
                type: 'input',
                name: 'email',
                message: "Enter employee's email address.",
            }
        ])
    }
}

module.exports = Employee;