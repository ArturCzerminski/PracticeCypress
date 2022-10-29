/// <reference types="cypress" />

class PomPage {

    pomElements = {
        macLink: () => cy.get('[class="ac-gn-item ac-gn-item-menu ac-gn-mac"]'),
        searchIcon: () => cy.get('[id="ac-gn-link-search"]'),
        searchInput: () => cy.get('[id="ac-gn-searchform-input"]'),
        searchSubmit: () => cy.get('[id="ac-gn-searchform-submit"]'),
        searchResultsCount: () => cy.get('[class="rf-serp-resultcount"]')
    }

    // openMacCategory(){
    //     this.pomElements.macLink().click()
    // }

    searchForProduct(searchQuery){
        this.pomElements.searchIcon().type(searchQuery)
        this.pomElements.searchSubmit().click()
        this.pomElements.searchResultsCount().should('be.visible')
    }
}
export default new PomPage()