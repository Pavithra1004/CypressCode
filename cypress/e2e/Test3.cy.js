it("Google",function()
{
    cy.visit('https://www.google.com/',{timeout: 4000});
    cy.xpath("//input[@class='gLFyf gsfi']").type("data");
    cy.xpath("//input[@value='Google Search'  and @aria-label='Google Search' ]/ancestor::div[@class='CqAVzb lJ9FBc']").click();

})