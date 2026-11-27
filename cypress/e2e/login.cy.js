describe('Login', () => {
  it('Login com dados válidos deve permitir entrada no sistema', () => {
    //arange
    cy.visit('http://localhost:4000/')

    //act
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('123456')
    cy.contains('button', 'Entrar').click()

    //assert
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })

    it('Login com dados inválidos deve apresentar mensagem de erro', () => {
    //arange
    cy.visit('http://localhost:4000/')

    //act
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('654321')
    cy.contains('button', 'Entrar').click()

    //assert
   cy.get('.toast').should('contain.text', 'Erro no login. Tente novamente')
  })
})