///<reference types="cypress" />

describe("API Endpoints", () => {
  it("please buddy, fetch the sofa", () => {
    return cy.request("http://localhost:5000/api/sofa").then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property("name", "Sofa");
      expect(response.body).to.have.property("base_color", "#ffffff");
    });
  });

  it("please buddy, add a customization", () => {
    return cy
      .request("POST", "http://localhost:5000/api/customizations", {
        customColor: "#ff0000",
      })
      .then((response) => {
        expect(response.status).to.equal(201);
        expect(response.body).to.have.property("message", "Customization added!");
        expect(response.body.data).to.have.property("customColor", "#ff0000");
      });
  });

  it("please buddy, fetch all customizations", () => {
    return cy.request("http://localhost:5000/api/customizations").then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.be.an("array");
      expect(response.body.length).to.be.greaterThan(0);
    });
  });
});
