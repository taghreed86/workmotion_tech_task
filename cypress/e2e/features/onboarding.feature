Feature: Talent Onboarding Workflow
  As an HR Manager
  I want to onboard a new talent successfully
  So that the talent appears in the Onboardings list after completing all steps

  Background:
    Given I am logged in to the WorkMotion platform
    And I am on the Dashboard page

 @successful-add-talent
  Scenario: Add a new talent with valid data and verify it appears in the Onboardings list
    When I click the "Add Talent" button
    #And I select "Create New" from the dropdown
    And I click "Talent Option"
    And I select "<country>" as the country
    And I click the "Get Started" button
    And I enter "<firstName>" as First Name
    And I enter "<lastName>" as Last Name
    And I select "<eligibilityOption>" for eligibility to work in the selected country
    And I select "<executiveOption>" for executive role
    And I enter "<jobTitle>" as Job Title
    And I enter "<jobDescription>" as Job Description
    And I select "<employmentType>" as Employment Type
    And I set working hours per week to "<workingHours>"
    And I enter "<timesheetApproverName>" as Timesheet Approver Name
    And I enter "<timesheetApproverEmail>" as Timesheet Approver Email
    And I select "<contractType>" as Contract Type
    And I set Contract Start Date to "<startDate>"
    And I select "<workFromHomeOption>" for work from home option
    And I select "<reimburseExpensesOption>" for reimburse expenses
    And I enter "<costCenterInvoiceReference>" as Cost Center Invoice Reference
    And I select "<subEntity>" as Sub Entity
    And I click the "Continue" button
    #And I enter "<pto>" as Paid Time Off (PTO)
    And I select "<carryOverPTOOption>" for Carry Over Unused PTO
    And I select "<bankHolidayCompensationOption>" for Compensated for Bank Holidays
    And I enter "<terminationNoticePeriod>" as Termination Notice Period
    And I click the "Continue" button
    And I select "<esopOption>" for ESOP
    And I select "<healthInsuranceOption>" for Health Insurance
    And I enter "<baseSalary>" as Base Salary per Year
    And I select "<receiveBonusOption>" for Receive Bonus
    #And I enter "<annualBonus>" as Annual Bonus Amount
    #And I select "<bonusFrequency>" as Bonus Frequency
    And I select "<variableBonusOption>" for Variable Bonus
    And I enter "<signOnBonus>" as Sign-On Bonus
    And I click the "View Cost Breakdown" button
    Then The cost breakdown popup should be displayed
    When I close the cost breakdown popup
    And I click the "Continue" button
    And I enter "<talentEmail>" as Talent Email
    And I click the "Continue" button
    And I click the "Confirmation" checkbox
    And I click the "Finish" button
    Then A success card should be displayed
    And  A success message with text "<successMessage>" should be displayed
    When I click the "Go To Talent List" button
    Then I should be redirected to the Talents Dashboard
    When I navigate to the "Onboardings" tab
    Then I should see "<firstName> <lastName>" in the Onboardings tab with country "<country>" and status "<expectedStatus>"


#   @fields-validations
#   Scenario: Test required field validations
#     When I click the "Hire Now" button
#     And I select "Create New" from the dropdown
#     And I choose "Talent" onboarding option
#     And I select "WorkDirect" as the onboarding type
#     And I choose the country "Canada"
#     And I click the "Get Started" button
#     And I click the "Continue" button
#     Then I should see an error message for missing "FirstName"
#     And I should see an error message for missing "Contract Start Date"
#     And I should see an error message for missing "Talent Email"
