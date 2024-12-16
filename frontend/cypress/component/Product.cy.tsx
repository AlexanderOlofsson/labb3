import Product from "../../src/components/Product";

describe("Product Component", () => {
  it("should render everything about the product correctly", () => {
    cy.mount(<Product />);

    // Test price
    cy.contains("Price: $1000").should("exist");

    // Change to another color and verify the price updates
    cy.get("button[aria-label='Choose Emerald']").click();
    cy.contains("Price: $1200").should("exist");

    // Verify Out of Stock message
    cy.contains("Out of Stock").should("exist");

    // Verify Notify Me button opens SweetAlert2 popup
    cy.contains("Notify Me When It's Back").click();
    cy.get(".swal2-popup").should("exist");
    cy.get(".swal2-input").type("test@example.com");
    cy.get(".swal2-confirm").click();
    cy.contains("Success!").should("exist");

    cy.viewport(1280, 720);
  });
});

// Everything seems to work 2024-12-16
