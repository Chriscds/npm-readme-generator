// function to generate license badges
function createBadge(data){
  const licenseChoice = data.license;
  if (licenseChoice === 'MIT') {
    licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if (licenseChoice === 'Apache') {
    licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else if (licenseChoice === 'GPL') {
    licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  }  else if (licenseChoice === 'Mozilla') {
    licenseBadge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  } else {
    licenseBadge = ''
  } return licenseBadge;
};

// function to display license chosen information in the License section
function licenseInfo(data) {
  const licenseName = data.license;
  if (licenseName === 'MIT') {
    licenseDescription = 'This project is licensed under the [MIT](https://opensource.org/licenses/MIT) License.'
  } else if (licenseName === 'Apache') {
    licenseDescription = 'This project is licensed under the [Apache](https://opensource.org/licenses/Apache-2.0) License.'
  } else if (licenseName === 'GPL') {
    licenseDescription = 'This project is licensed under the [GPL](https://www.gnu.org/licenses/gpl-3.0) License.'
  } else if (licenseName === 'Mozilla') {
    licenseDescription = 'This project is licensed under the [Mozilla](https://opensource.org/licenses/MPL-2.0) License.'
  } else if (licenseName === 'None') {
    licenseDescription = 'This project does not have a license.'
  } else {
    licenseDescription = ''
  } return licenseDescription;
};

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


${licenseInfo(data)}

## Contributing

Contribute to the project using the following:

1. Fork this project.

2. Create a feature branch:

<pre>
  <code>git checkout -b feature/Your_Branch_Name</code>
</pre>

3. Commit changes:

<pre>
  <code>git commit -m "Your changes"</code>
</pre>

4. Push to the Main branch:

<pre>
  <code>git push origin feature/Your_Branch_Name</code>
</pre>

5. Open a pull request.


## Tests

## Questions

Any questions relating to this repository can be opened in an issue, or feel free to contact me 
directly at ${data.email}.

Please take a look at the rest of my work at: [${data.username}](https://github.com/${data.username})

`;
}

module.exports = generateMarkdown;
