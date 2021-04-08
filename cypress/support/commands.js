Cypress.Commands.add('fillSignupForm', user => {
  cy.get('#email').type(user.email)
  cy.get('#name').type(user.username)
  cy.get('#password').type(user.password, { log: false })
})
