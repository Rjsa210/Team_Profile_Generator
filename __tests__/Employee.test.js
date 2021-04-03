const { test, expect } = require('@jest/globals');
const Employee = require('../lib/employee.js');

test('initiate employee instance to be an object', () => {
  const newEmployee = new Employee();
  expect(typeof(newEmployee)).toBe('object')
});

test('set name via constructor argument', () => {
  const name = 'bill';
  const newEmployee = new Employee(name);
  expect(newEmployee.name).toBe(name);

});

test('set ID via constructor argument', () => {
  const id = '7';
  const newEmployee = new Employee('bill', id);
  expect(newEmployee.id).toBe(id);
});

test('set email via constructor argument', () => {
  const email = 'test@test.test';
  const newEmployee = new Employee('bill', '7', email);
  expect(newEmployee.email).toBe(email);
});

test('get name from getName() method', () => {
  const name = 'bill';
  const newEmployee = new Employee(name);
  expect(newEmployee.getName()).toBe(name);
})

test('get id from getId() method', () => {
  const id = '7';
  const newEmployee = new Employee('bill', id);
  expect(newEmployee.getId()).toBe(id); 
});

test('get email from getEmail() method', () => {
  const email = 'test@test.test';
  const newEmployee = new Employee('Bill', '7', email);
  expect(newEmployee.getEmail()).toBe(email);
});

test('get role from getRole() method', () => {
  const role = 'employee';
  const newEmployee = new Employee('bill', '7', 'test@test.test');
  expect(newEmployee.getRole()).toBe(role);
});

