/// <reference types="cypress" />

class AccountInfoPage{

    getFirstNameInput(){
        return cy.get('#firstname')
    }

    getLastNameInput(){
        return cy.get('#lastname')
    }
}
export default AccountInfoPage;

