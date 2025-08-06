import { Given, When, Then, Before } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pages/loginPage.js";

let credentials; 
let validationError;

Before(() => {
  cy.fixture("loginData").then((data) => {
    credentials = data;
  });
  cy.fixture("loginFailure").then((data) => {
    validationError = data;
  });
});

Given("I am on the WorkMotion login page", () => {
  LoginPage.navigateToLoginPage();
});


When("I enter a valid email address", () => {
  LoginPage.enterEmail(credentials.validCredentials.email);
});

When("I enter a valid password", () => {
  LoginPage.enterPassword(credentials.validCredentials.password);
});

When("I enter an invalid email address", () => {
  LoginPage.enterEmail(credentials.invalidCredentials.email);
});

When("I enter an invalid password", () => {
  LoginPage.enterPassword(credentials.invalidCredentials.password);
});

When("I click the login button", () => {
  LoginPage.clickLogin();
});

Then("I should be redirected to the dashboard", () => {
  cy.url().should("include", "/dashboard");
});

Then("I should see an error message stating that the entered data is invalid", () => {
  LoginPage.isErrorMessageVisibile().then((isVisible) => {
    expect(isVisible).to.equal(true);
    });

  LoginPage.getErrorMessageText().then((text) => {
    expect(text).to.equal(validationError.message);
  });
});
