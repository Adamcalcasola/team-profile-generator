const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee.js');

function createTeam() {
    new Manager
    employeeType();

}

class Manager extends Employee {
    constructor(name, id, email) {
        super(name, id, email);
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'office',
                    message: "What is the employee's office number?"
                }
            ])
    }
}

class Engineer extends Employee {
    getGithub () {
        inquirer.prompt([
            {
                type: 'input',
                name: 'github',
                message: "Enter the engineer's Github username."
            }
        ])
    }
}

class Intern extends Employee {
    getSchool () {
        inquirer.prompt([
            {
                type: 'input',
                name: 'school',
                message: "Enter the intern's school."
            }
        ])
    }
}

const employeeType = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'employeeType',
            message: "What type of team member would you like to add?",
            choices: ['engineer', 'intern']
        }
    ])
    .then(({employeeType}) => {
        if (employeeType === engineer) {
            Engineer.getInfo;
            Engineer.getGithub;
        } else {
            Intern.getInfo;
            Intern.getSchool;
        }
    })
}

createTeam();