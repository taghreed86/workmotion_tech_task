class TalentSearchPage {
  elements = {
    expandSideMenuBtn: () => cy.get('[data-testid="MenuIcon"]'),
    talentsOptionInSideMenu: () => cy.get('#sidebar-talents-link'),
    collapseSideMenuBtn: () => cy.get('[data-testid="CloseIcon"]'),
    searchBar: () => cy.get('input[placeholder="Search for talent"]')
  };


  expandSideMenu() {
    this.elements.expandSideMenuBtn().click();
  }

  openTalentsList() {
    this.elements.talentsOptionInSideMenu().click();
    cy.wait(3000);
  }

  collapseSideMenu() {
    this.elements.collapseSideMenuBtn().first().click();
  }

  searchForTalentName(talentFristName) {
    this.elements.searchBar().clear().type(talentFristName);
    cy.wait(3000);
  }

}

export default new TalentSearchPage();