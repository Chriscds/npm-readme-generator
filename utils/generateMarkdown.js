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

Install the necessary dependencies, use the following commands line:
```
// npm install
```

## Usage

Use this application by running:
```
// node index.js
```

## License

This project is licensed under the ${data.license} license.

## Contributing

## Tests

## Questions
${data.username} <!-- add link here -->
${data.email}
`;
}

module.exports = generateMarkdown;
