/// <reference types="cypress" />
import registrationData from '../fixtures/registrationData.json'
import AccountInfoPage from './accountInfoPage'

class RegistrationPage{

    //Fill out Registration form with valid credentials
    fillRegistrationForm(){
        
        const validUser = registrationData.validData.user1

        const firstname = Cypress.env('firstname') || 'DefaultFirstName'
        const lastname = Cypress.env('lastname') || 'DefaultLastName'
        const email = Cypress.env('email') || 'default.email@example.com'
        const password = Cypress.env('password') || 'DefaultPassword123'
        const passConfirm = Cypress.env('passConfirm') || 'DefaultPassword123'

        cy.get('[title="First Name"]').type(firstname)
        cy.get('#lastname').type(lastname)
        cy.get('[autocomplete="email"]').type(email)
        cy.get('#password').type(password)
        cy.get('#password-confirmation').type(passConfirm)
        
    }

    //Click on submit button of Registration form
    submitRegistrationForm(){
        cy.contains('button', 'Create an Account').click()
    }

    //Verify the registration was sucesfull and user was created
    verifyRegistration(){

        const accountInfoPage = new AccountInfoPage();
        const validUser = registrationData.validData.user1

        cy.contains('Thank you for registering with Main Website Store.').should('be.visible')
        cy.get('#block-collapsible-nav').find('li').contains('Account Information').click()

        accountInfoPage.getFirstNameInput().invoke('val')
        .should('equal', validUser.firstname)

        accountInfoPage.getLastNameInput().invoke('val')
        .should('equal', validUser.lastname)

    }
}
export default RegistrationPage;