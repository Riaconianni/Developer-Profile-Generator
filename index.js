const axios = require("axios");
const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = readMeData => {
  return `
  # ${readMeData.title}

  ## Description
  ${readMeData.description}

  ## Installation
  ${readMeData.installation}

  ## Usage
  ${readMeData.usage}

  ## Credits
 ### ${readMeData.username}

  Email: [${readMeData.email}](mailto:${readMeData.email})
  ![Avatar for Github User](${readMeData.avatar_url})

  ## License
  ${readMeData.license}

  ## Badges
  ![made-with-Markdown](https://img.shields.io/badge/Made%20with-Markdown-1f425f.svg)

  ![made-with-node.js](https://img.shields.io/badge/Made%20with-Node.js-brightgreen)
  `;
};

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your project title?",
      name: "title"
    },
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
