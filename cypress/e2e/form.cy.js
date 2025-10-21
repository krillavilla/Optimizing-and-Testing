describe('Form Tests', () => {
  beforeEach(() => {
    // Visit the homepage and navigate to forms
    cy.visit('/');
    // Navigate to the page with forms (assuming card sets page has forms)
    cy.get('#cardSetPage').click();
  });

  describe('Create Set Form', () => {
    it('should successfully submit with valid input (happy path)', () => {
      // Look for create set form elements
      cy.get('[data-cy="createSetForm"], .createSetForm, form')
        .first()
        .within(() => {
          // Fill in valid data
          cy.get('input[name="setName"], input[id="setName"], input')
            .first()
            .type('My Test Set');
          
          // Submit the form
          cy.get('input[type="submit"], button[type="submit"], button')
            .contains(/submit|create/i)
            .click();
        });
      
      // Verify successful submission (check for success message or new set)
      cy.get('body').should('not.contain', 'error');
    });

    it('should show error when submitting empty string (unhappy path)', () => {
      // Look for create set form elements
      cy.get('[data-cy="createSetForm"], .createSetForm, form')
        .first()
        .within(() => {
          // Leave input empty or enter empty string
          cy.get('input[name="setName"], input[id="setName"], input')
            .first()
            .clear();
          
          // Submit the form
          cy.get('input[type="submit"], button[type="submit"], button')
            .contains(/submit|create/i)
            .click();
        });
      
      // Verify error is displayed
      cy.get('[data-cy="error"], .error, .errorMessage')
        .should('be.visible')
        .and('contain.text', 'error');
    });

    it('should show error when submitting only whitespace (unhappy path)', () => {
      // Look for create set form elements
      cy.get('[data-cy="createSetForm"], .createSetForm, form')
        .first()
        .within(() => {
          // Enter only whitespace
          cy.get('input[name="setName"], input[id="setName"], input')
            .first()
            .type('   ');
          
          // Submit the form
          cy.get('input[type="submit"], button[type="submit"], button')
            .contains(/submit|create/i)
            .click();
        });
      
      // Verify error is displayed
      cy.get('[data-cy="error"], .error, .errorMessage')
        .should('be.visible');
    });
  });

  describe('Add Card Form', () => {
    beforeEach(() => {
      // Ensure we have a set to add cards to, or create one
      cy.get('[data-cy="createSetForm"], .createSetForm, form')
        .first()
        .within(() => {
          cy.get('input').first().clear().type('Test Set for Cards');
          cy.get('input[type="submit"], button').contains(/submit|create/i).click();
        });
    });

    it('should successfully submit with valid input (happy path)', () => {
      // Look for add card form elements
      cy.get('[data-cy="addCardForm"], .addCardForm, form')
        .last()
        .within(() => {
          // Fill in valid data for front and back of card
          cy.get('input, textarea').first().type('Front of card');
          cy.get('input, textarea').last().type('Back of card');
          
          // Submit the form
          cy.get('input[type="submit"], button[type="submit"], button')
            .contains(/submit|add|create/i)
            .click();
        });
      
      // Verify successful submission
      cy.get('body').should('not.contain', 'error');
    });

    it('should show error when submitting empty front text (unhappy path)', () => {
      // Look for add card form elements
      cy.get('[data-cy="addCardForm"], .addCardForm, form')
        .last()
        .within(() => {
          // Leave front input empty, fill back
          cy.get('input, textarea').first().clear();
          cy.get('input, textarea').last().type('Back of card');
          
          // Submit the form
          cy.get('input[type="submit"], button[type="submit"], button')
            .contains(/submit|add|create/i)
            .click();
        });
      
      // Verify error is displayed
      cy.get('[data-cy="error"], .error, .errorMessage')
        .should('be.visible')
        .and('contain.text', 'error');
    });

    it('should show error when submitting empty back text (unhappy path)', () => {
      // Look for add card form elements
      cy.get('[data-cy="addCardForm"], .addCardForm, form')
        .last()
        .within(() => {
          // Fill front, leave back empty
          cy.get('input, textarea').first().type('Front of card');
          cy.get('input, textarea').last().clear();
          
          // Submit the form
          cy.get('input[type="submit"], button[type="submit"], button')
            .contains(/submit|add|create/i)
            .click();
        });
      
      // Verify error is displayed
      cy.get('[data-cy="error"], .error, .errorMessage')
        .should('be.visible')
        .and('contain.text', 'error');
    });

    it('should show error when submitting both fields empty (unhappy path)', () => {
      // Look for add card form elements  
      cy.get('[data-cy="addCardForm"], .addCardForm, form')
        .last()
        .within(() => {
          // Leave both inputs empty
          cy.get('input, textarea').first().clear();
          cy.get('input, textarea').last().clear();
          
          // Submit the form
          cy.get('input[type="submit"], button[type="submit"], button')
            .contains(/submit|add|create/i)
            .click();
        });
      
      // Verify error is displayed
      cy.get('[data-cy="error"], .error, .errorMessage')
        .should('be.visible')
        .and('contain.text', 'error');
    });
  });
});