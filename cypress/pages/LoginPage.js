class LoginPage {
  elements = {
    emailInput: () => cy.get('#email'),
    passwordInput: () => cy.get('#password'),
    loginButton: () => cy.get('[data-cy="login-login-btn"]'),
    countriesInsightsMap: () => cy.get('[data-cy="countries-insights"]'),
    errorMessage: () => cy.get('p[class="sc-eUdMsg kdcZii"]')
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
    cy.wait(3000);
  }

  isErrorMessageVisibile() {
    return this.elements.errorMessage().then(($el) => {
     return Cypress.$($el).is(':visible'); 
    });
  }

  getErrorMessageText() {
    return this.elements.errorMessage().invoke('text').then((text) => {
      return text.trim();
    });
  }

}

export default new LoginPage();
