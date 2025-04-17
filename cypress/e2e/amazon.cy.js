describe('Testando buscas na Amazon', () => {
    it('Pesquisa um produto e acessa a página de detalhes', () => {
      cy.visit('https://www.amazon.com.br')
  
      // Aceita cookies se aparecer
      cy.get('body').then(($body) => {
        if ($body.find('#sp-cc-accept').length) {
          cy.get('#sp-cc-accept').click()
        }
      })
  
      // Pesquisa um notebook
      cy.get('#twotabsearchtextbox').type('notebook{enter}')
  
      // Verifica se resultados aparecem
      cy.get('[data-component-type="s-search-result"]').should('exist')
  
      // Clica no primeiro resultado
      cy.get('[data-component-type="s-search-result"]', { timeout: 10000 }).first().find('a.a-link-normal').first().click()




  
      // Confirma que a página do produto foi carregada
      cy.url().should('include', '/dp/')
    })
  })
  