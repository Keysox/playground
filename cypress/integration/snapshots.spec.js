describe('The home page', function() {
  it('should load properly on desktop', function() {
    cy.visit('http://localhost:3000/')

    cy.matchImageSnapshot()
  })

  it('should load properly on mobile', function() {
    cy.viewport(375, 667) // matches media query

    cy.visit('http://localhost:3000/')

    cy.matchImageSnapshot()
  })
})
