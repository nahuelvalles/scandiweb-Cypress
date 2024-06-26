import RegistrationPage from "../page-objects/registrationPage"
import LoginPage from "../page-objects/loginPage"

describe('Registration page scenario mapping', () => {

    it.only('Executes a sucessfull registration in the form', () => {

        const registrationPage = new RegistrationPage()
        cy.visit('customer/account/create')

        //cy.getRegistrationData()
        registrationPage.fillRegistrationForm()
        registrationPage.submitRegistrationForm()
        registrationPage.verifyRegistration()
        
    })

    it('login', function(){
        const loginPage = new LoginPage()

        cy.visit('/')
        cy.contains('a', 'Sign In').should('be.visible').click()
        cy.contains('h1', 'Customer Login').should('be.visible')
        loginPage.fillLoginForm()
    })

})