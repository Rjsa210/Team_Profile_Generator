const { expect, test } = require('@jest/globals');
const Intern = require('../lib/intern.js');

test('instance of intern returns an object', () => {
  const newIntern = new Intern();
  expect(typeof(newIntern)).toBe('object');
});

test('set school via constructor argument', () => {
  const school = 'Javascript University';
  const newIntern = new Intern('Harrold', '9', 'test@test.test', school);
  expect(newIntern.school).toBe(school);
});

test('getSchool() method returns school', () => {
  const school = 'Javascript university';
  const newIntern = new Intern('Harrold', '9', 'test@test.test', school);
  expect(newIntern.getSchool()).toBe(school);
});

test('getRole() method returns Intern', () => {
  const newIntern = new Intern();
  expect(newIntern.getRole()).toBe('Intern');
});


