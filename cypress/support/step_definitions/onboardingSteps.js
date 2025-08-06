import { Given, When, Then, Before } from "@badeball/cypress-cucumber-preprocessor";
import OnboardingPage from "../../pages/onboardingPage.js";
import LoginPage from "../../pages/loginPage.js";


let onboardingData;

Before(() => {
  cy.fixture("onboardingData").then((data) => {
    onboardingData = data;
  });
});

Given("I am logged in to the WorkMotion platform", () => {
    cy.fixture("loginData").then((data) => {
      LoginPage.navigateToLoginPage();
      LoginPage.enterEmail(data.validCredentials.email);
      LoginPage.enterPassword(data.validCredentials.password);
      LoginPage.clickLogin();
    });
});

Given("I am on the Dashboard page", () => {
  cy.url().should("include", "/dashboard");
});

When('I click the {string} button', (button) => {
  switch (button) {
    case "Add Talent":
      OnboardingPage.clickAddTalent();
      break;
    case "Get Started":
      OnboardingPage.clickGetStarted();
      break;
    case "Continue":
      OnboardingPage.clickContinue();
      break;
    case "View Cost Breakdown":
      OnboardingPage.clickViewCostBreakdown();
      break;
    case "Finish":
      OnboardingPage.clickFinish();
      break;
    case "Go To Talent List":
      OnboardingPage.clickGoToTalentList();
      break;
    default:
      throw new Error(`Unknown button: ${button}`);
  }
});

When('I click "Talent Option"', () => {
  OnboardingPage.clickTalentOption();
});

When('I select {string} as the country', () => {
  OnboardingPage.selectCountry(onboardingData.country);
});

When('I enter {string} as First Name', () => {
  OnboardingPage.enterFirstName(onboardingData.firstName);
});

When('I enter {string} as Last Name', () => {
  OnboardingPage.enterLastName(onboardingData.lastName);
});

When('I select {string} for eligibility to work in the selected country', () => {
  OnboardingPage.clickEligibilityYes();
});

When('I select {string} for executive role', () => {
  OnboardingPage.clickExecutiveNo();
});

When('I enter {string} as Job Title', () => {
  OnboardingPage.enterJobTitle(onboardingData.jobTitle);
});

When('I enter {string} as Job Description', () => {
  OnboardingPage.enterJobDescription(onboardingData.jobDescription);
});

When('I select {string} as Employment Type', () => {
  OnboardingPage.selectEmploymentTypeFullTime();
});

When('I set working hours per week to {string}', () => {
  OnboardingPage.enterWorkingHours(onboardingData.workingHours);
});

When('I enter {string} as Timesheet Approver Name', () => {
  OnboardingPage.enterTimesheetApproverName(onboardingData.timesheetApproverName);
});

When('I enter {string} as Timesheet Approver Email', () => {
  OnboardingPage.enterTimesheetApproverEmail(onboardingData.timesheetApproverEmail);
});

When('I select {string} as Contract Type', () => {
  OnboardingPage.selectContractTypePermanent();
});

When('I set Contract Start Date to {string}', () => {
  OnboardingPage.enterStartDate(onboardingData.startDate);
});

When('I select {string} for work from home option', () => {
  OnboardingPage.clickWorkFromHomeYes();
});

When('I select {string} for reimburse expenses', () => {
  OnboardingPage.clickReimburseExpensesNo();
});

When('I enter {string} as Cost Center Invoice Reference', () => {
  OnboardingPage.enterCostCenterReference(onboardingData.costCenterInvoiceReference);
});

When('I select {string} as Sub Entity', () => {
  OnboardingPage.selectSubEntity(onboardingData.subEntity);
});

/* When('I enter {string} as Paid Time Off \\(PTO)', () => {
  OnboardingPage.enterPTO(onboardingData.pto);
}); */

When('I select {string} for Carry Over Unused PTO', () => {
  OnboardingPage.clickCarryOverUnusedPTONo();
});

When('I select {string} for Compensated for Bank Holidays', () => {
  OnboardingPage.clickCompensatedForBankHolidaysYes();
});

When('I enter {string} as Termination Notice Period', () => {
  OnboardingPage.enterTerminationNoticePeriod(onboardingData.terminationNoticePeriod);
});

When('I select {string} for ESOP', () => {
  OnboardingPage.clickESOPNo();
});

When('I select {string} for Health Insurance', () => {
  OnboardingPage.clickHealthInsuranceYes();
});

When('I enter {string} as Base Salary per Year', () => {
  OnboardingPage.enterBaseSalary(onboardingData.baseSalary);
});

When('I select {string} for Receive Bonus', () => {
  OnboardingPage.clickReceiveBonusNo();
});

/* When('I enter {string} as Annual Bonus Amount', () => {
  OnboardingPage.enterGrossAnnualBonus(onboardingData.annualBonus);
});

When('I select {string} as Bonus Frequency', () => {
  OnboardingPage.selectBonusFrequency(onboardingData.bonusFrequency);
}); */

When('I select {string} for Variable Bonus', () => {
  OnboardingPage.clickVariableBonusNo();
});

When('I enter {string} as Sign-On Bonus', () => {
  OnboardingPage.enterSignOnBonus(onboardingData.signOnBonus);
});

/* When('I verify cost breakdown popup appears', () => {
  OnboardingPage.verifyCostBreakdownVisiblity();
});
 */

Then('The cost breakdown popup should be displayed', () => {
  OnboardingPage.isCostBreakdownVisible().then((isVisible) => {
    expect(isVisible).to.equal(true);
  });
});

When('I close the cost breakdown popup', () => {
  OnboardingPage.closeCostBreakdownPopup();
});

When('I enter {string} as Talent Email', () => {
  const [prefix, domain] = onboardingData.talentEmail.split('@');

  const randomNumber = Math.floor(1000 + Math.random() * 9000);

  const uniqueEmail = `${prefix}+${randomNumber}@${domain}`;

  OnboardingPage.enterTalentEmail(uniqueEmail);
});


When('I click the "Confirmation" checkbox', () => {
  OnboardingPage.clickConfirmationCheckbox();
});

Then('A success card should be displayed', () => {
  OnboardingPage.verifySuccessCardVisibility();
});

Then('A success message with text {string} should be displayed', () => {
  OnboardingPage.verifySuccessMessageVisibility();
});

Then('I should be redirected to the Talents Dashboard', () => {
  cy.url().should("include", "/talents");
});

When('I navigate to the {string} tab', () => {
  OnboardingPage.openOnboardingsTab();
});

Then('I should see {string} in the Onboardings tab with country {string} and status {string}', () => {
  const fullName = `${onboardingData.firstName} ${onboardingData.lastName}`;

  OnboardingPage.getTheNewlyAddedTalentName().then((actualText) => {
    expect(actualText.trim()).to.equal(fullName);
  });

  OnboardingPage.getTheNewlyAddedTalentCountry().then((actualText) => {
    expect(actualText.trim()).to.equal(onboardingData.country);
  });

  OnboardingPage.getTheNewlyAddedTalentStatus().then((actualText) => {
    expect(actualText.trim()).to.equal(onboardingData.status);
  });
});


