// https://avancera.app/courses/a3f1c095-627e-4d8b-bad9-77e113b27bd3/c8ea6079-1802-4dde-905d-b1995b0f509b/
// https://avancera.app/courses/a3f1c095-627e-4d8b-bad9-77e113b27bd3/242fc424-339c-4386-9dac-6761177875c0/
import Product from "../../src/components/Product";

describe("Product Component", () => {
  beforeEach(() => {
    cy.viewport(1400, 1000)
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
  });

  it("should allow the user to select a color and see the updated price (surely)", () => {
    // Given: The product page is loaded
    cy.mount(<Product />);
    cy.wait("@getProducts");

    // When: The user clicks on the "Emerald" color button
    cy.get('[data-id="color-2"]').click();

    // Then: The price and color name should update
    cy.contains("Price: $1200").should("exist");
    cy.contains("Emerald").should("exist");
  });
});
