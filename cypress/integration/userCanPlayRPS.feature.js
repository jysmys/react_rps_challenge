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

    cy.get("img#rock").click();
    cy.get("button#startround").click();
    cy.get("div#standing").should("be.visible");

    cy.get("button#nextround")
      .get("p")
      .then((text) => {
        if (text.text().includes("Replay round")) {
          cy.get("div#winner")
            .get("h5")
            .contains("Same, same Nobody wins this round...");
          cy.get("button#nextround").click();
          cy.get("img#rock").click();
          cy.get("button#startround").click();
          cy.get("div#standing").should("be.visible");
        }
        if (text.text().includes("Next round")) {
          cy.get("button#nextround").click();
          cy.get("img#rock").click();
          cy.get("button#startround").click();
          cy.get("div#standing").should("be.visible");
        }
        if (text.text() == "Play again ?") {
          cy.get("div#final-winner").should("be.visible");
          cy.get("div#final-winner").get("h4").contains("Winner is");
          cy.get("button#nextround").click();
          i = 10;
        } else {
          if (text.text().includes("Replay round")) {
            cy.get("div#winner")
              .get("h5")
              .contains("Same, same Nobody wins this round...");
            cy.get("button#nextround").click();
            cy.get("img#rock").click();
            cy.get("button#startround").click();
            cy.get("div#standing").should("be.visible");
          }
          if (text.text().includes("Next round")) {
            cy.get("button#nextround").click();
            cy.get("img#rock").click();
            cy.get("button#startround").click();
            cy.get("div#standing").should("be.visible");
          }
          if (text.text() == "Play again ?") {
            cy.get("div#final-winner").should("be.visible");
            cy.get("div#final-winner").get("h4").contains("Winner is");
            // cy.get("button#nextround").click();
            i = 10;
          }
        }
      });
  });
});
