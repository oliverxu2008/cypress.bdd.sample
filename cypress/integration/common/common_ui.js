/// <reference types="Cypress" />

import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';
import selectors from '../../config/selectors';

Given('I am on the loan calculator webpage', function () {
    cy.visit(Cypress.config('baseUrl'));
});

