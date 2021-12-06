const Engineer = require('../lib/Engineer.js');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Adam', '1', 'adam.calcasola@gmail.com', 'Adamcalcasola');
    expect(engineer.name).toBe('Adam');
    expect(engineer.id).toBe('1');
    expect(engineer.email).toBe('adam.calcasola@gmail.com');
    expect(engineer.github).toBe('Adamcalcasola');
    expect(engineer.role).toBe('Engineer')
});

test('gets engineer name', () => {
    const engineer = new Engineer('Adam', '1', 'adam.calcasola@gmail.com', 'Adamcalcasola');
    expect(engineer.getName()).toEqual('Adam');
});

test('gets engineer id', () => {
    const engineer = new Engineer('Adam', '1', 'adam.calcasola@gmail.com', 'Adamcalcasola');
    expect(engineer.getId()).toEqual('1');
});

test('gets engineer email', () => {
    const engineer = new Engineer('Adam', '1', 'adam.calcasola@gmail.com', 'Adamcalcasola');
    expect(engineer.getEmail()).toEqual('adam.calcasola@gmail.com');
});

test('gets engineer Github account', () => {
    const engineer = new Engineer('Adam', '1', 'adam.calcasola@gmail.com', 'Adamcalcasola');
    expect(engineer.getGithub()).toEqual('Adamcalcasola');
});

test('gets engineer role', () => {
    const engineer = new Engineer('Adam', '1', 'adam.calcasola@gmail.com', 'Adamcalcasola');
    expect(engineer.getRole()).toEqual('Engineer');
});