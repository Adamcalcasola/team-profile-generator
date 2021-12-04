const inquirer = require('inquirer');

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "Enter employee name.",
            },
        ])
        .then((input) => {
            this.name = input;
        })
    }

    getId() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'id',
                message: "Enter employee's ID number.",
            },
        ])
        .then((input) => {
            this.id = input;
        })
    }

    getEmail() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'email',
                message: "Enter employee's email address.",
            }
        ])
        .then((input) => {
            this.email = input;
        })
    }

    getRole() {
        inquirer.prompt([
            {
                type: 'list',
                name: 'role',
                message: 'What role are you assigning?',
                choices: ['engineer', 'intern']
            },
        ])
        .then((input) => {
            this.role = input;
        })
    }
}

module.exports = Employee;