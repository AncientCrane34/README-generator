// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'None') {
    return ""
  } else {
    return "![License Badge](https://img.shields.io/badge/license-"+ license +"-blue.svg)"
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  console.log(license)
  if(license === 'None') {
    return ""
  } else {
    return "https://img.shields.io/badge/license-"+ license +"-blue.svg"
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'None') {
    return ""
  } else {
    return `${license}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
  ## Table of Contents
  [Description](#description)
  [Installation](#installation)
  [Usage](#usage)
  [Credits](#credits)
  [Testing](#testing)
  [Contact_Info](#contact_info)
  ## Description:
  ${data.description}
  ## Installation Instructions:
  ${data.installation}
  ## Usage:
  ${data.usage}
  ## License:
  ${renderLicenseSection(data.license)}
  ## Testing:
  ${data.test}
  ## Credits:
  ${data.credits}
  ### Contact_Info:
  Github: [${data.username}](https://github.com/${data.username})
  Email: ${data.email}
`;
}

module.exports = generateMarkdown;
