// funtion to generate license badge


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
