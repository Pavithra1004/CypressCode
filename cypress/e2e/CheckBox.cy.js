it('Demo QA site',function(){
cy.visit('https://demoqa.com/');
cy.contains('Elements').click();
cy.contains('Check Box').click();
cy.get('.rct-checkbox > .rct-icon').click()
})