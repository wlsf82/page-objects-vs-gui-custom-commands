const faker = require('faker')

describe('Mattermost - Signup', () => {
  const user = {}

  beforeEach(() => {
    cy.visit('/signup_email')

    user.email = faker.internet.email()
    user.username = faker.name.firstName()
    user.password = faker.internet.password()
  })

  context('Nor Page Object neither GUI custom commands', () => {
    it('fills the form', () => {
      cy.get('#email').type(user.email)
      cy.get('#name').type(user.username)
      cy.get('#password').type(user.password, { log: false })
    })
  })

  context('Page Object', () => {
    const signupPage = require('../pageObjects/signup')

    it('fills the form', () => {
      signupPage.fillForm(user)
    })
  })
  
  context('GUI custom commands', () => {
    it('fills the form', () => {
      cy.fillSignupForm(user)
    })
  })  
})
