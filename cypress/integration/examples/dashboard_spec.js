describe('Dashboard user flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should be able to see a title', () => {
    cy.get('.app-title').should('have.text','Turing Cafe Reservations')
  })

  it('should be able to see four inputs', () => {
    cy.get('.input-box').eq(0).should('be.visible')
    cy.get('.input-box').eq(1).should('be.visible')
    cy.get('.input-box').eq(2).should('be.visible')
    cy.get('.input-box').eq(3).should('be.visible')
  })

  it('should see many cards each with their own details', () => {
    cy.get('.card .p1').eq(0).should('have.text','Christie')
    cy.get('.card .p2').eq(0).should('have.text','12/29')
    cy.get('.card .p3').eq(0).should('have.text','7:00 pm')
    cy.get('.card .p4').eq(0).should('have.text','Number of guests: 12')

    cy.get('.card .p1').eq(4).should('have.text','Will')
    cy.get('.card .p2').eq(4).should('have.text','5/15')
    cy.get('.card .p3').eq(4).should('have.text','6:30 pm')
    cy.get('.card .p4').eq(4).should('have.text','Number of guests: 2')
  })

  it('should be able to add a card', () => {
    cy.get('.input-box').eq(0).type('Daniel')
    cy.get('.input-box').eq(1).type('10/10')
    cy.get('.input-box').eq(2).type('3:00')
    cy.get('.input-box').eq(3).type('2')
    cy.get('.submit-button').click()
    cy.get('.card .p1').eq(9).should('have.text', 'Daniel')
    cy.get('.card .p2').eq(9).should('have.text', '10/10')
    cy.get('.card .p3').eq(9).should('have.text', '3:00 pm')
    cy.get('.card .p4').eq(9).should('have.text', 'Number of guests: 2')
  })

})