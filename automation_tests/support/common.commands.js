import routes from './constants/api';

Cypress.Commands.add("loadingHomePage",() => {
    var stubUrl = routes.onecall
    cy.intercept('GET',stubUrl).as('onecall')
    cy.visit('')
    cy.wait('@onecall').its('response.statusCode').should('eq', 200);
})