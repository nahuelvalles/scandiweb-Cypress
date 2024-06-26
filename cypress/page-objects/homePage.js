/// <reference types="cypress" />
class HomePage{

    //Create account anchor element
    getCreateAccountLink(){
        return cy.get('#idZIwYc3vl')
    }

    //Click on 'Create Account' link
    clickCreateAccountLink(){
        return cy.get('#idZIwYc3vl').click
    }

    getSearchInput(){
        return cy.get('#search')
    }
}
export default HomePage;