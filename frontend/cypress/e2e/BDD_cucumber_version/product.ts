// https://avancera.app/courses/a3f1c095-627e-4d8b-bad9-77e113b27bd3/c8ea6079-1802-4d8b-bad9-77e113b27bd3/
// https://avancera.app/courses/a3f1c095-627e-4d8b-bad9-77e113b27bd3/242fc424-339c-4386-9dac-6761177875c0/

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

// Cucumber

Given("The product page is loaded", () => {
  cy.viewport(1400, 1000);

  cy.intercept("GET", "http://localhost:5000/products", [
    {
      id: 1,
      color_name: "Gray",
      color_hex: "#808080",
      price: 1000,
    },
    {
      id: 2,
      color_name: "Emerald",
      color_hex: "#50C878",
      price: 1200,
    },
  ]).as("getProducts");

  cy.visit("http://localhost:3000/");
  cy.wait("@getProducts");
});

When("The user clicks on the 'Emerald' color button", () => {
  cy.get('[data-id="color-2"]').click();
});

Then("The price should update to $1200", () => {
  cy.contains("Price: $1200").should("exist");
});

Then("The color name should update to 'Emerald'", () => {
  cy.contains("Emerald").should("exist");
});
