/// <reference types="cypress" />

/* 
     Gostaria de deixar aqui meus agradecimentos pela oportunidade de participar dessa entrevista.
     Realmente gostei muito de realizar este desafio técnico! 
        Assinado     Elias Espinheira          
                                         */



context('Comprando na magalu', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
       
        return false
      })
      

    it('Entrando no site da Magazine Luiza', () =>{
    cy.visit('https://www.magazineluiza.com.br/');
    })

    it('Pesquisando Notebook', () =>{
        cy.get('#input-search').type('notebook{enter}');
    })

    it('Selecionando Notebook', () =>{
       cy.get(':nth-child(2) > [data-testid="product-card-container"] > [data-testid="product-card-content"] > [data-testid="product-title"]').click();
    })
    

    it('Verificando Produto', () =>{
        cy.get('[data-testid="heading-product-title"]').should('have.text', 'Notebook ASUS E410MA-BV1871 CELERON N4020 4GB 128GB SSD KeepOs (Linux) 14" HD Star Black')
    })

    it('Adicionar à Sacola', () =>{
        cy.get(':nth-child(2) > [data-testid="bagButton"]').click();
    })

    it('Validando a Sacola', () =>{
        cy.get('.BasketItemProduct-info-title > :nth-child(1)').should('have.text', 'Notebook ASUS E410MA-BV1871  CELERON N4020 4GB 128GB SSD  KeepOs (Linux) 14" HD Star Black ')
    })

    it('Validando preço à vista', () =>{
        cy.get('.BasketPriceBox-prices--cash').should('have.text', 'R$ 1.410,17 à vista')
    })

    it('Descobrir meu CEP', () =>{
        cy.get('.ZipcodeForm-link').click();
    })
});  
    
    
  
    

 
