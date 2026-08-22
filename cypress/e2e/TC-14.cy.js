describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://testzootopia.loremipsum.ge/ka') 
    cy.login("finale@exam.com", "12345678" )
    cy.get('.pug > .seepro').click()
   cy.get('.menu-pop > [href="https://testzootopia.loremipsum.ge/ka/cart"]').should('be.visible') 
    cy.get(':nth-child(1) > .price-cart > .product-cart').click()
    cy.get('.menu-pop > [href="https://testzootopia.loremipsum.ge/ka/cart"]').click()
    cy.get('.cart-item').should('be.visible')
  
  
  
  
  
  
  })
})