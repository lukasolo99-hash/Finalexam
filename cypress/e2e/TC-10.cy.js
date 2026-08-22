describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://testzootopia.loremipsum.ge/ka')
  cy.get('.menu-pop > .rprof').click()
  cy.get('.avtorization')
  .contains('ავტორიზაცია').should('be.visible')
  cy.get('[name="login_email"]').type('wrong@mail.com')
  cy.get('[name="login_password"]').type('wrongpassword')
  cy.get('.avtorization > .input-shablon > .form-button').click()
  
  
 
 
 
 
 
 
 
 
  })
})