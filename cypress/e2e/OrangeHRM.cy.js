it('OrangeHRM ',function(){
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',{timeout:10000});
  cy.xpath("//h5[@class='oxd-text oxd-text--h5 orangehrm-login-title']").then(function(text1){
    cy.log(text1.text())
  cy.xpath("//input[@name='username']").type("Admin");
  cy.xpath("//input[@name='password']").type("admin123");
 cy.xpath("//button[@type='submit']").click();
 })
})