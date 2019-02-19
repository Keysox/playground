describe('The home page', function() {
  it('should load properly', function() {
    cy.visit('http://localhost:3000/')

    cy.matchImageSnapshot()
  })

  it('should load properly on mobile', function() {
    cy.viewport('iphone-6')

    cy.visit('http://localhost:3000/')

    cy.matchImageSnapshot()
  })
})
