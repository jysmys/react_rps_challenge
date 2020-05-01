describe("User can start a game", () => {
  it("User can click on Start button", () => {
    cy.visit("/");
    cy.get("button#startgame").click();
  });
  it("User can view start round button", () => {
    cy.get("button#startgame").should("not.be.visible");
    cy.get("button#startround").should("be.visible");
  });
});
