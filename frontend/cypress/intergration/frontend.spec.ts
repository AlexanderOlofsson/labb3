/// <reference types="cypress" />

describe("Frontend Components", () => {
  it("should render ColorPicker and trigger onChange", () => {
    cy.visit("/");
    cy.get('input[type="color"]').should("exist"); // color picker, are you there?
    cy.get('input[type="color"]').invoke("val", "#ff0000").trigger("change"); // color
  });

  it("should render ModelViewer without errors (please)", () => {
    cy.visit("/");
    cy.get("canvas").should("exist"); // does canvas exist
  });

  it("should handle Save Customization button", () => {
    cy.visit("/");
    cy.intercept("POST", "/api/customizations", {
      statusCode: 201,
      body: {
        message: "Customization added",
        data: { customColor: "#ff0000" },
      },
    }).as("saveCustomization");

    cy.get('input[type="color"]').invoke("val", "#ff0000").trigger("change");
    cy.get("button").contains("Save Customization").click();
    cy.wait("@saveCustomization").its("response.statusCode").should("equal", 201);
  });

  it("should fetch and display customizations", () => {
    cy.visit("/");
    cy.intercept("GET", "/api/customizations", {
      statusCode: 200,
      body: [{ customColor: "#ff0000" }, { customColor: "#00ff00" }],
    }).as("fetchCustomizations");

    cy.get("button").contains("Fetch Customizations").click();
    cy.wait("@fetchCustomizations").then(() => {
      cy.contains("Color: #ff0000").should("exist");
      cy.contains("Color: #00ff00").should("exist");
    });
  });
});
