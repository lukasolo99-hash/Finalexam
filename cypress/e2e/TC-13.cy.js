describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://testzootopia.loremipsum.ge/ka')
  cy.login("finale@exam.com", "12345678" )
  cy.get('.menu-pop > .iprof').click()
  cy.get(':nth-child(1) > .editt').click()
  cy.get(':nth-child(1) > .redinput').clear().type('luka solo')
  cy.get(':nth-child(1) > .save-personal > img').click()
  cy.reload()
  cy.get(':nth-child(1) > .redinput').should('have.value', 'luka solo')
  
  
  
  
  
  })
})