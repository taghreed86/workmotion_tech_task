Feature: Talent Onboarding Workflow
  As an HR Manager
  I want to onboard a new talent successfully
  So that the talent appears in the Onboardings list after completing all steps

  Background:
    Given I am logged in to the WorkMotion platform
    And I am on the Dashboard page

  @successful-add-talent
  Scenario: Test adding a new talent with valid data and verify it appears in the talents list view
    When I click the "Hire Now" button
    And I select "Create New" from the dropdown
    And I choose "Talent" onboarding option
    And I select "WorkDirect" as the onboarding type
    And I choose the country "Canada"
    And I click the "Get Started" button
    And I fill in the Talent details:
      | FirstName | LastName  |
      | Sarah     | Watson    |
    And I select "Yes" for "The talent is eligible to work in Canada"
    And I select "No" for "Is the talent an executive?"
    And I enter "Senior QA Engineer" as Job Title
    And I enter "Design and implement test automation strategies" as Job Description
    And I select "Full-time" as Employment Type
    And I set working hours per week to "45"
    And I enter "Sarah Watson" as Timesheet Approver Name
    And I enter "ser.wat@gmail.com" as Timesheet Approver Email
    And I select "Fixed-term" as Contract Type
    And I set Contract Start Date to "15/09/2025"
    And I set Contract End Date to "14/09/2026"
    And I click the "Continue" button
    And I set Paid Time Off (PTO) to "30" days
    And I click the "Continue" button
    And I enter "160000" as Base Salary per Year
    And I click "Continue" on the salary calculator page
    And I enter "ser.wat@gmail.com" as Talent Email
    And I click the "Continue" button
    And I click the "Finish" button
    Then I should see a success message "Thank you for completing the onboarding"
    And I should see "Sarah Watson" in the Onboardings tab with country "Canada" and status "EMPLOYEE INVITED"

  @fields-validations
  Scenario: Test required field validations
    When I click the "Hire Now" button
    And I select "Create New" from the dropdown
    And I choose "Talent" onboarding option
    And I select "WorkDirect" as the onboarding type
    And I choose the country "Canada"
    And I click the "Get Started" button
    And I click the "Continue" button
    Then I should see an error message for missing "FirstName"
    And I should see an error message for missing "Contract Start Date"
    And I should see an error message for missing "Talent Email"
