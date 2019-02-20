describe('The home page', function() {
  it('should load a title', function() {
    cy.visit('http://localhost:3000/')

    cy.get('h1').should('be.visible')
    cy.get('h1').should('have.length', 1)
  })

  it('should load a navigation bar', function() {
    cy.visit('http://localhost:3000/')

    cy.get('nav a').should('be.visible')
    cy.get('nav a')
      .its('length')
      .should('be.gte', 2)
  })

  it('should load images', function() {
    cy.visit('http://localhost:3000/')

    cy.get('img')
      .its('length')
      .then(allImgCount => {
        cy.get('img').should('be.visible')
        cy.get('img')
          .its('length')
          .should('be.gte', 1)

        cy.get('nav a')
          .eq(1)
          .click()

        cy.get('img').should('be.visible')
        cy.get('img')
          .its('length')
          .should('be.lte', allImgCount)
      })
  })
})
