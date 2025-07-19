describe('Testes de Sanidade - Login', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('LOGIN_001 - Login com username bloqueado', () => {
    cy.login('locked_out_user', 'secret_sauce')
    cy.get('[data-test="error"]').should('contain', 'Epic sadface: Sorry, this user has been locked out.')
  })

  it('LOGIN_002 - Login com Senha Invalida', () => {
    cy.login('standard_user', '12345')
    cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')
  })

  it('LOGIN_003 - Login bem sucedido', () => {
    cy.login('standard_user', 'secret_sauce')
    cy.url().should('include', '/inventory.html')

  })
})
