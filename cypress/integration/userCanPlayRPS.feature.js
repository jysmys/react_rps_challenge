describe("User can play a game", () => {
  it("user can start a game", () => {
    cy.visit("/");
    cy.get("button#startgame").click();
    cy.get("button#startgame").should("not.be.visible");
  });
  it("user can start a round and play until winner", () => {
    cy.get("img#rock").should("be.visible");
    cy.get("img#paper").should("be.visible");
    cy.get("img#scissor").should("be.visible");
    cy.get("img#scissor").click();
    cy.get("img.dynamicImage").should("be.visible");
    cy.get("img#rock").should("not.be.visible");
    cy.get("img#paper").should("not.be.visible");

    cy.get("button#startround").click();
    // cy.get("div.countdown").should("be.visible");
    cy.get("div#standing").should("be.visible");
    cy.get("div#winner").should("be.visible");

    for (let i = 0; i < 10; i++) {
      cy.get("div#winner").then(() => {
        if (cy.contain("Same, same")) {
          cy.get("button#nextround").click();
          cy.get("img#rock").should("be.visible");
          cy.get("img#rock").click();
          cy.get("button#startround").click();

          cy.get("div#winner").should("be.visible");
        } else {
          cy.contain("Winner is...");
          cy.get("button#playagain").click();
          return (i = 10);
        }
      });
    }
  });
});
