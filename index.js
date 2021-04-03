const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const teamMembers = [];

//create a new class called Generator.
class Generator {
  constructor(){
  }
  // give Generator an Init Method
  // init method prompts user for manager information
  init() {
    inquirer
      .prompt([
        //what is the Team Managers name? validate string
        {
          type: 'input',
          message: 'What is the team manager\'s name?',
          name: 'name', 
        },
        //what is the Team Managers ID? validate number
        {
          type: 'input',
          message: 'What is the team manager\'s ID?',
          name: 'id',
        },
        //what is the Team managers Email address validate email address
        {
          type: 'input',
          message: 'What is the team manager\'s e-mail address?',
          name: 'email',
        },
        //what is the Team manager's Office number
        {
          type: 'input',
          message: 'What is the team manager\'s office number?',
          name: 'office',
        },
      ])
      .then((response) => {
        //create new manager object and push to teamMembers Array
        const newManager = new Manager(response.name, response.id, response.email, response.office);
        teamMembers.push(newManager);
        this.selectNext();
      })

  }

  selectNext() {
    //selectNext() method
//Prompt what would you like to do next? add an engineer, add an Intern, finished.
//if add engineer 
//else if add Intern
//else finished 
    inquirer
      .prompt([
        {
          type: 'list',
          message: 'What would you like to do next?',
          name: 'next',
          choices: [
            'Add an engineer',
            'Add an intern',
            'Finished',
          ],
        }
      ])
      .then((response) => {
        if (response.next === 'Add an engineer') {
          this.addEngineer();
        } else if (response.next === 'Add an intern') {
          this.addIntern();
        } else {
          this.finished();
        }

      })
  }

  //give Generator an addEngineer() method
  addEngineer() {
    console.log('Ok, Lets add a new engineer');
    inquirer
      .prompt([
        //what is the engineer's name? validate string
        {
          type: 'input',
          message: 'What is the engineer\'s name?',
          name: 'name', 
        },
        //what is the engineer's ID? validate number
        {
          type: 'input',
          message: 'What is the engineer\'s ID?',
          name: 'id',
        },
        //what is the engineer's Email address validate email address
        {
          type: 'input',
          message: 'What is the engineer\'s e-mail address?',
          name: 'email',
        },
        //what is the engineer's github username
        {
          type: 'input',
          message: 'What is the engineer\'s GitHub username?',
          name: 'github',
        },
      ])
      .then((response) => {
        //create new manager object and push to teamMembers Array
        const newEngineer = new Engineer(response.name, response.id, response.email, response.github);
        teamMembers.push(newEngineer);
        this.selectNext();
      })
  }


  //give Generator an addIntern() method
  addIntern() {
    
    console.log('OK, lets add a new intern')
    inquirer
      .prompt([
        //what is the intern's name? validate string
        {
          type: 'input',
          message: 'What is the intern\'s name?',
          name: 'name', 
        },
        //what is the intern's ID? validate number
        {
          type: 'input',
          message: 'What is theinternr\'s ID?',
          name: 'id',
        },
        //what is the intern's Email address validate email address
        {
          type: 'input',
          message: 'What is the intern\'s e-mail address?',
          name: 'email',
        },
        //what is the intern's school
        {
          type: 'input',
          message: 'What school did the intern attend?',
          name: 'school',
        },
      ])
      .then((response) => {
        //create new manager object and push to teamMembers Array
        const newIntern = new Intern(response.name, response.id, response.email, response.school);
        teamMembers.push(newIntern);
        this.selectNext();
      })
  }

  finished() {
    console.log(teamMembers);
  }
}

const newGenerator = new Generator;
newGenerator.init();






//give generator a finished method

//render Manager

//render 



