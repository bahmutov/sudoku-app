# sudoku-app [![CI](https://github.com/bahmutov/sudoku-app/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/bahmutov/sudoku-app/actions/workflows/ci.yml)

> E2E and React component testing using Cypress v10

![Sudoku application running locally](./images/app.png)

Original Sudoku game copied from [https://github.com/raravi/sudoku](https://github.com/raravi/sudoku) and you can play it at [https://sudoku-raravi.vercel.app/](https://sudoku-raravi.vercel.app/).

## Presentation

Here is a typical presentation showing E2E and component testing

- the game working locally
- install
- e2e test at first
- visit the page, check the status, check the cells [loads.cy.js](./cypress/e2e/loads.cy.js)
- check the modes [modes.cy.js](./cypress/e2e/modes.cy.js)
- play the game using the hint [hint.cy.js](./cypress/e2e/hint.cy.js)
- start the component testing
  - Numbers [Numbers.cy.js](./src/components/Numbers.cy.js)
    - CSS
    - pass the click handler
    - show the selected number using provider
- different viewports and screenshots [StatusSection.cy.js](./src/components/layout/StatusSection.cy.js)
- run Cypress tests using GitHub Actions [ci.yml](./.github/workflows/ci.yml)
- maybe timer format unit tests

## Small print

Author: Gleb Bahmutov &lt;gleb.bahmutov@gmail.com&gt; &copy; 2022

- [@bahmutov](https://twitter.com/bahmutov)
- [glebbahmutov.com](https://glebbahmutov.com)
- [blog](https://glebbahmutov.com/blog)
- [videos](https://www.youtube.com/glebbahmutov)
- [presentations](https://slides.com/bahmutov)
- [cypress.tips](https://cypress.tips)
- [Cypress Tips & Tricks Newsletter](https://cypresstips.substack.com/)
- [my Cypress courses](https://cypress.tips/courses)

License: MIT - do anything with the code, but don't blame me if it does not work.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/sudoku-app/issues) on Github

## MIT License

Copyright (c) 2022 Gleb Bahmutov &lt;gleb.bahmutov@gmail.com&gt;

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
