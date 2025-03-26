import { Credentials , Buttons, ErrorMsgLogin} from "../elements/LoginElements";

class LoginPage {

    LoginValidCredentials(){

        cy.get(Credentials.username).click().type('standard_user')
        cy.get(Credentials.password).click().type('secret_sauce')
        cy.get(Buttons.loginButton).click()
    }

    LoginInvalidCredentials(){
        const cenarios = [
            { user: 'standard_user', password: 'errorpassword'}, // valid user and invalid password 
            { user: 'erroruser_test', password: 'secret_sauce'}, //invalid user and valid password 
            { user: 'erroruser_test', password: 'errorpassword'}, //invalid user and invalid password
            { user: '', password: 'secret_sauce'}, //empty username and valid password
            { user: 'standard_user', password: ''} //valid username and empty password
          ]
      
          cenarios.forEach((cenário) => {
          if (cenário.user) {
            cy.get(Credentials.username).click().clear().type(cenário.user)
          } else {
            cy.get(Credentials.username).click().clear()
          }
        
          if (cenário.password) {
            cy.get(Credentials.password).click().clear().type(cenário.password)
          } else {
            cy.get(Credentials.password).click().clear()
          }
        
          cy.get(Buttons.loginButton).click()
      
          if (!cenário.user) {
            cy.get(ErrorMsgLogin.errorMessage).should('contain', 'Epic sadface: Username is required')
          } else if (!cenário.password) {
            cy.get(ErrorMsgLogin.errorMessage).should('contain', 'Epic sadface: Password is required')
          } else {
            cy.get(ErrorMsgLogin.errorMessage).should('contain', 'Epic sadface: Username and password do not match any user in this service')
          }
          })
    }

    LoginWithoutCredentials(){
        cy.get(Credentials.username).click().clear()
        cy.get(Credentials.password).click().clear()
        cy.get(Buttons.loginButton).click()
        cy.get(ErrorMsgLogin.errorMessage).should('contain', 'Epic sadface: Username is required')

    }

    LockedOutUser(){
        cy.get(Credentials.username).click().type('locked_out_user')
        cy.get(Credentials.password).click().type('secret_sauce')
        cy.get(Buttons.loginButton).click()
        cy.get(ErrorMsgLogin.errorMessage).should('contain', 'Epic sadface: Sorry, this user has been locked out.')
    }






}
export default new LoginPage()