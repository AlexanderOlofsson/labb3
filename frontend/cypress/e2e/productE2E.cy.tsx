describe('Product Component', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:5000/products', [
      {
        id: 1,
        color_name: 'Royal Gray',
        color_hex: '#808080',
        price: 1100
      },
      {
        id: 2,
        color_name: 'Emerald',
        color_hex: '#50C878',
        price: 1200
      },
      {
        id: 3,
        color_name: 'Amber',
        color_hex: '#FFBF00',
        price: 1000
      },
      {
        id: 4,
        color_name: 'Cinerous',
        color_hex: '#98817B',
        price: 1300
      }
    ]).as('getProducts');
    cy.visit('/');
  });
// https://docs.cypress.io/app/core-concepts/best-practices (data-id)
  it('should fetch and display all products', () => {
    cy.wait('@getProducts');
    cy.get('.color-button').should('have.length', 4); // All buttons should be there
    cy.get('[data-id="color-1"]').should('exist'); // Royal Gray
    cy.get('[data-id="color-2"]').should('exist'); // Emerald
    cy.get('[data-id="color-3"]').should('exist'); // Amber
    cy.get('[data-id="color-4"]').should('exist'); // Cinerous
  });

  it('should update the color and price when a color button is clicked, please wooooork', () => {
    cy.get('[data-id="color-1"]').click(); // Royal Gray
    cy.wait(1000); // Wait for update
    cy.get('.product-price').should('contain', '1100');
    cy.get('[data-id="color-1"]').should('have.css', 'background-color', 'rgb(128, 128, 128)'); // Check background

    cy.get('[data-id="color-2"]').click(); // Emerald
    cy.wait(1000);
    cy.get('.product-price').should('contain', '1200');
    cy.get('[data-id="color-2"]').should('have.css', 'background-color', 'rgb(80, 200, 120)'); // Check background

    cy.get('[data-id="color-3"]').click(); // Amber
    cy.wait(1000);
    cy.get('.product-price').should('contain', '1000');
    cy.get('[data-id="color-3"]').should('have.css', 'background-color', 'rgb(255, 191, 0)'); // Check background

    cy.get('[data-id="color-4"]').click(); // Cinerous
    cy.wait(1000);
    cy.get('.product-price').should('contain', '1300');
    cy.get('[data-id="color-4"]').should('have.css', 'background-color', 'rgb(152, 129, 123)'); // Check background
  });

  it('should sign up for notifications when "Notify Me" button is clicked after selecting a product, first try btw', () => {
    cy.get('[data-id="color-2"]').click(); // Emerald
    cy.wait(1000);
    cy.get('.product-price').should('contain', '1200');

    cy.get('.notify-me-button').click(); // Notify Me
    cy.wait(1000); // Wait for modal

    cy.get('input[type="email"]', { timeout: 10000 }).should('be.visible').type('test@example.com'); // Wait for input
    cy.contains('Submit').click(); // Submit

    cy.contains("We'll notify you at test@example.com!").should('exist'); // Success!! Lets go!
  });
});
