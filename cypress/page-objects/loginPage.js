/// <reference types="cypress" />
import loginData from '../fixtures/loginData.json'

class LoginPage{

    //Find 'Sign In' link and perfom click action to be redirected
    navigateToLoginPage(){
        cy.contains('a', 'Sign In').should('be.visible').click()
        cy.contains('h1', 'Customer Login').should('be.visible')
    }

    
    fillLoginForm(){

        let validUser = loginData.validData.user1

        cy.get('input[name="login[username]"]').type(validUser.email)
        cy.get('input[name="login[password]"]').type(validUser.password)
    }

    submitLoginForm(){
        cy.get('#send2').click()
    }

    userLoggedInValidation(){
        let validUser = loginData.validData.user1
        cy.contains('.logged-in', 'Welcome, '+ validUser.firstname + ' ' + validUser.lastname + '!')
        .should('be.visible')
    }
}
export default LoginPage;