const Employee = require('../lib/Employee.js');

test('creates an Employee object', () => {
    const employee = new Employee('Adam', '1', 'adam.calcasola@gmail.com');
    expect(employee.name).toBe('Adam');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('adam.calcasola@gmail.com');
});

test('gets employee name', () => {
    const employee = new Employee('Adam', '1', 'adam.calcasola@gmail.com');
    expect(employee.getName()).toEqual('Adam');
});

test('gets employee id', () => {
    const employee = new Employee('Adam', '1', 'adam.calcasola@gmail.com');
    expect(employee.getId()).toEqual('1');
});

test('gets employee email', () => {
    const employee = new Employee('Adam', '1', 'adam.calcasola@gmail.com');
    expect(employee.getEmail()).toEqual('adam.calcasola@gmail.com');
});