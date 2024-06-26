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
})