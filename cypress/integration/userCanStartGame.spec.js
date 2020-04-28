describe("User starts a game", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("User can click on Start button", () => {
    cy.get("button#startgame").click().should("not.be.visible");
    cy.get("button#startround").should("be.visible").click();
  });
});
