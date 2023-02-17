// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

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

          ## Usage

          ## Licence
          ${data.license}

          ## Contributing

          ## Tests

          ## Questions
          ${data.username} <!-- add link here -->
          ${data.email}
`;
}

module.exports = generateMarkdown;
