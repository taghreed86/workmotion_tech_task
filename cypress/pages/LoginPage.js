class LoginPage {
  elements = {
    emailInput: () => cy.get('[id="email"]'),
    passwordInput: () => cy.get('[id="password"]'),
    loginButton: () => cy.get('[data-cy="login-login-btn"]'),
    errorMessage: () => cy.contains('The email and / or the password you entered is invalid')
  };

  navigateToLoginPage() {
    cy.visit('/login');
  }

  enterEmail(email) {
    this.elements.emailInput().clear().type(email);
  }

  enterPassword(password) {
    this.elements.passwordInput().clear().type(password);
  }

  clickLogin() {
    this.elements.loginButton().click();
  }

  verifyErrorMessage() {
    this.elements.errorMessage().should('be.visible');
  }
}

export default new LoginPage();
