describe("User can start a game", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.clock();
    cy.tick(1000);
  });

  // it("User can click on Start button", () => {
  //   cy.get("button#startgame").click();
  // });
  // it("User can view start round", () => {
  //   cy.get("button#startgame").should("not.be.visible");
  //   cy.get("button#startround").should("be.visible");
  // });
});
