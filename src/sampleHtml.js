const htmlAdd = require('../index');


const htmlSample = ({
  template: `<!DOCTYPE html>
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
  
  </html>`,
  manager: `<div class="column is-one-quarter">
  <div class="card m-6">
    <header class="card-header  has-background-info">
      <p class="card-header-title has-text-info-light">
        \${manager.name}
      </p>
    </header>

    <header class="card-header">
      <p class="card-header-title">
        \${manager.getRole()}
      </p>
    </header>
    <div class="card-content">
      <div class="content">
        <ul>
          <li>ID: ${manager.id}</li>
          <li>Email: <a href="${manager.email}">${manager.email}</a></li>
          <li>Office Number: ${manager.officeNum}</li>
        </ul>
      </div>
    </div>
  </div>
</div>`,
  engineer: `div class="column is-one-quarter">
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
          <li>Email: <a href="${engineer.email}">${engineer.email}</a></li>
          <li>GitHub: <a href="@{engineer.getGitHub}">${engineer.github}</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>`,
  intern: `<div class="column is-one-quarter">
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
          <li>Email: <a href="${intern.email}">${intern.email}</a></li>
          <li>School: ${intern.getSchool()}</li>
        </ul>
      </div>
    </div>
  </div>
</div>`
  
});

module.exports = htmlSample;