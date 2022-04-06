// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const year = new Date().getFullYear();

function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT License':
      return "https://img.shields.io/badge/license-MIT-red";

    case 'GPL v3':
      return "https://img.shields.io/badge/License-GPLv3-blue.svg";

    case 'The Unlicense':
      return "https://img.shields.io/badge/license-The%20Unlicense-blue";
    default:
      return "";
  };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = "";

  switch (license) {
    case "MIT License":
      link = "https://img.shields.io/badge/license-MIT-red";
      break;
    case "GPL v3":
      link = "https://www.gnu.org/licenses/gpl-3.0";
      break;
    case "The Unlicense":
      link = "https://img.shields.io/badge/license-The%20Unlicense-blue";
      break;
    default:
      return "";
  };

  let badge = renderLicenseBadge(license);
  let licenseBadge = "[![License: " + license + "](" + badge + ")](" + link + ")";

  return licenseBadge;
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, name) {
  let licenseText = "";

  if (!license) {
    return "";
  } else {
    switch(license) {

      case 'MIT License':
      licenseText = `Copyright ${year} ${name}

        Permission is hereby granted, free of charge, to any person obtaining a copy of this 
        software and associated documentation files (the "Software"), to deal in the Software 
        without restriction, including without limitation the rights to use, copy, modify, 
        merge, publish, distribute, sublicense, and/or sell copies of the Software, and to 
        permit persons to whom the Software is furnished to do so, subject to the following 
        conditions:
        
        The above copyright notice and this permission notice shall be included in all 
        copies or substantial portions of the Software.
        
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
        INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR 
        PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE 
        FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR 
        OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER 
        DEALINGS IN THE SOFTWARE.`;
      break;
      
    case 'GPL v3':
      licenseText = `Copyright ${year} ${name}
      
      This program is free software: you can redistribute it and/or modify
        it under the terms of the GNU General Public License as published by
        the Free Software Foundation, either version 3 of the License, or
        (at your option) any later version.
    
        This program is distributed in the hope that it will be useful,
        but WITHOUT ANY WARRANTY; without even the implied warranty of
        MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
        GNU General Public License for more details.
    
        You should have received a copy of the GNU General Public License
        along with this program.  If not, see <https://www.gnu.org/licenses/>.`;

      break;

    case 'The Unlicense':
      licenseText = `Copyright ${year} ${name}
      
      This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.`;

break;

default:
  return "";
    };
  };
  return licenseText;
};

function renderCreditSection(confirmCredits, data) {
  if (!confirmCredits) {
    return `
    There are no extra contributers to list.
    `;
  } else {
    return `
    ${data}
    `;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseLink(data.license)}

  ## Table-of-Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Questions](#questions)
  * [Contributing](#contributing)
  
  ## Discription

  ${data.description}
  
  ## Installation
  
  ${data.installation}
  
  ## Usage

  ${data.usage}

  ## Contribution

  ${renderCreditSection(data.confirmCredits, data.credits)}

  ## Questions

  Any questions can be directed at the primary author via: <br>
  [GitHub](https://github.com/${data.username}) <br>
  [Contact Me!](mailto:${data.email})

  ## License
  ${renderLicenseSection (data.license, data.credits)}
`;
}

module.exports = generateMarkdown;
