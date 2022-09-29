it('Demo QA site',function(){

cy.visit('https://demoqa.com/',{timeout:6000});
cy.contains('Elements').click();
cy.contains('Text Box').click();
cy.get('#userName').type("Pavithra");
cy.get('#userEmail').type("Pavi@gmail.com");
cy.get('#currentAddress').type("Nelamangala");
cy.get('#permanentAddress').type("Dabaspete");
cy.get('#submit').click();
})