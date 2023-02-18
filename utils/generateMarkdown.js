// funtion to generate license badge
const license = process.argv[5];

// console.log(license);
// function generateLicense(data, license) {
//   // badge objects and urls
//   const badge = {
//     mit: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
//     apache: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
//     gpl: '![License: GPL v3](https://www.gnu.org/licenses/gpl-3.0)',
//     mozilla: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
//     none: '',
//   }
//    return badge[data]
// }


// function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}



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

Take a look at the rest of my work at [${data.username}](https://github.com/Chriscds)

`;
}

module.exports = generateMarkdown;
