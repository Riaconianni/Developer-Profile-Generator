const questions = [
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
]

module.exports = questions;