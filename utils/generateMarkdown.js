// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  <!-- Licence Badge to go here -->
          ## Description

          ## Table of Contents
          - [Installation](#Installation)
          - [Usage](#Usage)
          - [Licence](#Licence)
          - [Contributing](#Contributing)
          - [Tests](#Tests)
          - [Questions](#Questions)

          ## Installation

          ## Usage

          ## Licence

          ## Contributing

          ## Tests

          ## Questions
`;
}

module.exports = generateMarkdown;
