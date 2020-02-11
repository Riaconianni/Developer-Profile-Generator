const generateMarkdown = readMeData => {
  return `
  # ${readMeData.title}

  ## Description
  ${readMeData.description}

  ## Installation
  ${readMeData.installation}

  ## Usage
  ${readMeData.usage}

  ## Credits
 ### ${readMeData.username}

  Email: [${readMeData.email}](mailto:${readMeData.email})
  ![Avatar for Github User](${readMeData.avatar_url})

  ## License
  ${readMeData.license}

  ## Badges
  ![made-with-Markdown](https://img.shields.io/badge/Made%20with-Markdown-1f425f.svg)

  ![made-with-node.js](https://img.shields.io/badge/Made%20with-Node.js-brightgreen)
  `;
};

module.exports = generateMarkdown;