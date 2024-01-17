describe('User can visit to GoIT page' , () => {
   it('Successfully navigates to The GoIt page' , () => {
    cy.visit('https://www.edu.goit.global/account/login');
    
    cy.url().should('include' , 'account/login')
   
   });
});
