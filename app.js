const inquirer = require('inquirer');
const fs = require('fs');

inquirer.registerPrompt('datetime', require('inquirer-datepicker-prompt'))

inquirer
    .prompt([{
        type: "datetime",
        name: "confirmationDate",
        message: "Thank-you for using readMe assistant! To continue, please confirm the current date: ",
        format: ['mm', '/', 'dd', '/', 'yyyy']
    }
        ,
    {
        type: "input",
        name: "projectTitle",
        message: "Please provide an accurate and concise title for your project"

    },
    {
        type: "input",
        name: "installation",
        message: "What sort of steps are required to install your project?"

    },

    {
        type: "input",
        name: "projectDescription",
        message: 'Please describe to me what your project aims to achieve.'
    },

    {
        type: "input",
        name: "demo",
        message: 'Within your projects repository, include a screenshot of your project in action. Then, here provide a link to its path'

    },

    {
        type: "input",
        name: "credits",
        message: 'Please acredit anyone that may have contributed to your project and or links to third party assets you have used.'
    },

    {

        type: "list",
        name: "license",
        choices: [new inquirer.Separator(), "MIT License", new inquirer.Separator(), "GNU General Public License v3.0", new inquirer.Separator(), "Mozzila Public License 2.0", new inquirer.Separator(), "Apache License 2.0", new inquirer.Separator(), "Public Domain (The Unlicense)"]

    },

    {
        type: "input",
        name: "contactInfoGit",
        message: "Include a link to your GitHub profile"
    },

    {
        type: "input",
        name: "contactInfoEmail",
        message: "Please include your email address"
    },

    {
        type: "input",
        name: "contactInfoOther",
        message: "Optionally, if you have another form of contact you'd like to include please enter it, otherwise leave this blank."

    }




    ])
    .then(data => {
        
return `# ${data.projectTitle}
## Table of Contents:
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage) 
* [License](#license)
* [Contributors](#contributors)
* [Contact](#contact)
### Description:
${data.projectDescription}
### Installation:
${data.installation}
### Usage:
![alt text]${data.demo}
### License:
${data.license}
### Contributors
${data.credits}
### Contact
If you have any questions, comments or would like to work with me, here is how you can do so:
GitHub: ${data.contactInfoGit}
Email: ${data.contactInfoEmail}
[OPTIONAL CONTACT]: ${data.contactInfoOther}
Project has been created on ${data.confirmationDate}`
        

    })
    .then((data) => fs.writeFile("myReadMe.md", data, (err) => {}))



    