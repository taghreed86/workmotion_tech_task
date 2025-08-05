import { Given, When, Then, Before } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../../pages/LoginPage.js";

let credentials; 


Before(() => {
  cy.fixture("loginData").then((data) => {
    credentials = data;
  });
});


Given("I am on the WorkMotion login page", () => {
  loginPage.navigateToLoginPage();
});


When("I enter a valid email address", () => {
  loginPage.enterEmail(credentials.validCredentials.email);
});

When("I enter a valid password", () => {
  loginPage.enterPassword(credentials.validCredentials.password);
});

When("I enter an invalid email address", () => {
  cy.intercept("POST", "**/api/auth/login", { fixture: "login-failure.json" }).as("loginFailure");
  loginPage.enterEmail(credentials.invalidCredentials.email);
});

When("I enter an invalid password", () => {
  cy.intercept("POST", "**/api/auth/login", { fixture: "login-failure.json" }).as("loginFailure");
  loginPage.enterPassword(credentials.invalidCredentials.password);
});

When("I click the login button", () => {
  loginPage.clickLogin();
});

Then("I should be redirected to the dashboard", () => {
  cy.url().should("not.include", "/login");
});

Then("I should see an error message stating that the entered data is invalid", () => {
  cy.wait("@loginFailure");
  loginPage.verifyErrorMessage();
});
