describe("User starts a game", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("button#startgame").click().should("not.be.visible");
    // cy.get("button#startround").should("be.visible").click();
  });
  it("user can make a pick", () => {
    cy.get("img#rock").should("be.visible");
    cy.get("img#paper").should("be.visible");
    cy.get("img#scissor").should("be.visible").click();
    cy.get("button#startround").click();
    cy.get("img#computer").should("be.visible");
  });
});
