describe('The home page', function() {
  it('should load an image', function() {
    cy.visit('http://localhost:3000/')

    cy.get('img').should('be.visible')
  })
})
