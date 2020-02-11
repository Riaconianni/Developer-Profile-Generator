const axios = require("axios");
const inquirer = require("inquirer");
const fs = require("fs");
const questions = require("./questions");
const generateMarkdown = require("./markdown");

inquirer
  .prompt(questions)
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
