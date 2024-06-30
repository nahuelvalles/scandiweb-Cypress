

import registrationData from '../fixtures/registrationData.json'
import loginData from '../fixtures/loginData.json'

Cypress.Commands.add('getRegistrationData', function(){
   
        const validUser = registrationData.validData.user1
        return {
            firstname: Cypress.env('firstname') || validUser.firstname,
            lastname: Cypress.env('lastname') || validUser.lastname,
            email: Cypress.env('email') || validUser.email,
            password: Cypress.env('password') || validUser.password,
            passConfirm: Cypress.env('passConfirm') || validUser.passConfirm
        }
})