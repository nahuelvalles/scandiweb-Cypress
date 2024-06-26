import LoginPage from "../page-objects/loginPage"
const loginPage = new LoginPage();

describe('Login page specs', () => {

    it('Execute the login process succesfully', () => {
        cy.visit('/')

        loginPage.navigateToLoginPage()
        loginPage.fillLoginForm()
        loginPage.submitLoginForm()
        loginPage.userLoggedInValidation()
        
    })
})