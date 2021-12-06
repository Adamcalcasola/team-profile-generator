const Manager = require('../lib/Manager.js');

test('creates an manager object', () => {
    const manager = new Manager('Adam', '1', 'adam.calcasola@gmail.com', '1');
    expect(manager.name).toBe('Adam');
    expect(manager.id).toBe('1');
    expect(manager.email).toBe('adam.calcasola@gmail.com');
    expect(manager.office).toBe('1');
    expect(manager.role).toBe('Manager')
});

test('gets manager name', () => {
    const manager = new Manager('Adam', '1', 'adam.calcasola@gmail.com', '1');
    expect(manager.getName()).toEqual('Adam');
});

test('gets manager id', () => {
    const manager = new Manager('Adam', '1', 'adam.calcasola@gmail.com', '1');
    expect(manager.getId()).toEqual('1');
});

test('gets manager email', () => {
    const manager = new Manager('Adam', '1', 'adam.calcasola@gmail.com', '1');
    expect(manager.getEmail()).toEqual('adam.calcasola@gmail.com');
});

test('gets manager office number', () => {
    const manager = new Manager('Adam', '1', 'adam.calcasola@gmail.com', '1');
    expect(manager.getOffice()).toEqual('1');
});

test('gets manager role', () => {
    const manager = new Manager('Adam', '1', 'adam.calcasola@gmail.com', '1');
    expect(manager.getRole()).toEqual('Manager');
});