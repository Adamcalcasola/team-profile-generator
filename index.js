const inquirer = require('inquirer');
// const router = require('express').Router();
// const path = require('path');
// const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');
const generatePage = require('./src/generatePage.js');
const {writeFile, copyFile} = require('./utils/generate-site.js');

function Team() {
    this.members = [];


    Team.prototype.createManager = function() {
        inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: "Enter your manager's name.",
                    validate: input => {
                        if (input) {
                            return true;
                        } else {
                            console.log('Enter a name!');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'id',
                    message: "Enter your manager's ID number.",
                    validate: input => {
                        if (input) {
                            return true;
                        } else {
                            console.log('Enter an ID!');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'email',
                    message: "Enter your manager's email address.",
                    validate: input => {
                        if (input) {
                            return true;
                        } else {
                            console.log('Enter an email!');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'office',
                    message: "What is your manager's office number?",
                    validate: input => {
                        if (input) {
                            return true;
                        } else {
                            console.log('Enter an office!');
                            return false;
                        }
                    }
                }
            ])
            .then(data => {
                this.members.push(new Manager(data.name, data.id, data.email, data.office));
                this.createEmployee();
            })
    };

    Team.prototype.createEngineer = function() {
        inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: "Enter the engineer's name.",
                    validate: input => {
                        if (input) {
                            return true;
                        } else {
                            console.log('Enter a name!');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'id',
                    message: "Enter the engineer's ID number.",
                    validate: input => {
                        if (input) {
                            return true;
                        } else {
                            console.log('Enter an ID!');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'email',
                    message: "Enter the engineer's email address.",
                    validate: input => {
                        if (input) {
                            return true;
                        } else {
                            console.log('Enter an email!');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'github',
                    message: "Enter the engineer's GitHub account.",
                    validate: input => {
                        if (input) {
                            return true;
                        } else {
                            console.log('Enter a Github account!');
                            return false;
                        }
                    }
                }
            ])
            .then(data => {
                this.members.push(new Engineer(data.name, data.id, data.email, data.github));
                this.createEmployee();
            })
    }

    Team.prototype.createIntern = function() {
        inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: "Enter the intern's name.",
                    validate: input => {
                        if (input) {
                            return true;
                        } else {
                            console.log('Enter a name!');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'id',
                    message: "Enter the intern's ID number.",
                    validate: input => {
                        if (input) {
                            return true;
                        } else {
                            console.log('Enter an ID!');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'email',
                    message: "Enter the intern's email address.",
                    validate: input => {
                        if (input) {
                            return true;
                        } else {
                            console.log('Enter an email!');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'school',
                    message: "Enter the intern's school.",
                    validate: input => {
                        if (input) {
                            return true;
                        } else {
                            console.log('Enter a school!');
                            return false;
                        }
                    }
                }
            ])
            .then(data => {
                this.members.push(new Intern(data.name, data.id, data.email, data.school));
                this.createEmployee();
            })
    }

    Team.prototype.createEmployee = function() {
        inquirer.prompt([
            {
                type: 'confirm',
                name: 'addNew',
                message: 'Would you like to add a new team member?',
                default: false
            },
        ])
        .then(confirm => {
            if (confirm.addNew) {
                return inquirer.prompt([
                    {
                        type: 'list',
                        name: 'role',
                        message: 'What role are you assigning?',
                        choices: ['engineer', 'intern']
                    },
                ])
                .then(type => {
                    switch (type.role) {
                        case 'engineer':
                            this.createEngineer();
                            break;
                        case 'intern':
                            this.createIntern();
                            break;
                        default:
                            console.log('No selection');
                            break;
                    } 
                })
            } else {
                console.log(this);
                generatePage(this)
                    // .then(data => {
                    //     writeFile(data);
                    // })
                    // .then(response => {
                    //     copyFile();
                    // })
                    // .then(err => {
                    //     console.log(err);
                    // })
            }
        })
    }
}

new Team().createManager();


    // .then(team => {
    //     return generatePage(team);
    // })
    // .then(pageHTML => {
    //     return writeFile(pageHTML);
    // })
    // .then(writeFileResponse => {
    //     return copyFile();
    // })
    // .then(err => {
    //     console.log(err);
    // })