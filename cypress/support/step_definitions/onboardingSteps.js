import { Given, When, Then, Before } from "@badeball/cypress-cucumber-preprocessor";
import onboardingPage from "../../pages/OnboardingPage";
import LoginHelper from "../../helpers/loginHelper.js";

let onboardingData;

Before(() => {
  cy.fixture("onboardingData").then((data) => {
    onboardingData = data;
  });
});

Given("I am logged in to the WorkMotion platform", () => {
  LoginHelper.login();
});

Given("I am on the Dashboard page", () => {
  cy.url().should("include", "/dashboard");
});

When('I click the {string} button', (button) => {
  switch (button) {
    case "Hire Now":
      onboardingPage.clickHireNow();
      break;
    case "Get Started":
      onboardingPage.clickGetStarted();
      break;
    case "Continue":
      onboardingPage.clickContinue();
      break;
    case "Finish":
      onboardingPage.clickFinish();
      break;
    case "Go To Talent List":
      onboardingPage.clickGoToTalentList();
      break;
    default:
      throw new Error(`Unknown button: ${button}`);
  }
});

When('I select {string} from the dropdown', () => {
  onboardingPage.selectCreateNew();
});

When('I select {string} as the onboarding type', () => {
  onboardingPage.clickWorkDirectOption();
});

When('I select {string} as the country', () => {
  onboardingPage.selectCountry(onboardingData.country);
});

When('I enter {string} as First Name', () => {
  onboardingPage.enterFirstName(onboardingData.firstName);
});

When('I enter {string} as Last Name', () => {
  onboardingPage.enterLastName(onboardingData.lastName);
});

When('I select {string} for eligibility to work in the selected country', () => {
  onboardingPage.clickEligibilityYes();
});

When('I select {string} for executive role', () => {
  onboardingPage.clickExecutiveNo();
});

When('I enter {string} as Job Title', () => {
  onboardingPage.enterJobTitle(onboardingData.jobTitle);
});

When('I enter {string} as Job Description', () => {
  onboardingPage.enterJobDescription(onboardingData.jobDescription);
});

When('I select {string} as Employment Type', () => {
  onboardingPage.selectEmploymentTypeFullTime();
});

When('I set working hours per week to {string}', () => {
  onboardingPage.enterWorkingHours(onboardingData.workingHours);
});

When('I enter {string} as Timesheet Approver Name', () => {
  onboardingPage.enterTimesheetApproverName(onboardingData.timesheetApproverName);
});

When('I enter {string} as Timesheet Approver Email', () => {
  onboardingPage.enterTimesheetApproverEmail(onboardingData.timesheetApproverEmail);
});

When('I select {string} as Contract Type', () => {
  onboardingPage.selectContractTypePermanent();
});

When('I set Contract Start Date to {string}', () => {
  onboardingPage.enterStartDate(onboardingData.startDate);
});

When('I select {string} for work from home option', () => {
  onboardingPage.clickWorkFromHomeYes();
});

When('I select {string} for reimburse expenses', () => {
  onboardingPage.clickReimburseExpensesNo();
});

When('I enter {string} as Cost Center Invoice Reference', () => {
  onboardingPage.enterCostCenterReference(onboardingData.costCenterInvoiceReference);
});

When('I select {string} as Sub Entity', () => {
  onboardingPage.selectSubEntity(onboardingData.subEntity);
});

When('I enter {string} as Paid Time Off \\(PTO)', () => {
  onboardingPage.enterPTO(onboardingData.pto);
});

When('I select {string} for Carry Over Unused PTO', () => {
  onboardingPage.clickCarryOverUnusedPTONo();
});

When('I select {string} for Compensated for Bank Holidays', () => {
  onboardingPage.clickCompensatedForBankHolidaysYes();
});

When('I enter {string} as Termination Notice Period', () => {
  onboardingPage.enterTerminationNoticePeriod(onboardingData.terminationNoticePeriod);
});

When('I select {string} for ESOP', () => {
  onboardingPage.clickESOPNo();
});

When('I select {string} for Health Insurance', () => {
  onboardingPage.clickHealthInsuranceYes();
});

When('I enter {string} as Base Salary per Year', () => {
  onboardingPage.enterBaseSalary(onboardingData.baseSalary);
});

When('I select {string} for Receive Bonus', () => {
  onboardingPage.clickReceiveBonusYes();
});

When('I enter {string} as Annual Bonus Amount', () => {
  onboardingPage.enterGrossAnnualBonus(onboardingData.annualBonus);
});

When('I select {string} as Bonus Frequency', () => {
  onboardingPage.selectBonusFrequency(onboardingData.bonusFrequency);
});

When('I select {string} for Variable Bonus', () => {
  onboardingPage.clickVariableBonusNo();
});

When('I enter {string} as Sign-On Bonus', () => {
  onboardingPage.enterSignOnBonus(onboardingData.signOnBonus);
});

When('I click the "View Cost Breakdown" button', () => {
  onboardingPage.clickViewCostBreakdown();
});

When('I verify cost breakdown popup appears', () => {
  onboardingPage.verifyCostBreakdownVisiblity();
});

When('I close the cost breakdown popup', () => {
  onboardingPage.closeCostBreakdownPopup();
});

When('I enter {string} as Talent Email', () => {
  const [prefix, domain] = onboardingData.talentEmail.split('@');

  const randomNumber = Math.floor(1000 + Math.random() * 9000);

  const uniqueEmail = `${prefix}+${randomNumber}@${domain}`;

  onboardingPage.enterTalentEmail(uniqueEmail);
});


When('I click the "Confirmation" checkbox', () => {
  onboardingPage.clickConfirmationCheckbox();
});

Then('A success card should be displayed', () => {
  onboardingPage.verifySuccessCardVisibility();
});

Then('A success message with text {string} should be displayed', () => {
  onboardingPage.verifySuccessMessageVisibility();
});

Then('I should be redirected to the Talents Dashboard', () => {
  cy.url().should("include", "/talents");
});

When('I navigate to the {string} tab', () => {
  onboardingPage.openOnboardingsTab();
});

Then('I should see {string} in the Onboardings tab with country {string} and status {string}', () => {
  cy.contains(`${onboardingData.firstName} ${onboardingData.lastName}`).should("be.visible");
  cy.contains(onboardingData.country).should("be.visible");
  cy.contains(onboardingData.expectedStatus).should("be.visible");
});
