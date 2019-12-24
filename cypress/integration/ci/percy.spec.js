describe('Integration test with visual testing', function() {
  it('Loads the homepage', function() {
    cy.visit('http://localhost:3000/')
      .wait(1000)
      .percySnapshot()
  })
})
