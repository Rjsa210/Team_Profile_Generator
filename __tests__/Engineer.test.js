const { expect, test } = require('@jest/globals');
const Engineer = require('../lib/engineer.js');


test('instance of engineer to be an object', () => {
  const newEngineer = new Engineer();
  expect(typeof(newEngineer)).toBe('object');
});

test('set github via constructor argument', () => {
  const github = 'TestEngineer';
  const newEngineer = new Engineer('Bert', '3', 'enginer@test.test', github);
  expect(newEngineer.github).toBe(github);  
});

test('getGitHub() method returns GitHub url', () => {
  const github = 'TestEngineer';
  const newEngineer = new Engineer('Bert', '3', 'enginer@test.test', github);
  expect(newEngineer.getGitHub()).toBe(`https://github.com/${github}`)
})

test('getRole method returns engineer', () => {
  const newEngineer = new Engineer();
  expect(newEngineer.getRole()).toBe('Engineer');
});

