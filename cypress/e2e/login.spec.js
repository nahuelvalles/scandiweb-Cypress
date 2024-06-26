import LoginPage from "../page-objects/loginPage"
const loginPage = new LoginPage();

describe('Login page specs', () => {

    it.only('Execute the login process succesfully', () => {
        cy.visit('/')

        loginPage.navigateToLoginPage()
        loginPage.fillLoginForm()
        loginPage.submitLoginForm()
        loginPage.userLoggedInValidation()
        
    })

    it('Validates error message display when authentication fail', function(){
        loginPage.navigateToLoginPage()
        loginPage.fillLoginForm()
        loginPage.submitLoginForm()
    })
})