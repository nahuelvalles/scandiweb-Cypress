/// <reference types="cypress" />
import loginData from '../fixtures/loginData.json'

class LoginPage{

    //Find 'Sign In' link and perfom click action to be redirected
    navigateToLoginPage(){
        cy.contains('a', 'Sign In').should('be.visible').click()
        cy.contains('h1', 'Customer Login').should('be.visible')
    }

    //fill out login form
    fillLoginForm(){
        cy.getLoginData().then(loginData => {
            cy.get('input[name="login[username]"]').type(loginData.email)
            cy.get('input[name="login[password]"]').type(loginData.password)
        })
    }

    //click on submit button
    submitLoginForm(){
        cy.get('#send2').click()
    }

    //validates that after loggin in, the user is actually logged in.
    userLoggedInValidation(){
        let validUser = loginData.validData.user1
        cy.contains('.logged-in', 'Welcome, '+ validUser.firstname + ' ' + validUser.lastname + '!')
        .should('be.visible')
    }

    //Validates that an error message is displayed when login process fails
    errorMessageValidation(){
        cy.get('#message-error').should('be.visible')
    }

}
export default LoginPage;