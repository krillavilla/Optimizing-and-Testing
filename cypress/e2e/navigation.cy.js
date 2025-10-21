describe('Navigation Tests', () => {
  beforeEach(() => {
    // Visit the homepage before each test
    cy.visit('/');
  });

  it('should click on "Home" and navigate to the home page', () => {
    // Click on Home menu item
    cy.get('[data-cy="nav-home"]')
      .should('be.visible')
      .click();
    
    // Verify that the home page has loaded
    cy.get('[data-cy="page-home"]')
      .should('be.visible');
  });

  it('should click on "About" and navigate to the About page', () => {
    // Click on About menu item
    cy.get('[data-cy="nav-about"]')
      .should('be.visible')
      .click();
    
    // Verify that the About page has loaded
    cy.get('[data-cy="page-about"]')
      .should('be.visible');
    
    // Check for about page specific content
    cy.get('.textContainer')
      .should('exist');
  });

  it('should click on "Card Sets" and navigate to the card sets page', () => {
    // Click on Card Sets menu item
    cy.get('[data-cy="nav-sets"]')
      .should('be.visible')
      .click();
    
    // Verify that the card sets page has loaded
    cy.get('[data-cy="page-sets"]')
      .should('be.visible');
  });

  it('should have proper navigation structure', () => {
    // Verify all navigation items are present
    cy.get('[data-cy="nav-home"]').should('contain.text', 'Home');
    cy.get('[data-cy="nav-about"]').should('contain.text', 'About');
    cy.get('[data-cy="nav-sets"]').should('contain.text', 'Card Sets');
  });
});
