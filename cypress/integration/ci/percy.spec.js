describe('Integration test with visual testing', function() {
  it('Loads the homepage', function() {
    cy.visit('http://localhost:3000/')

    cy.percySnapshot()
  })
})
