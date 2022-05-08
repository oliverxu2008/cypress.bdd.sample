# Cypress Test Framework with BDD Cucumber

## Project Description:
1. Framework : Cypress
2. BDD: Cypress-Cucumber-Preprocessor
3. Jenkins Reporting: Allure

## Project Structure
- cypress/integration/: contains all the tests. e.g. BDD feature file & the step definition file
- cypress/config/cypress.*.json : defines baseUrl and other environment variables
- cypress/config/selectors.json : defines the css selectors or xpath selectors for web elements
- cypress/plugins : the 3rd party plugins support 
- cypress/support : defines some helper commands as well as global configuration
- testResults: allure test results report

```
.
├── README.md
├── cypress
│   ├── config
│   │   ├── cypress.prod.json
│   │   ├── cypress.stg.json
│   │   └── selectors.json
│   ├── fixtures
│   │   └── example.json
│   ├── integration
│   │   ├── All.features
│   │   ├── common
│   │   │   └── common_ui.js
│   │   └── loan
│   │       ├── loanCalculate
│   │       │   └── loanCalculate.js
│   │       └── loanCalculate.feature
│   ├── plugins
│   │   └── index.js
│   └── support
│       ├── commands.js
│       └── index.js
├── cypress.json
├── node_modules
├── package-lock.json
├── package.json
└── testResults
```

## Install
`npm install`

## Running the tests

### Running in command line

```
npm run cy:open
npm run cy:open -- --env configFile=prod
npm run cy:run:chrome
npm run cy:run:chrome:headed
npm run cy:run -- --spec cypress/integration/loan/loanCalculate.feature
npm run cy:run:jenkins -- --spec cypress/integration/loan/loanCalculate.feature
npm run cy:run:jenkins:prod -- --spec cypress/integration/loan/loanCalculate.feature
```

### How to generate & open allure test report
```
npm run singlefeature
npm run allure:report
```
