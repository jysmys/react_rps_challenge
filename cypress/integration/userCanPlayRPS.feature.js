describe("User can play a game and play until someone wins", () => {
  it("user can start a game", () => {
    cy.visit("/");
    cy.get("button#startgame").click();
    cy.get("button#startgame").should("not.be.visible");
  });

  it("user can make a pick", () => {
    cy.get("img#paper").should("be.visible");
    cy.get("img#scissor").should("be.visible");
    cy.get("img#rock").should("be.visible");
    cy.get("button#rock").click();
  });

  it("user can start a round", () => {
    cy.get("p#roundbutton").contains("Start round 1");
    cy.get("button#startround").click();
    cy.get("div#standing").should("be.visible");
    cy.get("div#standing").should("be.visible");
  });

  it("play round 2", () => {
    cy.get("button#nextround")
      .get("p")
      .then((text) => {
        if (text.text().includes("Next round 2")) {
          cy.get("button#nextround").click();
          cy.get("img#rock").click();
          cy.get("button#startround").click();
          cy.get("div#standing").should("be.visible");
        }
        if (text.text() == "Play again ?") {
          cy.get("div#final-winner").should("be.visible");
          cy.get("div#final-winner").get("h4").contains("Winner is");
        }
      });
  });

  it("decide who wins the game", () => {
    cy.get("button#nextround")
      .get("p")
      .then((text) => {
        if (text.text().includes("Next round 3")) {
          cy.get("button#nextround").click();
          cy.get("img#rock").click();
          cy.get("button#startround").click();
          cy.get("div#standing").should("be.visible");
        }
        if (text.text() == "Play again ?") {
          cy.get("div#final-winner").should("be.visible");
          cy.get("div#final-winner").get("h4").contains("Winner is");
        }
      });
  });
});
