describe('User can login to GoIt page', () => {
    beforeEach('go to page' , () => {
        cy.visit('https://www.edu.goit.global/account/login');
    });
    it('Successfully navigates to The GoIt page' , () => {
        cy.url().should('include' , 'account/login')
       });
    
    it('Successfully login to GoIt page', () => {
        cy.loginUser('user888@gmail.com','1234567890');

    });
});