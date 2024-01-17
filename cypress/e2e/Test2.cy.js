describe('User can login to GoIt page', () => {
    beforeEach('go to page' , () => {
        cy.visit('https://www.edu.goit.global/account/login');
    });
    it('Successfully navigates to The GoIt page' , () => {
        cy.url().should('include' , 'account/login')
       });
    
    it('Successfully login to GoIt page', () => {
        cy.loginUser('testowyqa@qa.team',' QA!automation-1');
    
        
         cy.url().should('include', 'homepage');
        cy.get('.next-1n2ne4o').should('have.text','Study without interruption and get achievements. You can do it!');
    });
});