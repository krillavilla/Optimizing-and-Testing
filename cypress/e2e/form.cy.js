describe('Form Tests', () => {
  beforeEach(() => {
    // Visit the homepage and navigate to card sets page
    cy.visit('/');
    // Navigate to the page with forms (card sets page has the form)
    cy.get('[data-cy="nav-sets"]').click();
    // Make the form visible by clicking the toggle button
    cy.get('[data-cy="toggle_form"]').click();
  });

  describe('Create Set Form', () => {
    it('should successfully submit with valid input (happy path)', () => {
      // Fill in valid data in the form
      cy.get('[data-cy="input-set-name"]')
        .clear()
        .type('My Test Set');
      
      // Submit the form
      cy.get('[data-cy="btn-submit-set"]').click();
      
      // Verify successful submission - the form should disappear and page should reload
      cy.get('[data-cy="page-sets"]').should('be.visible');
      // Error should not be visible
      cy.get('[data-cy="error-message"]').should('not.exist');
    });

    it('should show error when submitting empty string (unhappy path)', () => {
      // Leave input empty and submit
      cy.get('[data-cy="input-set-name"]').clear();
      
      // Submit the form
      cy.get('[data-cy="btn-submit-set"]').click();
      
      // Verify error is displayed
      cy.get('[data-cy="error-message"]')
        .should('be.visible')
        .and('contain.text', 'EMPTY');
    });

    it('should accept valid input with whitespace and create a set', () => {
      // Enter input with extra whitespace
      cy.get('[data-cy="input-set-name"]')
        .clear()
        .type('  Test Set  ');
      
      // Submit the form
      cy.get('[data-cy="btn-submit-set"]').click();
      
      // Verify successful submission - the page should reload
      cy.get('[data-cy="page-sets"]').should('be.visible');
      // Error should not be visible
      cy.get('[data-cy="error-message"]').should('not.exist');
    });
  });
});
