describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://testzootopia.loremipsum.ge/ka')
  
  cy.get('.menu-pop > .rprof').click()
  cy.get('.input-shablon > p > a').click()
  cy.contains('რეგისტრაცია').should('be.visible')
  cy.get('[name="first_name"]').type('finale exam')
  cy.get('[name="reg_email"]').type('finale1@exam.com')
  cy.get('[name="personal_id"]').type('123456789011')
  cy.get('[name="phone"]').type('599111222')
  cy.get('[name="reg_password"]').type('12345678')
  cy.get('[name="reg_password_confirmation"]').type('12345678')
  cy.get('[for="profile2"]').click()
  cy.get('#Path_10302') .click()
  cy.get('.regsub').click()
  cy.contains('პროდუქტების ფართო არჩევანი').should('be.visible')
  
  
  
  
  
  
  })
})