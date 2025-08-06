class OnboardingPage {
  elements = {
    hireNowBtn: () => cy.get('[data-testid="add-employee-menu"]'),
    createNewOption: () => cy.get('[data-testid="create-new-item"]'),
    //talentOption: () => cy.contains('Talent'),
    workDirectOption: () => cy.contains('WorkDirect'),
    countryDropdown: () => cy.get('#select-country'),
    getStartedBtn: () => cy.get('#onboarding-get-started-btn'),
    firstNameInput: () => cy.get('[data-cy="steps-candidate-first-name-input"]'),
    lastNameInput: () => cy.get('[data-cy="steps-candidate-last-name-input"]'),
    eligibilityYes: () => cy.get('[data-cy="steps-talent-is-local-yes-radio"]'),
    executiveNo: () => cy.get('[data-cy="steps-talent-is-senior-no-radio"]'),
    jobTitleInput: () => cy.get('[data-cy="steps-job-title-input"]'),
    jobDescriptionInput: () => cy.get('[data-cy="steps-job-description-textarea"]'),
    employmentTypeFullTime: () => cy.get('input[type="radio"][value="full-time"]'),
    workingHoursInput: () => cy.get('[data-cy="steps-hours-per-week-stepper-input"]'),
    timesheetApproverName: () => cy.get('[data-cy="steps-timesheets-approver-name-input"]'),
    timesheetApproverEmail: () => cy.get('[data-cy="steps-timesheets-approver-email-input"]'),
    contractTypePermanent: () => cy.get('input[type="radio"][value="permanent"]'),
    startDateInput: () => cy.get('input[placeholder="DD/MM/YYYY"]'),
    workFromHomeYes: () => cy.get('[data-cy="steps-work-from-home-selector-yes-radio"]'),
    reimburseExpensesNo: () => cy.get('[data-cy="steps-eligible-reimbursements-selector-no-radio"]'),
    costCenterInvoiceReference : () => cy.get('[data-cy="steps-cost-center-input"]'),
    subEntityDropdown: () => cy.get('input[name="Sub entity"]'),
    continueBtn: () => cy.get('#onboarding-continue-btn'),
    ptoInput: () => cy.get('[data-cy="steps-paid-time-off-stepper-input"]'),
    carryOverUnusedPTONo: () => cy.get('[data-cy="steps-paid-time-off-carryover-selector-no-radio""]'),
    compensatedForworkingDuringBankHolidaysYes: () => cy.get('[data-cy="steps-extra-paid-time-off-selector-yes-radio"]'),
    //probationPeriodInput: () => cy.get('[data-cy="steps-probation-period-stepper-input"]'),
    terminationNoticePeriodInput: () => cy.get('[data-cy="steps-termination-notice-period-stepper-input"]'),
    ESOPNo: () => cy.get('[data-cy="steps-esop-provided-no-radio"]'),
    healthInsuranceYes: () => cy.get('[data-cy="steps-private-health-insurance-selector-yes-radio"]'),
    baseSalaryInput: () => cy.get('[data-cy="steps-salary-gross-salary-annual-localCurrencyInput"]'),
    receiveBonusYes: () => cy.get('[data-cy="steps-annual-bonus-selector-yes-radio"]'),
    grossAnnualBonusAmount: () => cy.get('[data-cy="steps-total-yearly-bonus-localCurrencyInput"]'),
    bonusFrequencyDropdown: () => cy.get('[data-cy="steps-bonus-payout-frequency-select-menu"]'),
    variableBonusNo: () => cy.get('[data-cy="steps-variable-bonus-selector-no-radio"]'),
    signOnBonusInput: () => cy.get('[data-cy="steps-sign-on-bonus-localCurrencyInput"]'),
   //receiveAllowancesNo: () => cy.contains('No'),
    viewCostBreakdownBtn: () => cy.get('#salary-calculator-calculate-btn'),
    costBreakdownGridView: () => cy.get('#estimated-onboarding-cost-body'),
    costBreakdownPopupCloseBtn: () => cy.get('[data-cy="salary-calculator-result-close-button"]'),
    talentEmailInput: () => cy.get('[data-cy="steps-candidate-email-input"]'),
    confirmationCheckbox: () => cy.get('[data-cy="steps-confirm-summary-checkbox"]'),
    finishBtn: () => cy.get('[data-cy="steps-finish-btn"]'),
    successCard: () => cy.get('[data-cy="steps-completed-onboarding-card"]'),
    successMessage: () => cy.contains('Thank you for completing the onboarding'),
    goToTalentListBtn: () => cy.get('[data-cy="steps-completed-onboarding-card-go-btn"]'),
    onboardingsTab: () => cy.contains('Onboardings')

  };

    clickHireNow() {
    this.elements.hireNowBtn().click();
  }

  selectCreateNew() {
    this.elements.createNewOption().click();
  }

/*   clickTalentOption() {
    this.elements.talentOption().click();
  } */

  clickWorkDirectOption() {
    this.elements.workDirectOption().click();
  }

  selectCountry(country) {
    this.elements.countryDropdown().type(country);
    cy.contains(country).click();
  }

  clickGetStarted() {
    this.elements.getStartedBtn().click();
  }

  enterFirstName(firstName) {
    this.elements.firstNameInput().clear().type(firstName);
  }

  enterLastName(lastName) {
    this.elements.lastNameInput().clear().type(lastName);
  }

  clickEligibilityYes() {
    this.elements.eligibilityYes().click();
  }

  clickExecutiveNo() {
    this.elements.executiveNo().click();
  }

  enterJobTitle(jobTitle) {
    this.elements.jobTitleInput().clear().type(jobTitle);
  }

  enterJobDescription(description) {
    this.elements.jobDescriptionInput().clear().type(description);
  }

  selectEmploymentTypeFullTime() {
    this.elements.employmentTypeFullTime().click();
  }

  enterWorkingHours(hours) {
    this.elements.workingHoursInput().clear().type(hours);
  }

  enterTimesheetApproverName(name) {
    this.elements.timesheetApproverName().clear().type(name);
  }

  enterTimesheetApproverEmail(email) {
    this.elements.timesheetApproverEmail().clear().type(email);
  }

  selectContractTypePermanent() {
    this.elements.contractTypePermanent().click();
  }

  enterStartDate(startDate) {
    this.elements.startDateInput().clear().type(startDate);
  }

/*   enterEndDate(endDate) {
    this.elements.endDateInput().clear().type(endDate);
  }
 */
  clickWorkFromHomeYes() {
    this.elements.workFromHomeYes().click();
  }

  clickReimburseExpensesNo() {
    this.elements.reimburseExpensesNo().click();
  }

  enterCostCenterReference(value) {
    this.elements.costCenterInvoiceReference().clear().type(value);
  }

  selectSubEntity(subEntity) {
    this.elements.subEntityDropdown().type(subEntity);
    cy.contains(subEntity).click();
  }

  clickContinue() {
    this.elements.continueBtn().click();
  }

  enterPTO(value) {
    this.elements.ptoInput().clear().type(value);
  }

  clickCarryOverUnusedPTONo() {
    this.elements.carryOverUnusedPTONo().click();
  }

  clickCompensatedForBankHolidaysYes() {
    this.elements.compensatedForworkingDuringBankHolidaysYes().click();
  }

/*   enterProbationPeriod(value) {
    this.elements.probationPeriodInput().clear().type(value);
  } */

  enterTerminationNoticePeriod(value) {
    this.elements.terminationNoticePeriodInput().clear().type(value);
  }

  clickESOPNo() {
    this.elements.ESOPNo().click();
  }

  clickHealthInsuranceYes() {
    this.elements.healthInsuranceYes().click();
  }

  enterBaseSalary(value) {
    this.elements.baseSalaryInput().clear().type(value);
  }

  clickReceiveBonusYes() {
    this.elements.receiveBonusYes().click();
  }

  enterGrossAnnualBonus(value) {
    this.elements.grossAnnualBonusAmount().clear().type(value);
  }

  selectBonusFrequency(frequency) {
    this.elements.bonusFrequencyDropdown().select(frequency);
  }

  clickVariableBonusNo() {
    this.elements.variableBonusNo().click();
  }

  enterSignOnBonus(value) {
    this.elements.signOnBonusInput().clear().type(value);
  }

  clickViewCostBreakdown() {
    this.elements.viewCostBreakdownBtn().click();
  }

  verifyCostBreakdownVisiblity() {
    this.elements.costBreakdownGridView().should('be.visible');
  }

  closeCostBreakdownPopup() {
    this.elements.costBreakdownPopupCloseBtn().click();
  }

  enterTalentEmail(email) {
    this.elements.talentEmailInput().clear().type(email);
  }

  clickConfirmationCheckbox() {
    this.elements.confirmationCheckbox().click();
  }

  clickFinish() {
    this.elements.finishBtn().click();
  }

  verifySuccessCardVisibility() {
    this.elements.successCard().should('be.visible');
  }

  verifySuccessMessageVisibility() {
    this.elements.successMessage().should('be.visible');
  }

  clickGoToTalentList() {
    this.elements.goToTalentListBtn().click();
  }

  openOnboardingsTab() {
    this.elements.onboardingsTab().click();
  }
}

export default new OnboardingPage();