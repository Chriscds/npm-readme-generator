// function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

  <!-- Licence Badge to go here -->
## Description
${data.description}

## Table of Contents
- [Installation](#Installation)
- [Usage](#Usage)
- [Licence](#Licence)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)

<details>
  <h2>Table of Contents</h2>
    <ol>
      <li><a href="#Installation">Installation</a></li>
      <li><a href="#Usage">Usage</a></li>
      <li><a href="#Licence">Licence</a></li>
      <li><a href="#Contributing">Contributing</a></li>
      <li><a href="#Tests">Tests</a></li>
      <li><a href="#Questions">Questions</a></li>
    </ol>
</details>

## Installation

Install the necessary dependencies, use the following commands line:


npm install





## Usage

Use this application by running:

// node index.js


## License

This project is licensed under the ${data.license} license.

## Contributing

## Tests

## Questions

Any questions relating to this repository can be opened in an issue, or feel free to contact me 
directly at ${data.email}.

Take a look at the rest of my work at [${data.username}](https://github.com/Chriscds)

`;
}

module.exports = generateMarkdown;
