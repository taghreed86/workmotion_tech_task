Feature: WorkMotion Login and Error Handling
  As a user
  I want to securely login to the WorkMotion platform
  So that I can access my dashboard and manage my global workforce
  And receive clear feedback if my login attempt fails


  Background:
    Given I am on the WorkMotion login page

  @successful-login
  Scenario: Login successfully with valid credentials
    When I enter a valid email address
    And I enter a valid password
    And I click the login button
    Then I should be redirected to the dashboard


  @Unsuccessful-login
  Scenario: Unsuccessful login with incorrect email
    And I enter an invalid email address
    And I enter a valid password
    And I click the login button
    Then I should see an error message stating that the entered data is invalid

  Scenario: Unsuccessful login with incorrect password
    And I enter a valid email address
    And I enter an invalid password
    And I click the login button
    Then I should see an error message stating that the entered data is invalid

  Scenario: Unsuccessful login with incorrect email and password
    And I enter an invalid email address
    And I enter an invalid password
    And I click the login button
    Then I should see an error message stating that the entered data is invalid