Cypress.Commands.add("login", () => {
  cy.fixture("loginData").then((data) => {
    cy.visit("/login");
    cy.get('input[name="email"]').clear().type(data.validCredentials.email);
    cy.get('input[name="password"]').clear().type(data.validCredentials.password);
    cy.get('[data-cy="login-login-btn"]').click();
    cy.url().should("include", "/dashboard");
    cy.get('[data-cy="sidebar-user-info-section"]').should("be.visible");
  });
});
