import { Given, When, Then, Before } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pages/loginPage.js";

let credentials; 

Before(() => {
  cy.fixture("loginData").then((data) => {
    credentials = data;
  });
});

Before({ tags: "@unsuccessful-login" }, () => {
  cy.intercept("POST", "**/api/v1/authn", {
    statusCode: 401,
    fixture: "login-failure.json"
  }).as("loginFailure");
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
  //LoginPage.verifyCountriesInsightsMapVisiblity();
});

Then("I should see an error message stating that the entered data is invalid", () => {
  cy.wait("@loginFailure");
  LoginPage.verifyErrorMessageVisibilty();
});
