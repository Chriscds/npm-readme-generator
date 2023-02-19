// const badgeRender = licenseBadge();
// // function to generate license badges
// function licenseBadge(license) {
//     switch (license) {
//         case 'MIT':
//             return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
//             break;
//         case 'Apache':
//             return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
//             break;
//         case 'GPL':
//             return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
//             break;
//         case 'Mozilla':
//             return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
//             break;
//         case 'None':
//             return "You have not selected a license for this project.";
//             break;
//             default:
//                 console.log("Unknown license");
//                 break;
//     }

function createBadge(data){
  const licenseChoice = data.license;
  if (licenseChoice === 'MIT') {
    licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if (licenseChoice === 'Apache') {
    licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else if (licenseChoice === 'GPL') {
    licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  } else {
    licenseBadge = ''
  } return licenseBadge;
};// }


// function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

${createBadge(data)}

## Description
${data.description}

## Table of Contents
- [Installation](#Installation)
- [Usage](#Usage)
- [Licence](#Licence)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)

## Installation

Install the necessary dependencies, use the following command line:

<pre>
  <code>npm install</code>
</pre>

## Usage

Use this application by running the below command line:

<pre>
  <code>node index.js</code>
</pre>

## License

This project is licensed under ${data.license}.

## Contributing

## Tests

## Questions

Any questions relating to this repository can be opened in an issue, or feel free to contact me 
directly at ${data.email}.

Take a look at the rest of my work at [${data.username}](https://github.com/${data.username})

`;
}

module.exports = generateMarkdown;
