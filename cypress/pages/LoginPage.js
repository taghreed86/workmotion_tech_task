class LoginPage {
  elements = {
    emailInput: () => cy.get('#email'),
    passwordInput: () => cy.get('#password'),
    loginButton: () => cy.get('[data-cy="login-login-btn"]'),
    userInfo: () => cy.get('[data-cy="sidebar-user-info-section"]'),
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

  verifyUserInfo() {
    this.elements.userInfo().should('be.visible');
  }

  verifyErrorMessage() {
    this.elements.errorMessage().should('be.visible');
  }
}

export default new LoginPage();
