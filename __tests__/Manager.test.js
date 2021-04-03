const { test, expect } = require('@jest/globals');
const Manager = require('../lib/manager.js');

test('instance of manager to be an object', () => {
  const newManager = new Manager();
  expect(typeof(newManager)).toBe('object');
});

test('set office number via constructer argument', () => {
  const officeNum = 'suite 12';
  const newManager = new Manager('Harry', '1', 'Manager@test.com', officeNum);
  expect(newManager.officeNum).toBe(officeNum);
});

test('expect getRole() method to return manager', () => {
  const newManager = new Manager();
  expect(newManager.getRole()).toBe('Manager');
});