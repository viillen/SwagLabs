describe('Validate login page', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })

  it('Should allow login with valid credentials', () => {

    // happy path
    cy.get('[data-test="username"]').click().type('standard_user')
    cy.get('[data-test="password"]').click().type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    
  })

  it('Should not allow login with invalid credentials', () => {
    const cenarios = [
      { user: 'visual_user', password: 'errorpassword'}, // valid user and invalid password 
      { user: 'erroruser_test', password: 'secret_sauce'}, //invalid user and valid password 
      { user: 'erroruser_test', password: 'errorpassword'}, //invalid user and invalid password
      { user: '', password: 'secret_sauce'}, //empty username and valid password
      { user: 'visual_user', password: ''} //valid username and empty password
    ]

    cenarios.forEach((cenário) => {
    if (cenário.user) {
      cy.get('[data-test="username"]').click().clear().type(cenário.user)
    } else {
      cy.get('[data-test="username"]').click().clear()
    }
  
    if (cenário.password) {
      cy.get('[data-test="password"]').click().clear().type(cenário.password)
    } else {
      cy.get('[data-test="password"]').click().clear()
    }git sta
  
    cy.get('[data-test="login-button"]').click()

    if (!cenário.user) {
      cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username is required')
    } else if (!cenário.password) {
      cy.get('[data-test="error"]').should('contain', 'Epic sadface: Password is required')
    } else {
      cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')
    }
    })
  })

  it('Should not allow login without credentials', () => {
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username is required')
  })
})