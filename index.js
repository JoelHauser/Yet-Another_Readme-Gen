// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the name of your repository? (required)",

    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter your github repository name!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "What is your repository about? (required)",

    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please tell us what your repository is about!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "installation",
    message: "What is the installation process? (required)",

    validate: installInput => {
        if (installInput){
            return true;
        } else {
            console.log('Please list the installation process');
            return false;
        }
    }
  },
  {
    type: "input",
    name: "inputInstructions",
    message:"List instructions for how to use this application. Please be descriptive!",

    validate: instructionsInput => {
        if (instructionsInput) {
            return true;
        } else {
            console.log('Please enter how to use this application!');
            return false;
        }
    }
  },
  {
    type: "confirm",
    name: "confirmCredits",
    message: "List your collaborators!",
  },
  {
    type: "input",
    name: "credits",
    message: "Please list those who have worked on this application!",

    when: ({ confirmCredits }) => {
      if (confirmCredits) {
        return true;
      } else {
        return false;
      }
    },
  },
  {
    type: "list",
    name: "license",
    message: "Please choose a license. (required)",
    choices: ["MIT License", "GPL v3", "The Unlicense", "No license"],

    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please choose a license.");
        return falsel;
      }
    },
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How is this application used?',

    validate: (inputUsage) => {
      if (inputUsage) {
        return true;
      } else {
        console.log('Please tell us how this applpication is used');
        return false;
      }
    }
  },
  {
    type: "input",
    name: "username",
    message: "What is your GitHub username?",

    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter your username!");
        return false;
      }
    },
  }];

const writeFile = (fileContent) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/generated-README.md", fileContent, (err) => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: "README.md created!",
      });
    });
  });
};

const init = () => {
  return inquirer.prompt(questions).then((readmeData) => {
    return readmeData;
  });
};

init()
  .then((readmeData) => {
    return generateMarkdown(readmeData);
  })
  .then((pageMD) => {
    return writeFile(pageMD);
  })
  .then((writeFileResponse) => {
    console.log(writeFileResponse.message);
  })
  .catch((err) => {
    console.log(err);
  });
