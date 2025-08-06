class OnboardingPage {
  elements = {
    addTalentBtn: () => cy.get('[data-testid="AddIcon"]'),
    talentOption: () => cy.get('[data-testid="onboarding-hire-option-talent"]'),
    countryInput: () => cy.get('#select-country'),
    countryDropDownList: () => cy.get('#react-select-3-listbox'),
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
    startDateInput: () => cy.get('input[placeholder="DD/MM/YYYY"][type="text"]'),
    editDateBtn: () => cy.get('[data-testid="PenIcon"]'),
    setDateTextBox: () => cy.get('input[placeholder="DD/MM/YYYY"][type="tel"]'),
    selectDatePickerOKBtn: () => cy.get('[data-cy="mui-datepicker-actions-accept"]'),
    workFromHomeYes: () => cy.get('[data-cy="steps-work-from-home-selector-yes-radio"]'),
    reimburseExpensesNo: () => cy.get('[data-cy="steps-eligible-reimbursements-selector-no-radio"]'),
    costCenterInvoiceReference : () => cy.get('[data-cy="steps-cost-center-input"]'),
    subEntityInput: () => cy.get('[data-testid="dropdown-collection"]'),
    subEntityDropdown: () => cy.get('[data-testid="dropdown-collection"]'),
    continueBtn: () => cy.get('#onboarding-continue-btn'),
    carryOverUnusedPTONo: () => cy.get('label[data-cy="steps-paid-time-off-carryover-selector-no-radio"]'),
    compensatedForworkingDuringBankHolidaysYes: () => cy.get('[data-cy="steps-extra-paid-time-off-selector-yes-radio"]'),
    terminationNoticePeriodInput: () => cy.get('[data-cy="steps-termination-notice-period-stepper-input"]'),
    ESOPNo: () => cy.get('[data-cy="steps-esop-provided-no-radio"]'),
    healthInsuranceYes: () => cy.get('[data-cy="steps-private-health-insurance-selector-yes-radio"]'),
    baseSalaryInput: () => cy.get('[data-cy="steps-salary-gross-salary-annual-localCurrencyInput"]'),
    receiveBonusNo: () => cy.get('[data-cy="steps-annual-bonus-selector-no-radio"]'),
    variableBonusNo: () => cy.get('[data-cy="steps-variable-bonus-selector-no-radio"]'),
    signOnBonusInput: () => cy.get('[data-cy="steps-sign-on-bonus-localCurrencyInput"]'),
    viewCostBreakdownBtn: () => cy.get('#salary-calculator-calculate-btn'),
    costBreakdownPopup: () => cy.get('div[class="MuiBox-root css-luwg4s"]'),
    costBreakdownPopupCloseBtn: () => cy.get('[data-cy="salary-calculator-result-close-button"]'),
    talentEmailInput: () => cy.get('[data-cy="steps-candidate-email-input"]'),
    confirmationCheckbox: () => cy.get('[data-testid="checkbox-collection"]'),
    finishBtn: () => cy.get('#onboarding-finish-btn'),
    successCard: () => cy.get('[data-cy="steps-completed-onboarding-card"]'),
    successMessage: () => cy.contains('Thank you for completing the onboarding'),
    goToTalentListBtn: () => cy.get('[data-testid="go-to-talent-list-btn"]'),
    onboardingsTab: () => cy.contains('Onboardings'),
    onboardingsListTalentName: () => cy.get('[data-cy="talents-name-cell"]'),
    onboardingsListCountry: () => cy.get('[data-testid="country-name"]'),
    validationMessages: () => cy.get('span[class="sc-iHGNWf htigYx"]'),

  };

    clickAddTalent() {
    this.elements.addTalentBtn().click();
    cy.wait(3000);
  }

  clickTalentOption() {
    this.elements.talentOption().click();
  }

  selectCountry(country) {
    this.elements.countryInput().click().type(country, { delay: 200 });
    this.elements.countryDropDownList().contains(country).click();
    cy.wait(1000);
   
  }

  clickGetStarted() {
    this.elements.getStartedBtn().click();
    cy.wait(3000);
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
    this.elements.startDateInput().click();
    this.elements.editDateBtn().click();
    this.elements.setDateTextBox().clear().type(startDate);
    cy.wait(1000);
    this.elements.selectDatePickerOKBtn().click();
  }

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
    this.elements.subEntityInput().click()
    this.elements.subEntityDropdown().contains(subEntity).click();
    cy.wait(1000);
  }

  clickContinue() {
    this.elements.continueBtn().click();
    cy.wait(3000);
  }

  clickCarryOverUnusedPTONo() {
    this.elements.carryOverUnusedPTONo().click();
  }

  clickCompensatedForBankHolidaysYes() {
    this.elements.compensatedForworkingDuringBankHolidaysYes().click();
  }

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

  clickReceiveBonusNo() {
    this.elements.receiveBonusNo().click();
  }

  enterGrossAnnualBonus(value) {
    this.elements.grossAnnualBonusAmount().clear().type(value);
  }

  selectBonusFrequency(frequency) {
    this.elements.bonusFrequencyMainList().click();
    this.elements.bonusFrequencyInput().type(frequency, { delay: 200 });;
    this.elements.bonusFrequencyDropdown().contains(frequency).click();
    cy.wait(1000);
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

  isCostBreakdownVisible() {
  return this.elements.costBreakdownPopup().then(($el) => {
    return Cypress.$($el).is(':visible');
    });
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
    cy.wait(3000);
  }

  verifySuccessCardVisibility() {
    this.elements.successCard().should('be.visible');
  }

  verifySuccessMessageVisibility() {
    this.elements.successMessage().should('be.visible');
  }

  clickGoToTalentList() {
    this.elements.goToTalentListBtn().click();
    cy.wait(3000);
  }

  openOnboardingsTab() {
    this.elements.onboardingsTab().click();
    cy.wait(3000);
  }

  getTheNewlyAddedTalentName() {
    return this.elements.onboardingsListTalentName().eq(0).invoke('text');
  }

  getTheNewlyAddedTalentCountry() {
    return this.elements.onboardingsListCountry().eq(0).invoke('text');
  }

/*   isValidationMessagesVisible() {
    return this.elements.validationMessages().should('be.visible');
  }

  getValidationMessages() {
    return this.elements.validationMessages().then(($els => 
      Cypress.$.makeArray($els).map(el => el.innerText.trim())));
     
  } */

  isValidationMessageVisible(expectedMessage) {
    return this.elements.validationMessages().then(($messages) => {
      const matchingElement = [...$messages].find(
        (el) => el.innerText.trim() === expectedMessage
      );

      if (!matchingElement) return false;

      return cy.wrap(matchingElement).scrollIntoView().should('be.visible').then(() => true);
    });
  }

  getValidationMessage(expectedMessage) {
    return this.elements.validationMessages().then(($messages) => {
      const message = [...$messages]
        .map((el) => el.innerText.trim())
        .find((msg) => msg === expectedMessage);
      return message || null;
    });
  }

}

export default new OnboardingPage();