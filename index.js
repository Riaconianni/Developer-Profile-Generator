const axios = require("axios");
const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = readMeData => {
  return `
  # ${readMeData.username}
  
  ![Avatar for Github User](${readMeData.avatar_url})

  ## Info
  Email: [${readMeData.email}](mailto:${readMeData.email})

  ## Description
  ${readMeData.description}

  ## Installation
  ${readMeData.installation}

  ## Usage
  ${readMeData.usage}

  ## License
  ${readMeData.license}
  `;
};

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your github username?",
      name: "username"
    },
    {
      message: "What is your email?",
      type: "input",
      name: "email"
    },
    {
      message: "Please describe your project:",
      type: "input",
      name: "description"
    },
    {
      message: "How does the user install the app?",
      type: "input",
      name: "installation"
    },
    {
      message: "How does the user use the app?",
      type: "input",
      name: "usage"
    },
    {
      message: "What licenses did you use?",
      choices: ["Apache License 2.0", "GNU GPLv3", "MIT", "ISC"],
      type: "list",
      name: "license"
    }
  ])
  .then(inquirerResponse => {
    const queryUrl = `https://api.github.com/users/${inquirerResponse.username}`;
    axios.get(queryUrl).then(({ data: { avatar_url } }) => {
      const readMeData = { ...inquirerResponse, avatar_url };
      const finishedMarkdown = generateMarkdown(readMeData);

      fs.writeFile("./readme.md", finishedMarkdown, err => {
        if (err) {
          return console.log(err);
        }
        console.log("Success!");
      });
    });
  });
