/// <reference types="Cypress" />

import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';
import selectors from '../../../config/selectors';

When('I select home loan Application Type as {string}', function (applyType) {
    switch(applyType) {
        case "single":
            cy.get(selectors.homeLoanCalculator.applicationTypeSingle)
                .click()
            break;
        case "joint":
            cy.get(selectors.homeLoanCalculator.applicationTypeJoint)
                .click()
            break;
    }
});

Then('I select number of dependants as {string}', function (dependants) {
    cy.get(selectors.homeLoanCalculator.dependantsNumber)
        .select(dependants)
});

Then('I select home loan borrow type as {string}', function (borrowtype) {
    switch(borrowtype) {
        case "home":
            cy.get(selectors.homeLoanCalculator.borrowTypeHome)
                .click()
            break;
        case "investment":
            cy.get(selectors.homeLoanCalculator.borrowTypeInvestment)
                .click()
            break;
    }
  });

Then('I set earning {string} as {string}', function (earningType, earning) {
    switch (earningType) {
        case "annual income":
            cy.get(selectors.homeLoanCalculator.annualIncome)
                .type(earning)
            break;
        case "annual other income":
            cy.get(selectors.homeLoanCalculator.annualOtherIncome)
                .type(earning)
            break;
    }  
});

Then('I set expense {string} as {string}', function (expenseType, expense) {
    switch(expenseType) {
        case "monthly living expenses":
            cy.get(selectors.homeLoanCalculator.monthlyLivingExpense)
                .type(expense)
            break;
        case "current home loan monthly replayments":
            cy.get(selectors.homeLoanCalculator.currentHomeLoanRepayments)
                .type(expense)
            break;
        case "other loan monthly repayments":
            cy.get(selectors.homeLoanCalculator.currentOtherLoanRepayments)
                .type(expense)
            break;
        case "other monthly commitments":
            cy.get(selectors.homeLoanCalculator.otherMonthlyCommitments)
                .type(expense)
            break;
        case "total credit card limits":
            cy.get(selectors.homeLoanCalculator.totalCreditCardLimits)
                .type(expense)
            break;
    }  
});

Then('I click the button {string}', function (btnText) {
    switch(btnText) {
        case "Work out how much I could borrow":
            cy.get(selectors.homeLoanCalculator.btnBorrowCalculator)
                .click()
            break;
        case "Start over":
            cy.get(selectors.homeLoanCalculator.btnStartOver)
                .click()
            break;
    }
});

Then('I should see the loan estimate result as {string}', function (expectedEstimate) {
    cy.waitFor(5000) // force wait before checking the result
    cy.get(selectors.homeLoanCalculator.loanEstimateResult)
        .invoke('text')
        .should('equal', expectedEstimate)
});

Then('I can see the page has been reset', function () {
    cy.waitFor(2000) // force wait before checking the result
    cy.get(selectors.homeLoanCalculator.annualIncome)
        .invoke('attr', 'value')
        .should('eq', '0')
    cy.get(selectors.homeLoanCalculator.loanEstimateResult)
        .invoke('text')
        .should('eq', '$0')
});
