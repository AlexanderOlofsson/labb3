import ModelViewer from "../../src/components/ModelViewer";

describe("ModelViewer Component", () => {
  it("It should (hopefully pls buddy be nice) render the sofa", () => {
    cy.mount(<ModelViewer />);
    cy.get("canvas").should("exist");
    cy.contains("Loading...").should("not.exist");
    cy.viewport(500, 500);
  });

  it("should change the color, please do", () => {
    cy.mount(<ModelViewer />);
    cy.get('input[type="color"]').as("colorPicker");

    const newColor = "#ffa500"; // orange
    cy.get("@colorPicker").invoke("val", newColor).trigger("input");

    cy.get("@colorPicker").should("have.value", newColor);

  });
});
