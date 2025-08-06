import { When, Before } from "@badeball/cypress-cucumber-preprocessor";
import TalentSearchPage from "../../pages/talentSearchPage.js";

let talentData;


Before(() => {
  cy.fixture("onboardingData").then((data) => {
    talentData = data;
  });
});

When('I expand the left side menu', () => {
  TalentSearchPage.expandSideMenu();
});

When('I open the "Talents" list', () => {
  TalentSearchPage.openTalentsList();
});

When('I collapse the left side menu', () => {
  TalentSearchPage.collapseSideMenu();
});

When('I enter {string} in the search bar', () => {
  TalentSearchPage.searchForTalentName(talentData.firstName);
});