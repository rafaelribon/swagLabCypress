/// <reference types="cypress" />

describe('Realiza Login ', () => {
  it('Login com sucesso', () => {
    cy.visit('https://www.saucedemo.com/v1/index.html')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
     cy.contains('.product_label','Products').should('be.visible')



  })

  it('Login bloqueado', () => {
    cy.visit('https://www.saucedemo.com/v1/index.html')
    cy.get('#user-name').type('locked_out_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.contains('h3[data-test=error]','Epic').should('be.visible')
    


  })
})