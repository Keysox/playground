describe('The home page', function() {
  it('should load properly', function() {
    cy.visit('http://localhost:3000/')

    cy.matchImageSnapshot()
  })
})
