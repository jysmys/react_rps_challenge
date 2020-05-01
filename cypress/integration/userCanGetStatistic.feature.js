describe("User can log in and see her statistic", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("successfully with valid credentials", () => {
    cy.get("#login").click();
    cy.get("#login-form").within(() => {
      cy.get("#email").type("user@mail.com");
      cy.get("#password").type("password");
      cy.get("button").contains("Submit").click();
    });
    cy.get("#message").should("contain", "Hi user@mail.com");
  });
  it("sucessfully se the statistic", () => {
    cy.visit("/");
    cy.get("#played").should("contain", "1");
    cy.get("wins").should("contain", "0");
    cy.get("input#age").should("contain", "0");
  });

  it("unsuccessfully with invalid credentials", () => {
    cy.get("#login").click();
    cy.get("#login-form").within(() => {
      cy.get("#email").type("user@mail.com");
      cy.get("#password").type("wrongpassword");
      cy.get("button").contains("Submit").click();
    });
    cy.get("#message").should(
      "contain",
      "Invalid login credentials. Please try again."
    );
  });
});
