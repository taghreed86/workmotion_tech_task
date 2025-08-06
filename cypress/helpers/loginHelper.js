import LoginPage from "../../pages/loginPage.js";

class LoginHelper {
  static login() {
    cy.fixture("loginData").then((data) => {
      LoginPage.navigateToLoginPage();
      LoginPage.enterEmail(data.validCredentials.email);
      LoginPage.enterPassword(data.validCredentials.password);
      LoginPage.clickLogin();
    });
  }
}

export default LoginHelper;
