describe('inicio', () => {

  it('home page should have texts', () => {
    cy.visit('https://hotel-california.vercel.app/')
    cy.get('.grid').click()

    cy.get('.w-30').contains('Login')
    cy.get('.w-30').contains('Enter your account')
    cy.get('.w-30').contains('Log in')
    cy.get('.w-30').contains("Don't have an account")
    cy.get('.flex-1').contains('Contactanos')
    cy.get('.flex-1').contains('Registrate')
    cy.get('body > footer').contains('Somos estudiantes de la Tecnicatura Superior de Software')
  })

  it('login should work', () => {
    cy.get('input.w-full:nth-child(1)').type('Enzo_17_05@hotmail.com')
    cy.get('input.w-full:nth-child(2)').type('12345678')
    cy.get('.bg-orange-500').click()
  })


  it('exit buttonshould be on navbar', () => {
    cy.get('.flex-1').contains('Registrate')
    cy.get('.h-8').should('have.css', 'display').and('eq', 'block')
  })

  it('logout', () => {
    cy.get('.h-8').click()

    cy.get('nav.flex > a:nth-child(2)').contains('Registrate')
    cy.get('.flex-1').contains('Contactanos')
    cy.get('.text-gray-900').should('have.css', 'display').and('eq', 'block')

  })


})