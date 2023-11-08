import testData from '../constants/data.json'
describe('inicio', () => {

  it('home page should have texts', () => {
    cy.visit('https://hotel-california.vercel.app/')
    cy.get('.grid').click()

    // Accede a los datos del archivo JSON
    const homePageTexts = testData.homepageTexts;

    cy.get('.w-30').contains(homePageTexts.loginText);
    cy.get('.w-30').contains(homePageTexts.enterText);
    cy.get('.w-30').contains(homePageTexts.loginButton);
    cy.get('.w-30').contains(homePageTexts.noAccountText);
    cy.get('.flex-1').contains(homePageTexts.contactUsText);
    cy.get('.flex-1').contains(homePageTexts.registerText);
    cy.get('body > footer').contains(homePageTexts.footerText);
  });

  it('login should work', () => {
    const loginCredentials = testData.loginCredentials;

    cy.get('input.w-full:nth-child(1)').type(loginCredentials.email);
    cy.get('input.w-full:nth-child(2)').type(loginCredentials.password);
    cy.get('.bg-orange-500').click();
  });

  it('exit button should be on navbar', () => {
    cy.get('.flex-1').contains(testData.homepageTexts.registerText);
    cy.get('.h-8').should('have.css', 'display').and('eq', 'block');
  });

  it('logout', () => {
    cy.get('.h-8').click();

    cy.get('nav.flex > a:nth-child(2)').contains(testData.homepageTexts.registerText);
    cy.get('.flex-1').contains(testData.homepageTexts.contactUsText);
    cy.get('.text-gray-900').should('have.css', 'display').and('eq', 'block');
  });
});
