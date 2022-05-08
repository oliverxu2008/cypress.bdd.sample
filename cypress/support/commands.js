// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
//


// Making selector timeout in some variable
const deafultWaitSelectorTimeout = Cypress.config('deafultWaitSelectorTimeout');
// This command will help you to type in input field
Cypress.Commands.add('smartType', function(elementSelector, inputValue) {
	cy.get(elementSelector, { timeout: deafultWaitSelectorTimeout }).type(inputValue);
});
// This command will help you to click on the button
Cypress.Commands.add('smartClick', function(elementSelector) {
	cy.get(elementSelector, { timeout: deafultWaitSelectorTimeout }).click();
});

// This command will help you to verify that element present
Cypress.Commands.add('verifyElementPresent', function(elementSelector) {
	cy.get(elementSelector, { timeout: deafultWaitSelectorTimeout }).its('length').should('be.gt', 0);
});

Cypress.Commands.add('clickLinkByText', function(linkText) {
    cy.get("a").contains(linkText).click();
});