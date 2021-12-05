const Intern = require('../lib/Intern.js');

test('creates an Intern object', () => {
    const intern = new Intern('Adam', '1', 'adam.calcasola@gmail.com', 'Uconn');
    expect(intern.name).toBe('Adam');
    expect(intern.id).toBe('1');
    expect(intern.email).toBe('adam.calcasola@gmail.com');
    expect(intern.school).toBe('Uconn');
    expect(intern.role).toBe('intern')
});

test('gets Intern name', () => {
    const intern = new Intern('Adam', '1', 'adam.calcasola@gmail.com', 'Uconn');
    expect(intern.getName()).toEqual('Adam');
});

test('gets Intern id', () => {
    const intern = new Intern('Adam', '1', 'adam.calcasola@gmail.com', 'Uconn');
    expect(intern.getId()).toEqual('1');
});

test('gets Intern email', () => {
    const intern = new Intern('Adam', '1', 'adam.calcasola@gmail.com', 'Uconn');
    expect(intern.getEmail()).toEqual('adam.calcasola@gmail.com');
});

test('gets Intern school', () => {
    const intern = new Intern('Adam', '1', 'adam.calcasola@gmail.com', 'Uconn');
    expect(intern.getSchool()).toEqual('Uconn');
});

test('gets Intern id', () => {
    const intern = new Intern('Adam', '1', 'adam.calcasola@gmail.com', 'Uconn');
    expect(intern.getRole()).toEqual('intern');
});