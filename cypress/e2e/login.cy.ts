import LoginPage from "../support/pages/LoginPage"

describe('LoginPage login page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Login with valid credentials', () => {

    LoginPage.LoginValidCredentials()
    
  })

  it('Login with invalid credentials', () => {

    LoginPage.LoginInvalidCredentials()
    LoginPage.LoginWithoutCredentials()
    LoginPage.LockedOutUser()
  })


    
    
})