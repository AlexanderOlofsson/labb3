import ModelViewer from "../../src/components/ModelViewer";

describe("ModelViewer Component", () => {
  it("It should (hopefully pls buddy be nice) render the sofa", () => {
    cy.mount(<ModelViewer />);
    cy.get("canvas").should("exist");
    cy.contains("Loading...").should("not.exist");
    cy.viewport(500, 500);
  });
});
