const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');



const teamMembers = [];
let htmlAdd = '';

//create a new class called Generator.
class Generator {
  constructor() {
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

  //selectNext() method
  selectNext() {
    //Prompt what would you like to do next? add an engineer, add an Intern, finished.
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
          message: 'What is the intern\'s ID?',
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

  //seperate teamMembers into 3 different Array's by role
  finished() {
    console.log(teamMembers);
    const manager = teamMembers.filter(function (teamMember) {
      return teamMember.getRole() === 'Manager'
    })
    const engineers = teamMembers.filter(function (teamMember) {
      return teamMember.getRole() === 'Engineer'
    })
    const interns = teamMembers.filter(function (teamMember) {
      return teamMember.getRole() === 'Intern';
    });
    this.appendManager(manager, engineers, interns);
  }

  appendManager(manager, engineers, interns) {

    manager.forEach(manager => {
      htmlAdd += `<div class="column is-one-quarter">
      <div class="card m-6">
        <header class="card-header  has-background-info">
          <p class="card-header-title has-text-info-light">
            ${manager.name}
          </p>
        </header>
    
        <header class="card-header">
          <p class="card-header-title">
            ${manager.getRole()}
          </p>
        </header>
        <div class="card-content">
          <div class="content">
            <ul>
              <li>ID: ${manager.id}</li>
              <li>Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
              <li>Office Number: ${manager.officeNum}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>`;

      this.appendEngineers(engineers, interns);
    });

  }

  appendEngineers(engineers, interns) {

    engineers.forEach(engineer => {
      htmlAdd += `<div class="column is-one-quarter">
      <div class="card m-6">
        <header class="card-header  has-background-info">
          <p class="card-header-title has-text-info-light">
            ${engineer.name}
          </p>
        </header>
    
        <header class="card-header">
          <p class="card-header-title">
            ${engineer.getRole()}
          </p>
        </header>
        <div class="card-content">
          <div class="content">
            <ul>
              <li>ID: ${engineer.id}</li>
              <li>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
              <li>GitHub: <a href="${engineer.getGitHub()}">${engineer.github}</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>`;
      this.appendInterns(interns);
    });
  }

  appendInterns(interns) {
    interns.forEach(intern => {
      htmlAdd += `<div class="column is-one-quarter">
      <div class="card m-6">
        <header class="card-header  has-background-info">
          <p class="card-header-title has-text-info-light">
            ${intern.name}
          </p>
        </header>
    
        <header class="card-header">
          <p class="card-header-title">
            ${intern.getRole()}
          </p>
        </header>
        <div class="card-content">
          <div class="content">
            <ul>
              <li>ID: ${intern.id}</li>
              <li>Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
              <li>School: ${intern.getSchool()}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>`;
      this.createHtml();
    })
  }

  createHtml() {
    const htmlSample = `<!DOCTYPE html>
      <html lang="en">
      
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css">
        <title>Team Profile</title>
      </head>
      
      <body>
        <section class="hero is-danger">
          <div class="hero-body has-text-centered">
            <p class="title  has-text-danger-light">
              My Team
            </p>
            <p class="subtitle">
              We are special
            </p>
      
          </div>
        </section>
        <section>
          <div class="container">
            <div class="columns is-multiline">
              <!-- this is where the cards will be appended -->
              ${htmlAdd}
             
      
    
      
              <!-- end of column container -->
            </div>
          </div>
        </section>
        </div>
      
      </body>
      
      </html>`
    fs.writeFileSync('myTeam.html', htmlSample);
  };



}


const newGenerator = new Generator;
newGenerator.init();





//give generator a finished method

//render Manager

//render 



