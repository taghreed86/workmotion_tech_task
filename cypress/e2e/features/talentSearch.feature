Feature: Talent Search and View 
  As an HR Manager
  I want to search for the newly added talent
  So that I can Check that the newly added talent information is correct.

  Background:
    Given I am logged in to the WorkMotion platform
    And I am on the Dashboard page
    When I expand the left side menu
    And I open the "Talents" list
    And I collapse the left side menu
    And I navigate to the "Onboardings" tab

 @successful-search-talent
  Scenario: Search for a newly added talent by first name and verify the information
    When I enter "<firstName>" in the search bar
    Then I should see "<firstName> <lastName>" in the Onboardings list with country "<country>"