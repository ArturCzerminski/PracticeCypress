import PomPage from '../support/pom'
import {macCategoryPage} from '../fixtures/example.json'

describe('Test', () => {
  // it('Open Mac category', () => {
  //   cy.visit('/')
    
  //   PomPage.openMacCategory()
  //   cy.url().should('eq', macCategoryPage)
  // })

  it('Search for a product', () => {
    cy.visit('/')
    
    PomPage.searchForProduct('macbook')
  })
})