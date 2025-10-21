describe('Navigation Tests', () => {
  beforeEach(() => {
    // Visit the homepage before each test
    cy.visit('/');
  });

  it('should click on "Card Sets" and navigate to the card sets page', () => {
    // Click on Card Sets menu item
    cy.get('[data-cy="cardSetPage"], #cardSetPage')
      .should('be.visible')
      .click();
    
    // Verify that the card sets page has loaded
    cy.get('[data-cy="cardSetContainer"], .cardSetContainer')
      .should('be.visible');
    
    // Alternative verification: check URL or page content
    cy.get('main').should('exist');
  });

  it('should click on "About" and navigate to the About page', () => {
    // Click on About menu item
    cy.get('[data-cy="aboutPage"], #aboutPage')
      .should('be.visible')
      .click();
    
    // Verify that the About page has loaded
    cy.get('[data-cy="aboutContainer"], .aboutContainer')
      .should('be.visible');
    
    // Check for about page specific content
    cy.get('.textContainer, [data-cy="textContainer"]')
      .should('exist');
  });

  it('should click on "Home" and navigate to the Home page', () => {
    // First navigate away from home
    cy.get('[data-cy="aboutPage"], #aboutPage').click();
    
    // Then click on Home menu item
    cy.get('[data-cy="homePage"], #homePage')
      .should('be.visible')
      .click();
    
    // Verify that the Home page has loaded
    cy.get('[data-cy="homeContainer"], .homeContainer')
      .should('be.visible');
    
    // Check for home page specific content
    cy.get('main').should('exist');
  });

  it('should have proper navigation structure', () => {
    // Verify all navigation items are present
    cy.get('#homePage').should('contain.text', 'Home');
    cy.get('#aboutPage').should('contain.text', 'About');
    cy.get('#cardSetPage').should('contain.text', 'Card Sets');
  });
});