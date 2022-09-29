/// <reference types="cypress"/>

it('Google search',function(){

cy.visit('https://google.com')
cy.get('.gLFyf').type('automation step by step procedure')
cy.contains('Google Search').click()

})
