describe('Adicionar Item ao Carrinho', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.login('standard_user', 'secret_sauce')
  })

  it('ADICIONAR_004 - Adicionar o produto Sauce Labs Backpack ao carrinho', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_badge').should('contain', '1')
    cy.get('.shopping_cart_link').click()
    cy.get('.cart_item').should('contain', 'Sauce Labs Backpack')
  })
})
